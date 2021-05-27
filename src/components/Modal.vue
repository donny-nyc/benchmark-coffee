<template>
	<div class='modal'>
		<div :class='hasShadow' />

		<div class='modal-block'>
			<p>Modal</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Modal',
		computed: {
			hasShadow () {
				return this.$store.state.shadow ? "shadow" : ""
			}
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
	}

	.modal-block {
		width: 850px;
		background-color: white;
		position: fixed;
		z-index: 5;
		top: 50px;
		left: 50%;
		margin-left: -425px;
		bottom: 50px;
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
