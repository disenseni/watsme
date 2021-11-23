$(document).ready(function () {

	$("#WTCIDFilter").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$(".WTCIDListData .card-filter").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	$(document).on('keydown', function (event) {
		if (event.key == "Escape") {
			event.preventDefault();
			var kp = jQuery.Event("keyup");
			kp.which = kp.keyCode = 8;
			jQuery('.searchbox').val('').trigger(kp);
			var sZ = $('.WTCIDSelection');
			if ($(sZ).hasClass('active')) {
				$(sZ).removeClass('active');
			}
		}
	});

});