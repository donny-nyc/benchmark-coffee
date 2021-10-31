<template>
	<div id='hamburger-menu'>
		<div id="hamburger-elements" :style="menuVisible">
			<router-link to='/about' class='primary-nav'>About</router-link>
			<router-link to='/coffee' class='primary-nav'>Coffee</router-link>
			<router-link to='/checkout' class='primary-nav'>Cart</router-link>
		</div>
		<button id='hamburger-button' v-on:click="flipVisible">=</button>
	</div>
</template>

<script>
	export default {
		name: "HamburgerMenu",
		data() {
			return {
				visible: false,
			}
		},
		computed: {
			menuVisible() {
				return {
					'--display': this.visible ? 'flex' : 'none'
				}
			}
		},
		methods: {
			flipVisible() {
				this.visible = !this.visible
			},
		}
	}
</script>

<style scoped>
	#hamburger-elements {
		display: var(--display);
		position: fixed;
		top: 100px;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(20%, 20%, 20%, 95%);
		flex-direction: column;
	}

	#hamburger-elements .primary-nav {
		line-height: 4em;
		color: #DDD;
		text-decoration: none;
		font-size: 2em;
		padding: 30px;
	}

	#hamburger-button {
		background: none;
		border: 2px solid #DDD;
		width: 50px;
		height: 50px;
		margin: 20px;
		color: #DDD;
		font-size: 2em;
	}

	#hamburger-button:active {
		background-color: white;
	}

	#hamburger-menu {
		display: none;
	}

	@media only screen and (max-width: 400px) {
		#hamburger-menu {
			display: block;
		}
	}

</style>
