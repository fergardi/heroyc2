import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import MuseUI from 'muse-ui'
import '../node_modules/muse-ui/dist/muse-ui.css'
// import '../node_modules/muse-ui/dist/theme-light.css'
import '../node_modules/muse-ui/dist/theme-dark.css'
// import '!style-loader!css-loader!less-loader!./css/custom.less'

// UI
Vue.use(MuseUI)
// mapbox
window.mapboxgl = require('mapbox-gl')
// firebase
Vue.use(VueFire)
// production
Vue.config.productionTip = false
// main app
let Main = Vue.component('app', App) // eslint-disable-line
Main = new Main({
  el: '#app',
  router
})
