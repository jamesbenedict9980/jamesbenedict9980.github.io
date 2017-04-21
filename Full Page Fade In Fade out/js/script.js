/* JQUERY CODES
-------------------------------------------------*/

$(document).ready(function() {

	$.fn.animateRotate = function(angle, duration, easing, complete) {
	  var args = $.speed(duration, easing, complete);
	  var step = args.step;
	  return this.each(function(i, e) {
		args.complete = $.proxy(args.complete, e);
		args.step = function(now) {
		  $.style(e, 'transform', 'rotate(' + now + 'deg)');
		  if (step) return step.apply(e, arguments);
		};

		$({deg: 0}).animate({deg: angle}, args);
	  });
	};
	
	
	
	
	
	
	$("#aboutme-page").css("background-color", "#3c5560");
	$("#aboutme-page").css("height", "100%");
	$("#aboutme-page").css("width", "100%");
	$("#aboutme-page").fadeIn();
	$(".aboutmecontent").fadeIn();
	
	$(".experiencelink").on("click", function() {
		$(".aboutmecontent").fadeOut();
		$("#aboutme-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(90);
		});
		
		
		setTimeout(function() {
			$("#aboutme-page").fadeOut();		 
		}, 1400);
		
		setTimeout(function() {
			$("#experience-page").animateRotate(0, 0);
			$("#experience-page").css("height", "25px");
			$("#experience-page").css("width", "375px");
			$("#experience-page").fadeIn();
			$("#experience-page").animate({
				backgroundColor: "#006600"
			}, function() {
				$(this).animate({
					height: "150%"
				}, function() {
					$(this).animate({
						width: "100%"
					}, function() {
						$(".experiencecontent").fadeIn(300);
					});
				});
			});
		}, 800);
	});
		


		
		

		$(".aboutmelink").on("click", function() {
		$(".experiencecontent").fadeOut();
		$("#experience-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#experience-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#aboutme-page").animateRotate(0, 0);
		$("#aboutme-page").css("height", "25px");
		$("#aboutme-page").css("width", "375px");
			$("#aboutme-page").fadeIn();
			$("#aboutme-page").animate({
				height: "110%"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".aboutmecontent").fadeIn(300);
				});
			});
		}, 800);
	});
	
	


		$(".projectslink").on("click", function() {
		$(".experiencecontent").fadeOut();
		$("#experience-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#experience-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#projects-page").animateRotate(0, 0);
		$("#projects-page").css("height", "25px");
		$("#projects-page").css("width", "375px");
			$("#projects-page").fadeIn();
			$("#projects-page").animate({
				backgroundColor: "#cd5c5c"
			}, function() {
				$(this).animate({
					height: "100%"
				}, function() {
					$(this).animate({
						width: "100%"
					}, function() {
						$(".projectscontent").fadeIn(300);
					});
				});
			});
		}, 800);
	});
	


	
		$(".skillslink").on("click", function() {
		$(".experiencecontent").fadeOut();
		$("#experience-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#aboutme-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#skills-page").animateRotate(0, 0);
		$("#skills-page").css("height", "25px");
		$("#skills-page").css("width", "375px");
			$("#skills-page").fadeIn();
			$("#skills-page").animate({ 
				height: "100%"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".skillscontent").fadeIn(300);
				});
			});
		}, 1400);
	});






		$(".educationlink").on("click", function() {
		$(".experiencecontent").fadeOut();
		$("#experience-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(90);
		});
		
		setTimeout(function() {
			$("#aboutme-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#education-page").animateRotate(0, 0);
		$("#education-page").css("height", "25px");
		$("#education-page").css("width", "375px");
			$("#education-page").fadeIn();
			$("#education-page").animate({
				height: "100%"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".educationcontent").fadeIn(300);
				});
			});
		}, 1400);
	});

	
	
	
	
	
	
	
	$(".projectslink").on("click", function() {
		$(".aboutmecontent").fadeOut();
		$("#aboutme-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#aboutme-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#projects-page").animateRotate(0, 0);
		$("#projects-page").css("height", "25px");
		$("#projects-page").css("width", "375px");
			$("#projects-page").fadeIn();
			$("#projects-page").animate({
				backgroundColor: "#cd5c5c"
			}, function() {
				$(this).animate({
					height: "100%"
				}, function() {
					$(this).animate({
						width: "100%"
					}, function() {
						$(".projectscontent").fadeIn(300);
					});
				});
			});
		}, 800);
	});



	
	
	
	
		$(".experiencelink").on("click", function() {
		$(".projectscontent").fadeOut();
		$("#projects-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(90);
		});
		
		
		setTimeout(function() {
			$("#projects-page").fadeOut();		 
		}, 1400);
		
		setTimeout(function() {
			$("#experience-page").animateRotate(0, 0);
			$("#experience-page").css("height", "25px");
			$("#experience-page").css("width", "375px");
			$("#experience-page").fadeIn();
			$("#experience-page").animate({
				backgroundColor: "#006600"
			}, function() {
				$(this).animate({
					height: "110%"
				}, function() {
					$(this).animate({
						width: "100%"
					}, function() {
						$(".experiencecontent").fadeIn(300);
					});
				});
			});
		}, 800);
	});




		$(".skillslink").on("click", function() {
		$(".projectscontent").fadeOut();
		$("#projects-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#projects-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#skills-page").animateRotate(0, 0);
		$("#skills-page").css("height", "25px");
		$("#skills-page").css("width", "375px");
			$("#skills-page").fadeIn();
			$("#skills-page").animate({ 
				height: "100%"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".skillscontent").fadeIn(300);
				});
			});
		}, 1400);
	});






		$(".educationlink").on("click", function() {
		$(".projectscontent").fadeOut();
		$("#projects-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(90);
		});
		
		setTimeout(function() {
			$("#projects-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#education-page").animateRotate(0, 0);
		$("#education-page").css("height", "25px");
		$("#education-page").css("width", "375px");
			$("#education-page").fadeIn();
			$("#education-page").animate({
				height: "100%"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".educationcontent").fadeIn(300);
				});
			});
		}, 1400);
	});

	
		$(".aboutmelink").on("click", function() {
		$(".projectscontent").fadeOut();
		$("#projects-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#projects-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#aboutme-page").animateRotate(0, 0);
		$("#aboutme-page").css("height", "25px");
		$("#aboutme-page").css("width", "375px");
			$("#aboutme-page").fadeIn();
			$("#aboutme-page").animate({
				height: "100%"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".aboutmecontent").fadeIn(300);
				});
			});
		}, 800);
	});
	
	
		$(".skillslink").on("click", function() {
		$(".aboutmecontent").fadeOut();
		$("#aboutme-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#aboutme-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#skills-page").animateRotate(0, 0);
		$("#skills-page").css("height", "25px");
		$("#skills-page").css("width", "375px");
			$("#skills-page").fadeIn();
			$("#skills-page").animate({ 
				height: "100%"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".skillscontent").fadeIn(300);
				});
			});
		}, 1400);
	});

		$(".experiencelink").on("click", function() {
		$(".skillscontent").fadeOut();
		$("#skills-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(90);
		});
		
		setTimeout(function() {
			$("#skills-page").fadeOut();		 
		}, 1400);
		
		setTimeout(function() {
			$("#experience-page").animateRotate(0, 0);
			$("#experience-page").css("height", "25px");
			$("#experience-page").css("width", "375px");
			$("#experience-page").fadeIn();
			$("#experience-page").animate({
				backgroundColor: "#006600"
			}, function() {
				$(this).animate({
					height: "110%"
				}, function() {
					$(this).animate({
						width: "100%"
					}, function() {
						$(".experiencecontent").fadeIn(300);
					});
				});
			});
		}, 800);
	});
	
	
		$(".projectslink").on("click", function() {
		$(".skillscontent").fadeOut();
		$("#skills-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#skills-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#projects-page").animateRotate(0, 0);
		$("#projects-page").css("height", "25px");
		$("#projects-page").css("width", "375px");
			$("#projects-page").fadeIn();
			$("#projects-page").animate({
				backgroundColor: "#cd5c5c"
			}, function() {
				$(this).animate({
					height: "100%"
				}, function() {
					$(this).animate({
						width: "100%"
					}, function() {
						$(".projectscontent").fadeIn(300);
					});
				});
			});
		}, 800);
	});



		$(".educationlink").on("click", function() {
		$(".skillscontent").fadeOut();
		$("#skills-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(90);
		});
		
		setTimeout(function() {
			$("#skills-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#education-page").animateRotate(0, 0);
		$("#education-page").css("height", "25px");
		$("#education-page").css("width", "375px");
			$("#education-page").fadeIn();
			$("#education-page").animate({
				height: "100%"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".educationcontent").fadeIn(300);
				});
			});
		}, 1400);
	});
	
	
	
		$(".aboutmelink").on("click", function() {
		$(".skillscontent").fadeOut();
		$("#skills-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#skills-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#aboutme-page").animateRotate(0, 0);
		$("#aboutme-page").css("height", "25px");
		$("#aboutme-page").css("width", "375px");
			$("#aboutme-page").fadeIn();
			$("#aboutme-page").animate({
				height: "100%"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".aboutmecontent").fadeIn(300);
				});
			});
		}, 800);
	});
	

		$(".educationlink").on("click", function() {
		$(".aboutmecontent").fadeOut();
		$("#aboutme-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(90);
		});
		
		setTimeout(function() {
			$("#aboutme-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#education-page").animateRotate(0, 0);
		$("#education-page").css("height", "25px");
		$("#education-page").css("width", "375px");
			$("#education-page").fadeIn();
			$("#education-page").animate({
				height: "100%"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".educationcontent").fadeIn(300);
				});
			});
		}, 1400);
	});
	
	

		$(".experiencelink").on("click", function() {
		$(".educationcontent").fadeOut();
		$("#education-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(90);
		});
		
		setTimeout(function() {
			$("#education-page").fadeOut();		 
		}, 1400);
		
		setTimeout(function() {
			$("#experience-page").animateRotate(0, 0);
			$("#experience-page").css("height", "25px");
			$("#experience-page").css("width", "375px");
			$("#experience-page").fadeIn();
			$("#experience-page").animate({
				backgroundColor: "#006600"
			}, function() {
				$(this).animate({
					height: "110%"
				}, function() {
					$(this).animate({
						width: "100%"
					}, function() {
						$(".experiencecontent").fadeIn(300);
					});
				});
			});
		}, 800);
	});
	
	
		$(".projectslink").on("click", function() {
		$(".educationcontent").fadeOut();
		$("#education-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#education-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#projects-page").animateRotate(0, 0);
		$("#projects-page").css("height", "25px");
		$("#projects-page").css("width", "375px");
			$("#projects-page").fadeIn();
			$("#projects-page").animate({
				backgroundColor: "#cd5c5c"
			}, function() {
				$(this).animate({
					height: "100%"
				}, function() {
					$(this).animate({
						width: "100%"
					}, function() {
						$(".projectscontent").fadeIn(300);
					});
				});
			});
		}, 800);
	});
	

		$(".skillslink").on("click", function() {
		$(".educationcontent").fadeOut();
		$("#education-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#education-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#skills-page").animateRotate(0, 0);
		$("#skills-page").css("height", "25px");
		$("#skills-page").css("width", "375px");
			$("#skills-page").fadeIn();
			$("#skills-page").animate({ 
				height: "100%"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".skillscontent").fadeIn(300);
				});
			});
		}, 1400);
	});	
	
		$(".aboutmelink").on("click", function() {
		$(".educationcontent").fadeOut();
		$("#education-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#education-page").fadeOut();			
		}, 1400);
		
		setTimeout(function() {
		$("#aboutme-page").animateRotate(0, 0);
		$("#aboutme-page").css("height", "25px");
		$("#aboutme-page").css("width", "375px");
			$("#aboutme-page").fadeIn();
			$("#aboutme-page").animate({
				height: "100%"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".aboutmecontent").fadeIn(300);
				});
			});
		}, 800);
	});	

	
});


