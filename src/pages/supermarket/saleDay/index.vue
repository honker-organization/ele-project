<template>
	<!-- 特价 -->
	<div class="saleDay">
		<div class="titleList">
			<span>天天特价</span>
			<span>抢周末满减</span>
			<span>查看更多></span>
		</div>
		<div class="goodsList">
			<div class="good" v-for="merchant in merchantList" :key="merchant.id">
				<img :src="merchant.imgUrl" alt="" />
				<div class="price">
					<span>￥{{merchant.distance}}</span>
					<span>￥{{merchant.min}}</span>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import Vue from "vue";
import {mapState} from 'vuex'
import { Icon, Search, Sticky, TabbarItem } from "vant";
Vue.use(Sticky)
	.use(Icon)
	.use(Search)
	.use(TabbarItem)
	.use(Search);
export default {
	name: "saleDay",
	computed: {
		...mapState({merchantList:state=>state.superMarket.merchantList})
	},
};
</script>

<style lang="less" scoped>
.saleDay {
	width: 320px;
	margin: auto;
	margin-top: 10px;
	padding: 20px;
	border-radius: 10px;
	background-color: white;
	.titleList {
		height: 20px;
		line-height: 20px;
		span:nth-child(1) {
			margin-right: 10px;
			font-weight: bold;
			font-size: 16px;
		}
		span:nth-child(2) {
			color: red;
			font-size: 12px;
			padding: 4px 8px;
			border-radius: 8px;
			border: solid 1.1px red;
		}
		span:nth-child(3) {
			float: right;
			color: #dddddd;
			font-size: 12px;
		}
	}
	.goodsList {
		padding-top: 20px;
		display: flex;
		justify-content: space-between;
		overflow: auto;
		height: 110px;
		.good {
			margin-right: 10px;
			flex-shrink: 0;
			img {
				width: 60px;
				height: 80px;
			}
			.price {
				span:nth-child(1) {
					font-size: 14px;
					color: red;
					padding-right: 4px;
					font-weight: bolder;
				}
				span:nth-child(2) {
					color: #dddddd;
					text-decoration:line-through
				}
			}
		}
	}
}
</style>
