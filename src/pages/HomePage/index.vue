<template>
	<div id='coffee' v-bind:class="{blur: shouldBlur}">
		<div class='hero'>
			<div class='hero-block'>
				<h1>Drink Better Coffee</h1>
				<p>You there. Drinking the same sad coffee.</p>
				<p>You could be doing so much more for yourself.</p>
				<p>But instead you just sit there, drinking
				sad coffee.</p>
				<p>Stop it.</p>
				<br />
				<br />
				<a href="/coffee">Stop It Now</a>
			</div>
			<div class='hero-block'>
				<img width="500px" src="coffeecup.png" />
			</div>
		</div>
		<div id='products'>
			<ContentCard v-for="product in products"
				v-bind:product="product"
				v-bind:key="product.id"
			/>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'	
	import { productGetter } from './product_getter.js'
	import ContentCard from './components/ContentCard'

	export default {
		name: 'HomePage',
		components: {
			ContentCard,
		},
		computed: {
			loadingProduct () {
				return this.$store.state.loadingProduct
			},
			products () {
				return this.$store.state.products
			},
			shouldBlur () {
				return this.$store.state.shadow
			},
		},
		mounted: function () {
			this.fetchProducts(productGetter)
		},
		methods: {
			...mapActions([
				'fetchProducts',
			]),
		},
	}

</script>

<style>
	#products {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}

	.hero-block {
		color: #DDD;
		font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
	}

	.hero-block p {
		font-size: 1.5em;
	}

	.hero-block a {
		background: none;
		border: 2px solid #DDD;
		border-radius: 10px;
		color: #DDD;
		font-size: 2em;
		padding: 30px;
		transition: 0.3s;
		text-decoration: none;
	}

	.hero-block a:hover {
		background-color: #DDD;
		color: #000;
		cursor: pointer;
	}

	.hero-block a:active {
		background-color: white;
	}

	.hero {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
</style>
