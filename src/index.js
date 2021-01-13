import Vue from 'vue'
import App from './app.vue'

//创建div添加到body中
const root = document.createElement('div')
document.body.appendChild(root)

//将vue视图绑定到div中
new Vue({
    render: (h) => h(App)
}).$mount(root)