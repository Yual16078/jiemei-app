<template>
	<view class="padding-top">
			<view class="card-menu cu-list menu">
				<view class="cu-item ">
					<view class="content">
						<text class="text-orange cuIcon-roundrightfill"></text>详细信息 <text class="text-gray text-sm padding-left-sm">请勿泄露客户信息</text>
					</view>
				</view>
			</view>
			<view class="card-menu cu-list menu" >
				<view class="cu-item" >
					<view class="content">
						收件人姓名：
					</view>
					<view class="action">
						{{List.recipientName}}
					</view>
				</view>
				<view class="cu-item" >
					<view class="content">
						收件人号码：
					</view>
					<view class="action">
						{{List.recipientPhone}}
					</view>
				</view>
				<view class="cu-item" >
					<view class="content">收件人地址：</view>
					<view class="action">{{List.recipientAddr}}</view>
				</view>
				<view class="cu-item" >
					<view class="content">末端站点收录状态：</view>
					<view class="action">
						<view class="cu-tag round bg-green light">{{List.stateBoolean}}</view>
					</view>
				</view>
				<view class="cu-item" >
					<view class="content">发件人姓名：</view>
					<view class="action">{{List.senderName}}</view>
				</view>
				<view class="cu-item" >
					<view class="content">发件人号码：</view>
					<view class="action">{{List.senderPhone}}</view>
				</view>
				<view class="cu-item" >
					<view class="content">发件人地址：</view>
					<view class="action">{{List.senderAddr}}</view>
				</view>
				<view class="cu-item" >
					<view class="content">运单号：</view>
					<view class="action">{{List.waybillNum}}</view>
				</view>
				<view class="cu-item" >
					<view class="content">末端站点：</view>
					<view class="action">{{List.receiptAddr}}</view>
				</view>
				<view class="cu-item" >
					<view class="content">投放时间：</view>
					<view class="action">{{List.loadingData}}</view>
				</view>
			</view>
	</view>
</template>

<script>
	import {post,get,showModal} from '../../utils/request.js';
	export default {
		data() {
			return {
				List:{}
			}
		},
		onLoad(e) {
			console.log("nihao")
			console.log(e);
			get("/list?waybillNum=" + e.id).then(res=>{
				this.List = res.rows[0];
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
