<template>
  <div id="app">
		<Modal v-if="modals" />
		<Header></Header>
		<CoffeePage></CoffeePage>
		<Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CoffeePage from './pages/CoffeePage'
import Modal from './components/Modal'

export default {
  name: 'App',
  components: {
    CoffeePage,
		Header,
		Footer,
		Modal
  },
	computed: {
		modals () {
			return this.$store.state.modals
		}
	}
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
