<template>
  <v-container fluid="" style="padding:0;">
        <v-btn
        style="margin-top: 40%;"
      class="md-5 mr-3 elevation-21 hidden-md-and-down"
      dark
      fab
      button
      right
      color="#09225b"
      fixed
      @click="top"
    >
      <i class="  fas fa-arrow-up"></i>
    </v-btn>
    <v-row class="" justify="center">
      <v-col sm="12" lg="12" class="pa-0">
        <div class="container1 pt-1">
          <div id="hero-outer-container">
            <div id="hero-image"></div>
            <div id="hero-action-usp-container">
              <v-col sm="12" lg="12">
                <div id="hero-action-container">
                  <h1 class="hero-header d-none d-lg-block">
                    vil du sælge
                    <div id="hero-action-line">
                      dine <span style="opacity:0 !important;">_</span>
                      <span style="color: #09225b; font-size:6rem;">
                        varer
                      </span>
                    </div>
                    på nettet <strong> ?</strong>
                  </h1>

                  <v-col class="ml-5" offset-sm="" lg="10">
                    <div class="hero-action">
                      <h2 class="pb-4 mb-6 ml-5">Skræddersy din løsning</h2>
                      <v-btn
                        x-large
                        class=" white--text "
                        rounded
                        color="#09225b"
                        >
              <router-link tag="ul" to="/Menu">Sammensæt Din Webshop <span style="opacity:0;">.</span>
              </router-link></v-btn
                      >
                    </div>
                  </v-col>
                </div>
              </v-col>

              <div id="hero-usp-container" class="hidden-md-and-down mb-10">
                <div class="hero-usp">
                  <i class="fa fa-check fa-2x"></i>
                  <div class="text">Brugervenligt</div>
                </div>
                <div class="hero-usp">
                  <i class="fa fa-check fa-2x"></i>
                  <div class="text">Dansk support</div>
                </div>
                <div class="hero-usp">
                  <i class="fa fa-check fa-2x"></i>
                  <div class="text">Fair priser</div>
                </div>
              </div>

              <div id="hero-usp-container" class="hidden-md-and-up mb-10">
                <v-col sm="12">
                  <div class="hero-usp">
                    <i class="fa fa-check fa-2x"></i>
                    <div class="text">Brugervenligt</div>
                  </div>
                  <div class="hero-usp">
                    <i class="fa fa-check fa-2x"></i>
                    <div class="text">Dansk support</div>
                  </div>
                  <div class="hero-usp">
                    <i class="fa fa-check fa-2x"></i>
                    <div class="text">Fair priser</div>
                  </div>
                </v-col>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- packages -->

    <v-row class="mb-10 mt-10" justify="center">
      <v-col lg="2">
        <v-card
          data-aos="fade-up-right"
          data-aos-duration="1000"
          color="#FAFAFA"
          flat
          class="mx-auto "
          max-width="400"
        >
          <v-img
            class="white--text align-end"
            height="300"
            contain
            max-height="auto"
            src="https://www.fatsoundrecords.com/wp-content/uploads/2017/08/silver-504x600.png"
          >
          </v-img>

          <v-card-text class="text--primary">
            <div>Selvvalgt Design</div>
            <div>Fri Support</div>
            <div>Opsætning af hosting</div>
          </v-card-text>

          <v-card-actions>
            <v-btn x-large class=" white--text mx-auto" rounded color="#09225b"
              ><router-link tag="ul" to="/Menu">Sammensæt Din Webshop <span style="opacity:0;">...</span>
              </router-link></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col md="auto">
        <v-card
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          color="#FAFAFA"
          flat
          class="mx-auto "
          max-width="400"
        >
          <v-img
            class="white--text align-end"
            height="400"
            contain
            max-height="auto"
            src="https://www.fatsoundrecords.com/wp-content/uploads/2017/08/gold-504x600.png"
          >
          </v-img>

          <v-card-text  class="text--primary">
            <div >Selvvalgt Design</div>
            <div>Fri Support</div>
            <div>Opsætning af hosting</div>
          </v-card-text>

          <v-card-actions>
             <v-btn x-large class=" white--text mx-auto" rounded color="#09225b"
              ><router-link tag="ul" to="/Menu">Sammensæt Din Webshop <span style="opacity:0;">...</span>
              </router-link></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col data-aos="fade-up-left" data-aos-duration="1000" lg="2">
        <v-card color="#FAFAFA" flat class="mx-auto " max-width="400">
          <v-img
            class="white--text align-end"
            height="300"
            contain
            max-height="auto"
            src="https://www.fatsoundrecords.com/wp-content/uploads/2017/08/bronze.png"
          >
          </v-img>

          <v-card-text class="text--primary">
            <div>Selvvalgt Design</div>
            <div>Fri Support</div>
            <div>Opsætning af hosting</div>
          </v-card-text>

          <v-card-actions>
              <v-btn x-large class=" white--text mx-auto" rounded color="#09225b"
              ><router-link tag="ul" to="/Menu">Sammensæt Din Webshop <span style="opacity:0;">...</span>
              </router-link></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div id="hero-outer-container">
      <v-row class="mb-10 mt-10" justify="center">
        <v-col
          class="pa-10"
          data-aos="fade-left"
          data-aos-duration="1000"
          md="6"
        >
          <h1 class="">Lad os kontakte dig</h1>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="50"
              :rules="nameRules"
              label="Navn"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Telefon nummer er påkrævet']"
              label="Telefon nr:"
              required
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Her giver du os tilladelse til at må kontakte dig"
              required
            ></v-checkbox>

            <v-btn
              :disabled="!valid"
              color="#09225b"
              class="mr-4 white--text mx-auto"
              @click="validate"
              rounded
            >
              Send os en mail
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </div>


  </v-container>
  
</template>

<script>
// import HelloWorld from '../components/HelloWorld';

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Navn er påkrævet",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail er påkrævet",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    checkbox: false
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    top() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  },
  components: {
    // HelloWorld,
  }
};
</script>

<style lang="scss">
#hero-usp-container .hero-usp {
  padding: 0 3rem;
  display: flex;
  color: #09225b;
  white-space: nowrap;
}

.fa-2x {
  font-size: 2em;
}

#hero-usp-container .hero-usp .text {
  font-size: 1.4rem;
  align-self: center;
  padding-left: 0.5rem;
}

.fa-check::before {
  content: "\f00c";
}

#container1 {
  background-color: #fff !important;
  display: table !important;
  height: 100% !important;
  width: 100% !important;
}

#hero-outer-container {
  text-align: center !important;
  width: 100% !important;
  background-color: #f4f4f4 !important;
}

#hero-image {
  width: 100% !important;
  background-image: url("../assets/hero-coffee.png");
  background-size: cover !important;
  height: 363px !important;
  margin-bottom: -210px !important;
}

#hero-action-usp-container {
  display: inline-flex !important;
  width: 100% !important;
  flex-direction: column !important;
  align-items: center !important;
}

#hero-action-container {
  display: inline-flex !important;
  align-items: center !important;
  text-align: left !important;
  color: #fff !important;
  padding: 2rem !important;
  background-color: #4b7ef4 !important;
  width: 950px !important;
  box-shadow: 0 0 1em gray !important;
}

.hero-header {
  flex-shrink: 0 !important;
  font-size: 5rem !important;
  font-weight: 700 !important;
  padding-bottom: 10px !important;
  font-weight: bold;
  text-transform: uppercase;
}

#hero-action-line {
  display: flex;
  align-items: center;
  height: 100px;
}

.hero-action {
  width: 100%;
}
#hero-usp-container {
  display: flex;
  padding: 3rem 0;
}

#hero-action-usp-container {
  display: inline-flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
/*
.info_box .flex h1 {
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
  text-align: center;
}

.info_box .flex div {
  background-color: #ededed;
  padding: 20px;
}
.layout:first-child {
  height: 40vh;
}

.layout:last-child {
  height: 40vh;
}
*/
</style>
