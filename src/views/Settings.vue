<template lang="pug">
  .settings
    p settings
</template>

<script>
  import store from '../vuex/store'

  export default {
    name: 'Settings',
    created () {
      store.commit('title', 'lbl_settings')
    }
  }
</script>

<style lang="stylus">
  .settings
    padding 10px
</style>
