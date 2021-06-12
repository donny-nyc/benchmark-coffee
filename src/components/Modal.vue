<template>
	<div class='modal'>
		<div v-on:click="hideModal" :class='hasShadow' />

		<div class='modal-block'>
			<p>Modal</p>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'Modal',
		computed: {
			hasShadow () {
				return this.$store.state.shadow ? "shadow" : ""
			}
		},
		methods: {
			...mapActions([
				'hideModal',
			]),
		}
	}
</script>

<style>
	.shadow {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 3;
		transition: background-color 2s;
	}

	.modal-block {
		background-color: #fff6f1;
		width: 850px;
		position: fixed;
		z-index: 5;
		top: 50px;
		left: 50%;
		margin-left: -425px;
		bottom: 50px;
		border-radius: 10px;
		border: 2px solid black;
	}

	@media only screen and (max-width: 850px) {
		.modal-block {
			width: unset;
			margin-left: unset;
			position: fixed;
			left: 50px;
			right: 50px;
		}
	}
</style>
