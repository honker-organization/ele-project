<template>
	<div class="main">
		<div class="merchantWrap">
			<div class="merchantList">
				<!-- 单选框 -->
				<!-- <van-checkbox v-model="order.checked" @touchend="touchendChenked"></van-checkbox> -->

				<input
					type="checkbox"
					:checked="order.checked"
					@input="touchendChenked"
				/>

				<div class="leftImg">
					<img :src="order.imgUrl" alt="" />
				</div>
				<div class="rightContent">
					<div class="title">{{ order.name }}</div>
					<div class="sales">
						<span>月售 {{ order.sales }}</span>
						<span>{{ order.time }}分钟 {{ order.distance }}km</span>
					</div>

					<div class="delivery">
						<span>￥{{ order.price }}</span>
						<div class="stepper">
							<van-stepper
								nteger
								min="1"
								v-model="order.num"
								@plus="updataNum(1)"
								@minus="updataNum(-1)"
								@blur="blurUpdataNum"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "orderItem",
	props: ["targetIndex", "order"],
	computed: {
		radioChecked() {
			return this.order.checked;
		},
	},
	data() {
		return {
			value: 1,
		};
	},
	methods: {
		//点击单选框
		touchendChenked() {
			//通知vuex修改数据
			this.$store.dispatch("isChenkedOne", this.targetIndex);
		},
		//点击 增加或者减少
		updataNum(num) {
			let index = this.targetIndex;
			this.$store.dispatch("updataNum", { num, index });
		},
		blurUpdataNum(e) {
			// console.log(typeof e.target.ariaValueNow)
			let num = e.target.ariaValueNow * 1;
			this.updataNum(num);
		},
	},
};
</script>

<style lang="less" scoped>
.main {
	margin-top: 10px;
	background: rgb(245, 245, 245);
	.merchantWrap {
		background-color: #fff;
		// height: 140px;
		padding: 10px 0;
		.merchantList {
			// border:solid 1px blue;
			width: 340px;
			margin: auto;
			height: 120px;
			display: flex;
			align-items: center;
			.leftImg {
				padding-left: 20px;
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
				width: 220px;
				// border:1px red solid;
				padding-left: 10px;
				.title {
					font-size: 19px;
					font-weight: bolder;
				}
				.sales {
					height: 30px;
					line-height: 30px;
					font-size: 14px;
					box-sizing: border-box;
					span:nth-child(2) {
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
						color: red;
						font-size: 14px;
						font-weight: bolder;
					}
					.stepper {
						float: right;
					}
				}
			}
		}
	}
}
</style>
