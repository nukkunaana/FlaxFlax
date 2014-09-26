$(document).ready(function(){

	// при изменении размера экрана, перерисовывает линии (canvas)
	$(window).resize(function(){
		$("canvas").remove();

	    var mySVG = $('.info-graf-img').connectSVG();

		mySVG.drawLine({
			left_node:'.airPoint',
			right_node:'.air',
			horizantal_gap:10,
			error:true,
			width:1
		});

		mySVG.drawLine({
			left_node:'.tempPoint',
			right_node:'.temp',
			horizantal_gap:10,
			error:true,
			width:1
		});

		mySVG.drawLine({
			left_node:'.elecPoint',
			right_node:'.elec',
			horizantal_gap:10,
			error:true,
			width:1
		});

		mySVG.drawLine({
			left_node:'.ecoPoint',
			right_node:'.eco',
			horizantal_gap:10,
			error:true,
			width:1
		});

		mySVG.drawLine({
			left_node:'.linePoint',
			right_node:'.line',
			horizantal_gap:10,
			error:true,
			width:1
		});

		mySVG.drawLine({
			left_node:'.soundPoint',
			right_node:'.sound',
			horizantal_gap:10,
			error:true,
			width:1
		});
	})


	setTimeout(function(){
		$(window).trigger('resize');
	}, 500);
		
	$('.collapse').on('shown.bs.collapse hidden.bs.collapse', function(e) { 
		setTimeout(function(){
			$(window).trigger("resize")
		}, 1)
	});	
});