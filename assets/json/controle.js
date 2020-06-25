$(document).ready(function(){
    $("body").html(function(){

      $.getJSON("assets/json/conteudo.json", function(result){

        $.each(result, function(i, menu){

            var obj = result[0].menu;
            var obj2 = result[0].gallery;
            var qtd = obj.length;
            var qtd2 = obj2.length;

            console.log(obj); //mostra todo o JSON

            $(function () {
                var text = "";
                var i = 0;

                for (let i = 0; i < qtd; ++i) {

                    text += "<li><a href="+obj[i].link+">" + obj[i].name + "</a></li>";

                }

                $("nav > ul").html(text);
            });

            // $(" #menu ").append(

            //     '<p>Nome: <b>' + obj[1].name + '</b> </p>',
            //     '<p>Link: <b>' + obj[1].link + '</b> </p>',
                

            // );
            
            $('li').attr('src',obj2[0].img);

            $(" #gallery ").append(
                '<p>link: <b>' + obj2[1].img + '</b> </p>',
                '<p>link: <b>' + obj2[0].img + '</b> </p>',
            );

        });

      });
    });
  });