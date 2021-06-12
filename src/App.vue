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

export default {
  name: 'App',
  components: {
		Header,
		Footer,
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
	background-color: #fff6f1;
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
