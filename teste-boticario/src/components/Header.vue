<template>
  <v-flex xsm12 sm12 md12 lg12>
    <v-toolbar dark height='64' color='#FF6E40'>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="margin-left">MINHA LOJA</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down margin-left">
        <v-btn flat>PERFUMARIA</v-btn>
        <v-btn flat>MAQUIAGEM</v-btn>
        <v-btn flat>CABELOS</v-btn>
        <v-btn flat>INFANTIL</v-btn>
        <v-btn id="cart" outline round color="#fff" class="height-cart margin-left" @focus="totalCart(this.id)">
          <v-icon>shopping_cart</v-icon>
          <span id="total">R$0,00</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-flex>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#total {
  display: none;
}

#cart:hover #total {
  display: block;
  width: 130px !important;
  color: #fff;
}

#card {
  -webkit-transition: padding 2s; /* For Safari 3.1 to 6.0 */
  transition: width 7s;
}

.height-cart {
  height: 40px !important;
}
.margin-left {
  margin-left: 150px !important;
}
</style>
