<template>
  <v-container>
    <v-row>
      <v-col offset-md="1" md="10">
        <h1>Tilføj ny service</h1>
        <div class="pa-2" id="info">
          <v-text-field label="Navnet på service" required v-model="name"></v-text-field>

          <v-text-field label="Beskrivelse" required v-model="description"></v-text-field>

          <v-text-field label="Pris" required v-model="price"></v-text-field>

          <v-file-input label="Placeholder" @change="uploadImage"></v-file-input>

          <v-btn class="mr-2 white--text" color="#09225b" depressed @click="addNewMenuItem()"
          :disabled="btnDisable" >Add Item</v-btn>

          <v-btn color="incomplete" depressed>Cancel</v-btn>
        </div>
      </v-col>


    </v-row>
  </v-container>
</template>

<script>
import { dbMenuAdd, fb } from "../../../firebase";

export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
      image: null,
      btnDisable: true
    };
  },
  methods: {
    uploadImage(e) {
      let file = e;
      console.log(e);
      var storageRef = fb.storage().ref("products/" + file.name);

      let uploadTask = storageRef.put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {

        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.image = downloadURL;
            this.btnDisable = false;
            console.log("File available at", downloadURL);
          });
        }
      );
    },
    addNewMenuItem() {
      dbMenuAdd.add({
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image
      });
    }
  }
};
</script>

<style scope="" lang="scss" >
/*
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
</style>