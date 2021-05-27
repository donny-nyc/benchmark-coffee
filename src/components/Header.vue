<template>
	<div class='header' v-bind:class="{blur: shouldBlur}">
		<a href="#"><img class='logo' src='/benchmark.png' /></a>
		<a href="#" class='primary-nav'>Coffee</a>
		<a href="#" class='primary-nav'>About</a>
		<a href="#" class='primary-nav'>Cart</a>
	</div>
</template>

<script>

export default {
	name: 'Header',
	computed: {
		shouldBlur () {
			return this.$store.state.shadow	
		}
	}
}

</script>

<style>
	.header {
		z-index: 2;
		position: fixed;
		top: 0;
		width: 100%;
		background-color: white;
		display: flex;
		height: 100px;
		align-items: center;
		color: black;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.blur {
		filter: blur(5px);
	}

	.logo {
		margin-left: 100px;
		width: 200px;
	}

	.primary-nav {
		font-size: 1.2em;
		margin: 40px;
		text-decoration: none;
		color: #999;
	}

	.primary-nav:hover {
		color: #333;
	}
</style>
