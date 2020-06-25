$(document).ready(function(){
   
    $("p").html("Hello <b>world!</b>");


    $.ajax({
        type:'get',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno   
        pageEncoding:"utf-8",
        cache: false,
        processData: false,
		url: 'conteudo.json',//Definindo o arquivo onde serão buscados os dados
        success: function( dados ){
			for( var i=0;dados.length > i; i++ ){
                //Adicionando registros retornados na tabela
                console.log(dados);
                $(' #mostra ').append('<section class="col-md-4" id='+dados[i].id_promo+'><h3>'+dados[i].preco+'</h3><h4>'+dados[i].descricao+'</h4><p>'+dados[i].img+'</p></section>');
			}
		}
    });
    
    // var data = 'conteudo.json';
    // var estabs = '';

    // console.log(menu.name);

    // $.each(data, function(index, menu) {
       
    //     estabs += '<div class="estabelecimento">'
    //     + '<div class="nome">'+menu.name+'</div>'
    //     + '<div class="cidade">'+menu.link+'</div>'
    //     + '<div class="telefone">'+element.telefone+'</div>'
    //     + '</div>';

    // });
     
    // $("#mostra").html(estabs);

});