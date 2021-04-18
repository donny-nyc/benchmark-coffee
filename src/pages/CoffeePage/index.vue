<template>
	<div id='coffee'>
		<h1>Coffee is Good for your Skin</h1>
		<CoffeeCard v-for="product in products"
			v-bind:name="product.name"
			v-bind:description="product.description" 
			v-bind:key="product.name"/>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'	
	import { productGetter } from './product_getter.js'
	import CoffeeCard from './components/CoffeeCard'

	export default {
		name: 'coffee',
		components: {
			CoffeeCard,
		},
		computed: {
			loadingProduct () {
				return this.$store.state.loadingProduct
			},
			products () {
				return this.$store.state.products
			},
		},
		mounted: function () {
			this.fetchProducts(productGetter)
		},
		methods: {
			...mapActions([
				'fetchProducts'
			]),
		},
	}

</script>

<style>
	#coffee {
		width: 75%;
		background-color: #8c052a;
		height: 500px;
		margin-left: auto;
		margin-right: auto;
	}

</style>
