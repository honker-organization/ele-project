<template>
	<div>
		<van-nav-bar
			title="选择收货地址"
			left-text="返回"
			left-arrow
			@click-left="$router.back()"
		/>
		<!-- 内容 -->
		<van-address-edit
			:area-list="areaList"
			area-placeholder="请选择配送地区"
			show-delete
			show-set-default
			:area-columns-placeholder="['请选择', '请选择', '请选择']"
			@save="onSave"
			@delete="onDelete"
		/>
	</div>
</template>

<script>
import { Toast } from "vant";
export default {
	name: "",
	data() {
		return {
			areaList: {
				province_list: {
					110000: "深圳市",
				},
				city_list: {
					110100: "宝安区",
					110200: "南山区",
				},
				county_list: {
					110101: "西部硅谷",
					110102: "宝体",
					110105: "前海",
					110106: "西乡",
					110201: "科技园",
					110202: "深大",
					110203: "蛇口",
					110204: "欢乐谷",
					110205: "新安"
				},
			},
		};
	},
	methods: {
		onSave(content) {
			const id = Date.now()
			const {name,tel,isDefault} = content
			const address = content.province+content.city+content.county+content.addressDetail
			const newUserAdd = {name,tel,isDefault,address}
			console.log(newUserAdd)
			this.$store.dispatch('addAddress',newUserAdd)
			Toast('添加成功')
      		this.$router.back()
		},
		onDelete() {
			Toast("删除成功");
			this.$router.back()
		}
	},
};
</script>

<style lang="less" scoped>
/deep/.van-button--round:nth-child(1) {
	background-color: rgb(0, 147, 255);
	border: none;
}
</style>
