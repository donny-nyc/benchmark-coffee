import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import {
	SET_LOADING_PRODUCTS,
	SET_LOADED_PRODUCTS
} from './mutation_constants.js'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		loading: false,
		products: {}
	},
	mutations: {
		[SET_LOADING_PRODUCTS]: (state => state.loading = true),
		[SET_LOADED_PRODUCTS]: ((state, products) => {
			state.loading = false
			state.products = products
			console.log(state.products)
		}),
	},
	getters: {},
	actions: {
		fetchProducts: (context, productGetter) => {
			context.commit(SET_LOADING_PRODUCTS)
			productGetter.fetchProducts().then((results) => {
				context.commit(SET_LOADED_PRODUCTS, results)
			})
		},
	},
})

new Vue({
  render: h => h(App),
	store: store
}).$mount('#app')
