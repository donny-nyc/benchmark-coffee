<template>

	<div id='coffee' v-bind:class="{blur: shouldBlur}">
		<div class='hero'>

			<div class='hero-block'>
				<h1>You should drink more coffee</h1>
				<p>
					Science has proven that people who drink
					coffee appear sexier and more confident
					in double-blind studies. So yeah, pour
					youself another hot one.
				</p>
				<button>Hot For You</button>
			</div>
<!--			<img class='hero-background' src='/coffee.png' /> -->
			<div class='video-wrapper'>
				<div class='video-transparency' />
				<video class='hero-background' autoplay muted loop>
					<source src="cherries.mp4" type="video/mp4">
				</video>
			</div>
		</div>

		<div id='products'>
			<h1>Coffee is Good for your Skin</h1>
			<ContentCard v-for="(product, idx) in products"
				v-bind:name="product.name"
				v-bind:description="product.description" 
				v-bind:imgSrc="product.imgSrc"
				:id="idx"
				v-bind:key="product.name"/>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'	
	import { productGetter } from './product_getter.js'
	import ContentCard from './components/ContentCard'

	export default {
		name: 'coffee',
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
	#coffee {
		margin-top: 100px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}

	.blur {
		filter: blur(5px);
	}

	.hero {
		width: 100%;
		min-width: 300px;
		overflow: hidden;
		display: flex;
		flex-direction: row;
	}

	@media only screen and (max-width: 850px) {
		.hero {
			flex-direction: column;
		}
	}

	.hero-background {
		display: flex;
		min-width: 100%;
		min-height: 100%;
	}

	.hero-block {
		margin-left: 100px;
		margin-right: auto;
		margin-top: 120px;
		color: #dddddd;
		text-align: left;
		display: flex;
		flex-direction: column;
		position: absolute;
		z-index: 1;
	}

	.video-wrapper {
		width: 100%;
		max-height: 800px;
		position: relative;
	}

	.video-transparency {
		background-color: rgba(25, 15, 0, 0.5);
		position: absolute;
		width: 100%;
		height: 100%;
	}

	@media only screen and (max-width: 851px) {
		.video-transparency {
			display: none;
		}
	}

	@media only screen and (max-width: 850px) {
		.hero-block {
			position: static;
			order: 2;
		}
	}

	.hero-block h1 {
		font-size: 1.5em;
	}

	.hero-block p {
		width: 50%;
	}

	.hero-block button {
		font-family: serif;
		font-size: 1.5em;
		width: 468px;
		height: 50px;
		border: 3px solid #ddd;
		color: #ddd;
		background-color: rgba(0, 0, 0, 0);
		text-decoration: none;
	}

	.hero-block button:hover {
		background-color: #ddd;
		color: black;
	}

</style>
