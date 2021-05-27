<template>
  <div id="app">
		<Header></Header>
		<CoffeePage></CoffeePage>
		<Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CoffeePage from './pages/CoffeePage'

export default {
  name: 'App',
  components: {
    CoffeePage,
		Header,
		Footer
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
