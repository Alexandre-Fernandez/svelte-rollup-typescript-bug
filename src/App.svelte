<script lang="ts">
	import Router from "svelte-spa-router"
	import { hrefs } from "./config"
	import Home from "./pages/Home.svelte"
	import About from "./pages/About.svelte"
	import NotFound from "./pages/NotFound.svelte"

	const routes = {
		[hrefs.home.replace("#", "")]: Home,
		[hrefs.about.replace("#", "")]: About,
		"*": NotFound
	}
</script>

<Router {routes} />

<style>
</style>
