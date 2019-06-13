import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.less'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts-gl'

import http from './services/http'
import ports from './services/ports'
import baseUrltest from './services/properties'
import axios from 'axios'
import VueAxios from 'vue-axios'

// axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios)

Vue.component('chart', ECharts)
Vue.use(iView);
// 引入echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
Vue.prototype.http = http
Vue.prototype.ports = ports
Vue.prototype.baseUrltest = baseUrltest
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.echartsResize = function(ref){
    setInterval(() => {
        window.onresize = function () {
            ref.resize()
        }
    }, 100)
}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
