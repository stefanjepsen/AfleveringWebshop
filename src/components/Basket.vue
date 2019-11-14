<template>

<div>
  
       <h1  style="background-color:#f4f4f4 ;">  <span style="margin-left:30%;"></span>  Dit Valg</h1>
        <div class="pa-2" id="info" >
            
              <v-simple-table id="menu-table" v-if="basket.length > 0">
            <thead>
              <tr>
                <th class="text-left" style="width:30%">Quantity</th>
                <th class="text-left" style="width:50%">Name Of Item</th>
                <th class="text-left" style="width:20%">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in basket" :key="item.name">
                <td>
                 <v-icon color="#09225b" @click="increaseQtn(item)" >add_box</v-icon>
                 {{ item.quantity }}
         <v-icon color="#09225b" @click="decreaseQtn(item)">indeterminate_check_box</v-icon>
                </td>
                <td>
                    <span>{{ item.name }}</span>
                    </td>

                <td>
                  {{ item.price }}
                    </td>
              </tr>
            </tbody>
          </v-simple-table>


<v-simple-table  v-else>

  <p> <strong >Kurven er tom</strong></p>

</v-simple-table>

<v-divider></v-divider>
          <v-row id="basket_checkout" class="mt-4" style="margin:0;">
              <v-col>
                <p>Subtotal:</p>
                 <p>Betaling for opstartet arbejde:</p>
                  <p>Total Amount:</p>
              </v-col>
              <v-col class="text-right">
                    <p>{{subTotal}} DKK</p>
                 <p>799 DKK</p>
                  <p><b> {{total}} DKK </b> </p>
              </v-col>
          </v-row>
          
          <v-row style="">
              
                  <v-btn class=" white--text mx-auto" rounded color="#09225b"> Accepter Valg</v-btn>
             
          </v-row>
        </div>
</div>


</template>

<script>
import { dbMenuAdd } from '../../firebase'

    export default {

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
},

  methods: {
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
      this.$store.commit('addBasketItems', this.basketDump);
      this.basketDump = [];
    },
    increaseQtn(item) {
      item.quantity++
    },
      decreaseQtn(item) {
      item.quantity--;

      if (item.quantity === 0){
        this.basket.splice(this.basket.indexOf(item), 1)
      }
    }
  },
  computed: {
    basket() {
     // return this.$store.state.basketItems
     return this.$store.getters.getBasketItems
    },
    subTotal () {
      var subCost = 0;
      for( var items in this.basket) {
        var individualItem = this.basket[items];
        subCost += individualItem.quantity * individualItem.price;

      }
      return subCost
    },
    total () {
      var deliveryPrice = 10;
      var totalCost = this.subTotal
      return totalCost + deliveryPrice
    }
  }
    }
</script>

<style lang="scss" scoped>

</style>