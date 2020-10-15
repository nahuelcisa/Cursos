$(document).ready(function(){
    var caja = $("#caja");

    $('#mostrar').hide();

    $('#mostrar').click(function(){

        $(this).hide();
        $('#ocultar').show();
        $("#caja").show("fast");
        
    });

    $('#ocultar').click(function(){

        $(this).hide();
        $('#mostrar').show();

        $("#caja").hide("fast");
    }); 
/*
    $("#todoEnUno").click(function(){
        $("#caja").fadeToggle('fast');
    });
*/
    $("#animar").click(function () { 

        caja.animate({marginLeft: '500px'
        , fontSize: '40px'
        , height: '100px'}
        , "slow")
        .animate({
                borderRadius: '900px',
                marginTop : '50px'
            },'slow')
        .animate({
            borderRadius: '0px',
            marginLeft : '0px'
            },'slow')
    .animate({
        borderRadius: '100px',
        marginTop : '0px'
            },'slow')
    .animate({marginLeft: '500px'
        , fontSize: '40px'
        , height: '100px'}
            ,"slow")
    });
    
});
