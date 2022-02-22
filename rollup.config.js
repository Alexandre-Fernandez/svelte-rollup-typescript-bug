import svelte from "rollup-plugin-svelte"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"
import livereload from "rollup-plugin-livereload"
import { terser } from "rollup-plugin-terser"
import sveltePreprocess from "svelte-preprocess"
import typescript from "@rollup/plugin-typescript"
import css from "rollup-plugin-css-only"

const production = !process.env.ROLLUP_WATCH

function svelteCheck() {
	return {
		writeBundle() {
			require("child_process").spawn("svelte-check", {
				stdio: ["ignore", "inherit", "inherit"],
				shell: true
			})
		}
	}
}

function serve() {
	let server

	function toExit() {
		if (server) server.kill(0)
	}

	return {
		writeBundle() {
			if (server) return
			server = require("child_process").spawn(
				"npm",
				["run", "start", "--", "--dev"],
				{
					stdio: ["ignore", "inherit", "inherit"],
					shell: true
				}
			)

			process.on("SIGTERM", toExit)
			process.on("exit", toExit)
		}
	}
}

export default {
	input: "src/main.ts",
	output: {
		sourcemap: true,
		format: "iife",
		name: "app",
		file: "public/build/bundle.js"
	},
	plugins: [
		replace({
			preventAssignment: true,
			"process.env.isProduction": production
		}),
		svelte({
			preprocess: sveltePreprocess({ sourceMap: !production }),
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		css({ output: "bundle.css" }),
		resolve({
			browser: true,
			dedupe: ["svelte"]
		}),
		commonjs(),
		svelteCheck(),
		typescript({
			sourceMap: !production,
			inlineSources: !production,
			rootDir: "./src"
		}),
		!production && serve(),
		!production && livereload("public"),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
}
