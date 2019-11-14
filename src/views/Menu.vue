<template>
  <v-container>
    <v-row>
      <v-col offset-md="2" md="7">
        <menuItems />
      </v-col>

      <v-col class="hidden-md-and-down" offset-md="" md="auto">
        <Basket
          fixed
          style=" position:fixed;"
          class="md-5 mr-3 elevation-10"
          dark
        
          
          right
          color="#09225b"
        />

        



      </v-col>
            <v-col class="hidden-md-and-up" offset-md="" md="12">
        <Basket
          fixed
          
          class="md-5 mr-3 elevation-10"
          dark
        
          
          right
          color="#09225b"
        />

        



      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Basket from "@/components/Basket.vue";
import menuItems from "@/components/menuItems.vue";

export default {
  components: {
    Basket,
    menuItems
  }
};
</script>

<style lang="scss">
#info {
  background-color: #ededed;
}

tr th {
  font-weight: 300;
}
#td_name {
  font-weight: bold;
}

tr td {
  padding: 10px 10px 10px 16px;
}

#menu_item_description {
  font-style: italic;
  font-weight: 300;
  color: map-get($colorz, darkgrey);
  font-size: 13px;
}

/*
 .col h1 {
  @include infobox_mixin(5px, map-get($colorz, white), 10px, 5px, map-get($colorz, white));
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: right;
}

.col:last-child h1 {

  text-align: left;
}

*/

#basket_checkout {
  font-size: 13px;
}
#basket_checkout p:first-child {
  line-height: 6px;
}

#td_menuitem_img {
  max-width: 140px;
  height: 100px;
  padding: 0;
}
</style>
