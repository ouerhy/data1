<template>
    <div class="m-input">
        <input type="text"  class="u-input" @click="myhandle" v-model="title"/>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    
    methods: {
        myhandle(){
            this.$store.dispatch("changeShowAction")
        }
    },
    computed: {
        ...mapState({title:state=>state.myselect.title})
    }
}
</script>
<style scoped>
    .u-input{
        width: 140px;
        outline: none;
    }
</style>