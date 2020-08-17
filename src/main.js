import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App.vue'
import LazyLoadDirective from "./directives/LazyLoadDirective";
import InViewDirective from "./directives/InViewDirective";
import 'bulma/css/bulma.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.directive("lazyload", LazyLoadDirective);
Vue.directive("inview", InViewDirective);

new Vue({
  render: h => h(App),

  router: new VueRouter(routes),
}).$mount('#app')
