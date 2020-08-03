<template>
    <div class="g-goodslist">
        <h3>商品列表</h3>
        <ul v-for="(item,index) in goodsData" :key="index">
            <li>{{item.cons1}},{{item.cons2}},{{item.cons3}},{{item.cons4}}</li>
            <li>
                <img :src="item.img1" alt="">
                <img :src="item.img2" alt="">
                <img :src="item.img3" alt="">
                <img :src="item.img4" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
           goodsData:[]
        }
    },
    created() {
        this.$axios.get("http://localhost:4000/goods/goodslist").then(res=>{
            console.log("res",res);
        this.goodsData = res.data.data
        })
    }
   
}
</script>
<style scoped>

</style>
    
