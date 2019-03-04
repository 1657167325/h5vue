import Vue from "vue";


export function outapi(){
	return Vue.http.get("/out");
}



/*export default{
	async getRankType(){
	   var data= await Vue.http.get("/ranking/gender")
	},
	getRankList(id){
	   return Vue.http.get("/ranking/"+id)
	}
}*/