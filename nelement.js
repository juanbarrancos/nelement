nextElement("#con_banco_DC","#con_banco_cuenta",2);

    function nextElement(prev,next,lenght){
        $(document).on('keyup', prev, function (e) {
            if($(prev).val().length==lenght){
                $(next).focus();
            }
        });
    }