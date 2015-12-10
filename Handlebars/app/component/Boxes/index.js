


define(function(require, exports, module) {

	//var Handlebars = require('../../bower_components/handlebars/handlebars.seajs.min.js');
	var Handlebars = require('handlebars');
	

	var box  = {
		init:function(){
			return box;
		},
		clicked:function(){},
		render:function($dom,data){
			var tpl = require('./boxes.tpl');
	    	var tplc = Handlebars.compile(tpl);
	    	// var _clicked = clicked;
	    	$dom.html(tplc(data));	
	    	box.$dom = $dom;
	    	$dom.click(function() {
	    	  box.clicked && box.clicked();
	    	});
		}
	};

	module.exports = box;

});