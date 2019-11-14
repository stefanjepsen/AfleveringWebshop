<template>
  <v-container>

    <v-snackbar
      top
      v-model="updatedSuccess"
    >
      {{ updatedText }}
      <v-btn
        color="pink"
        text
        @click="updatedSuccess = false"
      >
        Close
      </v-btn>
    </v-snackbar>

    <v-row>
      <v-col offset-md="1" md="10">
        <h1>Produkter</h1>
        <div class="pa-2" id="info">
          <v-simple-table id="menu-table">
            <thead>
              <v-btn color="#09225b" small text to="/addNew">
                <v-icon x-large>add</v-icon>
                <span style=" background-color:#09225b; color:white; padding:0 10px;">Tilføj ny service</span>
              </v-btn>
              <tr>
                <th class="text-left" style="width:70%">Name</th>

                <th class="text-left" style="width:100px">Pris</th>
                <th class="text-left" style="width:100px">Rediger</th>
                <th class="text-left" style="width:100px">Fjern</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in menuItems" :key="item.name">
                <td>
                  <span id="td_name">{{ item.name }}</span>
                  <br />
                  <span id="menu_item_description">{{ item.description }}</span>
                </td>

                <td>
                  <span>{{ item.price }}</span>
                </td>

                <td>
                  <v-btn small text  @click.stop="dialog = true" @click="editItem(item)">
                    <v-icon color="#09225b">edit</v-icon>
                  </v-btn>
                </td>

                <td>
                  <v-btn small text @click="deleteItem(item.id)">
                    <v-icon color="incomplete">delete</v-icon>
                  </v-btn>
                </td>

                <!--               <td>
                  <v-btn small text @click="addToBasket(item)">
                    <v-icon color="orange">add_box</v-icon>
                  </v-btn>
                </td>
                -->
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </v-col>

    </v-row>
    <v-row>
      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <h1>Edit item</h1>
          <div class="pa-5" id="info">
            <v-text-field v-model="item.name"></v-text-field>
            <v-text-field v-model="item.description"></v-text-field>
            <v-text-field  v-model="item.price"></v-text-field>
            <v-btn 
            class="mr-2"
            color="complete"
            depressed @click="updateItem()"
             @click.stop="dialog = false"
             >Edit Item</v-btn>

            <v-btn color="incomplete"
             depressed
             @click.stop="dialog = false"
             >Close</v-btn>
          </div>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { dbMenuAdd } from "../../firebase";

export default {
  data() {
    return {
      basket: [],
      dialog: false,
      item: [],
      activeEditItem : null,
      updatedSuccess: false,
      updatedText: 'Menu Item has been updated'
    };
  },
  beforeCreate() {
    this.$store.dispatch("setMenuItems");
  },

  methods: {
    editItem(item) {
      this.item = item
      this.activeEditItem = item.id
    },
    updateItem() {
      
      dbMenuAdd.doc(this.activeEditItem).update(this.item)

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
    menuItems() {
      return this.$store.getters.getMenuItems;
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
/*
.col h1 {
  @include infobox_mixin(
    5px,
    map-get($colorz, white),
    10px,
    5px,
    map-get($colorz, white)
  );
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: right;
}

#info {
  background-color: #ededed;
}
*/
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

.col:last-child h1 {
  text-align: left;
}

#basket_checkout {
  font-size: 13px;
}
#basket_checkout p:first-child {
  line-height: 6px;
}
</style>