


define(function(require, exports, module) {

	//var Handlebars = require('../../bower_components/handlebars/handlebars.seajs.min.js');
	var Handlebars = require('handlebars');
	
	var clicked = function(){};

		//渲染界面
		//$dom：jquery的dom元素
		//data：模型数据
		var render = function($dom,data){
			var tpl = require('./boxes.tpl');
	    	var tplc = Handlebars.compile(tpl);
	    	var _clicked = clicked;
	    	$dom.html(tplc(data));	

	    	//click
	    	$dom.click(function() {
	    		_clicked();
	    		// console.log("box clicked!");
	    	});
	    	test = "test1";
		};

	module.exports.render = render;
	exports.clicked  = clicked;

});