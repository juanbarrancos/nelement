
$(document).ready(function() {
	$(".nelement").focus(function(){
		var next = "#" + $(this).data("next");
		var length = $(this).data("length");
		if(!length){
			length = $(this).attr('maxLength');
		}
		nextElement(this, next, length);
	});
});

function nextElement(prev,next,length){
    $(document).on('keyup', prev, function (e) {
        if($(prev).val().length==length){
            $(next).focus();
        }
    });
}