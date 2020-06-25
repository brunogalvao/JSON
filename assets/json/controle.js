$(document).ready(function(){
    $("button").click(function(){

      $.getJSON("assets/json/conteudo.json", function(result){

        $.each(result, function(i, menu){

            $.each(result, function(i, menu){
                console.log(result[0]);
            });

        });

      });
    });
  });