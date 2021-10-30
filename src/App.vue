<template>
  <div id="app">
		<Modal v-if="modals" />
		<Header></Header>
		<div id='router-margin' />
		<router-view></router-view>
		<Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
		Header,
		Footer,
		Modal,
  },
	computed: {
		modals () {
			return this.$store.state.modals.length > 0
		}
	}
}
</script>

<style>
body {
	background-color: #5a5dff;
}

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#router-margin {
	margin-top: 100px;
}
</style>
