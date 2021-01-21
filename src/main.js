import Vue from "vue";
import { Button, Layout, Icon, Drawer, Radio, Menu, Form, Input, Select, LocaleProvider, Dropdown, DatePicker } from "ant-design-vue";
// import 'ant-design-vue/dist/antd.less';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Authorized from "./components/Authorized.vue";
import Auth from "./directives/auth";
import VueI18n from "vue-i18n";
import enUS from "./locale/enUS";
import zhCN from "./locale/zhCN";
import queryString from "query-string";
// 按需加载(通过配置Babel)
// import Button from 'ant-design-vue/lib/button';
// import 'ant-design-vue/lib/button/style';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.component("Authorized", Authorized);
Vue.use(Auth);
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: {message: zhCN},
    enUS: {message: enUS}
  }
})

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2340410_la0awwx151.js', // 在 iconfont.cn 上生成
});
Vue.component("IconFont", IconFont);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
