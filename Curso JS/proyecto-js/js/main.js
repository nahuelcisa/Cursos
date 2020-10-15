$(document).ready(function(){


    // Slider
if(window.location.href.indexOf('index') > -1){ 
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        captions: true,
        slideWidth: 1200,
        auto: true,
        pause: 2500
    });
}

    // Posts
    if(window.location.href.indexOf('index') > -1){ 
    var posts = [
        {
            title: 'prueba de titulo 1',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada feugiat turpis. Suspendisse consequat quam sed lectus maximus, eu faucibus enim molestie. In aliquam ex interdum nisl commodo pulvinar. Cras tempor lectus in lacus mollis volutpat. Aenean blandit suscipit sem at pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc interdum arcu purus, in interdum ex luctus ac. Pellentesque ac dignissim urna, quis laoreet magna.'
        },
        {
            title: 'prueba de titulo 2',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada feugiat turpis. Suspendisse consequat quam sed lectus maximus, eu faucibus enim molestie. In aliquam ex interdum nisl commodo pulvinar. Cras tempor lectus in lacus mollis volutpat. Aenean blandit suscipit sem at pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc interdum arcu purus, in interdum ex luctus ac. Pellentesque ac dignissim urna, quis laoreet magna.'
        },
        {
            title: 'prueba de titulo 3',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada feugiat turpis. Suspendisse consequat quam sed lectus maximus, eu faucibus enim molestie. In aliquam ex interdum nisl commodo pulvinar. Cras tempor lectus in lacus mollis volutpat. Aenean blandit suscipit sem at pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc interdum arcu purus, in interdum ex luctus ac. Pellentesque ac dignissim urna, quis laoreet magna.'
        },
        {
            title: 'prueba de titulo 4',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada feugiat turpis. Suspendisse consequat quam sed lectus maximus, eu faucibus enim molestie. In aliquam ex interdum nisl commodo pulvinar. Cras tempor lectus in lacus mollis volutpat. Aenean blandit suscipit sem at pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc interdum arcu purus, in interdum ex luctus ac. Pellentesque ac dignissim urna, quis laoreet magna.'
        },
        {
            title: 'prueba de titulo 5',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada feugiat turpis. Suspendisse consequat quam sed lectus maximus, eu faucibus enim molestie. In aliquam ex interdum nisl commodo pulvinar. Cras tempor lectus in lacus mollis volutpat. Aenean blandit suscipit sem at pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc interdum arcu purus, in interdum ex luctus ac. Pellentesque ac dignissim urna, quis laoreet magna.'
        },
        {
            title: 'prueba de titulo 6',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada feugiat turpis. Suspendisse consequat quam sed lectus maximus, eu faucibus enim molestie. In aliquam ex interdum nisl commodo pulvinar. Cras tempor lectus in lacus mollis volutpat. Aenean blandit suscipit sem at pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc interdum arcu purus, in interdum ex luctus ac. Pellentesque ac dignissim urna, quis laoreet magna.'
        }
    ];

    posts.forEach((item,index)=>{
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p> 
            ${item.content}
        </p>
        <a href="#" class="button-more">Leer mas</a>
        </article>
        `;
        $("#posts").append(post);
    });

    }
    // Selector de tema

    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });

    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });

    // Scroll arriba de la web

    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },500);

        return false;
    });

    // Login falso

    $("#login form").submit(function() {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name",form_name);
    });
    
    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != 'undefined'){
        var about_p = $("#about p");
        about_p.html("<br><strong>Bienvenido, " + form_name+ "</strong>");
        about_p.append("<a href='#'  id='logout'>Cerrar sesion </a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    // ACORDEON

    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    // RELOJ

    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){

            var reloj = moment().format("h:mm:ss a");
            
            $("#reloj").html(reloj);

        },1000);
    }


    // Validacion
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }



});