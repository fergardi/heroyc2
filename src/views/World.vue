<template lang="pug">
  .world
    transition-group(name="nav", appear, enter-active-class="animated fadeIn", tag="div", mode="out-in")
      .map(v-show="navigation === 'lbl_map'", key="1")
        land
      .inventory(v-show="navigation === 'lbl_inventory'", key="2")
        inventory
      .skills(v-show="navigation === 'lbl_skills'", key="3")
        magic
      .bag(v-show="navigation === 'lbl_bag'", key="4")
        bag
      .journal(v-show="navigation === 'lbl_journal'", key="5")
        journal
    mu-paper.navigation
      mu-bottom-nav(:value="navigation", shift, @change="navigate")
        mu-bottom-nav-item(value="lbl_map", :title="translate('lbl_map')", icon="room")
        mu-bottom-nav-item(value="lbl_inventory", :title="translate('lbl_inventory')", icon="done_all")
        mu-bottom-nav-item(value="lbl_skills", :title="translate('lbl_skills')", icon="star")
        mu-bottom-nav-item(value="lbl_bag", :title="translate('lbl_bag')", icon="shopping_basket")
        mu-bottom-nav-item(value="lbl_journal", :title="translate('lbl_journal')", icon="receipt")
</template>

<script>
  import store from '../vuex/store'
  import i18n from '../services/i18n'

  import Inventory from '../components/Inventory'
  import Magic from '../components/Magic'
  import Land from '../components/Land'
  import Bag from '../components/Bag'
  import Journal from '../components/Journal'

  export default {
    name: 'world',
    components: {
      'inventory': Inventory,
      'magic': Magic,
      'land': Land,
      'bag': Bag,
      'journal': Journal
    },
    data () {
      return {
        navigation: 'lbl_map'
      }
    },
    created () {
      store.commit('title', this.navigation)
    },
    watch: {
      navigation (tab) {
        store.commit('title', tab)
      }
    },
    methods: {
      translate (label) {
        return i18n[store.state.lang][label] || label
      },
      navigate (tab) {
        this.navigation = tab
      }
    },
    filters: {
      translate (label) {
        return i18n[store.state.lang][label] || label
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .world
    .navigation
      position absolute
      bottom 0
      right 0
      left 0
</style>
