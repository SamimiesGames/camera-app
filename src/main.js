import Vue from 'vue'
import App from './App.vue'
import router from "./router"


let app = new Vue({
    router,
    render: h => h(App)
})
app.$mount("#app")
Vue.createApp(App).mount('#app')
