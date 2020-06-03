<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
  import ProductListOne from "./components/ProductListOne";
  import ProductListTwo from "./components/ProductListTwo";
export default {
  name: 'app',
  components: {
    'product-list-one':ProductListOne,
    'product-list-two':ProductListTwo
  },
  data () {
    return {
      products: [
        {name:"Panny", price:200},
        {name:"Raj", price:300},
        {name:"Sherdon", price:500},
        {name:"Howard", price:400}
      ]
    }
  }
}
</script>

<style>
body{
  font-family: Ubuntu;
  color: #555;
}
</style>
