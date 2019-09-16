//javascript Document
function chinaz(){
	this.init();
}
chinaz.prototype = {
	constructor: chinaz,
	init: function(){		
		this._initBackTop();
	},	
	_initBackTop: function(){

		
		$(".cbbfixed").click(function(){
			$("html, body").animate({
				scrollTop: 0
			}, 120);
		});

		var timmer = null;
		$(window).bind("scroll",function() {
            var d = $(document).scrollTop(),
            e = $(window).height();
            0 < d ? $(".cbbfixed").css("bottom", "-1900px") : $(".cbbfixed").css("bottom", "-200px");
			clearTimeout(timmer);
			timmer = setTimeout(function() {
                clearTimeout(timmer)
            },100);
	   });
	}
	
}
var chinaz = new chinaz();