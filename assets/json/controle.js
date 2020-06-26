$(document).ready(function(){
    $("body").html(function(){

      $.getJSON("assets/json/conteudo.json", function(result){

        $.each(result, function(index){


            //menu
            const obj = result[0].menu;
            const qtd = obj.length;
            //galeria
            const obj2 = result[0].gallery;
            const qtd2 = obj2.length;

            //Header
            const obj3 = result[0].header;
            const qtd3 = obj3.length;

            //premios
            const obj4 = result[0].premios;
            const qtd4 = obj4.length;
            
            //aceleradores
            const obj5 = result[0].aceleradores;
            const qtd5 = obj5.length;
            
            //numeroSorte
            const obj6 = result[0].numeroSorte;
            const qtd6 = obj6.length;
            
            //participar
            const obj7 = result[0].participar;
            const qtd7 = obj7.length;

            //download
            const obj8 = result[0].download;
            const qtd8 = obj8.length;
            
            //produtosParticipantes
            const obj9 = result[0].produtosParticipantes;
            const qtd9 = obj9.length;
            
            //footer
            const obj10 = result[0].footer;
            const qtd10 = obj10.length;
            
            //sorteio
            const obj11 = result[0].sorteio;
            const qtd11 = obj11.length;


            // console.log(result); //mostra todo o JSON especifico

            console.log(qtd3); //mostra todo o JSON especifico

            $(function () {
                let text = "";
                let i = 0;

                for (let i = 0; i < qtd; ++i) {

                    // text += "<li><a href="+obj[i].link+">" + obj[i].name + "</a></li>";
                    text += "<li class='nav-item'><a class='nav-link text-light font-weight-bold' href="+obj[i].link+">"+obj[i].name+"</a></li>"

                }

                $(".navbar-nav").html(text);
            });


            $('.header').html("<div class='col-sm-6'><img src='"+obj3.left+"' alt=''></div>");

            

        });

      });
    });
  });