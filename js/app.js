$(document).ready(function() {

	// SLick Slider
	
	$("#iscBannerMainSliderItems").slick({
		appendArrows: $("#iscBannerMainSliderArrows"),
		prevArrow: "#iscBannerMainSliderLeftArrow",
		nextArrow: "#iscBannerMainSliderRightArrow",
		appendDots: $("#iscBannerMainSliderDotsContainer"),
		dots: true,
		autoplay: true,
		customPaging: function(slider, i){

			return $('<button type="button" />');
		}
	});

	$("#iscBannerSecondarySliderItems").slick({
		dots: false,
		arrows: false,
		autoplay: true,
		fade: true,
		speed: 3000
	});

	$("#iscBranch1MainSliderItems").slick({
		appendArrows: $("#iscBranch1MainSliderArrows"),
		prevArrow: "#iscBranch1MainSliderLeftArrow",
		nextArrow: "#iscBranch1MainSliderRightArrow",
		appendDots: $("#iscBranch1MainSliderDotsContainer"),
		autoplay: true,
		customPaging: function(slider, i){

			return $('<button type="button" />');
		}
	});

	$("#iscBranch2MainSliderItems").slick({
		appendArrows: $("#iscBranch2MainSliderArrows"),
		prevArrow: "#iscBranch2MainSliderLeftArrow",
		nextArrow: "#iscBranch2MainSliderRightArrow",
		appendDots: $("#iscBranch2MainSliderDotsContainer"),
		autoplay: true,
		customPaging: function(slider, i){

			return $('<button type="button" />');
		}
	});

	$("#iscBranch3MainSliderItems").slick({
		appendArrows: $("#iscBranch3MainSliderArrows"),
		prevArrow: "#iscBranch3MainSliderLeftArrow",
		nextArrow: "#iscBranch3MainSliderRightArrow",
		appendDots: $("#iscBranch3MainSliderDotsContainer"),
		autoplay: true,
		customPaging: function(slider, i){

			return $('<button type="button" />');
		}
	});

	// Hover
	$("#iscDefaultMenuEmployees").on({

		mouseenter: function function_name (argument) {
			// body... 

			$(this).find("ul").first().fadeIn(1000);
		},

		mouseleave: function function_name (argument) {
			// body...
			if($("#iscDefaultMenuTeachers").css('display') != 'block')
			{
				$(this).find("ul").first().fadeOut(1000);
			}
		}
	});

	$("#iscDefaultMenuAcademic").on({

		mouseenter: function function_name (argument) {
			// body... 

			$(this).find("ul").fadeIn(1000);
		},

		mouseleave: function function_name (argument) {
			// body...
			$(this).find("ul").fadeOut(1000); 
		}
	});

	$("#iscDefaultMenuTeachers").on({

		mouseenter: function function_name (argument) {
			// body... 

			$(this).find("ul").fadeIn(1000);
		},

		mouseleave: function function_name (argument) {
			// body...
			$(this).find("ul").fadeOut(1000); 
		}
	});

	// Horizontal Scroll

	// startMarquee();

	// function startMarquee (argument) 
	// {
	// 	// $("#iscHorizontalScrollTexts > p").css('transform', 'translateX(0%)');
		
	// 	var animationObject = {
	// 		transform: 'translateX(-100%)'
	// 	};

	// 	$("#iscHorizontalScrollTexts > p").animate(animationObject, 1000, startMarquee);
	// }

	
});