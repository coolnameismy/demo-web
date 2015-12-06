// 所有模块都通过 define 来定义
define(function(require, exports, module) {

	// 通过 require 引入依赖
	// var $ = require('jquery');
	// var Handlebars = require('handlebars');
	var Boxes = require('boxes');
	// var demoTpl = require('../component/Tpl/demoList.handlebars');
 	// console.log(boxes);
 	
	$(function(){

		var box = Boxes.init();
		box.render($("body"),"hello world!");
		box.clicked = function(){
			console.log("clicked");
		};
	});



});