<template>
	<div class="content-card" :style="cssProps">
		<div class='card-block' :class="mirrored">
			<h1>{{ product.name }}</h1>
			<h2 class='region'>{{ product.region }}</h2>
			<p class='description'>{{ product.description }}</p>
			<button v-on:click="addToCart(product)">Add To Cart</button>
		</div>
		<div class='card-image'>
			<img :src="product.imgSrc" />
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'ContentCard',
		props: [ 'product' ],
		computed: {
			cssProps() {
				return {
					'--background-color': this.product.color,
				}
			},
			mirrored() {
				if (this.product.id % 2 == 0) return 'mirror';

				return '';
			}
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
		background-color: var(--background-color);
		display: flex;
		flex-direction: row;
		max-width: 1050px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50px;
		color: #333;
		height: 450px;
	}

	.content-card h1 {
		color: #c85933;
		font-weight: normal;
		margin-bottom: 5px;
	}

	.content-card h2 {
		margin-top: 5px;
		font-weight: normal;
		color: #333;
	}

	.content-card .description {
		font-size: 1.2em;
		line-height: 2;
	}

	.card-block {
		text-align: justify;
		margin-right: 100px;
		margin-left: 50px;
		margin-top: auto;
		margin-bottom: auto;
		min-width: 200px;
		background-color: white;
		padding: 50px;
	}

	.card-image {
		width: 100%;
		margin: 0 25px 0 25px;
	}

	.mirror {
		order: 2;
	}

	.content-card img {
		max-width: 100%;
		height: 100%;
		object-fit: cover;
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
			margin: 20px;
			order: 2;
		}

		.card-image {
			margin: 0px;
		}
	}
</style>
