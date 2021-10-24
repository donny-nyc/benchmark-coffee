<template>
	<div>
		{{product.name}} - ${{product.price}} x {{product.count}}
	</div>
</template>

<script>

	export default {
		props: [ 'product' ],
		created: function() {
			console.log('product')
			console.log(this.product)
		}
	}
</script>
