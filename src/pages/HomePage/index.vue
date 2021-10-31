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
				<BenchmarkButton href="/coffee" text="Stop It Now" />
			</div>
			<div class='hero-block' id='coffeecup'>
				<img width="500px" src="coffeecup.png" />
			</div>
		</div>
		<div id='products'>
			<h1>Fresh Roasts Available Now</h1>
			<div id='cards'>
				<ContentCard v-for="product in products"
					v-bind:product="product"
					v-bind:key="product.id"
				/>
			</div>
		</div>
	</div>
</template>

<script scoped>
	import { mapActions } from 'vuex'	
	import { productGetter } from './product_getter.js'
	import ContentCard from './components/ContentCard'
	import BenchmarkButton from '../../components/BenchmarkButton'

	export default {
		name: 'HomePage',
		components: {
			ContentCard,
			BenchmarkButton,
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
		border-top: 2px solid #DDD;
		padding-top: 30px;
	}

	#products h1 {
		color: #DDD;
		font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
	}

	#cards {
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

	.hero {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}


	@media only screen and (max-width: 400px) {
		.hero {
			max-width: 400px;
			flex-direction: column;
		}

		#coffeecup {
			order: -1;
		}

		img {
			max-width: 300px;
		}
	}
</style>
