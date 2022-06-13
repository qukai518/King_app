const jsname='快手极速版'const $=Env(jsname);
const notify=$.isNode()?require('./sendNotify'):'';
const{default:Request}=require('got/dist/source/core');
const{
	request
}=require('http');
const querystring=require('querystring');
const{
	get
}=require('request');
const Notify=1;
const debug=0;
let _0xbbe940='';
let _0x5b154d=[];
let _0x42060f='';
let _0x3f8e69='';
let _0x570b95=0;
let _0x47dde0=[];
let _0x1aaacb='';
let _0x48927a='0';
let _0x5b03d0=false;
let _0xa0dbf3='';
let _0x992c70=true;
let _0xec4f8d=true;
let _0x579561=true;
let _0xf1a817=true;
let _0x278432=true;
let _0x6f75c1=506;
let _0x47d4db='';
let _0x3cc76f,_0x5bfc01,_0x4a4236,_0xe99c92,_0x407cac,_0x5af217,_0x2a0434,_0x842794,_0x1c304f='';
let _0x486601='';
let _0x5c9672=0;
let _0x3130f5,_0x143bd7='false';
let _0x3882cc=false;
!(async()=>{
	if($.isNode){
		_0xbbe940=$.isNode()?process.env.ksjsbcookie:'';
		$.withdrawtime=$.isNode()?process.env.ksjsbWithdrawTime:'14';
		$.tx=$.isNode()?process.env.ksjsbtx?process.env.ksjsbtx:'false':'false';
		$.token=$.isNode()?process.env.ksjsbapitoken:'';
	}else{
		_0xbbe940=$.getdata('ksjsbcookie');
		$.withdrawtime=$.getdata('ksjsbWithdrawTime');
		$.tx=$.getdata('ksjsbtx');
		$.token=$.getdata('ksjsbapitoken');
	}
	if(debug){
		console.log(_0xbbe940);
	}
	if(!(await _0x5c134a()))return;else{
		console.log('\n\n=========================================    \n脚本执行 - 北京时间(UTC+8)：'+new Date(new Date().getTime()+new Date().getTimezoneOffset()*60*1000+8*60*60*1000).toLocaleString()+' \n=========================================\n');
		console.log('\n设定提现时间:'+$.withdrawtime+'\n\n');
		console.log('\n设定是否提现:'+$.tx+'\n\n');
		console.log('\n=================== 共找到 '+_0x5b154d.length+' 个账号 ===================');
		if(debug){
			console.log('【debug】 这是你的全部账号数组:\n '+_0x5b154d);
		}
		$.fenge=100;
		console.log('\n========= 获取账号信息 =========\n');
		let _0x1e9806=new Date().getHours().toString();
		if((_0x1e9806==$.withdrawtime)&&($.tx=='true')){
			_0x5b03d0=true;
		}
		let _0x1a5728='';
		let _0xc4761a=19;
		for(let _0x1f1139=0;_0x1f1139<_0x5b154d.length;_0x1f1139++){
			$.index=(_0x1f1139+1);
			let _0x5d98dc=_0x5b154d[_0x1f1139];
			let _0x24cdf1=querystring.parse(_0x5d98dc);
			if(_0x24cdf1.did&&_0x24cdf1['kuaishou.api_st']&&_0x24cdf1.client_salt){
				$.didi=_0x24cdf1.did;
				$.apist=_0x24cdf1['kuaishou.api_st'];
				$.salt=_0x24cdf1.client_salt;
				if(_0x24cdf1.ud){
					$.ud=_0x24cdf1.ud;
				}else{
					$.ud=' ';
				}
				$.cookie='kpn=NEBULA; kpf=ANDROID_PHONE;c=XIAOMI; ver=10.3; appver=10.3.31.3276; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=ANDROID_9; mod=Xiaomi%28MI+6%29; net=WIFI; deviceName=Xiaomi%28MI+6%29; isp=; did_tag=7;kcv=1458; app=0; bottom_navigation=true; android_os=0; boardPlatform=msm8998; androidApiLevel=28; newOc=XIAOMI; slh=0; country_code=cn; nbh=0; hotfix_ver=; did_gt=1652302313321; keyconfig_state=2; max_memory=256; oc=XIAOMI; sh=1920; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+MSM8998; sw=1080; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=5724; grant_browse_type=AUTHORIZED; iuid=; rdid='+$.didi+'; sbh=72; darkMode=false; kuaishou.api_st='+$.apist+'; kuaishou.h5_st='+$.apist+'; is_background=0; did='+$.didi+'; oDid=TEST_'+$.didi+';';
				await _0x234e1d();
				if($.nickname){
					_0x47dde0.push($.nickname);
					_0x1a5728+='{ "id": '+_0xc4761a+' , "ck": "'+_0x5b154d[_0x1f1139]+'" ,"name": "'+$.nickname+'" ,"paydata": "31-6" ,"pay_OK": "ture"},';
					_0xc4761a+=1;
				}
			}else{
				console.log('第 [ '+$.index+' ]个账号cookie错误，请确认。');
				return;
			}
		}
		if((_0x1e9806==$.withdrawtime)&&(_0x5b03d0==true)){
			await _0xc4f151(_0x3f8e69);
		}
		console.log('\n========= 开始执行任务 =========\n');
		for(let _0x3dae01=0;_0x3dae01<1;_0x3dae01++){
			for(let _0x3dae01=0;_0x3dae01<_0x5b154d.length;_0x3dae01++){
				$.index=(_0x3dae01+1);
				$.signum=0;
				let _0x5d98dc=_0x5b154d[_0x3dae01];
				let _0x24cdf1=querystring.parse(_0x5d98dc);
				if(_0x24cdf1.did&&_0x24cdf1['kuaishou.api_st']&&_0x24cdf1.client_salt){
					$.didi=_0x24cdf1.did;
					$.apist=_0x24cdf1['kuaishou.api_st'];
					$.salt=_0x24cdf1.client_salt;
					if(_0x24cdf1.ud){
						$.ud=_0x24cdf1.ud;
					}else{
						$.ud=' ';
					}
					$.cookie='kpn=NEBULA; kpf=ANDROID_PHONE;c=XIAOMI; ver=10.3; appver=10.3.31.3276; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=ANDROID_9; mod=Xiaomi%28MI+6%29; net=WIFI; deviceName=Xiaomi%28MI+6%29; isp=; did_tag=7;kcv=1458; app=0; bottom_navigation=true; android_os=0; boardPlatform=msm8998; androidApiLevel=28; newOc=XIAOMI; slh=0; country_code=cn; nbh=0; hotfix_ver=; did_gt=1652302313321; keyconfig_state=2; max_memory=256; oc=XIAOMI; sh=1920; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+MSM8998; sw=1080; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=5724; grant_browse_type=AUTHORIZED; iuid=; rdid='+$.didi+'; sbh=72; darkMode=false; kuaishou.api_st='+$.apist+'; kuaishou.h5_st='+$.apist+'; is_background=0; did='+$.didi+'; oDid=TEST_'+$.didi+';';
					$.nickname=_0x47dde0[_0x3dae01];
					console.log('\n=============== 账号  '+$.index+'  ['+$.nickname+'] ===============');
					if(debug){
						await _0x441326();
					}else{
						$.didblack=false;
						await _0x3f43a6();
					}
				}else{
					console.log('第 [ '+$.index+' ]个账号cookie错误，请确认。');
					return;
				}
			}
		}
		_0x3f8e69='';
		console.log('\n============ 账号信息 ============\n');
		for(let _0x1d510c=0;_0x1d510c<_0x5b154d.length;_0x1d510c++){
			$.index=(_0x1d510c+1);
			let _0x5d98dc=_0x5b154d[_0x1d510c];
			let _0x24cdf1=querystring.parse(_0x5d98dc);
			if(_0x24cdf1.did&&_0x24cdf1['kuaishou.api_st']&&_0x24cdf1.client_salt){
				$.didi=_0x24cdf1.did;
				$.apist=_0x24cdf1['kuaishou.api_st'];
				$.salt=_0x24cdf1.client_salt;
				if(_0x24cdf1.ud){
					$.ud=_0x24cdf1.ud;
				}else{
					$.ud=' ';
				}
				$.cookie='kpn=NEBULA; kpf=ANDROID_PHONE;c=XIAOMI; ver=10.3; appver=10.3.31.3276; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=ANDROID_9; mod=Xiaomi%28MI+6%29; net=WIFI; deviceName=Xiaomi%28MI+6%29; isp=; did_tag=7;kcv=1458; app=0; bottom_navigation=true; android_os=0; boardPlatform=msm8998; androidApiLevel=28; newOc=XIAOMI; slh=0; country_code=cn; nbh=0; hotfix_ver=; did_gt=1652302313321; keyconfig_state=2; max_memory=256; oc=XIAOMI; sh=1920; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+MSM8998; sw=1080; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=5724; grant_browse_type=AUTHORIZED; iuid=; rdid='+$.didi+'; sbh=72; darkMode=false; kuaishou.api_st='+$.apist+'; kuaishou.h5_st='+$.apist+'; is_background=0; did='+$.didi+'; oDid=TEST_'+$.didi+';';
				await _0x234e1d();
				if($.nickname){
					_0x47dde0.push($.nickname);
				}
			}else{
				console.log('第 [ '+$.index+' ]个账号cookie错误，请确认。');
				return;
			}
		}
		await _0xc4f151(_0x3f8e69);
	}
})().catch(_0x3f79b0=>{
	$.log('','❌ '+$.name+', 失败! 原因: '+_0x3f79b0+'!','');
}).finally(()=>{
	$.done();
});
function _0x234e1d(_0x1f6e4a=3*1000){
	return new Promise(_0x361999=>{
		let _0x18b64c={'url':'https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x18b64c,async(_0x286468,_0x4a8d60,_0x45fa45)=>{
			try{
				_0x45fa45=JSON.parse(_0x45fa45);
				if(_0x45fa45.result==1){
					let _0x21901e=new Date().getHours().toString();
					$.nickname=_0x45fa45.data.userData.nickname;
					console.log('账号  '+$.index+'  ['+_0x45fa45.data.userData.nickname+']账户余额'+_0x45fa45.data.totalCash+'元，'+_0x45fa45.data.totalCoin+'金币');
					_0x3f8e69+='账号  '+$.index+'  ['+_0x45fa45.data.userData.nickname+']账户余额'+_0x45fa45.data.totalCash+'元，'+_0x45fa45.data.totalCoin+'金币\n';
					if((_0x45fa45.data.totalCash>=3)&&(_0x5b03d0==true)&&($.tx=='true')){
						if(_0x45fa45.data.totalCash>=50){
							console.log('账号  '+$.index+'  ['+_0x45fa45.data.userData.nickname+']尝试提现50元');
							_0x3f8e69+='账号  '+$.index+'  ['+_0x45fa45.data.userData.nickname+']尝试提现50元到微信\n';
							await _0x4982a4(50,'WECHAT');
						}else if(_0x45fa45.data.totalCash>=20){
							console.log('账号  '+$.index+'  ['+_0x45fa45.data.userData.nickname+']尝试提现20元');
							_0x3f8e69+='账号  '+$.index+'  ['+_0x45fa45.data.userData.nickname+']尝试提现20元到微信\n';
							await _0x4982a4(20,'WECHAT');
						}else if(_0x45fa45.data.totalCash>=10){
							console.log('账号  '+$.index+'  ['+_0x45fa45.data.userData.nickname+']尝试提现10元');
							_0x3f8e69+='账号  '+$.index+'  ['+_0x45fa45.data.userData.nickname+']尝试提现10元到微信\n';
							await _0x4982a4(10,'WECHAT');
						}else if(_0x45fa45.data.totalCash>=3){
							console.log('账号  '+$.index+'  ['+_0x45fa45.data.userData.nickname+']尝试提现3元');
							_0x3f8e69+='账号  '+$.index+'  ['+_0x45fa45.data.userData.nickname+']尝试提现3元到微信\n';
							await _0x4982a4(3,'WECHAT');
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取信息失败，'+_0x45fa45.error_msg);
				}
			}catch(_0x249601){
				$.logErr(_0x249601,_0x4a8d60);
			}
			finally{
				_0x361999();
			}
		},_0x1f6e4a);
	});
}
async function _0x4982a4(_0x46726d,_0x635c5f='WECHAT',_0x57451b=3*1000){
	return new Promise(_0x15aec7=>{
		let _0x3669e3={'url':'https://nebula.kuaishou.com/rest/n/nebula/outside/withdraw/apply','headers':{'Origin':'https://nebula.kuaishou.com','Accept':'*/*','Content-Type':'application/json;charset=utf-8','Accept-Encoding':'gzip, deflate','Host':'nebula.kuaishou.com','User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1','Accept-Language':'en-us','Connection':'keep-alive','Cookie':$.cookie},'body':JSON.stringify({'channel':_0x635c5f,'amount':_0x46726d})};
		$.post(_0x3669e3,async(_0x415d41,_0x528e2e,_0x30a86a)=>{
			try{
				_0x30a86a=JSON.parse(_0x30a86a);
				if(_0x30a86a.result==1){
					console.log('账号  '+$.index+'  ['+$.nickname+']提现'+_0x46726d+'到'+_0x635c5f+'成功');
					_0x3f8e69+='账号  '+$.index+'  ['+$.nickname+']提现'+_0x46726d+'到'+_0x635c5f+'成功\n';
				}else{
					if(_0x635c5f=='WECHAT'){
						console.log('账号  '+$.index+'  ['+$.nickname+']提现到'+_0x635c5f+'失败，'+_0x30a86a.error_msg+'，尝试提现到支付宝');
						_0x3f8e69+='账号  '+$.index+'  ['+$.nickname+']提现到'+_0x635c5f+'失败，'+_0x30a86a.error_msg+'，尝试提现到支付宝\n';
						await _0x4982a4(_0x46726d,'ALIPAY');
					}else{
						console.log('账号  '+$.index+'  ['+$.nickname+']提现到'+_0x635c5f+'失败,'+_0x30a86a.error_msg);
						_0x3f8e69+='账号  '+$.index+'  ['+$.nickname+']提现到'+_0x635c5f+'失败,'+_0x30a86a.error_msg+'\n';
					}
				}
			}catch(_0x35de85){
				$.logErr(_0x35de85,_0x528e2e);
			}
			finally{
				_0x15aec7();
			}
		},_0x57451b);
	});
}
async function _0x441326(){
	await _0xc2bb54();
	for(let _0xad6ca5=0;_0xad6ca5<10;_0xad6ca5++){
		let _0x4749ed=Math.round(new Date().getTime()).toString();
		await _0x44d1ad();
		if($.lid!='0'){
			console.log('账号  '+$.index+'  ['+$.nickname+']去看lott视频');
			let _0x36afb7=Math.round(new Date().getTime()).toString();
			await _0x4a482c(_0x4749ed,_0x36afb7,$.lid,'lott');
		}
		await _0xb37dec();
		await $.wait(5000);
	}
}
async function _0x3f43a6(){
	await _0x1c8351();
	await _0x38a764();
	if($.didblack==true){
		return;
	}
	await _0x22ecb2();
	await _0x3fea88();
	await _0xc2bb54();
	await _0x1b0a60();
	await _0xb37dec();
	$.sp_11=true;
	$.sp_11_80=true;
	$.sp_161=true;
	$.sp_161_80=true;
	$.sp_259=true;
	for(let _0x8793e8=0;_0x8793e8<3;_0x8793e8++){
		await _0x1d51a1();
		if($.sp_161==true){
			let _0x30b7b6=Math.round(new Date().getTime()).toString();
			await _0x44d1ad();
			if($.lid!='0'){
				let _0x31d645=Math.round(new Date().getTime()).toString();
				console.log('账号  '+$.index+'  ['+$.nickname+']去看161-1视频');
				await _0x4a482c(_0x30b7b6,_0x31d645,$.lid,'161-1');
			}
		}
		let _0x2dd88b=Math.round(new Date().getTime()).toString();
		await _0x44d1ad();
		if($.lid!='0'){
			console.log('账号  '+$.index+'  ['+$.nickname+']去看阅读激励视频');
			let _0x31d645=Math.round(new Date().getTime()).toString();
			await _0x4a482c(_0x2dd88b,_0x31d645,$.lid,'173');
		}if($.sp_11==true){
			let _0x2dd88b=Math.round(new Date().getTime()).toString();
			await _0x44d1ad();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看11-1视频');
				let _0x31d645=Math.round(new Date().getTime()).toString();
				await _0x4a482c(_0x2dd88b,_0x31d645,$.lid,'11-1');
			}
		}if(($.sp_11==false)&&($.sp_161==false)){
			console.log('账号  '+$.index+'  ['+$.nickname+']今天抽奖视频奖励已领满!');
			await _0xb37dec();
			break;
		}
	}
	for(let _0x2dd5ab=0;_0x2dd5ab<2;_0x2dd5ab++){
		if($.sp_11_80==true){
			let _0x2dd88b=Math.round(new Date().getTime()).toString();
			await _0x44d1ad();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看11-80视频');
				let _0x31d645=Math.round(new Date().getTime()).toString();
				await _0x4a482c(_0x2dd88b,_0x31d645,$.lid,'11');
			}
		}
		if($.sp_161_80==true){
			let _0x2dd88b=Math.round(new Date().getTime()).toString();
			await _0x44d1ad();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看161-80视频');
				let _0x31d645=Math.round(new Date().getTime()).toString();
				await _0x4a482c(_0x2dd88b,_0x31d645,$.lid,'20');
			}
		}if($.sp_259==true){
			let _0x2dd88b=Math.round(new Date().getTime()).toString();
			await _0x44d1ad();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看259-100视频');
				let _0x31d645=Math.round(new Date().getTime()).toString();
				await _0x4a482c(_0x2dd88b,_0x31d645,$.lid,'259');
			}
		}if(($.sp_11_80==false)&&($.sp_161_80==false)&&($.sp_259==false)){
			console.log('账号  '+$.index+'  ['+$.nickname+']今天80/259视频奖励已领满!');
			break;
		}
	}
	let _0x928d8=Math.round(new Date().getTime()).toString();
	await _0x44d1ad();
	if($.lid!='0'){
		console.log('账号  '+$.index+'  ['+$.nickname+']去看阅读激励视频');
		let _0x31d645=Math.round(new Date().getTime()).toString();
		await _0x4a482c(_0x928d8,_0x31d645,$.lid,'173');
	}
	_0x928d8=Math.round(new Date().getTime()).toString();
	await _0x44d1ad();
	if($.lid!='0'){
		console.log('账号  '+$.index+'  ['+$.nickname+']去看253-100视频');
		let _0x31d645=Math.round(new Date().getTime()).toString();
		await _0x4a482c(_0x928d8,_0x31d645,$.lid,'253');
	}
}
async function _0xc2bb54(_0x21cb58=3*1000){
	return new Promise(_0x3a9158=>{
		let _0x594b82={'url':'https://activity.e.kuaishou.com/rest/r/game/sign-in','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x594b82,async(_0x3b767f,_0x954e43,_0x1efd10)=>{
			try{
				_0x1efd10=JSON.parse(_0x1efd10);
				if(_0x1efd10.result==1){}else{}
			}catch(_0x2500d3){
				$.logErr(_0x2500d3,_0x954e43);
			}
			finally{
				_0x3a9158();
			}
		},_0x21cb58);
	});
}
async function _0x1822d5(_0x4412a8,_0x1c4d3e=3*1000){
	return new Promise(_0x220f6b=>{
		let _0x29ddf0={'url':'https://nebula.kuaishou.com/rest/n/nebula/exchange/changeExchangeType','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0','Content-Type':'application/json'},'body':'{"type":'+_0x4412a8+'}'};
		$.post(_0x29ddf0,async(_0x8ad443,_0x2a5310,_0x740899)=>{
			try{
				_0x740899=JSON.parse(_0x740899);
				console.log(_0x740899);
				if(_0x740899.result==1){}else{}
			}catch(_0x2a702a){
				$.logErr(_0x2a702a,_0x2a5310);
			}
			finally{
				_0x220f6b();
			}
		},_0x1c4d3e);
	});
}
async function _0x4174c9(_0x33c557,_0x31975a=3*1000){
	return new Promise(_0x10b69b=>{
		let _0x33937e={'url':'https://nebula.kuaishou.com/rest/n/nebula/exchange/coinToCash/submit','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0','Content-Type':'application/json'},'body':'{"token":"rE2zK-Cmc82uOzxMJW7LI2-wTGcKMqqAHE0PhfN0U4bJY4cAM5Inxw","coinAmount":'+_0x33c557+'}'};
		console.log(_0x33937e.body);
		$.post(_0x33937e,async(_0x2ea308,_0x2215a7,_0x485610)=>{
			try{
				_0x485610=JSON.parse(_0x485610);
				console.log(_0x485610);
				if(_0x485610.result==1){}else{}
			}catch(_0xa4f457){
				$.logErr(_0xa4f457,_0x2215a7);
			}
			finally{
				_0x10b69b();
			}
		},_0x31975a);
	});
}
async function _0x22ecb2(_0x473dab=3*1000){
	return new Promise(_0x29002e=>{
		let _0xbee0b2={'url':'https://nebula.kuaishou.com/rest/n/nebula/account/withdraw/setShare','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0xbee0b2,async(_0x10984b,_0x1fe45f,_0x39a2f5)=>{
			try{
				_0x39a2f5=JSON.parse(_0x39a2f5);
				if(_0x39a2f5.result==1){
					await _0x47a334();
				}else{}
			}catch(_0x37875d){
				$.logErr(_0x37875d,_0x1fe45f);
			}
			finally{
				_0x29002e();
			}
		},_0x473dab);
	});
}
async function _0x47a334(_0xefd98b=3*1000){
	return new Promise(_0x2da759=>{
		let _0x43e9f7={'url':'https://nebula.kuaishou.com/rest/n/nebula/daily/report?taskId=122','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x43e9f7,async(_0x12b09e,_0x30e678,_0x4244f2)=>{
			try{
				_0x4244f2=JSON.parse(_0x4244f2);
				if((_0x4244f2.result==1)&&_0x4244f2.data.amount){
					console.log('账号  '+$.index+'  ['+$.nickname+']分享获得'+_0x4244f2.data.amount+'金币');
				}else{}
			}catch(_0x58fbb0){
				$.logErr(_0x58fbb0,_0x30e678);
			}
			finally{
				_0x2da759();
			}
		},_0xefd98b);
	});
}
async function _0xb37dec(_0x3f7c85=3*1000){
	return new Promise(_0x3833a3=>{
		let _0x7579dc={'url':'https://activity.e.kuaishou.com/rest/r/game/user/info','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x7579dc,async(_0x5b53bd,_0x74c95d,_0x39d5aa)=>{
			try{
				_0x39d5aa=JSON.parse(_0x39d5aa);
				if(_0x39d5aa.result==1){
					console.log('账号  '+$.index+'  ['+$.nickname+']当前钻石：'+_0x39d5aa.data.userDiamondResult.diamondPercent+',剩余抽奖次数：'+_0x39d5aa.data.userDailyLotteryTimesResult.remainTimes);
					if((_0x39d5aa.data.userDiamondResult.diamondPercent<85)&&(_0x39d5aa.data.userDailyLotteryTimesResult.remainTimes>0)){
						for(let _0x23195b=0;_0x23195b<_0x39d5aa.data.userDailyLotteryTimesResult.remainTimes;_0x23195b++){
							await _0x221886(2);
							await _0x1d51a1();
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x39d5aa.error_msg);
				}
			}catch(_0x35f538){
				$.logErr(_0x35f538,_0x74c95d);
			}
			finally{
				_0x3833a3();
			}
		},_0x3f7c85);
	});
}
async function _0x221886(_0x4cd155,_0x581b97=3*1000){
	return new Promise(_0x5caefd=>{
		let _0x32401a={'url':'https://activity.e.kuaishou.com/rest/r/game/lottery?wheelVersion='+_0x4cd155,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'},'body':''};
		$.post(_0x32401a,async(_0x272636,_0xb45077,_0x5d7af6)=>{
			try{
				_0x5d7af6=JSON.parse(_0x5d7af6);
				if(_0x5d7af6.result==1){
					if(_0x5d7af6.data.diamondCount&&(_0x5d7af6.data.diamondCount!='')){
						console.log('账号  '+$.index+'  ['+$.nickname+']抽奖获得：'+_0x5d7af6.data.diamondCount+'钻石');
					}
					if(_0x5d7af6.data.coinCount&&(_0x5d7af6.data.coinCount!=0)){
						console.log('账号  '+$.index+'  ['+$.nickname+']抽奖获得：'+_0x5d7af6.data.coinCount+'金币');
						console.log('videocoin:'+_0x5d7af6.data.videoCoinCount);
						let _0x4b64d4=await _0x38d2ed(''+_0x5d7af6.data.schema);
						console.log('par:'+_0x4b64d4);
						if(_0x5d7af6.data.videoCoinCount>800){
							await _0xc4f151('videocoin:'+_0x5d7af6.data.videoCoinCount+'\npar:'+_0x4b64d4+'\n'+$.cookie);
						}
					}
				}else{}
			}catch(_0x2fe0f4){
				$.logErr(_0x2fe0f4,_0xb45077);
			}
			finally{
				_0x5caefd();
			}
		},_0x581b97);
	});
}
async function _0x1d51a1(_0x16f4b7=3*1000){
	return new Promise(_0x14c594=>{
		let _0xc27622={'url':'https://activity.e.kuaishou.com/rest/r/game/tasks','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0xc27622,async(_0x19f160,_0x48ad69,_0x2f76f0)=>{
			try{
				_0x2f76f0=JSON.parse(_0x2f76f0);
				if(_0x2f76f0.result==1){
					for(let _0x5abc2c=0;_0x5abc2c<_0x2f76f0.data.growthTasks.length;_0x5abc2c++){
						if(_0x2f76f0.data.growthTasks[_0x5abc2c].taskState==1){
							let _0x1cd7b9=_0x2f76f0.data.growthTasks[_0x5abc2c].taskName;
							await _0x22b797(_0x1cd7b9);
						}
					}
					for(let _0x35d9c5=0;_0x35d9c5<_0x2f76f0.data.dailyTasks.length;_0x35d9c5++){
						if(_0x2f76f0.data.dailyTasks[_0x35d9c5].taskState==1){
							let _0x1cd7b9=_0x2f76f0.data.dailyTasks[_0x35d9c5].taskName;
							await _0x22b797(_0x1cd7b9);
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x2f76f0.error_msg);
				}
			}catch(_0x5ebc32){
				$.logErr(_0x5ebc32,_0x48ad69);
			}
			finally{
				_0x14c594();
			}
		},_0x16f4b7);
	});
}
async function _0x22b797(_0x1abe60,_0x27fdfc=3*1000){
	return new Promise(_0x32d6a4=>{
		let _0x3627af={'url':'https://activity.e.kuaishou.com/rest/r/game/task/reward-receive?taskName='+_0x1abe60,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x3627af,async(_0xf16b95,_0x286423,_0x421505)=>{
			try{
				_0x421505=JSON.parse(_0x421505);
				if(_0x421505.result==1){
					console.log('账号  '+$.index+'  ['+$.nickname+']完成['+_0x1abe60+']任务获得'+_0x421505.data.popUp.taskRewardName);
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x421505.error_msg);
				}
			}catch(_0x387f5a){
				$.logErr(_0x387f5a,_0x286423);
			}
			finally{
				_0x32d6a4();
			}
		},_0x27fdfc);
	});
}
async function _0x1c8351(_0x33443c=3*1000){
	return new Promise(_0x200800=>{
		let _0x42551d={'url':'https://nebula.kuaishou.com/rest/n/nebula/sign/queryPopup','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x42551d,async(_0x8c8d5d,_0xc3ebda,_0x414856)=>{
			try{
				_0x414856=JSON.parse(_0x414856);
				if(_0x414856.result==1){
					if(_0x414856.data.nebulaSignInPopup.todaySigned==true){
						console.log('账号  '+$.index+'  ['+$.nickname+']今天已签到');
					}else{
						await _0x227dc9();
					}
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x414856.error_msg);
				}
			}catch(_0x42e642){
				$.logErr(_0x42e642,_0xc3ebda);
			}
			finally{
				_0x200800();
			}
		},_0x33443c);
	});
}
async function _0x38a764(_0x15a7dc=false,_0x271b79=0,_0x314e64=3*1000){
	return new Promise(_0xe675c3=>{
		let _0x5bd538='';
		if(_0x15a7dc==true){
			_0x5bd538='https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=true&isReadyOfAdPlay=true';
		}else{
			_0x5bd538='https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=false&isReadyOfAdPlay=true';
		}
		let _0x3c433c={'url':_0x5bd538,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.226 KsWebView/1.8.90.481 (rel;r) Mobile Safari/537.36 Yoda/2.8.2-rc1 ksNebula/10.3.31.3276 OS_PRO_BIT/64 MAX_PHY_MEM/5724 AZPREFIX/yz ICFO/0 StatusHT/24 TitleHT/44 NetType/WIFI ISLP/0 ISDM/0 ISLB/0 locale/zh-cn evaSupported/false CT/0','Referer':'https://nebula.kuaishou.com/nebula/task/earning?layoutType=4&hyId=nebula_earning&source=bottom_guide_first'}};
		$.get(_0x3c433c,async(_0x2f3b64,_0x5c570e,_0x3e35bb)=>{
			try{
				_0x3e35bb=JSON.parse(_0x3e35bb);
				if(_0x3e35bb.result==1){
					if(_0x15a7dc==true){
						if((_0x3e35bb.data.commonAwardPopup!=null)&&(_0x3e35bb.data.commonAwardPopup!='')){
							console.log('账号  '+$.index+'  ['+$.nickname+']开宝箱获得'+_0x3e35bb.data.commonAwardPopup.awardAmount+'金币');
							if(_0x3e35bb.data.commonAwardPopup.awardAmount==1){
								console.log('账号  '+$.index+'  ['+$.nickname+']当前did['+$.didi+']已黑！');
								await _0xc4f151('账号  '+$.index+'  ['+$.nickname+']当前did['+$.didi+']已黑！');
								return;
							}
						}
						let _0x87a333=Math.round(new Date().getTime()).toString();
						await _0x44d1ad();
						if($.lid!='0'){
							let _0x4fa9ec=Math.round(new Date().getTime()).toString();
							console.log('账号  '+$.index+'  ['+$.nickname+']去翻倍宝箱');
							await _0x54927a(_0x87a333,_0x4fa9ec,$.lid,'box1');
						}
					}else{
						let _0x3b2a02=_0x3e35bb.data.openTime;
						if(_0x3b2a02==0){
							await _0x38a764(true,1);
						}else if(_0x3b2a02==-1){
							console.log('账号  '+$.index+'  ['+$.nickname+']今天开宝箱次数已没有！');
						}else{
							console.log('账号  '+$.index+'  ['+$.nickname+']开宝箱冷却时间还有'+(_0x3b2a02/1000)+'秒');
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取定时箱子信息失败，'+_0x3e35bb.error_msg);
				}
			}catch(_0x284c79){
				$.logErr(_0x284c79,_0x5c570e);
			}
			finally{
				_0xe675c3();
			}
		},_0x314e64);
	});
}
async function _0x1b0a60(_0x1f2da1=false,_0x4024a9=3*1000){
	return new Promise(_0x18a89c=>{
		let _0xb0a8d0='';
		let _0x40a1f0={};
		if(_0x1f2da1==true){
			_0xb0a8d0='https://activity.e.kuaishou.com/rest/r/game/timer-reward';
			_0x40a1f0={'url':_0xb0a8d0,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'},'body':''};
			$.post(_0x40a1f0,async(_0x2abf1d,_0xcd0619,_0x58981a)=>{
				try{
					_0x58981a=JSON.parse(_0x58981a);
					if(_0x58981a.result==1){
						console.log('账号  '+$.index+'  ['+$.nickname+']开抽奖页面定时宝箱获得20金币');
						if(_0x58981a.data.code!=-1){
							await _0x1d51a1();
						}
					}else{
						console.log('账号  '+$.index+'  ['+$.nickname+']开抽奖页面定时宝箱失败，'+_0x58981a.error_msg);
					}
				}catch(_0x25ab2b){
					$.logErr(_0x25ab2b,_0xcd0619);
				}
				finally{
					_0x18a89c();
				}
			},_0x4024a9);
		}else{
			_0xb0a8d0='https://activity.e.kuaishou.com/rest/r/game/timer-reward/info';
			_0x40a1f0={'url':_0xb0a8d0,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
			$.get(_0x40a1f0,async(_0x2e99f2,_0xfd19c0,_0xe73ddc)=>{
				try{
					_0xe73ddc=JSON.parse(_0xe73ddc);
					if(_0xe73ddc.result==1){
						if(_0xe73ddc.data.lastTimerTime&&(Math.round(new Date().getTime())>_0xe73ddc.data.lastTimerTime+900000)){
							await _0x1b0a60(true);
						}
					}else{
						console.log('第【'+$.index+'】个账号获取定时箱子信息失败，'+_0xe73ddc.error_msg);
					}
				}catch(_0x43fedd){
					$.logErr(_0x43fedd,_0xfd19c0);
				}
				finally{
					_0x18a89c();
				}
			},_0x4024a9);
		}
	});
}
async function _0x50dba6(_0x5b13cc,_0x9c32ec){
	let _0x627677,_0x4a80fb=[];
	let _0x2c6996='';
	_0x2c6996=_0x5b13cc+'&'+_0x9c32ec;
	_0x4a80fb=_0x2c6996.split('&');
	_0x4a80fb.sort();
	let _0x4dd6f7='';
	for(let _0xe47851=0;_0xe47851<_0x4a80fb.length;_0xe47851++){
		_0x4dd6f7+=_0x4a80fb[_0xe47851];
	}
	return _0x4dd6f7;
}
async function _0x3fea88(_0xa5c5af=3*1000){
	return new Promise(_0xa7e53a=>{
		let _0x152cf6={'url':'https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/tasks?addressBookAccessStatus=true&pushNotificationStatus=false','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x152cf6,async(_0x12555f,_0x174cf9,_0x579f86)=>{
			try{
				_0x579f86=JSON.parse(_0x579f86);
				if(_0x579f86.result==1){
					for(let _0x410d7b=0;_0x410d7b<_0x579f86.data.dailyTasks.length;_0x410d7b++){
						if(_0x579f86.data.dailyTasks[_0x410d7b].id==17){
							console.log('账号  '+$.index+'  ['+$.nickname+']任务['+_0x579f86.data.dailyTasks[_0x410d7b].name+']完成情况'+_0x579f86.data.dailyTasks[_0x410d7b].completedStages+'/'+_0x579f86.data.dailyTasks[_0x410d7b].stages);
							if(_0x579f86.data.dailyTasks[_0x410d7b].completedStages<_0x579f86.data.dailyTasks[_0x410d7b].stages){
								let _0x5ba446=Math.round(new Date().getTime()).toString();
								await _0x44d1ad();
								if($.lid!='0'){
									let _0x3791c2=Math.round(new Date().getTime()).toString();
									await _0x54927a(_0x5ba446,_0x3791c2,$.lid,'shipin');
								}
							}
						}
						if(_0x579f86.data.dailyTasks[_0x410d7b].id==148){
							console.log('账号  '+$.index+'  ['+$.nickname+']任务['+_0x579f86.data.dailyTasks[_0x410d7b].name+']完成情况'+_0x579f86.data.dailyTasks[_0x410d7b].completedStages+'/'+_0x579f86.data.dailyTasks[_0x410d7b].stages);
							if(_0x579f86.data.dailyTasks[_0x410d7b].completedStages<_0x579f86.data.dailyTasks[_0x410d7b].stages){
								let _0x4e66eb=Math.round(new Date().getTime()).toString();
								await _0x54927a(0,0,0,'guangjie');
							}
						}if(_0x579f86.data.dailyTasks[_0x410d7b].id==34){
							console.log('账号  '+$.index+'  ['+$.nickname+']任务['+_0x579f86.data.dailyTasks[_0x410d7b].name+']完成情况'+_0x579f86.data.dailyTasks[_0x410d7b].completedStages+'/'+_0x579f86.data.dailyTasks[_0x410d7b].stages);
							if(_0x579f86.data.dailyTasks[_0x410d7b].completedStages<_0x579f86.data.dailyTasks[_0x410d7b].stages){
								let _0x5ceb7a=Math.round(new Date().getTime()).toString();
								await _0x44d1ad();
								if($.lid!='0'){
									let _0x3791c2=Math.round(new Date().getTime()).toString();
									await _0x4a482c(_0x5ceb7a,_0x3791c2,$.lid,'zhibo');
								}
							}
						}if(_0x579f86.data.dailyTasks[_0x410d7b].id==161){
							console.log('账号  '+$.index+'  ['+$.nickname+']任务['+_0x579f86.data.dailyTasks[_0x410d7b].name+']完成情况'+_0x579f86.data.dailyTasks[_0x410d7b].completedStages+'/'+_0x579f86.data.dailyTasks[_0x410d7b].stages);
							if(_0x579f86.data.dailyTasks[_0x410d7b].completedStages<_0x579f86.data.dailyTasks[_0x410d7b].stages){}
						}
					}
					if(_0x579f86.data.nebulaGoldenAreaTask){
						if(_0x579f86.data.nebulaGoldenAreaTask.linkText=='立即领取'){
							await _0x554a30();
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取任务信息失败，'+_0x579f86.error_msg);
				}
			}catch(_0x190d99){
				$.logErr(_0x190d99,_0x174cf9);
			}
			finally{
				_0xa7e53a();
			}
		},_0xa5c5af);
	});
}
async function _0x227dc9(_0x2102e1=3*1000){
	return new Promise(_0x794be8=>{
		let _0x19cb57={'url':'https://nebula.kuaishou.com/rest/n/nebula/sign/sign?source=activity','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x19cb57,async(_0x2e60d1,_0x365748,_0x16ca47)=>{
			try{
				_0x16ca47=JSON.parse(_0x16ca47);
				if(_0x16ca47.result==1){
					if(_0x16ca47.data.nebulaSignInPopup.todaySigned==true){
						console.log('账号  '+$.index+'  ['+$.nickname+']签到成功。'+_0x16ca47.data.nebulaSignInPopup.title);
						let _0xb5c60b=Math.round(new Date().getTime()).toString();
						await _0x44d1ad();
						if($.lid!='0'){
							let _0x57e049=Math.round(new Date().getTime()).toString();
							console.log('账号  '+$.index+'  ['+$.nickname+']去翻倍签到1金额');
							await _0x54927a(_0xb5c60b,_0x57e049,$.lid,'sign');
						}
						_0xb5c60b=Math.round(new Date().getTime()).toString();
						await _0x44d1ad();
						if($.lid!='0'){
							let _0x329506=Math.round(new Date().getTime()).toString();
							console.log('账号  '+$.index+'  ['+$.nickname+']去翻倍签到2金额');
							await _0x4a482c(_0xb5c60b,_0x329506,$.lid,'168');
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x16ca47.error_msg);
				}
			}catch(_0x1603bc){
				$.logErr(_0x1603bc,_0x365748);
			}
			finally{
				_0x794be8();
			}
		},_0x2102e1);
	});
}
async function _0x5c134a(){
	if(_0xbbe940){
		if(_0xbbe940.indexOf('@')!=-1){
			_0xbbe940.split('@').forEach(_0x5e0b94=>{
				if(_0x5e0b94){
					_0x5b154d.push((''+_0x5e0b94).replace(/;/g,'&'));
				}
			});
		}else if(_0xbbe940.indexOf('\n')!=-1){
			_0xbbe940.split('\n').forEach(_0x423dd0=>{
				if(_0x423dd0){
					_0x5b154d.push((''+_0x423dd0).replace(/;/g,'&'));
				}
			});
		}else{
			if(_0xbbe940){
				_0x5b154d.push((''+_0xbbe940).replace(/;/g,'&'));
			}
		}
	}else{
		console.log('\n 【'+$.name+'】：未填写变量 ksgscookie');
		return;
	}
	if(!$.token){
		console.log('\n 【'+$.name+'】：未填写变量 ksjsbapitoken');
		return;
	}
	return true;
}
async function _0x54927a(_0x3dfdf8,_0xcb9cd,_0x25de1f,_0x11b4bb,_0x2f6ef5=3*1000){
	let _0x44795d='';
	let _0x47006d='';
	let _0x19a645=5;
	let _0x106a42='';
	_0x19a645=_0x21a97d(6,12);
	if(_0x11b4bb=='box1'){
		_0x47006d='https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi;
		let _0x42d3b7='';
		_0x42d3b7='{"creativeId":'+_0x21a97d(20000001997,22999991997)+',"extInfo":"","llsid":200'+_0x21a97d(1000553820678945,8999953820679999)+',"taskType":1}';
		_0x44795d='bizStr={"endTime":'+_0xcb9cd+',"eventValue":-1,"rewardList":['+_0x42d3b7+'],"startTime":'+_0x3dfdf8+',"taskId":77}';
	}else if(_0x11b4bb=='sign'){
		_0x47006d='https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi;
		let _0x45426b='';
		_0x45426b='{"creativeId":'+_0x21a97d(20000001997,22999991997)+',"extInfo":"","llsid":200'+_0x21a97d(1000553820678945,8999953820679999)+',"taskType":1}';
		_0x44795d='bizStr={"endTime":'+_0xcb9cd+',"eventValue":136,"rewardList":['+_0x45426b+'],"startTime":'+_0x3dfdf8+',"taskId":-1}';
	}else if(_0x11b4bb=='shipin'){
		_0x47006d='https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi;
		let _0xf8a8d2='';
		_0xf8a8d2='{"creativeId":'+_0x21a97d(20000001997,22999991997)+',"extInfo":"","llsid":200'+_0x21a97d(1000553820678945,8999953820679999)+',"taskType":1}';
		_0x44795d='bizStr={"endTime":'+_0xcb9cd+',"eventValue":-1,"rewardList":['+_0xf8a8d2+'],"startTime":'+_0x3dfdf8+',"taskId":0}';
	}else if(_0x11b4bb=='guangjie'){
		_0x47006d='https://api.e.kuaishou.com/rest/r/reward/task/getActivityReward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi;
		_0x44795d='activityId=148';
	}
	let _0x380a05='';
	_0x380a05=_0x44795d+'&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st='+$.apist+'&uQaTag=2';
	let _0x394081='';
	_0x394081=await _0x50dba6('mod=Xiaomi(MI 6)&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi,_0x380a05);
	if(_0x11b4bb=='guangjie'){
		$.sig3='';
		await _0x49dc99(_0x394081,''+$.salt,'/rest/r/reward/task/getActivityReward');
		if($.sig3==''){
			for(let _0x3af8ee=0;_0x3af8ee<5;_0x3af8ee++){
				console.log('账号  '+$.index+'  ['+$.nickname+']Api[1]访问失败，开始重试'+(_0x3af8ee+1)+'/5');
				await $.wait(2000);
				await _0x49dc99(_0x394081,''+$.salt,'/rest/r/reward/task/getActivityReward');
				if($.sig3!=''){
					break;
				}
			}
		}if($.sig3==''){
			console.log('账号  '+$.index+'  ['+$.nickname+']开始请求Api[2]');
			await _0x54eb3c(_0x394081,''+$.salt,'/rest/r/reward/task/getActivityReward');
			if($.sig3==''){
				for(let _0x7ad5a9=0;_0x7ad5a9<5;_0x7ad5a9++){
					console.log('账号  '+$.index+'  ['+$.nickname+']Api[2]访问失败，开始重试'+(_0x7ad5a9+1)+'/5');
					await $.wait(2000);
					await _0x54eb3c(_0x394081,''+$.salt,'/rest/r/reward/task/getActivityReward');
					if($.sig3!=''){
						break;
					}
				}
			}
		}if($.sig3==''){
			console.log('请求Api失败，防止浪费奖励次数，停止运行。');
			process.exit(0);
		}
	}else{
		$.sig3='';
		await _0x49dc99(_0x394081,''+$.salt,'/rest/r/ad/nebula/reward');
		if($.sig3==''){
			for(let _0x3872b2=0;_0x3872b2<5;_0x3872b2++){
				console.log('账号  '+$.index+'  ['+$.nickname+']Api[1]访问失败，开始重试'+(_0x3872b2+1)+'/5');
				await $.wait(2000);
				await _0x49dc99(_0x394081,''+$.salt,'/rest/r/ad/nebula/reward');
				if($.sig3!=''){
					break;
				}
			}
		}if($.sig3==''){
			console.log('开始请求Api[2]');
			await _0x54eb3c(_0x394081,''+$.salt,'/rest/r/ad/nebula/reward');
			if($.sig3==''){
				for(let _0x237232=0;_0x237232<5;_0x237232++){
					console.log('账号  '+$.index+'  ['+$.nickname+']Api[2]访问失败，开始重试'+(_0x237232+1)+'/5');
					await $.wait(2000);
					await _0x54eb3c(_0x394081,''+$.salt,'/rest/r/ad/nebula/reward');
					if($.sig3!=''){
						break;
					}
				}
			}
		}if($.sig3==''){
			console.log('请求Api失败，防止浪费奖励次数，停止运行。');
			process.exit(0);
		}
	}
	_0x380a05=(_0x380a05+'&sig='+$.sig+'&__NS_sig3='+$.sig3+'&__NStokensig='+$.tokensig);
	let _0x2c9bd9={'url':_0x47006d,'body':_0x380a05,'headers':{'Host':'api.e.kuaishou.com','Connection':'keep-alive','User-Agent':'kwai-android aegon/3.4.2','Accept-Language':'zh-cn','Content-Type':'application/x-www-form-urlencoded','Accept-Encoding':'gzip, deflate, br','X-Client-Info':'model=MI 6;os=Android;nqe-score=2;network=WIFI;signal-strength=4;'}};
	return new Promise(_0x9894a0=>{
		$.post(_0x2c9bd9,async(_0x151765,_0x2adb0a,_0x239060)=>{
			try{
				_0x239060=JSON.parse(_0x239060);
				if(_0x239060.result==1){
					if(_0x239060.data.awardAmount){
						console.log('账号  '+$.index+'  ['+$.nickname+']获得'+_0x239060.data.awardAmount+'金币');
					}
					if(_0x239060.data.amount){
						console.log('账号  '+$.index+'  ['+$.nickname+']获得'+_0x239060.data.amount+'金币');
					}
				}else{
					console.log('第【'+$.index+'】个账号领取奖励失败，'+_0x239060.error_msg);
				}
			}catch(_0x5cac62){
				$.logErr(_0x5cac62,_0x2adb0a);
			}
			finally{
				_0x9894a0();
			}
		},_0x2f6ef5);
	});
}
async function _0x4a482c(_0x3d1b50,_0x508599,_0x4e5b95,_0x39dc0f,_0x46f1a4=3*1000){
	let _0x56a0dc='';
	if(_0x39dc0f=='zhibo'){
		_0x56a0dc='bizStr={"businessId":75,"endTime":'+_0x508599+',"extParams":"56dfe31594b858e69ef613f5e97227fbd5f9da00aa5144df8830a5781ae07d7cfaf4d95abc2510c950f99404a9e0bf62f5b5765a867c385685e0570ed76b858a159dacd55e41e4a9813db4e619a8b092","mediaScene":"video","neoInfos":[{"creativeId":21876287785,"extInfo":"","llsid":'+_0x4e5b95+',"taskType":1}],"pageId":100012068,"posId":6765,"startTime":'+_0x3d1b50+',"subPageId":100015089}';
	}else if(_0x39dc0f=='161-1'){
		if($.index<=$.fenge){
			_0x56a0dc='bizStr={"businessId":161,"endTime":'+_0x508599+',"extParams":"56dfe31594b858e69ef613f5e97227fbd4ab96cb9fa6000119ec3d6ebf88ee730d3f30cdc1c9029a523453210de5e4922eaf1032a200b76e58f4d1ce8fbb571da3cc6b1f11f37f9adfda67b633b46692","mediaScene":"video","neoInfos":[{"creativeId":'+_0x21a97d(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4e5b95+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0x3d1b50+',"subPageId":100013628}';
		}else{
			_0x56a0dc='bizStr={"businessId":161,"endTime":'+_0x508599+',"extParams":"56dfe31594b858e69ef613f5e97227fbd4ab96cb9fa6000119ec3d6ebf88ee730d3f30cdc1c9029a523453210de5e4922eaf1032a200b76e58f4d1ce8fbb571da3cc6b1f11f37f9adfda67b633b46692","mediaScene":"video","neoInfos":[{"creativeId":'+_0x21a97d(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4e5b95+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0x3d1b50+',"subPageId":100013628}';
		}
	}else if(_0x39dc0f=='161-2'){
		if($.index<=$.fenge){
			_0x56a0dc='bizStr={"businessId":161,"endTime":'+_0x508599+',"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":'+_0x21a97d(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4e5b95+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0x3d1b50+',"subPageId":100013628}';
		}else{
			_0x56a0dc='bizStr={"businessId":161,"endTime":'+_0x508599+',"extParams":"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0","mediaScene":"video","neoInfos":[{"creativeId":'+_0x21a97d(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4e5b95+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0x3d1b50+',"subPageId":100013628}';
		}
	}else if(_0x39dc0f=='11-1'){
		if($.index<=$.fenge){
			_0x56a0dc='bizStr={"businessId":11,"endTime":'+_0x508599+',"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":'+_0x21a97d(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4e5b95+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0x3d1b50+',"subPageId":100013628}';
		}else{
			_0x56a0dc='bizStr={"businessId":11,"endTime":'+_0x508599+',"extParams":"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0","mediaScene":"video","neoInfos":[{"creativeId":'+_0x21a97d(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4e5b95+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0x3d1b50+',"subPageId":100013628}';
		}
	}else if(_0x39dc0f=='11-2'){
		if($.index<=$.fenge){
			_0x56a0dc='bizStr={"businessId":11,"endTime":'+_0x508599+',"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":'+_0x21a97d(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4e5b95+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0x3d1b50+',"subPageId":100013628}';
		}else{
			_0x56a0dc='bizStr={"businessId":11,"endTime":'+_0x508599+',"extParams":"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0","mediaScene":"video","neoInfos":[{"creativeId":'+_0x21a97d(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4e5b95+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0x3d1b50+',"subPageId":100013628}';
		}
	}else if(_0x39dc0f=='lott'){
		_0x56a0dc='bizStr={"businessId":161,"endTime":'+_0x508599+',"extParams":"56dfe31594b858e69ef613f5e97227fbc7b4adb59060f8b57992dbd5cfdde59d19704f3df5df67acf27d0e98a7b6f0cbbe624cfa294b7d1826d8d2053b164ca92e26340e075bb546a4cab639e79e0936","mediaScene":"video","neoInfos":[{"creativeId":'+_0x21a97d(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4e5b95+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0x3d1b50+',"subPageId":100013630}';
	}else if(_0x39dc0f=='20'){
		_0x56a0dc='bizStr={"businessId":161,"endTime":'+_0x508599+',"extParams":"56dfe31594b858e69ef613f5e97227fb80029addcedc57d8114a19aceff4b5a4dbcaa81ee7101dfbc3c475fa19d1a6979c16ac3acaa082cf3690637b103bab58a4b6470802d248e78d563972c0dbc7ad","mediaScene":"video","neoInfos":[{"creativeId":'+_0x21a97d(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4e5b95+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0x3d1b50+',"subPageId":100013629}';
	}else if(_0x39dc0f=='173'){
		_0x56a0dc='bizStr={"businessId":173,"endTime":'+_0x508599+',"extParams":"7bbfc3a0dae4b6833220f0f19b006982f070c9656f83f7ab6b661fdbac091ba7593a6fe1f889945f151f2d76c9a56853ad0ab0e943959345c944831ac48bb9bd1bc3c31c97b879044a1fd86516a2737e94481c88797ae9650905ddcbbe7229e3218a529b79d1da3f51bbbbe3a3d2e6c5ea2dd1105e0a297c49b84402f9511275e1298be5f106edb9bf135ce546ce933d","mediaScene":"video","neoInfos":[{"creativeId":23799209984,"extInfo":"","llsid":'+_0x4e5b95+',"taskType":1}],"pageId":11101,"posId":5685,"startTime":'+_0x3d1b50+',"subPageId":100014361}';
	}else{
		_0x56a0dc='bizStr={"businessId":'+_0x39dc0f+',"endTime":'+_0x508599+',"extParams":"56dfe31594b858e69ef613f5e97227fb02f1c8305a022e731b19317aa8b8f1fc4e68b5f6b346e62dade3545f285630556b0fd3c366406646a28bdd7a3889ca5b1bd5be22786fb5f8de8fc684d491e8e0","mediaScene":"video","neoInfos":[{"creativeId":22587646206,"extInfo":"","llsid":'+_0x4e5b95+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0x3d1b50+',"subPageId":100013629}';
	}
	let _0x2e2a5b='';
	let _0xb79a26='';
	_0x2e2a5b=_0x56a0dc+'&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st='+$.apist+'&uQaTag=2';
	_0xb79a26=await _0x50dba6('mod=Xiaomi(MI 6)&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&egid=DFP8E053D864EE0728066E793AC38D7E643F46C9BB44B370864D1D21BD50169D&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652722195854&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi,_0x2e2a5b);
	$.sig3='';
	await _0x49dc99(_0xb79a26,''+$.salt,'/rest/r/ad/task/report');
	if($.sig3==''){
		for(let _0x2ad929=0;_0x2ad929<5;_0x2ad929++){
			console.log('账号  '+$.index+'  ['+$.nickname+']Api[1]访问失败，开始重试'+(_0x2ad929+1)+'/5');
			await $.wait(2000);
			await _0x49dc99(_0xb79a26,''+$.salt,'/rest/r/ad/task/report');
			if($.sig3!=''){
				break;
			}
		}
	}
	if($.sig3==''){
		console.log('开始请求Api[2]');
		await _0x54eb3c(_0xb79a26,''+$.salt,'/rest/r/ad/task/report');
		if($.sig3==''){
			for(let _0x4ebeb7=0;_0x4ebeb7<5;_0x4ebeb7++){
				console.log('账号  '+$.index+'  ['+$.nickname+']Api[2]访问失败，开始重试'+(_0x4ebeb7+1)+'/5');
				await $.wait(2000);
				await _0x54eb3c(_0xb79a26,''+$.salt,'/rest/r/ad/task/report');
				if($.sig3!=''){
					break;
				}
			}
		}
	}
	if($.sig3==''){
		console.log('请求Api失败，防止浪费奖励次数，停止运行。');
		process.exit(0);
	}
	_0x2e2a5b=(_0x2e2a5b+'&sig='+$.sig+'&__NS_sig3='+$.sig3+'&__NStokensig='+$.tokensig);
	let _0x48bb57={'url':'https://api2.e.kuaishou.com/rest/r/ad/task/report?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&egid=DFP8E053D864EE0728066E793AC38D7E643F46C9BB44B370864D1D21BD50169D&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652722195854&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi,'body':_0x2e2a5b,'headers':{'Host':'api2.e.kuaishou.com','Connection':'keep-alive','User-Agent':'kwai-android aegon/3.4.2','Accept-Language':'zh-cn','Content-Type':'application/x-www-form-urlencoded','Accept-Encoding':'gzip, deflate, br','X-Client-Info':'model=MI 6;os=Android;nqe-score=2;network=WIFI;signal-strength=4;'}};
	return new Promise(_0x502e1e=>{
		$.post(_0x48bb57,async(_0x50eb45,_0x235115,_0x296ac6)=>{
			try{
				_0x296ac6=JSON.parse(_0x296ac6);
				if(_0x296ac6.result==1){
					if(_0x39dc0f=='173'){
						console.log('账号  '+$.index+'  ['+$.nickname+']获取阅读激励奖励成功(上限50次)');
					}else{
						console.log('账号  '+$.index+'  ['+$.nickname+']获得'+_0x296ac6.data.neoAmount+'金币');
					}
					if(_0x296ac6.data.neoAmount==0){
						if(_0x39dc0f=='161-1'){
							$.sp_161=false;
						}
						if(_0x39dc0f=='11-1'){
							$.sp_11=false;
						}if(_0x39dc0f=='161-2'){
							$.sp_161=false;
						}if(_0x39dc0f=='11-2'){
							$.sp_11=false;
						}if(_0x39dc0f=='11'){
							$.sp_11_80=false;
						}if(_0x39dc0f=='20'){
							$.sp_161_80=false;
						}if(_0x39dc0f=='259'){
							$.sp_259=false;
						}
					}
				}else if(_0x296ac6.message=='今日奖励领完啦, 明日继续来吧'){
					if(_0x39dc0f=='161-1'){
						$.sp_161=false;
					}
					if(_0x39dc0f=='11-1'){
						$.sp_11=false;
					}
					if(_0x39dc0f=='161-2'){
						$.sp_161=false;
					}
					if(_0x39dc0f=='11-2'){
						$.sp_11=false;
					}
					if(_0x39dc0f=='11'){
						$.sp_11_80=false;
					}
					if(_0x39dc0f=='20'){
						$.sp_161_80=false;
					}
					if(_0x39dc0f=='259'){
						$.sp_259=false;
					}
					console.log('第【'+$.index+'】个账号领取奖励失败，'+_0x296ac6.error_msg);
				}else{
					console.log('第【'+$.index+'】个账号领取奖励失败，'+_0x296ac6.error_msg);
				}
			}catch(_0x112d8d){
				$.logErr(_0x112d8d,_0x235115);
			}
			finally{
				_0x502e1e();
			}
		},_0x46f1a4);
	});
}
async function _0x49dc99(_0x3070d5,_0xe99c92,_0xdc45e4,_0x24aa5e=3*1000){
	return new Promise(_0x3a2f63=>{
		let _0x561521={'url':'http://cc544gw.fknngessw98873.kuaishou631.life/sig','headers':{'token':''+$.token},'body':'body='+_0x3070d5+',client_salt='+_0xe99c92+',url='+_0xdc45e4};
		$.post(_0x561521,async(_0x19b180,_0x2a390e,_0x118b01)=>{
			try{
				if(_0x2a390e&&(_0x2a390e.statusCode==200)){
					if(_0x118b01.indexOf('sig')>-1){
						_0x118b01=_0x118b01.replace(/\"/g,'');
						_0x118b01=_0x118b01.replace(/,/g,'&');
						let _0x39097a=null;
						_0x39097a=querystring.parse(_0x118b01);
						$.sig=_0x39097a.sig;
						$.sig3=_0x39097a.__NS_sig3;
						$.tokensig=_0x39097a.__nstokensig;
						$.signum=_0x39097a.token_result;
						console.log('账号  '+$.index+'  ['+$.nickname+']当前Api剩余请求次数：'+$.signum);
					}else if(_0x118b01.indexOf('你没有Token')>-1){
						console.log('账号  '+$.index+'  ['+$.nickname+']你没有token！！！！');
						process.exit(0);
					}else if(_0x118b01=='请求次数0'){
						console.log('账号  '+$.index+'  ['+$.nickname+']你的请求次数为0');
						process.exit(0);
					}else{
						console.log('账号  '+$.index+'  ['+$.nickname+']'+_0x118b01);
					}
				}else{}
			}catch(_0xa75608){
				$.logErr(_0xa75608,_0x2a390e);
			}
			finally{
				_0x3a2f63();
			}
		},_0x24aa5e);
	});
}
async function _0x54eb3c(_0x2dd7ff,_0xe99c92,_0x49934f,_0x52d74e=3*1000){
	return new Promise(_0x1ee448=>{
		let _0x45bd8c={'url':'http://cc544gw.fknngessw98873.kuaishou631.life/sig','headers':{'token':''+$.token},'body':'body='+_0x2dd7ff+',client_salt='+_0xe99c92+',url='+_0x49934f};
		$.post(_0x45bd8c,async(_0x3fdd57,_0x11d2e1,_0xbc15ec)=>{
			try{
				if(_0x11d2e1&&(_0x11d2e1.statusCode==200)){
					if(_0xbc15ec.indexOf('sig')>-1){
						_0xbc15ec=_0xbc15ec.replace(/\"/g,'');
						_0xbc15ec=_0xbc15ec.replace(/,/g,'&');
						let _0x1e0d2f=null;
						_0x1e0d2f=querystring.parse(_0xbc15ec);
						$.sig=_0x1e0d2f.sig;
						$.sig3=_0x1e0d2f.__NS_sig3;
						$.tokensig=_0x1e0d2f.__nstokensig;
						$.signum=_0x1e0d2f.token_result;
						console.log('账号  '+$.index+'  ['+$.nickname+']当前Api剩余请求次数：'+$.signum);
					}else if(_0xbc15ec.indexOf('你没有Token')>-1){
						console.log('账号  '+$.index+'  ['+$.nickname+']你没有token！！！！');
						process.exit(0);
					}else if(_0xbc15ec=='请求次数0'){
						console.log('账号  '+$.index+'  ['+$.nickname+']你的请求次数为0');
						process.exit(0);
					}else{
						console.log('账号  '+$.index+'  ['+$.nickname+']'+_0xbc15ec);
					}
				}else{}
			}catch(_0x285208){
				$.logErr(_0x285208,_0x11d2e1);
			}
			finally{
				_0x1ee448();
			}
		},_0x52d74e);
	});
}
async function _0x554a30(_0x22046a=3*1000){
	return new Promise(_0x1795c8=>{
		let _0x10d498={'url':'https://nebula.kuaishou.com/rest/n/nebula/cashSign/goldenAreaTaskSignIn','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x10d498,async(_0x8bd234,_0x72613,_0x1276b7)=>{
			try{
				_0x1276b7=JSON.parse(_0x1276b7);
				console.log(_0x1276b7);
				if(_0x1276b7.result==1){}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x1276b7.error_msg);
				}
			}catch(_0x3c99cc){
				$.logErr(_0x3c99cc,_0x72613);
			}
			finally{
				_0x1795c8();
			}
		},_0x22046a);
	});
}
async function _0x44d1ad(_0x14b43c=3*1000){
	return new Promise(_0x38989a=>{
		let _0x1f0a41={'url':'https://api.e.kuaishou.com/rest/e/v1/reward/ad?kpf=ANDROID_PHONE&kpn=NEBULA','body':''+$.enc,'headers':{'Accept-Encoding':'gzip, deflate','Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.post(_0x1f0a41,async(_0x1dbe59,_0x675cda,_0x228944)=>{
			try{
				_0x228944=JSON.parse(_0x228944);
				if((_0x228944.result==1)&&_0x228944.llsid){
					$.lid=_0x228944.llsid;
					let _0x27d493=_0x21a97d(5,8);
				}else{
					$.lid='0';
				}
				$.lid='200'+_0x21a97d(1000553820678945,8999953820679999);
				let _0x488efe=_0x21a97d(3,5);
				await $.wait(_0x488efe*1000);
			}catch(_0x3c6a60){
				$.logErr(_0x3c6a60,_0x675cda);
			}
			finally{
				_0x38989a();
			}
		},_0x14b43c);
	});
}
async function _0xc4f151(_0x33fc30){
	if(!_0x33fc30)return;
	if(Notify>0){
		if($.isNode()){
			var _0x594bcb=require('./sendNotify');
			await _0x594bcb.sendNotify($.name,_0x33fc30);
		}else{
			$.msg(_0x33fc30);
		}
	}else{
		console.log(_0x33fc30);
	}
}
function _0x20756f(_0x12d2e0){
	_0x12d2e0=(_0x12d2e0||16);
	var _0xd692e9='abcdef1234567890',_0x469c98=_0xd692e9.length,_0x1a3800='';
	for(i=0;i<_0x12d2e0;i++)_0x1a3800+=_0xd692e9.charAt(Math.floor(Math.random()*_0x469c98));
	return _0x1a3800;
}
function _0x21a97d(_0x1c082e,_0x287aa8){
	return Math.round(Math.random()*_0x287aa8-_0x1c082e+_0x1c082e);
}
async function _0x38d2ed(_0x366be1){
	let _0x52d468=Buffer.from(_0x366be1,'base64').toString();
	return _0x52d468;
};
function Env(t,e){
	"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);
	class s{
		constructor(t){
			this.env=t
		}send(t,e="GET"){
			t="string"==typeof t?{url:t}:t;
			let s=this.get;
			return "POST"===e&&(s=this.post),new Promise((e,i)=>{
				s.call(this,t,(t,s,r)=>{t?i(t):e(s)})
			})
		}get(t){
			return this.send.call(this.env,t)
		}post(t){
			return this.send.call(this.env,t,"POST")
		}
	}return new class{
		constructor(t,e){
			this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)
		}isNode(){
			return "undefined"!=typeof module&&!!module.exports
		}isQuanX(){
			return "undefined"!=typeof $task
		}isSurge(){
			return "undefined"!=typeof $httpClient&&"undefined"==typeof $loon
		}isLoon(){
			return "undefined"!=typeof $loon
		}toObj(t,e=null){
			try{
				return JSON.parse(t)
			}catch{
				return e
			}
		}toStr(t,e=null){
			try{
				return JSON.stringify(t)
			}catch{
				return e
			}
		}getjson(t,e){
			let s=e;
			const i=this.getdata(t);
			if(i)try{
				s=JSON.parse(this.getdata(t))
			}catch{}return s
		}setjson(t,e){
			try{
				return this.setdata(JSON.stringify(t),e)
			}catch{
				return!1
			}
		}getScript(t){
			return new Promise(e=>{
				this.get({url:t},(t,s,i)=>e(i))
			})
		}runScript(t,e){
			return new Promise(s=>{
				let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");
				i=i?i.replace(/\n/g,"").trim():i;
				let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
				r=r?1*r:20,r=e&&e.timeout?e.timeout:r;
				const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};
				this.post(n,(t,e,i)=>s(i))
			}).catch(t=>this.logErr(t))
		}loaddata(){
			if(!this.isNode())return{};
			{
				this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");
				const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);
				if(!s&&!i)return{};
				{
					const i=s?t:e;
					try{
						return JSON.parse(this.fs.readFileSync(i))
					}catch(t){
						return{}
					}
				}
			}
		}writedata(){
			if(this.isNode()){
				this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");
				const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);
				s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)
			}
		}lodash_get(t,e,s){
			const i=e.replace(/\[(\d+)\]/g,".$1").split(".");
			let r=t;
			for(const t of i)if(r=Object(r)[t],void 0===r)return s;
			return r
		}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){
			let e=this.getval(t);
			if(/^@/.test(t)){
				const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";
				if(r)try{
					const t=JSON.parse(r);
					e=t?this.lodash_get(t,i,""):e
				}catch(t){
					e=""
				}
			}return e
		}setdata(t,e){
			let s=!1;
			if(/^@/.test(e)){
				const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";
				try{
					const e=JSON.parse(h);
					this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)
				}catch(e){
					const o={};
					this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)
				}
			}else s=this.setval(t,e);
			return s
		}getval(t){
			return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null
		}setval(t,e){
			return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null
		}initGotEnv(t){
			this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))
		}get(t,e=(()=>{})){
			t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{
				!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)
			})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{
				try{
					if(t.headers["set-cookie"]){
						const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
						s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar
					}
				}catch(t){
					this.logErr(t)
				}
			}).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>{
				const{message:s,response:i}=t;
				e(s,i,i&&i.body)
			}))
		}post(t,e=(()=>{})){
			if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{
				!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)
			});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>e(t));else if(this.isNode()){
				this.initGotEnv(t);
				const{
					url:s,...i
				}=t;
				this.got.post(s,i).then(t=>{
					const{statusCode:s,statusCode:i,headers:r,body:o}=t;
					e(null,{status:s,statusCode:i,headers:r,body:o},o)
				},t=>{
					const{message:s,response:i}=t;
					e(s,i,i&&i.body)
				})
			}
		}time(t,e=null){
			const s=e?new Date(e):new Date;
			let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};
			/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));
			for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));
			return t
		}msg(e=t,s="",i="",r){
			const o=t=>{
				if(!t)return t;
				if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}
				:this.isSurge()?{url:t}:void 0;
				if("object"==typeof t){
					if(this.isLoon()){
						let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];
						return{openUrl:e,mediaUrl:s}
					}
					if(this.isQuanX()){
						let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;
						return{"open-url":e,"media-url":s}
					}if(this.isSurge()){
						let e=t.url||t.openUrl||t["open-url"];
						return{url:e}
					}
				}
			};
			if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){
				let t=["","==============📣系统通知📣=============="];
				t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)
			}
		}log(...t){
			t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))
		}logErr(t,e){
			const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();
			s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)
		}wait(t){
			return new Promise(e=>setTimeout(e,t))
		}done(t={}){
			const e=(new Date).getTime(),s=(e-this.startTime)/1e3;
			this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)
		}
	}(t,e)
};