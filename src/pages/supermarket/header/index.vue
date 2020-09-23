<template>
	<div>
		<div class="header">
			<!-- 头部搜索 -->
			<div class="top">
				<img class="back" src="../../../assets/images/back.png" alt="" @click="toHome" />
				<span class="title">超市便利</span>
				<!-- <input class="serach" type="text" placeholder="买一赠一限量抢" placeholder-clas="placeholder" /> -->
				<van-search
					class="serach"
					v-model="value"
					placeholder="新鲜车厘子"
					@touchend="$router.push('/search')"
				/>
				<img class="cart" src="../../../assets/images/shopcart.png" alt="" />
			</div>
		</div>
		<!-- 轮播图 -->
		<div class="banner">
			<div class="navBread">
				<div class="breadItem">屈臣氏</div>
				<div class="breadItem">面包</div>
				<div class="breadItem">蔬菜</div>
				<div class="breadItem">雪糕</div>
				<div class="breadItem">屈臣氏</div>
				<div class="breadItem">面包</div>
			</div>
			<div class="bannerImg">
				<img src="../../../assets/images/banner.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import { Icon, Search, Sticky, TabbarItem } from "vant";
Vue.use(Sticky)
	.use(Icon)
	.use(Search)
	.use(TabbarItem)
	.use(Search);
export default {
	name: "Header",
	data() {
		return {
			active: "",
			value: "",
		}
	},
	methods:{
		toHome(){
			this.$router.replace({name:'home'})
		}
	}
}
</script>

<style lang="less" scoped>

.header {
	width: 100%;
	height: 40px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	.top {
		height: 40px;
		justify-content: space-around;
		align-items: center;
		display: flex;
		background-color: rgb(0, 158, 255);
		.back {
			width: 20px;
			height: 20px;
		}
		.title {
			color: white;
			font-size: 16px;
		}
		.serach {
			border-radius: 25px;
			height: 30px;
			.van-search__content--square {
				background-color: #fff;
				height: 30px;
			}
		}
		.cart {
			width: 25px;
			height:25px;
		}
	}
}

.banner {
	margin-top :40px;
	background: linear-gradient(rgb(0, 158, 255), rgb(225, 234, 250));
	.bannerImg {
		img {
			width: 100%;
		}
	}
	.navBread {
		padding: 20/2px 0;
		margin: 0 20/2px;
		display: flex;
		justify-content: space-around;
		.breadItem {
			color: white;
			padding: 0/2px 20/2px;
			height: 60/2px;
			line-height: 60/2px;
			border-radius: 60/2px;
			background: rgba(255, 255, 255, 0.2);
		}
	}
}
</style>
