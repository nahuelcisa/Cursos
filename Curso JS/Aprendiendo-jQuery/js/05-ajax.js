$(document).ready(function () {
    
    // Load
   // $("#datos").load("https://reqres.in/");

    // Get y Post

    $.get("https://reqres.in/api/users?page=2",{page: 3},function(response){
        response.data.forEach((elemento,index) => {
            $("#datos").append("<p>"+ elemento.first_name + " " + elemento.last_name + "</p>");
        });
    });


    

        $("#formulario").submit(function(e){

            e.preventDefault();

            var usuario = {
                name: $('input[name="name"]').val(),
                web: $('input[name="web"]').val()
            };
        
            //console.log(usuario);
/*
            $.post($(this).attr("action"),usuario,function(response){
                console.log(response);
        }).done(function(){
            alert("Usuario creado correctamente");
        });
*/

            $.ajax({
                type:'POST',
                dataType: 'json',
                contentTtype: 'aplication/json',
                url: $(this).attr("action"),
                data: usuario,
                beforeSend: function(){
                    console.log("Enviando usuario...");
                },
                success: function(response){
                    console.log(response);
                },
                error: function(){
                    console.log("ocurrio un error");
                },
                timeout: 1000
            });

            return false;
    });


});