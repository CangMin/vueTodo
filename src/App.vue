<template>
  <div id="app">
    <h1>{{title}}</h1>
    <!-- <h1 v-text="title"></h1> 和上面效果相同-->
    <ul>
    <!-- 指令v-for用于遍历数据对象中的值；指令v-bind:class 绑定一个样式对象，键为样式类名，值为数据对象中的属性布尔值，用来控制是否加载.finished样式-->
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  data:function(){
    return {
      title:'这是一个待办事项列表',
      items:[
        {
          label:'看书',
          isFinished:true
        },
        {
          label:'打球',
          isFinished:false
        }
      ]
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
