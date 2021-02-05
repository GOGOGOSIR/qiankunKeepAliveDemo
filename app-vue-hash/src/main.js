import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render (props) {
  const { container, route } = props || {}
  console.log('props ====', props);
  router = new VueRouter({
    base: '/',
    routes,
    mode: 'history',
  });
  instance = new Vue({
    router,
    store,
    data () {
      return {
        parentRoute: route
      }
    },
    render: h => h(App),
  }).$mount(container ? container.querySelector('#appVueHash') : '#appVueHash');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
//测试全局变量污染
console.log('window.a', window.a)
export async function bootstrap () {
  console.log('vue app bootstraped');
}

export async function mount (props) {
  console.log('props from main framework', props);
  Vue.prototype.parentProps = props;
  render(props);
}

export async function unmount () {
  instance.$destroy();
  instance = null;
  router = null;
}
