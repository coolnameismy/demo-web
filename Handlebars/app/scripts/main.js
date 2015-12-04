// 所有模块都通过 define 来定义
define(function(require, exports, module) {

	// 通过 require 引入依赖
	var $ = require('jquery');
	var Handlebars = require('handlebars')
	// var demoTpl = require('../component/Tpl/demoList.handlebars');
 

 	var tpl = require("./data.tpl")
    // var demoTplc = Handlebars.compile(tpl);
	$(function(){
		
		console.log(Handlebars)
		console.log("page load complete")

	})

	console.log("main.js")

});