
window.addEventListener("load", init);

function init() {

	$('#colorizer-black').click(function() {
		$('.jeepImage').attr('id','jeepColorBlack');
	});
	
	$('#colorizer-green').click(function(){
		$('.jeepImage').attr('id','jeepColorGreen');
	});
	$('#colorizer-white').click(function(){
		$('.jeepImage').attr('id','jeepColorWhite');
	});
	$('#colorizer-silver').click(function(){
		$('.jeepImage').attr('id','jeepColorSilver');
	});
	$('#colorizer-blue').click(function(){
		$('.jeepImage').attr('id','jeepColorBlue');
	});
	$('#colorizer-tan').click(function(){
		$('.jeepImage').attr('id','jeepColorTan');
	});
	$('#colorizer-red').click(function(){
		$('.jeepImage').attr('id','jeepColorRed');
	});
	$('#colorizer-b`rown').click(function(){
		$('.jeepImage').attr('id','jeepColorBrown');
	});

}