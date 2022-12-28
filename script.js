async function load_1(){
	$('#wxy00').html('<object id="webloader" data="https://yazing.com/topdeals/topcoupons/drn" style="width:100vw;height:90vh;overflow-y:scroll;"/>');
}	
$(document).ready(function() {
	load_1().then(function(){
		alert('2');
		$('#webloader footer').hide();
	});	
});
