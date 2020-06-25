$(document).ready(function(){
    $("body").html(function(){

      $.getJSON("assets/json/conteudo.json", function(result){

        $.each(result, function(i, menu){

            const obj = result[0].menu;
            const obj2 = result[0].gallery;
            const qtd = obj.length;
            const qtd2 = obj2.length;

            console.log(result); //mostra todo o JSON especifico
            
            console.log(obj); //mostra todo o JSON especifico

            $(function () {
                let text = "";
                let i = 0;

                for (let i = 0; i < qtd; ++i) {

                    // text += "<li><a href="+obj[i].link+">" + obj[i].name + "</a></li>";
                    text += "<li class='nav-item active'><a class='nav-link' href="+obj[i].link+">"+obj[i].name+"</a></li>"

                }

                $(".navbar-nav").html(text);
            });

            
            $('li').attr('src',obj2[0].img);

            $(" #gallery ").append(
                '<p>link: <b>' + obj2[1].img + '</b> </p>',
                '<p>link: <b>' + obj2[0].img + '</b> </p>',
            );

        });

      });
    });
  });