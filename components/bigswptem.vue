<template>
    <div class="g-lunbo swiper-container2">
				<ul class="fl f-clearbox swiper-wrapper">
						<li class="fl swiper-slide" v-for="(item,index) in bigswp" :key="index">
						<img :src="item.img" />
						<span>{{item.bgswptitle}}</span>
					</li>		
				</ul>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination"></div>
				<!-- 如果需要导航按钮 -->
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
				<!--搜索框-->
				<div class="search" style="z-index: 99;">
					<ul class="f-clearbox">
						<li class="fl">
							<img src="img/red_vruan_weizhi_small.png" />
							<a href="#">城市或者目的地</a>
						</li>
						<li class="fl">
							<img src="img/rili_icon.png" />
							<a href="#">入住日期</a>
						</li>
						<li class="fl">
							<span>-</span>
							<a href="#">退房日期</a>
						</li>
						<li class="fl">
							<img src="img/renshu_icon.png" />
							<a href="#">入住人数</a>
						</li>
						<li class="fl">
							<input type="" name="" id="" value="" placeholder="民宿名称、景点、商圈、城市等" />
						</li>
						<li class="fl">
							<img src="img/search_icon.png" />
						</li>
					</ul>
				</div>

			</div>
</template>
<script>
import bigswp from '../datas/bigswp'
import Swiper from 'swiper'
export default {
 data() {
     return {
         bigswp
     }
 },
 methods: {
     initSwiper(){
            var mySwiper = new Swiper('.swiper-container', {
				direction: "horizontal", // 垂直切换选项
				loop: true, // 循环模式选项
				slidesPerView: 3,
				spaceBetween: 10,

				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},

			})
     }
 },
 mounted() {
     this.initSwiper()
 },
 created() {
	 console.log('bigswp:',bigswp)
 },
}
</script>