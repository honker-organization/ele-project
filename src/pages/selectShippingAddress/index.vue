<template>
	<div>
		<van-nav-bar
			title="选择收货地址"
			left-text="返回"
			right-text="保存"
			left-arrow
			@click-left="$router.back()"
			@click-right="save"
		/>
		<!-- 内容 -->
		<van-address-list
			v-model="chosenAddressId"
			:list="addList"
			:disabled-list="disabledList"
			disabled-text="以下地址超出配送范围"
			default-tag-text="默认"
			@add="$router.push('/addnewaddress')"
			@edit="onEdit"
		/>
	</div>
</template>

<script>
import { Toast } from "vant";
import service from '@/ajax/mockAjax'
import { mapState } from 'vuex';
export default {
	name: "",
	data() {
		return {
			chosenAddressId: "1",
			// addList:[],
			disabledList: [
				{
					id: "3",
					name: "周宇轩",
					tel: "13225648574",
					address: "浙江省杭州市滨江区江南大道 15 号",
				},
			],
		};
  },
  mounted(){
	  //请求 地址基本数据
	  this.$store.dispatch('getAddList')
    // const res = await service('getBaseAdd')
    // this.addList = res.data
  },
	methods: {
    save(){
      Toast('保存成功')
      this.$router.back()
    },
		onAdd() {
			Toast("新增地址");
		},
		onEdit(item, index) {
			Toast("编辑地址:" + index);
		},
	},
	computed:{
		...mapState({addList:state=>state.address.addList})
	}
};
</script>

<style lang="less" scoped>
  .van-address-list__bottom{
    margin-bottom: 100px;
  }
  .van-address-list__add{
    background-color: rgb(0,147,255);
    border:none;
  }
  /deep/.van-address-item .van-radio__icon--checked .van-icon{
    background-color: rgb(0,147,255);
    border:none;
  }
  .van-address-item__tag{
    background-color: rgb(0,147,255);
    border:none;
  }
</style>
