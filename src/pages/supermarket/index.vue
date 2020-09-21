<template>
	<div class="superMarket">
		<Header></Header>
		<NavIcon></NavIcon>
		<SaleDay></SaleDay>
		<Merchant></Merchant>
	</div>
</template>

<script>
import Header from "./header";
import NavIcon from "./navIcon";
import SaleDay from "./saleDay";
import Merchant from "./merchant";
import Vue from "vue";
import { Icon, Search, Sticky, TabbarItem } from "vant";

Vue.use(Sticky)
	.use(Icon)
	.use(Search)
	.use(TabbarItem)
	.use(Search);
export default {
	name: "SuperMarket",
	components: {
		Header,
		NavIcon,
		SaleDay,
		Merchant,
	},
	data() {
		return {
			active: "",
			value: "",
		};
	},
};
</script>

<style lang="less" scoped>
.superMarket {
	height: 100%;
	background-color: rgb(245, 245, 245);
}
</style>
