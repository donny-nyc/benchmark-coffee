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
						<label for="name_field">Name</label>
						<input
							placeholder="Johan"
							type="text"
							name="name"
							id="name_field"
							class="input"
						/>
					</div>
					<div class="field">
						<label for="email_field">Email</label>
						<input
							placeholder="johan@benchmark.com"
							type="email"
							name="email"
							id="email_field"
							class="input"
						/>
					</div>
					<div>
						<label for="address_field">Address</label>
						<input
							placeholder="408 3rd Ave"
							type="text"
							name="address"
							id="address_field"
							class="input"
						/>
					</div>
					<div>
						<label for="address_field">Apartment/Floor</label>
						<input
							type="text"
							name="address2"
							id="address2_field"
							class="input"
						/>
					</div>
					<div>
						<label for="city_field">City</label>
						<input
							placeholder="Brooklyn"
							type="text"
							name="city"
							id="city_field"
							class="input"
						/>
					</div>
					<div>
						<label for="state_field">State</label>
						<input
							placeholder="New York"
							type="text"
							name="state"
							id="state_field"
							class="input"
						/>
					</div>
					<div>
						<label for="zip_field">Zip Code</label>
						<input
							placeholder="11215"
							type="text"
							name="zip"
							id="zip_id"
							class="input"
						/>
					</div>
					<div>
						<label for="card_field">Credit Card</label>
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
		props: {
			pk: {
				type: String,
				required: true
			},
		},
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
				return this.$store.state.intent.substring(0, 30) + "..."
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
			const ELEMENT_TYPE = "card"

			this.stripe = await loadStripe(stripeProperties.pk)

			this.elements = this.stripe.elements()
			const element = this.elements.create(ELEMENT_TYPE, "")
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
</style>
