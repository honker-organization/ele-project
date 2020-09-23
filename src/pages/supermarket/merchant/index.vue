<template>
	<div style="background:#f5f5f5">
		<!-- 附近商家 -->
		<div class="merchant" >
			<div class="merchantItem" :class="isTouchendNearby===1?'active':''" @touchend="touchendNearby(1)">附近商家</div>
			<div class="merchantItem" :class="isTouchendNearby===2?'active':''" @touchend="touchendNearby(2)">润燥</div>
			<div class="merchantItem" :class="isTouchendNearby===3?'active':''" @touchend="touchendNearby(3)">做饭</div>
			<div class="merchantItem" :class="isTouchendNearby===4?'active':''" @touchend="touchendNearby(4)">解馋</div>
			<div class="merchantItem" :class="isTouchendNearby===5?'active':''" @touchend="touchendNearby(5)">人气</div>
		</div>
		<!-- !-- 商家信息 -->
		<div class="merchantInfo">
			<div class="mcWrap">
				<!-- <div class="mcItem active">综合排序</div> -->
				<van-dropdown-menu active-color="rgb(0,158,255)" :overlay="false" >
					<van-dropdown-item v-model="value" :options="option" @change="selectValue"/>
				</van-dropdown-menu>
				<div class="mcItem" @touchend="selectValue(2)">距离</div>
				<div class="mcItem" @touchend="selectValue(1)">销量</div>
				<div class="mcItem " >筛选</div>
			</div>
			<!-- 福利 -->
			<div class="boon">
				<div class="boonItem active">免配送费</div>
				<div class="boonItem">满减优惠</div>
				<div class="boonItem">品牌商家</div>
				<div class="boonItem">可预订</div>
			</div>
		</div>
		<!-- 商家列表 -->
		<div class="main">
			<div class="merchantWrap" v-for="merchant in merchantList" :key="merchant.id">
				<div class="merchantList">
					<div class="leftImg">
						<img :src="merchant.imgUrl" alt="" />
					</div>
					<div class="rightContent">
						<div class="title">{{merchant.name}}</div>
						<div class="sales">
							<span>{{merchant.score}}</span>
							<span>月售 {{merchant.sales}}</span>
							<span>{{merchant.time}}分钟 {{merchant.distance}}km</span>
						</div>
						<div class="delivery">
							<span>起送 ￥{{merchant.min}}</span>
							<span>免配送费</span>
							<span>￥5</span>
							<span v-if="merchant.isStar">饿了么精选</span>
						</div>
						<div class="boon">
							<span>6元红包</span>
							<span>品类20减5</span>
							<span>品类30减10</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
// import service from "@/ajax/mockAjax";
export default {
	name: "Merchant",
	data() {
		return {
			isTouchendNearby:1,
			value: 0,
			active: 2,
			option: [
				{ text: "综合排序", value: 0 },
				{ text: "销量最高", value: 1 },
				{ text: "距离最近", value: 2 },
				{ text: "好评最多", value: 3 },
			],
		};
	},
	mounted() {
		// const result = await service("/getMerchantList");
		// this.merchantList = result.data
		//调用 获取商家数据 存储在vuex --------------
		this.$store.dispatch('getMerchantList')
	},
	methods:{
		selectValue(value){
			//综合排序 0   销量最高  1    距离最近 2   好评最多 3
			this.$store.dispatch('merchantListSort',value)
		},
		//附近
		touchendNearby(value){
			this.isTouchendNearby = value
		}
	},
	computed: {
		...mapState({merchantList:state=>state.superMarket.merchantList})
	},

};
</script>

<style lang="less" scoped>
/deep/.van-dropdown-menu__bar {
	background-color: rgba(0, 0, 0, 0);
	box-shadow: none;
	display: inline-block;
	margin-top: 20px;
}
/deep/.van-ellipsis {
	font-size: 18px;
	font-weight: bold;
}
.merchant {
	height: 80px;
	width: 320px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	.merchantItem {
		font-size: 18px;
		font-weight: bold;
		line-height: 80px;
		&.active {
			position: relative;
			&::after {
				position: absolute;
				bottom: 20px;
				left: 50%;
				transform: translateX(-50%);
				content: "";
				width: 40px;
				height: 2px;
				background-color: rgb(0, 155, 249);
			}
		}
	}
}
// 商家
.merchantInfo {
	background: linear-gradient(rgb(255, 255, 255), rgb(245, 245, 245));
	border-radius: 20px 20px 0 0;
	height: 100px;
	.mcWrap {
		display: flex;
		justify-content: space-between;
		width: 320px;
		margin: auto;
		.mcItem {
			font-size: 18px;
			font-weight: bold;
			line-height: 60px;
			&.active {
				position: relative;
				color: rgb(0, 155, 249);
			}
		}
	}
	.boon {
		display: flex;
		justify-content: space-between;
		width: 340px;
		margin: auto;
		.boonItem {
			font-size: 14px;
			line-height: 20px;
			padding: 2px 10px;
			background-color: #fff;
			border-radius: 6px;
			box-shadow: 0 2px 5px #eee;
			&.active {
				position: relative;
				color: rgb(0, 155, 249);
			}
		}
	}
}
.main {
	background: rgb(245, 245, 245);
	.merchantWrap {
		margin-top: 10px;
		background-color: #fff;
		// height: 140px;
		padding: 10px 0;
		.merchantList {
			// border:solid 1px blue;
			width: 340px;
			margin: auto;
			display: flex;
			align-items: center;
			.leftImg {
				width: 90px;
				height: 90px;
				border-radius: 10px;
				flex-shrink: 0;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.rightContent {
				width: 240px;
				height: 120px;
				// border:1px red solid;
				padding-left: 10px;
				.title {
					font-size: 16px;
					font-weight: bolder;
				}
				.sales {
					height: 30px;
					line-height: 30px;
					font-size: 14px;
					box-sizing: border-box;
					span:nth-child(1) {
						color: orange;
						margin-right: 10px;
					}
					span:nth-child(3) {
						float: right;
					}
					// *************************************************
				}
				.delivery {
					height: 30px;
					line-height: 30px;
					font-size: 14px;
					span:nth-child(1) {
						margin-right: 10px;
					}
					span:nth-child(3) {
						margin-right: 10px;
					}
					span:nth-child(4) {
						float: right;
						color: rgb(0, 155, 249);
						padding: 0 4px;
						border-radius: 4px;
						background-color: rgba(0, 155, 249, 0.2);
					}
				}
				.boon {
					padding: 10px 0;
					span {
						font-size: 8px;
						padding: 2px 4px;
						border-radius: 4px;
						border: 1px red solid;
						color: red;
						margin-right: 10px;
					}
				}
			}
		}
	}
}
</style>
