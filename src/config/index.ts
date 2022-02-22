const dev = {
	hrefs: {
		home: "/",
		about: "#/about"
	}
}

const prod = {
	...dev
}

const config = process.env.isProduction ? prod : dev

export const hrefs = config.hrefs

export default config
