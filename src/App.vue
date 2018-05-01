<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<!-- <script src="./assets/js/uikit.js"></script>
<script src="./assets/js/uikit-icons.js"></script> -->
<script>
import Header from './components/Header'
import Footer from './components/Footer'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  }
}
</script>

<style src="./assets/css/uikit.css"/>
<style src="./assets/css/custom.css"/>
<style>
</style>
