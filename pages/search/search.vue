<template>
	<view>
		<view class="cu-bar search bg-white" id="search">
			<view class="padding-left-sm">
				<picker :range="searchType" @change="change">
					<view style="display: flex;align-items: center;">{{searchType[index]}}
						<text class="cuIcon-triangledownfill" style="font-size: 16px;height: 16px;padding-left: 1upx;"></text>
					</view>
				</picker>
			</view>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" v-model="search_text" :adjust-position="false" type="text" placeholder="请输入搜索内容" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round" @tap="searchSubmit">搜索</button>
			</view>
		</view>
		<scroll-view id="scroll" scroll-y = "true" :style="{height:scrollHeight}">
			<view class="cu-list menu card-menu margin-top-sm" >
				<navigator :url="'../member_detail/info?id=' + (item.waybillNum)" class="cu-item" v-for="(item,key) in tableData" :key = "key">
					<view class="content padding-tb-sm">
						<view><text class="cuIcon-peoplefill text-blue margin-right-xs"></text>{{item.recipientName}}</view>
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
</template>

<script>
	import {
		post,
		get,
		showModal
	} from '../../utils/request.js';
	export default {
		data() {
			return {
				index:0,
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
					"上坪村", "上黄村", "母家沟村"],
				tableData:[], // get请求到的数据
				search_text:'' ,// 搜索框输入
				scrollHeight:'',
			}
		},
		methods: {
			change: function(e) {
				this.index = e.detail.value
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			onCancel:function(){
				this.showPicker = false
			},
			searchSubmit(e) {
				get('/list?receiptAddr=' + this.searchType[this.index] + '&recipientName=' + this.search_text).then(res => {
					this.tableData = res.rows
					console.log(res)
				})
			},
			
		}
	}
</script>

<style>
	
.text{
	padding: 10px;
	height: 50px;
	width: 100%;
}
text{
	
}
</style>