<script lang="ts">
	const slots = $$slots
</script>

{#if slots.header}
	<slot name="header" />
{/if}

<main>
	<slot />
</main>

{#if slots.footer}
	<slot name="footer" />
{/if}

<style>
</style>
