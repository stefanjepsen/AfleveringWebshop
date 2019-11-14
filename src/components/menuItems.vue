<template>
  <div>
    <h1>
      Vælg de ting til netop <strong>DIT</strong> behov
    </h1>
    <div  class="pa-2" id="info">
      <v-simple-table id="menu-table">
        <thead>
          <tr >
            <th ></th>
            <th class="text-left hidden-md-and-down" style="width:70%">Produkt</th>
            <th class="text-left" style="width:100px">Pris</th>
            <th class="text-left" style="width:100px">Tilføj til kurven</th>
          </tr>
        </thead>
        <tbody data-aos="fade-up-right">
          <tr  v-for="item in menuItems" :key="item.name">
            <td id="td_menuitem_img" class="hidden-md-and-down">
              <v-img v-bind:src="item.image"></v-img>
            </td>
            <td>
              <span id="td_name">{{ item.name }}</span> <br />

              <span id="menu_item_description">{{ item.description }}</span>
            </td>
            <td>
              <span>{{ item.price + '' +'kr'}}</span>
            </td>

            <td>
              <v-btn small text @click="addToBasket(item)">
                <v-icon x-large color="#09225b" @click="addCheckoutItem()"
                  >add_box</v-icon
                >
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import { dbMenuAdd } from "../../firebase";
export default {
  data() {
    return {
      basketDump: []
    };
  },
  beforeCreate() {
    this.$store.dispatch("setMenuItems");
  },
  /* 
created() {
  dbMenuAdd.get().then((querySnapshot) => {
    querySnapshot.forEach((doc =>{
       var menuItemData = doc.data();
   this.menuItems.push({
    id: doc.id,
      name: menuItemData.name,
      description: menuItemData.description,
      price: menuItemData.price,
  })
    }))
  })
}, */
  computed: {
    menuItems() {
      return this.$store.getters.getMenuItems;
    }
  },
  methods: {
    addCheckoutItem() {
      this.$store.dispatch("setCheckoutItem");
    },
    addToBasket(item) {
      /*     if(this.basket.find(itemInArray => item.name === itemInArray.name)) {
        item = this.basket.find(itemInArray => item.name === itemInArray.name);
        this.increaseQtn(item);
      }
      else {
        this.basket.push({
        name: item.name,
        price: item.price,
        quantity: 1
      }) 
      } */
      this.basketDump.push({
        name: item.name,
        price: item.price,
        quantity: 1
      });
      this.$store.commit("addBasketItems", this.basketDump);
      this.basketDump = [];
    },
    increaseQtn(item) {
      item.quantity++;
    },
    decreaseQtn(item) {
      item.quantity--;

      if (item.quantity === 0) {
        this.basket.splice(this.basket.indexOf(item), 1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
