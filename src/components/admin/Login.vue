<template>
  <v-container>
    <v-row>
      <v-col justify="center" offset-md="3" md="6" xs="12">
        <h1 style="color:black;">Admin Login</h1>

        <div id="info">
          <v-text-field v-model="email" label="Email" required> </v-text-field>

          <v-text-field v-model="password" label="Password" required>
          </v-text-field>

          <v-btn rounded color="#09225b" class="mr-2 white--text" @click.prevent="signIn()">
            Login
          </v-btn>

          <v-btn rounded color="incomplete" class="mr-2 white--text" @click.prevent="signOut()">
            Sign Out
          </v-btn>
        </div>
      </v-col>

      <v-col offset-lg="3" lg="auto"> 
        <p> Hvis du har behov for login Kristian <br> <br>
          Login: jegelskerabba@detrittigur.dk  <br>  Password: dancingqueen
          </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("/admin");
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong Password");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
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

<style lang="scss" scoped>
#info {
  padding: 20px;
  
}
</style>
