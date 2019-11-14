<template>
  <div>
    <div class="text-center hidden-md-and-up">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            class="white--text"
            color="#09225b"
            style="width:100%"
            x-large
            v-on="on"
          >
            MENU
          </v-btn>
        </template>

        <v-list class="">
     
          <v-list-item>
            <v-btn
              class="white--text"
              color="#09225b"
              rounded
              style="width:100%;"
            >
              <router-link tag="ul" to="/">
                HJEM
              </router-link
            ></v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              class="white--text"
              color="#09225b"
              rounded
              style="width:100%;"
            >
              <router-link tag="ul" to="/Menu">
              Sammensæt Din Webshop
              </router-link></v-btn
            >
          </v-list-item>

          <v-list-item>
            <v-btn
              class="white--text"
              color="#09225b"
              rounded
              style="width:100%;"
            >
              <router-link tag="ul" to="/login">
                Login
              </router-link></v-btn
            >
          </v-list-item>

          <v-list-item>
            <v-btn
              class="white--text"
              color="#09225b"
              rounded
              style="width:100%;"
            >
              <router-link tag="ul" to="/admin">
                Admin
              </router-link></v-btn
            >
          </v-list-item>

          <v-list-item v-if="currentUser">
            <v-btn
              class="white--text"
              color="#09225b"
              rounded
              style="width:100%;"
            >
              <router-link
                tag="ul"
                v-if="currentUser"
                to="/orders"
                class="complete--text"
              >
                Ordre
              </router-link></v-btn
            >
          </v-list-item>

               <v-list-item>
            <v-btn
              style="width:100%;"
              rounded
              color="incomplete"
              class="mr-2 white--text"
              @click.prevent="signOut()"
            >
              Sign Out
            </v-btn>
          </v-list-item>

        </v-list>
      </v-menu>
    </div>

    <v-toolbar class="navMenu hidden-md-and-down text-center">
         <v-toolbar-title class="headline">
        <span>
          <span class="font-weight-bold">JEPSEN'S</span>HJEMMESIDER
        </span>
        <span></span>
      </v-toolbar-title>
      

                 <v-toolbar-title  v-if="currentUser" class="headline ml-10">
        <span>
          <span style="color:red;" class="font-weight-bold">Velkommen</span> Stefan
        </span>
        <span></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

    

      <v-toolbar-items class="center">
        <v-btn class="houverdine" text>
       
          <router-link tag="ul" to="/">
            HJEM
          </router-link></v-btn
        >
        <v-btn class="houverdine" text>
          <router-link tag="ul" to="/Menu">
            <v-spacer></v-spacer>Sammensæt Din Webshop
          </router-link></v-btn
        >

        <v-btn class="houverdine" text
          ><router-link tag="ul" to="/login">
            Login
          </router-link></v-btn
        >

        <v-btn text class="houverdine mr-2"
          ><router-link tag="ul" to="/admin">
            Admin
          </router-link></v-btn
        >



        <v-btn class="" text>
          <router-link
            tag="ul"
            v-if="currentUser"
            to="/orders"
            class="complete--text"
          >
            Ordre
          </router-link></v-btn
        >

                 <v-btn 
               
             
              rounded
              v-if="currentUser"
              color="incomplete"
              class="mr-2 white--text"
              @click.prevent="signOut()"
            >
              Sign Out
            </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- 
    <v-navigation-drawer color="primary" v-model="drawer" app>
      <div v-if="currentUser">
        <v-card class="mx-auto" max-width="200" tile>
          <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12">
                <v-avatar class="profile" color="grey" size="65" tile>
                  <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="title">{{ currentUser.email }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </div>
      <ul>
        <router-link tag="li" to="/">
          <v-icon color="orange">home</v-icon>Home
        </router-link>
        <router-link tag="li" to="/Menu">
          <v-icon color="orange">restaurant_menu</v-icon>Menu
        </router-link>
        <router-link tag="li" to="/test">
          <v-icon color="inprogress">info</v-icon>Test
        </router-link>
        <router-link tag="li" to="/about">
          <v-icon color="inprogress">info</v-icon>About
        </router-link>
        <router-link tag="li" to="/login">
          <v-icon color="inprogress">info</v-icon>Login
        </router-link>
        <router-link tag="li" v-if="currentUser" to="/orders" class="complete--text">
          <v-icon color="complete">assignment</v-icon>Orders
        </router-link>
        <router-link tag="li" to="/admin">
          <v-icon color="orange">lock</v-icon>Admin
        </router-link>
      </ul>
    </v-navigation-drawer>

    <v-app-bar app color>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <span>
          <span class="font-weight-bold">JEPSEN'S</span>HJEMMESIDER
        </span>
        <span></span>
      </v-toolbar-title>
    </v-app-bar>  -->
  </div>
</template>

<script>
import { db } from "../../firebase";

import firebase from "firebase";
import "firebase/firestore";
import store from "../store.js";

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch("setUser", user);
  } else {
    store.dispatch("setUser", null);
  }
});

export default {
  data: () => ({
    drawer: null
  }),
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Logged Out");
          this.$router.replace("/");
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>

<style lang="scss">
.navMenu {
  padding-top: 10px;
  padding-bottom: 10px;
}

.houverdine:hover {
  background-color: #09225b;
  color: white !important;
}

.knappe {
  background-color: #09225b;
}
</style>
