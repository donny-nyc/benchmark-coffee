<template>
	<div class='header'>
		<a href="#"><img class='logo' src='/benchmark.png' /></a>
		<a href="#" class='primary-nav'>Coffee</a>
		<a href="#" class='primary-nav'>About</a>
		<a href="#" class='primary-nav'>Cart</a>
	</div>
</template>

<script>

export default {
	name: 'Header',
}

</script>

<style>
	.header {
		display: flex;
		width: 100%;
		height: 200px;
		align-items: center;
		color: black;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.logo {
		width: 200px;
	}

	.primary-nav {
		margin: 40px;
		text-decoration: none;
		color: black;
	}
</style>
