<template>
  <v-container fluid>
    <v-row>
      <v-col offset-md="1" md="10">
        <h1 class="black--text">Orders</h1>

        <div class="pa-2" id="info">
          <v-row class="ma-0">
            <v-col cols="12" md="1" class="pa-2">
              <p class="body-1 pl-1 font-weight-bold dargrey--text">INFO:</p>
            </v-col>

            <v-col cols="12" md="5" class="pa-2 pl-5">
              <v-row align="center">
                <div id="status_box" class="complete">COMPLETED</div>
                <span class="font-weight-light caption pl-1">Done</span>
              </v-row>

              <v-row align="center">
                <div id="status_box" class="orange">IN-PROGRESS</div>
                <span class="font-weight-light caption pl-1"
                  >Working on it...</span
                >
              </v-row>

              <v-row align="center">
                <div id="status_box" class="incomplete">NOT STARTED</div>
                <span class="font-weight-light caption pl-1"
                  >Not Started yet</span
                >
              </v-row>
            </v-col>

            <v-col cols="12" md="6" class="pa-2">
              <v-row>
                <div id="status_box" class="complete">COMPLETED</div>
                <div id="status_box" class="orange">IN-PROGRESS</div>
                <div id="status_box" class="incomplete">NOT STARTED</div>
              </v-row>
              <v-row>
                <p class="body-1 pl-1 font-weight-light caption pl-1">
                  <b> Single-click </b> to switch stage: complete => in
                  progresss => <b> Double-click</b> the box to reset to "not
                  started"
                </p>
               
              </v-row>
            </v-col>
          </v-row>
        </div>

        <!--  ORDERS LIST AREA-->
        <div class="pa-2 mt-1" id="info">
          <p class="body-1 pa-3 font-weight-bold dargrey--text">
            ORDERS:
          </p>
          <v-simple-table  id="menu-table">
            <thead>
              <tr>
                <th class="text-left" style="width:10%">Order nr.</th>
                <th class="text-left" style="width:10%">Quantity</th>
                <th class="text-left" style="width:40%">Item</th>
                <th class="text-left" style="width:10%">Price</th>
                <th class="text-left" style="width:10%">Status</th>
               
                <th class="text-left" style="width:10%">Remove</th>
              </tr>
            </thead>
            <tbody class="font-weight-light">
              <tr  v-for="item in orderItems" :key="item.name">
                
                <td>
                  {{ item.orderNumber }}
                </td>

                <td class="py-3">
                  <p
                    style="margin:0; "
                    v-for="subitem in item.orderLines"
                    :key="subitem.id"
                  >
                    {{ subitem.quantity }}
                  </p>
                </td>
                <td class="py-3">
                  <p
                    style="margin:0; "
                    v-for="subitem in item.orderLines"
                    :key="subitem.id"
                  >
                    {{ subitem.name }}
                  </p>
                </td>
                <td class="py-3">
                  <p
                    style="margin:0; "
                    v-for="subitem in item.orderLines"
                    :key="subitem.id"
                  >
                    {{ subitem.price }}
                  </p>
                </td>

                <td>
                  <div id="status_box" @click="switchStage(item.id)" v-bind:class="item.status">{{ item.status }}</div>
                </td>
             
                <td>
                  <v-btn small text @click="deleteOrderItem(item.id)">
                    <v-icon color="incomplete">delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </v-col>

  
    </v-row>
  </v-container>
</template>

<script>
import { dbOrders } from "../../firebase";

export default {
  data() {
    return {
      basket: [],
      dialog: false,
      item: [],
      activeEditItem: null,
      updatedSuccess: false,
      updatedText: "Menu Item has been updated"
    };
  },
  beforeCreate() {
    this.$store.dispatch("setOrderItems");
  },

  methods: {
    switchStage(id) {
    
      /*
      dbOrders.doc(id).update({status:"incomplete"})
      .then(() => { /*Taost goes here
      })
        */
      



      let selectedOrderItem = this.orderItems
      .filter(item => item.id === id) [0];

      if(selectedOrderItem.status === "inprogress") {
        dbOrders.doc(id).update({status:"complete"})
        .then(() => { 
       })
      }

      else if (selectedOrderItem.status === "incomplete") {
           dbOrders.doc(id).update({status:"inprogress"})
        .then(() => { 
       })
      }
      
      else if (selectedOrderItem.status === "complete") {
           dbOrders.doc(id).update({status:"incomplete"})
        .then(() => { 
       })
      }



    },

    deleteOrderItem(id) {
      dbOrders
        .doc(id)
        .delete()
        .then(() => {})
        .catch(error => {});
    },
    editItem(item) {
      this.item = item;
      this.activeEditItem = item.id;
    },
    updateItem() {
      dbMenuAdd
        .doc(this.activeEditItem)
        .update(this.item)

        .then(() => {
          this.updatedSuccess = true;
          console.log("Document successfully updated!");
        })
        .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
    deleteItem(id) {
      dbMenuAdd
        .doc(id)
        .delete()
        .then(function() {
          //  console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          //   console.error("Error removing document: ", error);
        });
    },

    addToBasket(item) {
      if (this.basket.find(itemInArray => item.name === itemInArray.name)) {
        item = this.basket.find(itemInArray => item.name === itemInArray.name);
        this.increaseQtn(item);
      } else {
        this.basket.push({
          name: item.name,
          price: item.price,
          quantity: 1
        });
      }
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
  },
  computed: {
    orderItems() {
      return this.$store.getters.getOrderItems;
    },
    subTotal() {
      var subCost = 0;
      for (var items in this.basket) {
        var individualItem = this.basket[items];
        subCost += individualItem.quantity * individualItem.price;
      }
      return subCost;
    },
    total() {
      var deliveryPrice = 10;
      var totalCost = this.subTotal;
      return totalCost + deliveryPrice;
    }
  }
};
</script>

<style lang="scss" scoped>
#status_box {
  height: 35px;
  width: 90px;
  font-size: 12px;
  border-radius: 2px;
  margin: 5px 0;
  color: map-get($colorz, white);
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 1px #aaaaaa;
}
</style>
