<template lang="pug">
  .help
    mu-sub-header Introducción
    mu-content-block {{ '' | ipsum }}
    mu-sub-header Introducción
    mu-content-block {{ '' | ipsum }}
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
</style>
