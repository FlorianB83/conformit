import Vue from 'vue';
import App from './components/App';
import store from './store';
import moment from 'moment';

Vue.prototype.moment = moment;
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  
}).$mount('#app')
