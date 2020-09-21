<template>
	<!-- 特价 -->
	<div class="saleDay">
		<div class="titleList">
			<span>天天特价</span>
			<span>抢周末满减</span>
			<span>查看更多></span>
		</div>
		<div class="goodsList">
			<div class="good">
				<img src="../../../assets/images/sale.png" alt="" />
				<div class="price">
					<span>￥1</span>
					<span>￥8</span>
				</div>
			</div>
			<div class="good">
				<img src="../../../assets/images/sale.png" alt="" />
				<div class="price">
					<span>￥1</span>
					<span>￥8</span>
				</div>
			</div>
			<div class="good">
				<img src="../../../assets/images/sale.png" alt="" />
				<div class="price">
					<span>￥1</span>
					<span>￥8</span>
				</div>
			</div>
			<div class="good">
				<img src="../../../assets/images/sale.png" alt="" />
				<div class="price">
					<span>￥1</span>
					<span>￥8</span>
				</div>
			</div>
			<div class="good">
				<img src="../../../assets/images/sale.png" alt="" />
				<div class="price">
					<span>￥1</span>
					<span>￥8</span>
				</div>
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
	name: "saleDay",
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
		padding-top: 10px;
		display: flex;
		justify-content: space-between;
		.good {
			// margin-right: 10px;
			img {
				width: 54px;
				height: 70px;
			}
			.price {
				span:nth-child(1) {
					color: red;
				}
				span:nth-child(2) {
					color: #dddddd;
				}
			}
		}
	}
}
</style>
