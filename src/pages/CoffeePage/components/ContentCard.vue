<template>
	<div class="content-card">
		<div class='card-block' :class="mirrored">
			<h1>Eat your heart out</h1>
			<p>{{ name }}</p>
			<p>{{ description }}</p>
			<p>
				It's an exfoliant, expectorant
				and extreme enema, all in one
			</p>
		</div>
		<div class='card-image'>
			<img :src="imgSrc" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ContentCard',
		props: [ 'id', 'name', 'description', 'imgSrc'],
		computed: {
			mirrored() {
				console.log(this.id)
				console.log(this.id % 2)
				if (this.id % 2 == 0) return 'mirror';

				return '';
			}
		}
	}
</script>

<style>
	.content-card {
		display: flex;
		flex-direction: row;
		max-width: 1050px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 100px;
	}

	@media only screen and (max-width: 1000px) {
		.content-card {
			flex-direction: column;
		}
	}

	.card-block {
		text-align: justify;
		margin-right: 100px;
		margin-top: auto;
		margin-bottom: auto;
	}

	.mirror {
		order: 2;
		margin-left: 100px;
	}

	@media only screen and (max-width: 1000px) {
		.card-block {
			order: 2;
		}
	}

	.content-card img {
		width: 100%;
	}
</style>
