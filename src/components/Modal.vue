<template>
	<div class='modal'>
		<div v-on:click="hideModal" :class='hasShadow' />

		<div class='modal-block'>
			<!-- https://stackoverflow.com/a/43658979/15016489 -->
			<component :is="topModal" v-bind="currentProperties"/>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'Modal',
		data() {
			return {
			// Initialize as empty
				topModal: {},
				properties: {},
			}
		},
		computed: {
			hasShadow () {
				return this.$store.state.shadow ? "shadow" : ""
			},
			currentProperties: function() {
				return this.$store.state.modalProperties[0]
			}
		},
		created() {
			const topModal = this.$store.state.modals[0]
			this.topModal = topModal

			const properties = this.$store.state.modalProperties[0]
			this.properties = properties
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
		border-radius: 5px;
		border: 2px solid #bfbfbf;
		overflow-y: auto;
		padding: 25px;
	}

	@media only screen and (max-width: 850px) {
		.modal-block {
			width: unset;
			margin-left: unset;
			position: fixed;
			left: 10px;
			right: 10px;
		}
	}
</style>
