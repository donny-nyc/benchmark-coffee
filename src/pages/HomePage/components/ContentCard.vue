<template>
	<div class="content-card" :style="cssProps">
		<div class='card-image'>
			<img :src="product.imgSrc" />
		</div>
		<div class='card-block'>
			<h1>
				<span>
					{{ product.name }}
				</span>
				<span>
					- {{ product.region }}
				</span>
				<span>
					- ${{ product.price }}
				</span>
			</h1>
		</div>
		<p class='description'>{{ product.description }}</p> 
		<BenchmarkButton 
			v-on:click="addToCart(product)"
			text="Add To Cart" 
			color="#96fc9c"
		/>
		<br />
		<BenchmarkButton
			href="/checkout"
			v-on:click="addToCart(product)"
			text="Buy Now"
			color="#96fcf2"
		/>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import BenchmarkButton from '../../../components/BenchmarkButton.vue'

	export default {
		name: 'ContentCard',
		props: [ 'product' ],
		components: { BenchmarkButton },
		computed: {
			cssProps() {
				return {
		/*			'--background-color': this.product.color, */
				}
			},
		},
		methods: {
			...mapActions([
				'addToCart',
			])
		}
	}
</script>

<style>
	.content-card {
		border-radius: 10px;
		background: linear-gradient(0deg, #000000 0%, #963c06 200%);
		height: 900px;
		width: 500px;
		color: #333;
		font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
		margin-bottom: 30px;
		padding: 30px;
	}

	BenchmarkButton {
		margin-left: auto;
		margin-right: auto;
	}

	.content-card button {
		background: none;
		border: 2px solid #DDD;
		border-radius: 10px;
		color: #DDD;
		width: 300px;
		display: block;
		margin-left: auto;
		margin-right: auto;
		height: 100px;
		font-size: 2em;
	}

	.content-card h1 span:first-child {
		color: #c85933;
		font-weight: normal;
		margin-bottom: 5px;
	}

	.content-card h1 span {
		color: #DDD;
		font-weight: normal;
	}

	.content-card h2 {
		margin-top: 5px;
		font-weight: normal;
		color: #DDD;
	}

	.content-card .description {
		font-size: 1.2em;
		line-height: 2;
		color: #DDD;
		border-bottom: 2px solid #DDD;
		padding-bottom: 20px;
		margin-bottom: 70px;
	}

	.card-block {
		text-align: justify;
		width: 100%;
	}

	.mirror {
		order: 2;
	}

	.card-image {
		width: 100%;
		overflow: hidden;
	}

	.card-image img {
		height: 300px;
	}

	@media only screen and (max-width: 1000px) {
		.content-card {
			flex-direction: column;
			height: unset;
		}

		.content-card img {
			max-height: 300px;
			width: 100%;
			object-fit: cover;
		}

		.card-block {
			height: 300px;
			width: 100%;
			margin: 20px;
			order: 2;
		}

		.card-image {
			margin: 0px;
		}
	}
</style>
