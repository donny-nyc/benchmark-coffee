<template>
	<div>
		<div>pk: {{ pk }}</div>
		<div>intent: {{ paymentIntent }}</div>
		<StripeCheckout 
			ref="checkoutRef"
			mode="payment"
			v-bind:pk="pk"
			v-bind:sessionId="checkoutSessionId"
			v-bind:lineItems="lineItems"
			v-bind:successUrl="successUrl"
			v-bind:cancelUrl="cancelUrl"
			v-bind:clientReferenceId="clientReferenceId"
		/>
		<button @click="submit">Pay Now!</button>
	</div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import { mapActions } from 'vuex'

export default {
	name: 'Checkout',
	data() {
		return {
			lineItems: [
				{
					price: 'price_1JFQS4CKQFwp7OFZ0Ws7aUtm',
					quantity: 1,
				},
			],
			clientReferenceId: "",
		}
	},
	computed: {
		checkoutSessionId () {
			return this.$store.state.sessionId
		},
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
		// this.fetchPaymentIntent()
		this.fetchSessionId()
	},
	methods: {
		...mapActions([
//		'fetchPaymentIntent',
		'fetchSessionId',
		]),
		submit() {
			this.$refs.checkoutRef.redirectToCheckout()
		}
	},
	components: {
		StripeCheckout,
	},
};
</script>
