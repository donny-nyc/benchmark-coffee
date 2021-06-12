<template>
	<div class='header' v-bind:class="{blur: shouldBlur}">
		<router-link to='/'><img class='logo' src='/benchmark.png' /></router-link>
		<router-link to='/about' class='primary-nav'>About</router-link>
		<router-link to='/coffee' class='primary-nav'>Coffee</router-link>
		<span v-on:click='pushModal' class='primary-nav'>Cart</span>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Header',
	computed: {
		shouldBlur () {
			return this.$store.state.shadow	
		},
	},
	methods: {
		...mapActions([
			'pushModal',
		]),
	},
}

</script>

<style>
	.header {
		/*background-color: #fff6f1;*/
		background-color: #fff;
		z-index: 2;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
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
		cursor: pointer;
		color: #333;
	}
</style>
