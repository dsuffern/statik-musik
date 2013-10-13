        	$({property: 0}).animate({property: 105}, {
			    duration: 4000,
			    step: function() {
			        var _percent = Math.round(this.property);
			        $('#progress').css('width',  _percent+"%");
			        if(_percent == 105) {
			            $("#progress").addClass("done");
			        }
			    } 
			});