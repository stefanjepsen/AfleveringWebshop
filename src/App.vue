<template>
  <v-app id="app">
    
<Navigation />
   
    <v-content>
 
      <router-view></router-view>
   
    </v-content>
    
<Bottomfooter />
   
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';
import Bottomfooter from './components/Bottomfooter';

  export default {
     components: {
  Navigation,
  Bottomfooter
 
  },
    name: 'App',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>

<style lang="scss">

/*
  main {
   background-image: url('./assets/bg1.jpg');
   background-size: cover;
  }

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
</style>