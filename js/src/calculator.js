

$(function(){

	$(".calculator").accrue({
		mode: "compare",
		response_output_div: ".result-breakdown",
		response_compare:'<h2 class="large-title">Congratulations!<br>You can save up to <span>$%savings%</span> in interest!</h2>'+
			'<table cellspacing="0" border=0>'+
				'<tr><th></th><th>Current Loan</th><th>Henrico FCU</th></tr>'+
				'<tr><td>Monthly Payment</td><td class="strike">$%b_payment_amount%</td><td class="green">$%a_payment_amount%</td></tr>'+
				'<tr><td>Total Payments</td><td class="strike">$%b_total_payments%</td><td class="green">$%a_total_payments%</td></tr>'+
				'<tr><td>Total Interest</td><td class="strike">$%b_total_interest%</td><td class="green">$%a_total_interest%</td></tr>'+
			'</table',
		button_label: "Calculate My Savings",
		operation: "button",
		error_text: "$0",
		callback: function( elem, data ){
			if ( data.loan_1 === 0 ) {
				// they didn't enter one of the fields
			} else {
				$(".tool").slideUp( "slow" );
				$(".results").slideDown( "slow" );
				ga('send', 'event', 'button', 'click', 'calculate', data.savings.toFixed(2) );
			}
		}
	});

	$(".go-back").click(function(){
		$(".results").slideUp( "slow" );
		$(".tool").slideDown( "slow" );
	});

});

