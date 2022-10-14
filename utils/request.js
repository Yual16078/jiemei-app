function request(url, method, data, showLoading=true){
    return new Promise((resolve, reject)=>{
		if(showLoading){
			uni.showLoading({
			    title: '加载中...'
			});
		};
		data = data || {};
		var token = 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjQ0YjYzZDdiLWJjNDItNDEyYS1hMzA2LWMyNjRlMjQ4NTAzYyJ9.U51N0pZa1JQTTjdIi-5Q1b3ddvc3rTUgU_Quqsvwv63neRQ9ggWpyT9X-fSo3tRPhFICX4K54AxBOMUc7pBc-A';
        uni.request({
            url: 'http://43.138.65.69:8080/system/yuanzhouqu' + url,
			header:{'Content-Type':'application/json;charset=UTF-8','Authorization': token},
            data: data,
            method: method,
            success: function(res) {
				if(showLoading){
					uni.hideLoading();
				};
                if(res.statusCode==200){
					resolve(res.data);
                }else{
                    var title = res.err_msg;
                    showToast(title);  //提示信息
                    reject();
                } 
            }
        });
    })
};

//toast提示信息
export function showToast(title, icon='none'){
    uni.showToast({
        title: title.toString(),
        icon
    });
};

//提示功能开发中...
export function showTipPending(){
	showToast('功能开发中...');
}

//Modal弹窗
export function showModal(title, content, showCancel=false){
    uni.showModal({
    	title: title.toString(),
		content:content.toString(),
		showCancel:false
    });
};

export function get(url, data, showLoading=true){
    return request(url, 'GET', data, showLoading);
}

export function post(url, data, showLoading=true){
    return request(url, 'POST', data, showLoading);
}

export function put(url, data, showLoading=true){
    return request(url, 'PUT', data, showLoading);
}