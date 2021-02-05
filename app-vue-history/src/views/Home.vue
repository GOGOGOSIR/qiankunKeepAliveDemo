<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-link to="/app-vue-hash/about">hash about</router-link>
    <div @click="goAbout">主应用的vue-router实例跳转hash about</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    goAbout () {
      console.log('about')
    }
  }
}
</script>
