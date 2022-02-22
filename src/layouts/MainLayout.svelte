<script lang="ts">
	import Layout from "./Layout.svelte"
	import Header from "../components/Header.svelte"
</script>

<Layout>
	<Header slot="header" />
	<slot />
</Layout>

<style>
</style>
