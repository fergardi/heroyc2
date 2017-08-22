<template lang="pug">
  .help
    p help
</template>

<script>
  import store from '../vuex/store'
  
  export default {
    name: 'Help',
    created () {
      store.commit('title', 'lbl_help')
    }
  }
</script>

<style lang="stylus">
  .help
    padding 10px
</style>
