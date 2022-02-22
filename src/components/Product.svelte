<script lang="ts" context="module">
	export class Product {
		constructor(
			public name = "",
			public description = "",
			public price = 0
		) {}
	}
</script>

<script lang="ts">
	export let product = new Product()
</script>

<div class="product">
	<h3>{product.name}</h3>
	<p>{product.description}</p>
	<strong>{product.price}</strong>
</div>
