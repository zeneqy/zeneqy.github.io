async function load_1(){
	$('#wxy00').html('<object id="webloader" data="https://yazing.com/topdeals/topcoupons/drn" style="width:100vw;height:90vh;overflow-y:scroll;"/>');
return Promise.resolve("Success");
}	
$(document).ready(function() {
	load_1().then(
(message) => {
        $('#webloader footer').hide();
        alert(message);
      },
      (message) => {
        alert('failed');
      }
	});	
alert('ready');
});
