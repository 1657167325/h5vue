// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import "./assets/js/sizechange.js"

Vue.config.productionTip = false
import Ajax from "./ajax/ajax";
Vue.use(Ajax,{});




/*import {outapi} from "./ajax/api";
outapi().then(function(data){
	console.log(data)
}).catch(function(err){
	console.log(err)
})

async function ee(){
	var data=await 
}
*/

/*Vue.http.get("/out").then(function(data){
	console.log(data)
})*/

/*Vue.http.get("http://localhost:8080/mock/tes.json",{responseType:"json"}).then(function(data){
	console.log(data)
})*/


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
