<template>
	<div>
		<h1>Checkout</h1>
		<div class="checkout-div">
			<div v-if="empty">
				Nothing Here
			</div>
			<Product 
				v-for="[id, product] of cart.entries()" 
				:product="product"
				:key="id"
			/>
		</div>
		<div class="checkout-div">
			<!--
			<div v-if="intent && hasItems">
				<h3>Payment</h3>
				<span>{{this.intent}}</span>
				<button v-on:click='handleSubmit'>Confirm</button>
			</div>
			-->
			<form v-on:submit.prevent="handleSubmit">
				<fieldset class="fields">
					<div class="field">
						<input
							placeholder="Name"
							type="text"
							name="name"
							id="name_field"
							class="input"
						/>
					</div>
					<div class="field">
						<input
							placeholder="Email"
							type="email"
							name="email"
							id="email_field"
							class="input"
						/>
					</div>
					<div class="field">
						<input
							placeholder="Street Address"
							type="text"
							name="address"
							id="address_field"
							class="input"
						/>
					</div>
					<div class="field">
						<input
							placeholder="Apt/Floor"
							type="text"
							name="address2"
							id="address2_field"
							class="input"
						/>
					</div>
					<div class="field">
						<input
							placeholder="City"
							type="text"
							name="city"
							id="city_field"
							class="input"
						/>
					</div>
					<div class="field">
						<input
							placeholder="State"
							type="text"
							name="state"
							id="state_field"
							class="input"
						/>
					</div>
					<div class="field">
						<div id="stripe-element-mount-point" class="input" />
					</div>
				</fieldset>
				<div class="field">
					<button
						type="submit"
					>Purchase</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import Product from '../../components/Product.vue'
	import stripeProperties from './StripeProperties.js'
	import { loadStripe } from '@stripe/stripe-js'

	export default {
		name: "Cart",
		components: {
			Product,
		},
		data() {
			return {
				stripe: null,
				elements: null,
			}
		},
		computed: {
			cart: function() {
				return this.$store.state.cart
			},
			intent: function() {
				return this.$store.state.intent
			},
			empty: function() {
				return this.$store.state.cart.size == 0
			},
			hasItems: function() {
				return this.$store.state.cart.size != 0
			}
		},
		methods: {
			...mapActions([
				'fetchPaymentIntent',
			]),
			async handleSubmit() {
				const { name, email, address, address2, city, state, zip } = Object.fromEntries(
					new FormData(event.target)
				)

				console.log("here", name, email, address, address2, city, state, zip)

				const billingDetails = {
					name,
					email,
					address: {
						city,
						line1: address,
						line2: address2,
						state,
						postal_code: zip
					}
				}

				const cardElement = this.elements.getElement("card")

				try {
				/*
					const response = await fetch("http://localhost:4242/create-payment-intent", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ amount: 2000 })
						}
					)

					const { clientSecret } = await response.json()
					console.log("secret", clientSecret)
					*/

					const clientSecret = this.intent

					const paymentMethodReq = await this.stripe.createPaymentMethod({
						type: "card",
						card: cardElement,
						billing_details: billingDetails
					})

					console.log("error?", paymentMethodReq);

					const { error } = await this.stripe.confirmCardPayment(clientSecret, {
						payment_method: paymentMethodReq.paymentMethod.id
					})

					console.log("error?", error)
					this.$router.push("success")
				} catch (error) {
					console.error("error", error)
				}
			}
		},
		async mounted() {
			this.fetchPaymentIntent()

			console.log('intent', this.intent)

			const ELEMENT_TYPE = "card"

			this.stripe = await loadStripe(stripeProperties.pk)

			this.elements = this.stripe.elements()
			const element = this.elements.create(ELEMENT_TYPE, {
				style: {
					base: {
						lineHeight: '2em',
						iconColor: '#000',
						color: '#000',
						fontWeight: '500',
						fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
						fontSize: '16px',
						fontSmoothing: 'antialiased',
						':-webkit-autofill': {
							color: '#000',
						},
						'::placeholder': {
							color: '#000',
						},
					},
					invalid: {
						iconColor: '#F00',
						color: '#F00',
					},
				},
			})
			element.mount("#stripe-element-mount-point")
		},
		created() {

		}
	}
</script>

<style>
	.checkout-div {
		float: left;
		width: 50%;
	}

	.field {
		background-color: #FFF;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		gap: 50px;
	}

	.field input {
		height: 2em;
		border: 1px solid #999;
		width: 100%;	
		font-size: 1.5em;
	}
</style>
