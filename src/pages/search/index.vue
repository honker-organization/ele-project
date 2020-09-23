<template>
	<div class="searchContainer">
		<div class="searchInput">
			<van-nav-bar left-arrow @click-left="$router.back()" left-text="返回" />
			<div class="search-input">
				<input
					type="text"
					placeholder="请输入商家、商品名称"
					v-model="value"
					ref="input"
				/>
				<van-icon name="search" />
				<div class="search-word" @touchend="serachInfo" >搜索</div>
			</div>
		</div>
		<!-- -------------------------------- -->
		<div v-if="!recommendList.length">
			<div class="search-row">热门搜索</div>
			<div class="searchRow-content">
				<div class="searchItem">
					轻食
				</div>

				<div class="searchItem">
					炒饭
				</div>

				<div class="searchItem">
					饭团
				</div>

				<div class="searchItem">
					湘菜
				</div>

				<div class="searchItem">
					肯德鸡
				</div>

				<div class="searchItem">
					炸鸡
				</div>

				<div class="searchItem">
					水果捞
				</div>

				<div class="searchItem">
					正新鸡排
				</div>

				<div class="searchItem">
					叫了个炸鸡
				</div>

				<div class="searchItem">
					猪脚饭
				</div>
			</div>
		</div>
		<!-- --------------------------- -->
		<div v-else>
			<!-- 商家列表 -->
			<div class="main">
				<div
					class="merchantWrap"
					v-for="merchant in recommendList"
					:key="merchant.id"
				>
					<div class="merchantList">
						<div class="leftImg">
							<img :src="merchant.imgUrl" alt="" />
						</div>
						<div class="rightContent">
							<div class="title">{{ merchant.name }}</div>
							<div class="sales">
								<span>{{ merchant.score }}</span>
								<span>月售 {{ merchant.sales }}</span>
								<span>{{ merchant.time }}分钟 {{ merchant.distance }}km</span>
							</div>
							<div class="delivery">
								<span>起送 ￥{{ merchant.min }}</span>
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
	</div>
</template>

<script>
import { NavBar, Icon,Dialog  } from "vant";
import vue from 'vue'
vue.use(Dialog)
import { mapState } from "vuex";
export default {
	name: "search",
	data() {
		return {
			value: "",
			recommendList: [],
		};
	},
	mounted() {
		//自动获取焦点
		this.$refs.input.focus();
    // console.log(this.$refs.input)
    
	},
	components: {
		[NavBar.name]: NavBar,
		[Icon.name]: Icon,
	},
	methods: {
		serachInfo() {
      //发送请求 获取最新商品数据
			if (this.value.trim()) {
        this.$store.dispatch('getMerchantList')
				setTimeout(() => {
					this.recommendList = this.merchantList;
				}, 1000);
			} else {
				Dialog.alert({
					title: "温馨提示",
					message: "请输入内容后搜索",
				}).then(() => {
					// on close
				});
			}
		},
	},
	computed: {
		...mapState({ merchantList: (state) => state.superMarket.merchantList }),
	},
};
</script>

<style lang="less" scoped>
/deep/ [data-v-7ce016af] .van-icon-arrow-left::before {
	font-size: 20px;
	color: #979797;
}
.searchinput {
	// position: relative;
	// position: fixed;
	// top: 0px;
	// left: 0px;
	// right: 0px;
	// bottom: 0px;
	width: 400px;
}

.search-input {
	display: flex;
	width: 290px;
	height: 30px;

	right: 30px;
	margin-left: 20px;
	margin-top: 10px;
}

.search-input input {
	width: 100%;
	height: 100%;
	border: none;
	background: #f2f2f2;
	padding-left: 30px;
}

/deep/ .van-icon-search::before {
	position: absolute;
	z-index: 99;
	top: 5px;
	left: -282px;
	color: #a0a0a0;
	font-size: 20px;
}

.search-word {
	// border: 1px solid;
	width: 40px;
	position: absolute;
	right: 10px;
	top: 64px;
	color: block;
	font-size: 14px;
	font-weight: bold;
}

.search-row {
	margin-top: 30px;
	margin-left: 20px;
	color: #666;
	font-size: 14px;
}

.searchRow-content {
	display: flex;

	margin-left: 20px;
	margin-top: 20px;
	flex-wrap: wrap;
	width: 320px;
}

.searchItem {
	background: #f7f7f7;
	height: 25px;
	line-height: 25px;
	text-align: center;
	color: #666;
	padding: 0 10px;
	margin-right: 15px;
	margin-bottom: 10px;
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
