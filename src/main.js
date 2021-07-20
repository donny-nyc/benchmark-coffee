import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import CoffeePage from './pages/CoffeePage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'

import {
	SET_LOADING_PRODUCTS,
	SET_LOADED_PRODUCTS,
	SET_SHOW_MODALS,
	SET_HIDE_MODALS,
	SET_PAYMENT_INTENT,
} from './mutation_constants.js'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
	state: {
		loading: false,
		shadow: false,
		products: {},
		modals: [],
		modalProperties: [],
		intent: {},
	},
	mutations: {
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
		})
	},
	getters: {},
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
		fetchPaymentIntent: (context) => {
			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ items: [] })
			}

			fetch("http://localhost:4242/create-payment-intent", requestOptions)
			.then(response => response.json())
			.then(data => {
				context.commit(SET_PAYMENT_INTENT, data)
			})
		}
	},
})

const routes = [
	{path: '/test', component: TestPage},
	{path: '/about', component: AboutPage},
	{path: '/coffee', component: CoffeePage},
	{path: '', component: HomePage},
]

const router = new VueRouter({
	routes
})

new Vue({
  render: h => h(App),
	router: router,
	store: store
}).$mount('#app')
