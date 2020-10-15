$(document).ready(function () {

    // Mover elemento por la pagina
    $('.elemento').draggable();

    // Redimensionar
    $('.elemento').resizable();

    //Seleccionar y ordenar elementos

    //$('.listaSeleccionada').selectable();

    $('.listaSeleccionada').sortable();


    // drop
    $('#elementoMovido').draggable();
    $('#area').droppable({
        drop: function() { 
            console.log("soltaste algo adentro");
        }
    });

    // Efectos

    $("#lanzaEfecto").click(function(){
        $(".cajaEfectos").toggle("shake",4000);
    });

    // Tooltip

    $(document).tooltip();

    // Dialog
    $("#lanzaPopup").click(function(){
        $("#popup").dialog(); 
    });
    

    //Datepicker

    $("#calendario").datepicker();

    // Tabs

    $("#pestanas").tabs();

});