var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

app.set('views','./views/pages');
app.set('view engine','pug')
app.use(express.static(path.join(__dirname,'public')))
app.listen(port)

var session = require('express-session')
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(session({
	resave: true, // don't save session if unmodified
	saveUninitialized: false, // don't create session until something stored
	secret: 'duoda'})
)

// var r_login = require('./routes/login')

// //判断用户是否登录
// app.get('/login',function(req,res){
// 	if (!req.session.test) { 
//        console.log("用户名："+req.session.test)
//  	} 
//     else if (req.session.test) {
//       next();
//       console.log("用户名："+req.session.test)
//     }
// })

//路由地址
var r_index = require('./routes/index')
var r_serach = require('./routes/index-serach')
var r_findhome = require('./routes/find/find-home')
var r_detail = require('./routes/find/question-detail')
var r_questionAdd = require('./routes/find/questionAdd')
var r_question = require('./routes/find/question')
var r_ask = require('./routes/find/ask')


// //首页
app.get('/',r_index.exprtlist)

//搜索页面
app.get('/serach',r_serach.serachlist)

//发现首页
app.get('/find',r_findhome.findList)

//问题详情页
app.get('/detail',r_detail.detailList)

//添加提问页
app.get('/ask',r_ask.ask)

//追问
app.get('/questionAdd',r_questionAdd.questionAdd)

//提问
app.get('/question',r_question.question)

//我的首页
app.get('/mine',function(req,res){
    res.render('mine/mine-home',{
    	title:'多答-我的',
    	tab:'mine'
    })
})

console.log('project statred on port ' + port)