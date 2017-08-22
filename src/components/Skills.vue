<template lang="pug">
  .skills
    p skills
</template>

<script>
  // import store from '../vuex/store'
  import firebase from '../services/firebase'

  export default {
    name: 'Skills',
    firebase: {
      skills: firebase.ref('skills')
    },
    methods: {
    },
    computed: {
    }
  }
</script>

<style lang="stylus" scoped>
  .skills
    padding 10px
</style>