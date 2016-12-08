$(function(){
	var timer=null;
	var _s=null,
		_m=null,
		timeTotle=null;
	//切换路由
	$(".fh-tab ul li").on("touchend",function(){
		$(this).addClass("active").siblings().removeClass("active");
		if($(".fh-tab ul li:first").hasClass("active")){
			$(".audio").show()
			$(".font").hide()
		}else{
			$(".audio").hide()
			$(".font").show()
		}
	})
	//开始录音
	$(".audio-operate span:nth-child(2)").on("touchend",function(){
		$(".time").text("00:00")
		$(".hint").text("")
		wx.startRecord();
		audio();	
		$(this).hide()		
		$(".audio-operate span:nth-child(3)").show()
	})
	// 结束录音
	$(".audio-operate span:nth-child(3)").on("touchend",function(){
		$(this).hide()		
		clearInterval(timer)
		wx.stopRecord({
		    success: function (res) {
		        var localId = res.localId;
		    }
		});		
		$(".audio-operate span:nth-child(4)").on("touchend",function(){
			clearInterval(timer)
			$(".audio-operate span:nth-child(1) em").css('display','none')
			$(".audio-operate span:nth-child(5) em").css('display','none')
			$(this).hide()
			$(".audio-operate span:nth-child(3)").show()
			$(".time").text("00:00")
			wx.stopRecord({
			    success: function (res) {
			        var localId = res.localId;
			    }
			});
			wx.startRecord();
			audio();
		})
		$(".audio-operate span:nth-child(4)").show()
		
		$(".audio-operate span:nth-child(1) em").css('display','block')
		$(".audio-operate span:nth-child(5) em").css('display','block')
		
				
	})
	//删除录音
	$(".audio-operate span:nth-child(1) em").on("touchend",function(){
		clearInterval(timer)
		$(".audio-operate span:nth-child(2)").show()
		$(".audio-operate span:nth-child(4)").hide()
		$(".time").text('')
		$(".audio-operate span:nth-child(1) em").css('display','none')
		$(".audio-operate span:nth-child(5) em").css('display','none')	
	})
	//提交录音
	$(".audio-operate span:nth-child(5) em").on("touchend",function(){
		timeTotle=$(".time").text();
		wx.uploadVoice({
		    localId: '', // 需要上传的音频的本地ID，由stopRecord接口获得
		    isShowProgressTips: 1, // 默认为1，显示进度提示
		        success: function (res) {
		        var serverId = res.serverId; // 返回音频的服务器端ID
		    }
		});
		wx.downloadVoice({
		    serverId: '', // 需要下载的音频的服务器端ID，由uploadVoice接口获得
		    isShowProgressTips: 1, // 默认为1，显示进度提示
		    success: function (res) {
		        var localId = res.localId; // 返回音频的本地ID
		    }
		});
		alert('提交成功！')
		window.location.href="/question"
	})
	//录音函数
	var audio=function(){
			var s=parseInt($(".time").text().slice(-2))
			var m=parseInt($(".time").text().slice(0,2))			
			timer=setInterval(function(){
				if(s>=59){				
					s=0;
					m++;				
				}else{
					s++;				
				}
				_s = s>9 ? s : '0' + s;
				_m = m>9 ? m : '0' + m;
				$(".time").text(_m+":"+_s)
				if(m==1&&s>=0){
					clearInterval(timer)
					alert("录音时间过长,请重新开始录音！")					
					$(".audio-operate span:nth-child(4)").show()
					$(".audio-operate span:nth-child(3)").hide()
					$(".audio-operate span:nth-child(1) em").css('display','block')
					$(".audio-operate span:nth-child(5) em").css('display','block')	
				}
			},100)
		}

	//文字
	$(".btn").on("touchend",function(){
		var tex=$("textarea").val()
		if(tex!=""){
			$.ajax({
				type:"post",
				url:"http://120.26.134.236:8080/duoda/answer/writtenWords",
				async:true,
				datatype:"JSONP",
				data:[{'answerType':1,'questionId':15,'answerContent':tex,'userId':1}],
				success:function(data){
					console.log(data)
				},
				error:function(){

				}
			});
			alert('提交成功！')
			window.location.href="/question"
		}else{
			alert('请输入内容后再提交！')
		}
		
	})

	//微信接口
	wx.config({
	    debug: true,// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	    appId: '<?php echo $signPackage["appId"];?>',
	    timestamp: '<?php echo $signPackage["timestamp"];?>',
	    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
	    signature: '<?php echo $signPackage["signature"];?>',
	    jsApiList: [
		 'checkJsApi',
	        'onMenuShareTimeline',
	        'onMenuShareAppMessage',
	        'onMenuShareQQ',
	        'onMenuShareWeibo',
	        'hideMenuItems',
	        'showMenuItems',
	        'hideAllNonBaseMenuItem',
	        'showAllNonBaseMenuItem',
	        'translateVoice',
	        'startRecord',
	        'stopRecord',
	        'onRecordEnd',
	        'playVoice',
	        'pauseVoice',
	        'stopVoice',
	        'uploadVoice',
	        'downloadVoice',
	        'chooseImage',
	        'previewImage',
	        'uploadImage',
	        'downloadImage',
	        'getNetworkType',
	        'openLocation',
	        'getLocation',
	        'hideOptionMenu',
	        'showOptionMenu',
	        'closeWindow',
	        'scanQRCode',
	        'chooseWXPay',
	        'openProductSpecificView',
	        'addCard',
	        'chooseCard',
	        'openCard'
		] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
})



