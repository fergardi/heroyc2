<template lang="pug">
  .register
    p register
</template>

<script>
  import store from '../vuex/store'
  
  export default {
    name: 'Register',
    created () {
      store.commit('title', 'lbl_register')
    }
  }
</script>

<style lang="stylus">
  .register
    padding 10px
</style>
