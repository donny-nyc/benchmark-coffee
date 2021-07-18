<template>
	<StripeCheckout />
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
	name: 'Checkout',
	components: {
		StripeCheckout,
	},
};
</script>
