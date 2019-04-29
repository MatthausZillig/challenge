<template>
  <v-toolbar height='64'>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="margin-left">MINHA LOJA</v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down margin-left">
      <v-btn flat>PERFUMARIA</v-btn>
      <v-btn flat>MAQUIAGEM</v-btn>
      <v-btn flat>CABELOS</v-btn>
      <v-btn flat>INFANTIL</v-btn>
      <v-btn id="cart" outline round color="grey" class="height-cart margin-left" @focus="">
        <v-icon>shopping_cart</v-icon>
        <span class="display">R$0,00</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cart:hover {
  padding-left: 25px !important;
  padding-right: 25px !important;
  display: block;
}

.height-cart {
  height: 40px !important;
}
.margin-left {
  margin-left: 150px !important;
}
</style>
