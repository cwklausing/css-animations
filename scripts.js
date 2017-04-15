$(function() {
	function bounce () {
		$(this).toggleClass( 'bounce' );
	}

    $('.thing').on( 'click', bounce );
});