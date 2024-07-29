import { createApp } from 'vue'
import App from './App.vue'
import "amfe-flexible"

//引入组件
import { Button, Field, CellGroup, Icon, Picker, Popup, Form} from 'vant';
// 引入样式
import "vant/lib/index.css";

import router from "@/router/login1.js"

const app = createApp(App);
//注册使用组件
app.use(Button);
app.use(Field);
app.use(CellGroup);
app.use(router);
app.use(Icon);
app.use(Picker);
app.use(Popup);
app.use(Form);
app.mount('#app');
