<template lang="pug">
  .login
    p login
</template>

<script>
  import store from '../vuex/store'
  
  export default {
    name: 'Login',
    created () {
      store.commit('title', 'lbl_login')
    }
  }
</script>

<style lang="stylus">
  .login
    padding 10px
</style>
