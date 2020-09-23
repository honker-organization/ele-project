<template>
	<div class="superMarket">
		<Header ></Header>
		<NavIcon :iconList="iconList"></NavIcon>
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
import service from '@/ajax/mockAjax'
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
			iconList:[]
		};
	},
	async mounted(){
		const result = await service('/getSuperMarketIcon')
		this.iconList = result.data.items
	}
};
</script>

<style lang="less" scoped>
.superMarket {
	height: 100%;
	background-color: rgb(245, 245, 245);
}
</style>
