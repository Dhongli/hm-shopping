import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/styles/common.less'
// Vant组件全部导入，耗费性能不推荐
// import Vant from 'vant'
// import 'vant/lib/index.css'
// 把vant中所有的组件都导入了
// Vue.use(Vant)
// 按需加载Vant
// import { Button, Icon } from 'vant'
// Vue.use(Button)
// Vue.use(Icon)
// 导入按需导入的配置文件
import '@/utils/vant-ui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
