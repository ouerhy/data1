<template>
  <div class="hello">
    <h2>计算器</h2>
    <div>
      <input type="button" value="-" @click="subStateCountNum(2,4)">
      <span>{{count}}</span>
      <input type="button" value="+" @click="addStateCountNum(4,6)">
      </div>
      <div>{{todosALise}}</div>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState({  //这里的...不是省略号了,是对象扩展符
        count:state=>state.countNum.count
    }),
    ...mapGetters({
      todosALise:'filterCount' // getToDo 不是字符串，对应的是getter里面的一个方法名字 然后将这个方法名字重新取一个别名 todosALise
    })
    // num(){
    //   return this.$store.state.countNum.count;
    // },
    // num2(){
    //   return this.$store.getters.filterCount;
    // }
  },
  methods: {
    subStateCountNum(n,m){
      this.$store.dispatch("subAction",{n,m})
    },
    addStateCountNum(n,m){
      this.$store.dispatch("addAction",{n,m})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
