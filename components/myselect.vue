<template>
    <div class="box">
        <my-input />
        <my-list v-show="isShow" />
        <span>{{num}}</span>
    </div>
</template>
<script>
import MyList from "./mylist";
import MyInput from "./myinput";
import {mapState} from "vuex"
export default {
    data(){
        return{
          
        }
    },
    
    components:{
        MyList,
        MyInput
    },
    computed: {
        ...mapState({isShow:(state)=>state.myselect.isShow}),
        num(){
            return this.$store.state.count
        }
    },
    methods: {
        // changeShow(){
        //     // 改变显示与否
        //     this.isShow = !this.isShow;
        // },
        // changeT(t){
        //     this.title = t;
        // }
    },
}
</script>
<style scoped>
    .box{
        width: 150px;
       background: #ccc;
    }
</style>