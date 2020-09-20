<template>
	<!-- 按钮 -->
	<div class="navIcon">
		<div class="iconItem">
			<img src="../../../assets/images/cart.png" alt="" />
			<span>超市</span>
		</div>
		<div class="iconItem">
			<img src="../../../assets/images/kuang.png" alt="" />
			<span>便利店</span>
		</div>
		<div class="iconItem">
			<img src="../../../assets/images/cai.png" alt="" />
			<span>菜场</span>
		</div>
		<div class="iconItem">
			<img src="../../../assets/images/shuiguo.png" alt="" />
			<span>水果</span>
		</div>
		<div class="iconItem">
			<img src="../../../assets/images/yao.png" alt="" />
			<span>送药上门</span>
		</div>
		<div class="iconItem">
			<img src="../../../assets/images/lishi.png" alt="" />
			<span>零食酒水</span>
		</div>
		<div class="iconItem">
			<img src="../../../assets/images/hua.png" alt="" />
			<span>鲜花绿挂</span>
		</div>
		<div class="iconItem">
			<img src="../../../assets/images/work.png" alt="" />
			<span>百货美妆</span>
		</div>
		<div class="iconItem">
			<img src="../../../assets/images/jiaoying.png" alt="" />
			<span>宠物生活</span>
		</div>
		<div class="iconItem">
			<img src="../../../assets/images/vip.png" alt="" />
			<span>大牌钜惠</span>
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
	name: "navItem",
};
</script>

<style lang="less" scoped>
.navIcon {
	width: 320px;
	margin: auto;
	padding: 20px;
	border-radius: 20px;
	display: flex;
	flex-wrap: wrap;
	background-color: white;
	.iconItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 20%;
		img {
			width: 50px;
			height: 50px;
		}
		span {
			font-size: 14px;
			line-height: 40px;
		}
	}
}
</style>
