<template>
	<view class="content">
		<view id="title">
			<view class="cu-bar  solid-bottom">
				<view class="action ">
					<text class="cuIcon-activityfill text-red"></text><text class="title">公司简介</text> 
				</view>
			</view>
		</view>
		<view id="connect" class="margin-top-xs">
			<rich-text :nodes="nodes">欢迎有志于电商、物流领域的创业者入驻，本空间提供舒适快捷的办公环境，集仓储、物流、快递于一体，是您理想的创业之地！</rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nodes:'',
				title:''
			}
		},
		onLoad() {
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		height: 100%;
		background: #fff;
	}
	.content{
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		line-height: 1.5;
	}
</style>
