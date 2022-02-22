<script lang="ts">
	import MainLayout from "../layouts/MainLayout.svelte"
	import ProductList from "../components/ProductList.svelte"
	import products from "../stores/products"
</script>

<MainLayout>
	<h2>Product list</h2>
	<ProductList products={Array.from($products.values())} />
</MainLayout>
