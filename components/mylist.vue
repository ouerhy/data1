<template>
    <ul>
        <li v-for="item in listdata" :key="item" @click="choose(item)">{{item}}</li>
    </ul>
</template>
<script>
import {mapState} from "vuex"
export default {
   
    data(){
        return{

        }
    },
    computed: {
        ...mapState({listdata:(state)=>state.myselect.listData})
    },
    methods: {
        choose(t){
            this.$store.dispatch("changeTileAction",{title:t});
            this.$store.dispatch("changeShowAction");
        }
    },
}
</script>
<style scoped>
    ul{
        list-style-type: none;
        margin: 0px;
        padding: 0px;

    }
    li{
        height: 30px;
        border-bottom: 1px solid #fff;
        background: #abcdef;
        line-height: 30px;
    }
</style>