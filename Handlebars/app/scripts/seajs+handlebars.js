// 所有模块都通过 define 来定义
define(function(require, exports, module) {
 	
	$(function(){
		var Handlebars = require('handlebars');
		var tpl = require("./data.tpl");
    	var demoTplc = Handlebars.compile(tpl);
    	$("body").html( demoTplc("hello world"));
	    console.log(Handlebars);
		console.log("page load complete");

	});
});