$(document).ready(function(){

    reloadLinks();

    $("#addButton")
    .removeAttr('disabled')
    .click(function(){
        $("#menu").append('<li><a href="'+$("#addLink").val()+'"></a></li>');

        $("#addLink").val('');
        reloadLinks();
    });

});

function reloadLinks(){

    $('a').each(function(index){
        var that = $(this)
        var enlace = that.attr("href");
        
        //that.attr('target','_blank'); al entrar a un href se abre en una pestania nueva

        that.text(enlace);
    });
}