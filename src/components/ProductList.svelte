<script lang="ts">
	import type { ProductProps } from "../stores/products"
	import Product from "./Product.svelte"

	export let products: ProductProps[] = []
</script>

<div class="product-list">
	<ul>
		{#each products as product}
			<li>
				<Product
					product={{
						name: product.name,
						description: product.description,
						price: product.price
					}}
				/>
			</li>
		{/each}
	</ul>
</div>
