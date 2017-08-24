<template lang="pug">
  .items
    .search
      mu-text-field(:label="translate('lbl_search')", v-model="search", :hintText="translate('lbl_search')", :fullWidth="false", type="search")
      mu-select-field(v-model="order", :label="translate('lbl_order')", :fullWidth="false")
        mu-menu-item(value="name", :title="translate('lbl_name')")
        mu-menu-item(value="str", :title="translate('lbl_strength')")
        mu-menu-item(value="vit", :title="translate('lbl_vitality')")
        mu-menu-item(value="int", :title="translate('lbl_intelligence')")
        mu-menu-item(value="dex", :title="translate('lbl_dexterity')")
        mu-menu-item(value="def", :title="translate('lbl_defense')")
    mu-list.list
      template(v-for="category in categorized")
        mu-sub-header {{ category.name | translate }}
        transition-group(name="move" tag="div")
          mu-list-item(v-for="item, index in category.items", :key="index", :title="translate(item.name)", :class="item.color")
            mu-avatar.item(slot="leftAvatar", :src="item.src")
            mu-icon(slot="right", value="check")
            span(slot="describe")
              mu-badge.str(:content="item.str.toString() + ' ' + translate('lbl_str')")
              mu-badge.vit(:content="item.vit.toString() + ' ' + translate('lbl_vit')")
              mu-badge.int(:content="item.int.toString() + ' ' + translate('lbl_int')")
              mu-badge.dex(:content="item.dex.toString() + ' ' + translate('lbl_dex')")
              mu-badge.def(:content="item.def.toString() + ' ' + translate('lbl_def')")
</template>

<script>
  import store from '../vuex/store'
  import i18n from '../services/i18n'
  import firebase from '../services/firebase'

  export default {
    name: 'Inventory',
    data () {
      return {
        search: '',
        order: 'name'
      }
    },
    firebase: {
      equipments: firebase.ref('equipments')
    },
    filters: {
      translate (label) {
        return i18n[store.state.lang][label] || label
      }
    },
    methods: {
      translate (label) {
        return i18n[store.state.lang][label] || label
      }
    },
    computed: {
      filtered () {
        return this.search === '' ? this.equipments : this.equipments.filter(item => {
          return this.translate(item.name).toLowerCase().includes(this.search.toLowerCase())
        })
      },
      ordered () {
        return this.filtered.sort((a, b) => {
          if (this.order === 'name') return this.translate(a.name).toLowerCase() > this.translate(b.name).toLowerCase()
          if (this.order === 'str') return a.str < b.str
          if (this.order === 'vit') return a.vit < b.vit
          if (this.order === 'int') return a.int < b.int
          if (this.order === 'dex') return a.dex < b.dex
          if (this.order === 'def') return a.def < b.def
        })
      },
      categorized () {
        const uniques = [...new Set(this.ordered.map(item => item.category))].sort((a, b) => {
          return this.translate(a).toLowerCase() > this.translate(b).toLowerCase()
        })
        return uniques.map(category => {
          return {
            name: category,
            items: this.filtered.filter(item => {
              return item.category === category
            })
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .items
    .search
      padding 5px 10px 0
      display flex
      flex-direction row
      justify-content center
      align-items center
      flex-wrap nowrap
      .mu-text-field
        margin 0 5px
    .list
      overflow-x hidden
      overflow-y auto
      height 100%
      margin-bottom 56px
      &.move 
        transition transform 1s
</style>

<style lang="stylus">
  @import '../css/colors.styl'
  .items
    .mu-avatar-inner img
      border 3px solid transparent
    .mu-item-title
      font-weight bold
    .common
      .mu-avatar-inner img
        border-color $grey
      .mu-item-title
        color $grey
    .uncommon
      .mu-avatar-inner img
        border-color $blue
      .mu-item-title
        color $blue
    .rare
      .mu-avatar-inner img
        border-color $purple
      .mu-item-title
        color $purple
    .set
      .mu-avatar-inner img
        border-color $green
      .mu-item-title
        color $green
    .legendary
      .mu-avatar-inner img
        border-color $orange
      .mu-item-title
        color $orange
</style>