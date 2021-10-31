<template>
	<div class="content-card" :style="cssProps">
	<!--
		<div class='card-image'>
			<img :src="product.imgSrc" />
		</div>
		-->
		<div class='card-block'
			:class="mirrored"
			:style="{ backgroundImage: `url(${product.imgSrc})` }"
		>
			<h1>{{ product.name }}</h1>
			<h2 class='region'>{{ product.region }}</h2>
			<h2>${{product.price}}</h2>
		</div>
		<p class='description'>{{ product.description }}</p> 
		<button v-on:click="addToCart(product)">Add To Cart</button>
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
		height: 700px;
		width: 500px;
		color: #333;
		font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
		margin-bottom: 30px;
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

	.content-card h1 {
		color: #c85933;
		font-weight: normal;
		margin-bottom: 5px;
	}

	.content-card h2 {
		margin-top: 5px;
		font-weight: normal;
		color: #DDD;
	}

	.content-card .description {
		font-size: 1.2em;
		line-height: 2;
		background-color: #DDD;
		margin-left: 10px;
		margin-right: 10px;
	}

	.card-block {
		text-align: justify;
		width: 100%;
		height: 300px;
		background-position: center center;
		background-repeat: no-repeat;
	}

	.mirror {
		order: 2;
	}

	.card-image {
		width: 100%;
		overflow: hidden;
		display: block;
		float: left;
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
