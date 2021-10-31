<template>
	<div class='Button' :style="background">
		<a :href="href">{{ text }}</a>
	</div>
</template>

<script>
	export default {
		name: 'BenchmarkButton',
		props: [
			'href',
			'text',
			'color',
		],
		computed: {
			background() {
				return {
					'--background-color': this.color || '#DDD',
				}
			}
		}
	}
</script>

<style scoped>
	a {
		background: none;
		border: 2px solid #DDD;
		border-radius: 10px;
		color: #DDD;
		display: block;
		font-size: 2em;
		max-width: 300px;
		padding: 30px;
		text-align: center;
		text-decoration: none;
		transition: 0.3s;
	}

	a:hover {
		background-color: var(--background-color);
		color: #000;
		cursor: pointer;
	}

	a:active {
		background-color: white;
	}
</style>
