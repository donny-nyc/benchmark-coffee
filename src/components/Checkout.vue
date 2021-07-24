<template>
	<div>
		<div class="checkout-container">
			<h3>Blue  Nile $20</h3>
			<div class="img">
				<img
					src="http://localhost:8080/coffee1.jpg"
					alt="blue nile coffee"
					style="width:25%"
					srcset=""
					/>
			</div>	
		</div>
		<div class="checkout-container">
			<form @submit.prevent="handleSubmit">
				<fieldset :class="{ dis: loading }" class="fields">
					<div class="checkout-field"></div>
					<div class="checkout-field">
						<input
							placeholder="Name"
							type="text"
							name="name"
							id="name_field"
							class="checkout-input"
						/>
					</div>
					<div class="checkout-field">
						<input
							placeholder="Address"
							type="text"
							name="address"
							id="address_field"
							class="checkout-input"
						/>
					</div>
					<div class="checkout-field">
						<input
							placeholder="City"
							type="text"
							name="city"
							id="city_field"
							class="checkout-input"
						/>
					</div>
					<div class="checkout-field">
						<input
							placeholder="State"
							type="text"
							name="state"
							id="state_field"
							class="checkout-input"
						/>
					</div>
					<div class="checkout-field">
						<input
							placeholder="Zip Code"
							type="text"
							name="zip"
							id="zip_field"
							class="checkout-input"
						/>
					</div>
					<div class="checkout-field">
						<input
							placeholder="Email"
							type="text"
							name="email"
							id="email_field"
							class="checkout-input"
						/>
					</div>
					<div>
						<div id="stripe-element-mount-point" />
					</div>
				</fieldset>
				<div class="checkout-input">
					<button 
						type="submit"
						class="checkout-btn is-primary"
						:class="{ dis: loading }"
					>
						{{ loading ? "Loading..." : "Submit Order" }}
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js"
import { mapActions } from 'vuex'

const style = {
	style: {
		base: {
			iconColor: "#000",
      color: "#000",
      fontWeight: "800",
      fontFamily: "Press Start 2P",
      fontSize: "22px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883"
      },
      "::placeholder": {
        color: "green"
      }
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "red"
    }
  }
}

let stripe = null
let elements = null

export default {
	name: 'Checkout',
	mounted: async function() {
		const ELEMENT_TYPE = "card";

		stripe = await loadStripe(this.pk)

		elements = stripe.elements()
		const element = elements.create(ELEMENT_TYPE, style)
		element.mount("#stripe-element-mount-point");
	},
	data() {
		return {
			loading: false,
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
		checkoutSessionId: function() {
			return this.$store.state.sessionId
		},
		paymentIntent: function() {
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
		// this.fetchSessionId()
	},
	methods: {
		...mapActions([
		'fetchPaymentIntent',
		]),
		submit() {
			this.$refs.cardRef.submit()
		},
		tokenCreated (token) {
			console.log(token);
		},
		async handleSubmit(event) {
			if (this.loading) return
			this.loading = true

			const { name, email, address, city, state, zip } = Object.fromEntries(
				new FormData(event.target)
			)
			console.log("here", name, email, address, city, state, zip)

			const billingDetails = {
				name,
				email,
				address: {
					city,
					line1: address,
					state,
					postal_code: zip
				}
			};

			const cardElement = elements.getElement("card")

			try {
				const secret = this.paymentIntent

				const paymentMethodReq = await stripe.createPaymentMethod({
					type: "card",
					card: cardElement,
					billing_details: billingDetails,
				})

				await stripe.confirmCardPayment(secret, {
					payment_method: paymentMethodReq.paymentMethod.id
				})
				.then(res => console.log(res))
				.error(error => console.error(error))

				this.loading = false
			} catch(error) {
				console.error("error", error)
				this.loading = false
			}
		},
	},
	components: {
//		StripeCheckout,
//		StripeElementCard,
	},
};
</script>

<style>
	.fields {
		width: 80%;
		border: 0;
	}

	.checkout-field {
		margin-left: unset;
		left: 50px;
		right: 50px;
	}

	.checkout-field input {
		min-height: 35px;
		font-size: 1.5em;
		background-color: unset;
		border: 0;
		border-bottom: 2px solid #bfbfbf;
		margin-bottom: 25px;
		width: 100%;
	}

	.checkout-btn {
		border-radius: 0px;
		width: 100%;
		height: 50px;
		max-width: 250px;
	}
</style>
