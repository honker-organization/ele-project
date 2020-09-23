<template>
	<div class="wrap">
		<van-nav-bar
			title=""
			left-text="我的订单"
			right-text="搜索"
			@click-right="$router.push('/search')"
		/>
		<van-tabs v-model="active">
			<van-tab title="全部">
				<OrderCard
					:order="order"
					v-for="(order, index) in orderList"
					:key="order.id"
					:targetIndex="index"
				></OrderCard>
			</van-tab>
			<van-tab title="待消费">
				暂无...
			</van-tab>
			<van-tab title="代评价">
				暂无...
			</van-tab>
			<van-tab title="退款">
				暂无...
			</van-tab>
		</van-tabs>
		<!-- 提交订单 -->
		<van-submit-bar
			:price="totalMoney"
			button-text="提交订单"
			@submit="onSubmit"
		>
			<!-- <van-checkbox v-model="isChenkedAll" @touchend="updateChekenAll">全选 / 已选{{ isChenkedNum }}个</van-checkbox> -->
			<input
				type="checkbox"
				:checked="isChekedAll"
				@input="updateChekeAll"
			/>全选 /已选{{ isChenkedNum }}个
		</van-submit-bar>
	</div>
</template>

<script>
import OrderCard from "@/components/orderCard";
import { mapState } from "vuex";
export default {
	name: "order",
	data() {
		return {
			active: 0,
			checked: false,
		};
	},

	mounted() {
		this.$store.dispatch("getOrderList");
	},
	methods: {},
	components: {
		OrderCard,
	},
	methods: {
		onSubmit() {},
		//点击全选按钮
		updateChekeAll() {
			this.$store.dispatch("updateChekenAll");
		},
	},
	computed: {
		//已选几个
		isChenkedNum() {
			let newOrderList = this.orderList.filter((item) => item.checked);
			return newOrderList.length;
		},
		isChekedAll() {
			let newOrderList = this.orderList.every((item) => item.checked);
			return newOrderList;
		},
		// isChenkedAll:{
		// 	get(){
		// 		let newOrderList = this.orderList.every((item) => item.checked);
		// 	return newOrderList;
		// 	},
		// 	set(val){
		// 		let newOrderList = this.orderList.map((item) => ({...item,checked:val}));
		// 	}
		// },
		
		//合计
		totalMoney() {
			let newOrderList = this.orderList.filter((item) => item.checked);
			let res = newOrderList.reduce((pre, item) => {
				pre = pre + item.price * item.num;
				return pre;
			}, 0);
			return res * 100;
		},
		...mapState({ orderList: (state) => state.orderList.orderList }),
	},
};
</script>

<style lang="less" scoped>
/deep/.van-tabs__line {
	background-color: rgb(0, 147, 255);
}
/deep/.van-submit-bar {
	// border: 1px red solid;
	margin-bottom: 50px;
}
/deep/.van-submit-bar__price {
	font-weight: bolder;
}
/deep/.van-submit-bar__button--danger {
	background: rgb(0, 147, 255);
}
.wrap {
	background-color: rgb(245, 245, 245);
	margin-bottom: 50px;
}
</style>
