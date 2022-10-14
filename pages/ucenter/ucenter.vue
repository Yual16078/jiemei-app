<template>
	<view>
		<view class='UCenter-bg'>
			<view class='text-xl' style="font-size: 36upx;">洁美物流
			</view>
			<view class='padding-top-sm' style="padding-top: 20upx">
				<text>再忙也不要忘记吃饭哦！</text>
			</view>
			<image src='https://api.szyashu.com/static/wave.gif' mode='scaleToFill' class='gif-wave'></image>
		</view>
		<view class="cu-list menu sm-border card-menu">
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-apps text-lg"/>
					<text class="text-left">当前版本</text>
				</view>
				<view class="action">
					<text>v 1.0</text>
				</view>
			</view>
			
			<navigator url="about_us" class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-info text-lg"/>
					<text class="text-left">洁美电商速递物流众创空间</text>
				</view>				
			</navigator>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version:'',
				src: '', // 二维码生成后的图片地址或base64
				foreground: '#000000', // 前景色
				pdground: '#309286', // 角标色
				background:'#ffffff',
				shequ:{},
				type:0,
				val:''
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style>
	.UCenter-bg {
	  /* background-image: url('https://api.szyashu.com/static/index.jpg'); */
	  /* background-size: cover; */
	  background-color: #66ccff;
	  height: 400rpx;
	  display: flex;
	  justify-content: center;
	  padding-top: 40rpx;
	  overflow: hidden;
	  position: relative;
	  flex-direction: column;
	  align-items: center;
	  color: #fff;
	  font-weight: 300;
	  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	}
	
	.UCenter-bg text {
	  opacity: 0.8;
	}
	
	.UCenter-bg image {
	  width: 200rpx;
	  height: 200rpx;
	}
	
	.UCenter-bg .gif-wave{
	  position: absolute;
	  width: 100%;
	  bottom: 0;
	  left: 0;
	  z-index: 99;
	  mix-blend-mode: screen;  
	  height: 100rpx;   
	}
</style>