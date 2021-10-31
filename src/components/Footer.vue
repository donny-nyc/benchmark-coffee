<template>
	<div class='footer' v-bind:class="{blur: shouldBlur}">
		<div class='footer-column'>
			<h2>Navigation</h2>
			<a href="#">About</a>
			<a href="#">Coffee</a>
		</div>
		<div class='footer-column'>
			<h2>Locations</h2>
			<span>1141 Broadway, NY, NY</span>
			<p>©{{ currentYear }} Benchmark Coffee Roasters</p>
		</div>
		<div class='footer-column'>
			<h2>Contact</h2>
			<span>hello@benchmark.nyc</span>
			<span>+1 (718) 555-0000</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Footer',
	computed: {
		shouldBlur () {
			return this.$store.state.shadow;
		},
		currentYear () {
			return new Date().getFullYear()
		}
	}
}
</script>

<style>
	.footer {
		border-top: 2px solid #DDD;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.blur {
		filter: blur(5px);
	}

	.footer-column {
		display: flex;
		flex-direction: column;
		margin-left: 75px;
		margin-right: 75px;
		color: #DDD;
		font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
	}

	.footer-column a {
		text-decoration: none;
		color: #DDD;
	}	

	.footer-column h2 {
		margin-bottom: 0;
	}

	@media only screen and (max-width: 1000px) {
		.footer {
			flex-direction: column;
		}
	}
</style>
