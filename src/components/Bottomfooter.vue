<template>
  <div>
    <v-footer dark padless>
   
      <v-card class="flex" flat tile>
     
        <v-card-title class="ml-10">
          <strong class="subheading"
            ></strong
            
          >
        
          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-row>
          <v-col lg="12" offset-sm="2"  offset-lg="">
            <h3>Kontakt os</h3> <br>
            <p>Telefon: 88 88 88 88 <br>
            VesterSvedgade 76 <br> 6000 SliceTown
            </p>
          </v-col>
        </v-row>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Abba Lover.x.9000</strong>
        </v-card-text>
      </v-card>
  
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
     
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style lang="scss" scoped></style>
