
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/search/search","pages/ucenter/ucenter","pages/add/add","pages/index/qrcode","pages/member_detail/member_detail","pages/index/shequ_list/shequ_list","pages/member_detail/info","pages/member_detail/list","pages/ucenter/about_us"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"出入管理","navigationBarBackgroundColor":"#66ccff"},"tabBar":{"color":"#8a8a8a","selectedColor":"#66ccff","list":[{"pagePath":"pages/index/index","selectedIconPath":"static/tabBar/indexS.png","iconPath":"static/tabBar/index.png","text":"首页"},{"pagePath":"pages/search/search","selectedIconPath":"static/tabBar/searchS.png","iconPath":"static/tabBar/search.png","text":"筛选"},{"pagePath":"pages/ucenter/ucenter","selectedIconPath":"static/tabBar/ucenterS.png","iconPath":"static/tabBar/ucenter.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"jiemeiapp","compilerVersion":"3.4.18","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"洁美速递通","enablePullDownRefresh":true}},{"path":"/pages/search/search","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"搜索"}},{"path":"/pages/ucenter/ucenter","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTitleText":"关于我们"}},{"path":"/pages/add/add","meta":{},"window":{"navigationBarTitleText":"资料填写"}},{"path":"/pages/index/qrcode","meta":{},"window":{"navigationBarTitleText":"社区成员登记"}},{"path":"/pages/member_detail/member_detail","meta":{},"window":{"navigationBarTitleText":"快递详细信息"}},{"path":"/pages/index/shequ_list/shequ_list","meta":{},"window":{"navigationBarTitleText":"管理的社区"}},{"path":"/pages/member_detail/info","meta":{},"window":{"navigationBarTitleText":"快件信息"}},{"path":"/pages/member_detail/list","meta":{},"window":{"navigationBarTitleText":"子成员"}},{"path":"/pages/ucenter/about_us","meta":{},"window":{"navigationBarTitleText":"关于我们"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
