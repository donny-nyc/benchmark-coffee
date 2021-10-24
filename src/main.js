import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import CoffeePage from './pages/CoffeePage'
import CheckoutPage from './pages/CheckoutPage'
import SuccessPage from './pages/SuccessPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'

import {
	SET_LOADING_PRODUCTS,
	SET_LOADED_PRODUCTS,
	SET_SHOW_MODALS,
	SET_HIDE_MODALS,
	SET_PAYMENT_INTENT,
	SET_SESSION_ID,
	ADD_TO_CART,
} from './mutation_constants.js'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
	state: {
		loading: false,
		shadow: false,
		products: {},
		cart: new Map(),
		modals: [],
		modalProperties: [],
		intent: "",
		session: "",
	},
	mutations: {
		[SET_SESSION_ID]: ((state, session) => {
			const sessionId = session.SessionId
			state.session = sessionId
		}),
		[SET_LOADING_PRODUCTS]: (state => state.loading = true),
		[SET_LOADED_PRODUCTS]: ((state, products) => {
			state.loading = false
			state.products = products
		}),
		[SET_HIDE_MODALS]: (state) => {
			state.modals = []
			state.shadow = false
		},
		[SET_SHOW_MODALS]: ((state, {modal, properties}) => {

			state.shadow = true
			state.modals.push(modal)
			state.modalProperties.push(properties)
		}),
		[SET_PAYMENT_INTENT]: ((state, intent) => {
			const clientSecret = intent.clientSecret
			state.intent = clientSecret || ""
			console.log(`client secret ${state.intent}`)
		}),
		[ADD_TO_CART]: ((state, product) => {
			if (!product) {
				console.error("Product cannot be null")
				return
			} else if (!product.id < 0 || product.id === undefined) {
				console.error("Product.id cannot be null")
			} else {
				console.log(`${product.name} ${product.description}`)
			}

			let exists = state.cart.get(product.id)
			if(exists) {
				product.count = exists + 1
			} else {
				product.count = 1
			}

			state.cart.set(product.id, product.count)
			console.log(state.cart)
		}),
	},
	getters: {
		getIntent: state => () => {
			return state.intent
		},
		getCart: state => () => {
			return state.cart
		}
	},
	actions: {
		hideModal: (context) => {
			context.commit(SET_HIDE_MODALS)
		},
		pushModal: (context, {modal, properties}) => {
			context.commit(SET_SHOW_MODALS, {modal, properties})
		},
		fetchProducts: (context, productGetter) => {
			context.commit(SET_LOADING_PRODUCTS)
			productGetter.fetchProducts().then((results) => {
				context.commit(SET_LOADED_PRODUCTS, results)
			})
		},
		fetchSessionId: (context) => {
			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ items: [] })
			}

			fetch("http://localhost:4242/create-checkout-session", requestOptions)
			.then(response => response.json())
			.then(data => {
				context.commit(SET_SESSION_ID, data)
			})

		},
		addToCart: (context, product) => {
			context.commit(ADD_TO_CART, product)
		},
		fetchPaymentIntent: ({commit, state}) => {
			if(!state.intent) {
				let body = []

				state.cart.forEach((value, key) => {
					body.push({
						id: key,
						count: value,
					})
				})

				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ items: body })
				}

				console.log(requestOptions)

				fetch("http://localhost:4242/payment-intent/create", requestOptions)
				.then(response => response.json())
				.then(data => {
					commit(SET_PAYMENT_INTENT, data)
				})
			}
		}
	},
})

const routes = [
	{path: '/test', component: TestPage},
	{path: '/about', component: AboutPage},
	{path: '/coffee', component: CoffeePage},
	{path: '/success', component: SuccessPage},
	{path: '/checkout', component: CheckoutPage},
	{path: '', component: HomePage},
]

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
  render: h => h(App),
	router: router,
	store: store
}).$mount('#app')
