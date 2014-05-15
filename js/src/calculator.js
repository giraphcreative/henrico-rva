

$(function(){
	
	var recalculate_total = function(){
			var total = parseFloat( typeof( $(".result.credit").html() )!=="undefined" ? $(".result.credit").html() : 0 )+
				parseFloat( typeof( $(".result.loan-auto").html() )!=="undefined" ? $(".result.loan-auto").html() : 0 )+
				parseFloat( typeof( $(".result.loan-personal").html() )!=="undefined" ? $(".result.loan-personal").html() : 0 );
			if ( total>0 ) {
				$(".result.total").html("Congratulations!<br />You can save $"+total.toFixed(2)+" in interest!");
			} else {
				$(".result.total").html("See your loan<br>savings here:");
			}
		};

	$(".calculator").accrue({
		mode: "compare",
		response_output_div: "#result-total",
		response_compare:"$%savings%",
		button_label: "Calculate My Savings",
		operation: "button",
		error_text:"$0",
		callback: function( elem, data ){
			if ( data.loan_1 === 0 ) {
				// they didn't enter one of the fields
			} else {
				$(".tool").slideUp( "slow" );
				$(".results").slideDown( "slow" );
			}
		}
	});

	$(".go-back").click(function(){
		$(".results").slideUp( "slow" );
		$(".tool").slideDown( "slow" );
	});

});

