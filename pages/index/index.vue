<template>
	<view class="main">
		<image src="../../static/bg.png"></image>
		<view class="main">
			<!--左侧小区名称 右侧新增登记-->
			<view id="head1" class="flex justify-around margin-top-sm ">
				<view class="padding-left-sm">
					<picker :range="searchType" @change="change">
						<view style="display: flex;align-items: center;font-size: 20px;">{{searchType[index]}}
							<text class="cuIcon-triangledownfill"
								style="font-size: 20px;height: 20px;padding-left: 1upx;"></text>
						</view>
					</picker>
				</view>
				<!-- <view class="flex align-center">
					<navigator url="qrcode">
						<view class="cuIcon-add text-white text-bold" style="font-size: 50upx"></view>
					</navigator>
				</view> -->
			</view>
			<!--社区出行概况-->
			<view id="chuxing" class="flex  justify-center align-center margin-top-sm">
				<view class="head_box">
					<view class="flex justify-around text-df padding-top">
						<text>今日装货数:</text>
						<text style="font-size: 20px;">{{todaytable.total}}</text>
						<text>（单位：件）</text>
					</view>
					<view class="flex justify-around padding-top-xl">
						<view class="flex flex-direction align-center">
							<text>今日入库数</text>
							<text class="text-orange text-bold">{{today_receipt.total}}</text>
						</view>
						<view class="flex flex-direction align-center">
							<text>剩余入库数</text>
							<text class="text-orange text-bold">{{todaytable.total - today_receipt.total}}</text>
						</view>
						<view class="flex flex-direction align-center">
							<text>总计件数</text>
							<text class="text-orange text-bold">{{tabledata.total}}</text>
						</view>
					</view>
				</view>
			</view>
			<!--两个功能按钮-->
			<view id="btn" class="flex justify-around margin-top-sm">
				<view class="btn-box bg-gradual-blue flex align-center justify-center" @tap="load">
					<text class="text-xxl text-shadow">收货</text>
					<text class="cuIcon-write padding-left-xs" style="font-size: 90upx;opacity: 0.2"></text>
				</view>
				<view class="btn-box bg-gradual-green flex align-center justify-center" @tap="receipt">
					<text class="text-xxl text-shadow">发货</text>
					<text class="cuIcon-punch padding-left-xs" style="font-size: 90upx;opacity: 0.2"></text>
				</view>
			</view>
			<!--概况记录-->
			<view id="segmented" class="margin-top-sm">
				<uni-segmented-control :current="current" :values="items" style-type="text" :active-color="activeColor"
					@clickItem="onClickItem" />
			</view>
			<!-- 详细列表 -->
			<scroll-view id="scroll" scroll-y="true" :style="{height:scrollHeight}">
				<view class="cu-list menu card-menu margin-top-sm">
					<navigator :url="'../member_detail/info?id=' + (item.waybillNum)" class="cu-item"
						v-for="(item,key) in itemlist.rows" :key="key">
						<view class="content padding-tb-sm">
							<view><text
									class="cuIcon-peoplefill text-blue margin-right-xs"></text>{{item.recipientName}}
							</view>
							<view class="text-gray ">
								<text class="cuIcon-phone margin-right-xs"></text> {{item.recipientPhone}}
							</view>
							<view class="text-gray ">
								<text class="cuIcon-timefill margin-right-xs"></text> {{item.loadingData}}
							</view>
						</view>
						<view class="action">
							<view class="cu-tag round bg-green light">{{item.stateBoolean}}</view>
						</view>
					</navigator>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		post,
		put,
		get,
		showModal
	} from '../../utils/request.js';
	import {
		Base64
	} from 'js-base64';
	import {
		pathToBase64,
		base64ToPath
	} from '@/components/image-tools/index.js';
	export default {
		data() {
			return {
				current: 0,
				items: ['今日总记录', '剩余未收货'],
				activeColor: '#66ccff',
				scrollHeight: '',
				searchType: ["开城村",
					"柯庄村", "二十里铺村",
					"和泉村", "彭庄村", "大马庄村",
					"小马庄村", "双泉村", "寇庄村",
					"吴庄村", "冯庄村", "郭庙村",
					"上青石村", "下青石村", "黑刺沟村",
					"三十里铺村", "张易村", "毛庄村", "贺套村",
					"田堡村", "闫关村", "黄堡村", "南湾村",
					"上马泉村", "盐泥村", "陈沟村", "大店村",
					"马场村", "驼巷村", "宋洼村", "红庄村",
					"姚磨村", "硝沟村", "申庄村",
					"闫堡村", "彭堡村", "蒋口村", "河东村",
					"吴磨村", "撒门村", " 石碑村", "别庄村",
					"杨忠堡村", "曹洼村", "惠德村",
					"头营村", "二营村", "胡大堡村",
					"南屯村", "徐河村", "马园村", "石羊村",
					"杨河村", "张崖村", "冯洼村", "坪乐村",
					"杨郎村", "蒋河村", "马店村", "南塬村",
					"大北山村", "陶庄村", "杨庄村", "大疙瘩村",
					"马庄村", "三和村", "利民村", "圆德村", "泉港村",
					"中河村", "庙湾村", "油坊村",
					"丰堡村", "黄沟村", "高坡村",
					"曹河村", "小沟村", "硝口村",
					"上店村", "红崖村", "海坪村",
					"康沟村", "寨洼村", "上台村",
					"明川村", "骆驼河村", "黄河村",
					"上坪村", "上黄村", "母家沟村"
				],
				index: 0,
				today_receipt: [],
				todaytable: [],
				today_load: [],
				tabledata: [],
				image_path: '',
				image_base64: '',
				express_information: '',
				todaydata: '',
				itemlist: [], // 装车记录与入库记录存储列表
			}
		},
		onLoad() {
			var now = new Date(); // 当前日期对象
			var date = now.getFullYear() + '-' + (now.getMonth() + 1) + "-" + now.getDate()
			console.log(date);
			this.todaydata = date;
			let that = this;

			get('/list?receiptAddr=' + this.searchType[this.index]).then(res => {
				that.tabledata = res
			})

			get("/list?loadingData=" + date + "&receiptAddr=" + this.searchType[this.index]).then(res => {
				that.todaytable = res
				this.itemlist = res
			})

			get("/list?loadingData=" + date + "&stateBoolean=已收货&receiptAddr=" + this.searchType[this.index]).then(res => {
				that.today_receipt = res
			})

			get("/list?loadingData=" + date + "&stateBoolean=未收货&receiptAddr=" + this.searchType[this.index]).then(res => {
				that.today_load = res
			})
		},
		onPullDownRefresh() {
			let that = this;
			get('/list?receiptAddr=' + (this.searchType[this.index])).then(res => {
				that.tabledata = res
			})

			get("/list?loadingData=" + this.todaydata + "&receiptAddr=" + this.searchType[this.index]).then(res => {
				that.todaytable = res
				this.itemlist = res
			})

			get("/list?loadingData=" + this.todaydata + "&stateBoolean=已收货&receiptAddr=" + this.searchType[this.index])
				.then(res => {
					that.today_receipt = res
				})

			get("/list?loadingData=" + this.todaydata + "&stateBoolean=未收货&receiptAddr=" + this.searchType[this.index])
				.then(res => {
					that.today_load = res
				})
			setTimeout(function () {
						uni.stopPullDownRefresh();
					}, 1000);
		},
		methods: {
			onClickItem(e) {
				if (e == 0) {
					this.itemlist = this.todaytable
				} else {
					this.itemlist = this.today_load
				}
			},
			change: function(e) {
				var now = new Date(); // 当前日期对象
				var date = now.getFullYear() + '-' + (now.getMonth() + 1) + "-" + now.getDate()
				this.index = e.detail.value
				let that = this;
				get('/list?receiptAddr=' + this.searchType[this.index]).then(res => {
					that.tabledata = res
				})

				get("/list?loadingData=" + date + "&receiptAddr=" + this.searchType[this.index]).then(res => {
					that.todaytable = res
					this.itemlist = res
				})

				get("/list?loadingData=" + date + "&stateBoolean=已收货&receiptAddr=" + this.searchType[this.index]).then(
					res => {
						that.today_receipt = res
					})

				get("/list?loadingData=" + date + "&stateBoolean=未收货&receiptAddr=" + this.searchType[this.index]).then(
					res => {
						that.today_load = res
					})
			},
			receipt() {
				let that = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						that.image_path = res.tempFilePaths[0];
						pathToBase64(res.tempFilePaths[0]).then(base64 => {
							that.image_base64 = base64;
							var access_token =
								'24.b477c7d7a85ab0a20c0d7b3dd8d5396c.2592000.1661333367.282335-26740188';
							uni.request({
								url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/waybill?access_token=' +
									access_token,
								method: 'POST',
								header: {
									'Content-Type': 'application/x-www-form-urlencoded'
								},
								data: {
									image: that.image_base64
								},
								success: function(res) {
									console.log(res.data);
									that.express_information = res.data.words_result[0];
									console.log(that.express_information.recipient_name[0]
										.word);
									post('', {
										"searchValue": null,
										"createBy": null,
										"createTime": null,
										"updateBy": null,
										"updateTime": null,
										"remark": null,
										"params": {},
										"listId": null,
										"recipientName": that.express_information
											.recipient_name[0].word,
										"recipientPhone": that.express_information
											.recipient_phone[0].word,
										"recipientAddr": that.express_information
											.recipient_addr[0].word,
										"senderName": that.express_information
											.sender_name[0].word,
										"senderPhone": that.express_information
											.sender_phone[0].word,
										"senderAddr": that.express_information
											.sender_addr[0].word,
										"waybillNum": that.express_information
											.waybill_number[0].word,
										"loadingData": that.todaydata,
										"receiptAddr": that.searchType[that.index],
										"stateBoolean": '未收货'
									}).then(res => {
										console.log(res)
										that.ScanAudio()
									})
								}
							})
						}).catch(error => {
							console.log(error);
						})
					}
				});
			},
			load() {
				let that = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						that.image_path = res.tempFilePaths[0];
						pathToBase64(res.tempFilePaths[0]).then(base64 => {
							that.image_base64 = base64;
							var access_token =
								'24.b477c7d7a85ab0a20c0d7b3dd8d5396c.2592000.1661333367.282335-26740188';
							uni.request({
								url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/waybill?access_token=' +
									access_token,
								method: 'POST',
								header: {
									'Content-Type': 'application/x-www-form-urlencoded'
								},
								data: {
									image: that.image_base64
								},
								success: function(res) {
									console.log(res.data);
									that.express_information = res.data.words_result[0];
									console.log(that.express_information.recipient_name[0]
										.word);
									get('/list?waybillNum=' + that.express_information
										.waybill_number[0].word).then(res => {
										put("", {
											"searchValue": null,
											"createBy": null,
											"createTime": null,
											"updateBy": null,
											"updateTime": null,
											"remark": null,
											"params": {},
											"listId": res.rows[0].listId,
											"recipientName": that
												.express_information
												.recipient_name[0].word,
											"recipientPhone": that
												.express_information
												.recipient_phone[0].word,
											"recipientAddr": that
												.express_information
												.recipient_addr[0].word,
											"senderName": that
												.express_information
												.sender_name[0].word,
											"senderPhone": that
												.express_information
												.sender_phone[0].word,
											"senderAddr": that
												.express_information
												.sender_addr[0].word,
											"waybillNum": that
												.express_information
												.waybill_number[0].word,
											"loadingData": that.todaydata,
											"receiptAddr": that.searchType[
												that.index],
											"stateBoolean": '已收货'
										}).then(res => {
											console.log(res)
											that.ScanAudio()
										})
									})
								}
							})
						}).catch(error => {
							console.log(error);
						})
					}
				});
			},
			
			ScanAudio() {
			    const innerAudioContext = uni.createInnerAudioContext();
			    innerAudioContext.src = '/static/music.mp3';
			    innerAudioContext.play()
				}

		}
	}
</script>

<style>
	image {
		position: absolute;
		left: 0;
		top: 0;
		height: 300rpx;
		width: 100%;
	}

	.main {
		position: absolute;
		top: 0;
		width: 100%;
	}

	.head_box {
		width: 700upx;
		height: 220upx;
		background-color: #ffffff;
		border-radius: 15upx;
	}

	.btn-box {
		width: 310upx;
		height: 150upx;
		border-radius: 20upx;
	}

	.scroll {
		height: 700rpx;
	}
</style>
