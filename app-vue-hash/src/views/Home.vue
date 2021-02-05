<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/app-vue-history/about">history about</router-link>
    <div @click="goAbout">主应用go history about</div>
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
      console.log(this.$root.parentRoute)
      this.$root.parentRoute.push('/app-vue-history/about')
    }
  }
}
</script>
