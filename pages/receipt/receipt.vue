<template>
	<view>
		<text @click="">niaho</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			
		},
		mounted(){
			uni.request({
			    url: 'https://cn.bing.com/', //仅为示例，并非真实接口地址。
			    success: (res) => {
			        console.log(res.data);
			    }
			});
		}
	}
</script>

<style lang="scss">

</style>
