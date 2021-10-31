<template>
	<div class='header' v-bind:class="{blur: shouldBlur}">
		<div id='benchmark'>
<!--		<router-link to='/'><img class='logo' src='/benchmark.png' /></router-link> -->
			<router-link to='/' id='benchmark' class='primary-nav'>BENCHMARK</router-link>
			<router-link to='/about' class='primary-nav'>About</router-link>
			<router-link to='/coffee' class='primary-nav'>Coffee</router-link>
			<router-link to='/checkout' class='primary-nav'>Cart</router-link>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Header',
	computed: {
		shouldBlur () {
			return this.$store.state.shadow	
		},
	},
}

</script>

<style scoped>
	#benchmark {
		background-image: url("/coffee_mark.png");
		background-size: 100px;
		background-repeat: no-repeat;
		background-position: 90px;

		display: flex;
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.header {
		/*background-color: #fff6f1;*/
		background: linear-gradient(-90deg, #5a5dff 0%, #0a0d5f 100%);
		font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
		z-index: 2;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
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
		font-weight: bold;
		margin: 40px;
		text-decoration: none;
		color: #DDD;
	}

	.primary-nav:hover {
		cursor: pointer;
		color: #ffb43e;
	}

	#benchmark {
	}
</style>
