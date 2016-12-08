
module.exports = {
	"exprtlist":"http://118.178.188.74:8080/srvapi/home/index",//首页-推荐专家
	"newList":"http://120.26.134.236:8080/duoda/question/questionListByDate?size=2",//首页-最新回答
	"hotList":"http://120.26.134.236:8080/duoda/question/questionListByHot?size=2",//首页-热门回答
	"login":"http://192.168.199.109:8080/duoda/srvapi/user/toOauthwx",//登录
	"redirect":"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1b8c452f2aa852ff&redirect_uri=http%3a%2f%2fwww.juyreader.com%2fuser%2foauthwx&response_type=code&scope=snsapi_userinfo&state=4a257f68478045a4a48aaf79b4171c0f#wechat_redirect",//重定向地址
	"categoryList":"http://120.26.134.236:8080/duoda/category/getCategoryList",//发现-分类
	"answerList":"http://120.26.134.236:8080/duoda/user/master?size=3&userCategory=1",//发现-精选达人
	"questionList":"http://120.26.134.236:8080/duoda/question/questionListByListen?size=2&categoryId=1",//发现-精选热答
	"writtenWords":"http://120.26.134.236:8080/duoda/answer/writtenWords?questionId=15&answerType=1&answerContent=地价款手机",//回答问题(文字)
	"addAudio":"http://120.26.134.236:8080/duoda/question/questionListByListen?size=2&categoryId=1"//回答问题(语音)
}