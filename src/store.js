const STORAGE_KEY = 'todos-vue'
export default{
	fetch(){
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')//获取浏览器存储
	},
	save(items){
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))//将新增的items写入浏览器存储
	}
}