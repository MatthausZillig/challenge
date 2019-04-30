<template>
  <div>

    <!--Header-->
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
            <span id="total" class="text-truncate">R$ {{this.total}}</span>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-flex>

    <!--Main-->
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 >
          <h3 class="headline mb-3 font-weight-thin">ÚLTIMOS PRODUTOS</h3>
        </v-flex>

        <!--Products Cards-->
        <v-flex xs12 sm4 md4 lg4
        v-for="item in this.arrProducts"
        :key="item.name"
        >
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              class="mx-auto"
              color="grey lighten-4"
              max-width="600"
              height='400'
            >
              <v-img
                :aspect-ratio="16/9"
                :src="item.images[0].imageUrl"
              >
                <v-expand-transition>
                  <div
                    id="value"
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    R$ {{ item.Value }}
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-4"
                style="position: relative;"
              >
                <v-btn
                  absolute
                  color="orange"
                  class="white--text"
                  fab
                  large
                  right
                  top
                  @click="fillCart"
                >
                  <v-icon>add_shopping_cart</v-icon>
                </v-btn>
                <div class="font-weight-light grey--text title mt-5">{{ item.name }}</div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script src='../controllers/main.js'></script>
<style src='../styles/style.css' scoped></style>
