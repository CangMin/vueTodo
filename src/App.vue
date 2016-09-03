<template>
  <div id="app">
    <h1>{{title}}</h1>
    <!-- <h1 v-text="title"></h1> 和上面效果相同-->
    <!-- 绑定回车事件 -->
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
    <!-- 指令v-for用于遍历数据对象中的值；指令v-bind:class 绑定一个样式对象，键为样式类名，值为数据对象中的属性布尔值，用来控制是否加载.finished样式;v-on:click为事件指令-->
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">
      {{item.label}}
      </li>
    </ul>
    <components-a msgfromfather='来自父组件的信息'></components-a><!-- 使用组件A -->
  </div>
</template>

<script>
import Store from './store.js'//引入同级目录中store.js中的方法
import ComponentsA from './components/componentsA'//引入组件A

export default {
  data:function(){
    return {
      title:'这是一个待办事项列表',
      items:Store.fetch(),
      newItem:''
    }
  },
  components:{ComponentsA},//引入组件A
  watch:{
    items:{
      handler:function(items){
        Store.save(items)
      },
      deep:true
    }
  },
  methods:{
    toggleFinish:function(item){
     item.isFinished=!item.isFinished;//属性取反
    },
    addNew:function(){
     this.items.push({//将新增的newItem对象添加到items数组中
      label:this.newItem,
      isFinished:false
     });
      this.newItem = '';//清空输入框newItem模型
    }
  }
}
</script>

<style>
.finished{
  text-decoration:underline;
}
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
