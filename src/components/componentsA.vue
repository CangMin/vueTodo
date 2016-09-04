<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{msgfromfather}}</h1>
    <button v-on:click="onClickMe">open mouse</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '来自组件A的信息!'
    }
  },
  props:['msgfromfather'],//注册来自父组件的信息
  methods:{
    onClickMe:function(){
      console.log(this.msgfromfather)
      this.$emit('child-tell-me-something',this.msg);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
