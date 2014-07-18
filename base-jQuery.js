(function($){
var k = function(){
	var self = this;
	self._init();
	$(function(){ self._ready(); });
};
k.prototype = {
	_init: function(){
	},
	_ready: function(){
	}
};
xxx = new k();
})(jQuery);
