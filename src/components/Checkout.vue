<template>
	<div>
		<div>pk: {{ pk }}</div>
		<div>sessionId: {{ sessionId }}</div>
		<div>intent: {{ paymentIntent }}</div>
		<StripeCheckout 
			v-bind:pk="pk"
			v-bind:sessionId="paymentIntent"
			v-bind:lineItems="lineItems"
			v-bind:successUrl="successUrl"
			v-bind:cancelUrl="cancelUrl"
			v-bind:clientReferenceId="clientReferenceId"
		/>
	</div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import { mapActions } from 'vuex'

export default {
	name: 'Checkout',
	data() {
		return {
			lineItems: [],
			clientReferenceId: "",
		}
	},
	computed: {
		paymentIntent () {
			return this.$store.state.intent
		},
	},
	props: {
		pk: String,
		successUrl: String,
		cancelUrl: String,
	},
	created: function() {
		this.fetchPaymentIntent()
	},
	methods: {
		...mapActions([
		'fetchPaymentIntent',
		])
	},
	components: {
		StripeCheckout,
	},
};
</script>
