$(function(){

	var topoffset = 43;

	var isTouch = 'ontouchstart' in document.documentElement;

	

	var wheight = $(window).height();
	$('.fullheight').css('height', wheight);

	$(window).resize(function(){

			var wheight = $(window).height();
		$('.fullheight').css('height', wheight);

	});


	
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - topoffset
        }, 1000);
        return false;
      }
    }
  });


  $(window).scroll(function(){

  	var windowpos = $(window).scrollTop() + topoffset;
  	$('nav li a').removeClass('active');


  	if(windowpos > $('#hotelinfo').offset().top){

  		$('nav li a').removeClass('active');
  		$('a[href$="hotelinfo"]').addClass('active');
  	}


  	if(windowpos > $('#rooms').offset().top){

  		$('nav li a').removeClass('active');
  		$('a[href$="rooms"]').addClass('active');
  	}


  	if(windowpos > $('#dining').offset().top){

  		$('nav li a').removeClass('active');
  		$('a[href$="dining"]').addClass('active');
  	}

  		if(windowpos > $('#events').offset().top){

  		$('nav li a').removeClass('active');
  		$('a[href$="events"]').addClass('active');
  	}

  		if(windowpos > $('#attractions').offset().top){

  		$('nav li a').removeClass('active');
  		$('a[href$="attractions"]').addClass('active');
  	}

  });



	//set up scrollMagic.
	var controller = new ScrollMagic({

		globalSceneOptions: {

			triggerHook: "onLeave"
		}
	});




	var pin = new ScrollScene({

		triggerElement: "#nav",

	}).setPin('#nav').addTo(controller)



	var roomOrigin = {

		bottom: -700,
		opacity: 0,
		scale: 0
	}

	var roomDest = {

	
		yoyo: true,
		bottom: 0,
		opacity:1,
		scale: 1,
		ease: Back.easeOut
	}

	var roomTwin = TweenMax.staggerFromTo(

		"#westminster .content",
		1, roomOrigin, roomDest);

	var pin = new ScrollScene({

			triggerElement: '#westminster',
		offset: -topoffset,
		duration: 500
	}

		).setPin('#westminster')
		.setTween(roomTwin)
		.addTo(controller)


var roomTwin = TweenMax.staggerFromTo(

		"#oxford .content",
		1, roomOrigin, roomDest);

	var pin = new ScrollScene({

			triggerElement: '#oxford',
		offset: -topoffset,
		duration: 500
	}

		).setPin('#oxford')
		.setTween(roomTwin)
		.addTo(controller)


var roomTwin = TweenMax.staggerFromTo(

		"#piccadilly .content",
		1, roomOrigin, roomDest);

	var pin = new ScrollScene({

			triggerElement: '#piccadilly',
		offset: -topoffset,
		duration: 500
	}

		).setPin('#piccadilly')
		.setTween(roomTwin)
		.addTo(controller)



var roomTwin = TweenMax.staggerFromTo(

		"#cambridge .content",
		1, roomOrigin, roomDest);

	var pin = new ScrollScene({

			triggerElement: '#cambridge',
		offset: -topoffset,
		duration: 500
	}

		).setPin('#cambridge')
		.setTween(roomTwin)
		.addTo(controller)

var roomTwin = TweenMax.staggerFromTo(

		"#manchester .content",
		1, roomOrigin, roomDest);

	var pin = new ScrollScene({

			triggerElement: '#manchester',
		offset: -topoffset,
		duration: 500
	}

		).setPin('#manchester')
		.setTween(roomTwin)
		.addTo(controller)



var roomTwin = TweenMax.staggerFromTo(

		"#victoria .content",
		1, roomOrigin, roomDest);

	var pin = new ScrollScene({

			triggerElement: '#victoria',
		offset: -topoffset,
		duration: 500
	}

		).setPin('#victoria')
		.setTween(roomTwin)
		.addTo(controller)







	var attractionstween = TweenMax.staggerFromTo('#attractions article', 1,
							{opacity: 0, scale: 0}, 
							{delay: 1, opacity: 1, scale: 1,
								ease: Back.easeOut});

	var scene = new ScrollScene({

		triggerElement: '#attractions',
		offset: -topoffset

	}).setTween(attractionstween)
	.addTo(controller);

});