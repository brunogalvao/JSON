$(document).ready(function(){
    
    $("body").html(function(){

      $.getJSON("assets/json/conteudo.json", function(result){

        $.each(result, function(index){

            //menu
            const obj = result[0].menu;
            const qtd = obj.length;


            $(function () {
                let text = "";
                let i = 0;

                for (let i = 0; i < qtd; ++i) {

                    text += "<li class='nav-item'><a class='nav-link text-light font-weight-bold' href="+obj[i].link+">"+obj[i].name+"</a></li>"

                }

                $(".navbar-nav").html(text);

            });




            //header
            
            $(' .header ').append(
              '<div class="col-sm-8"><img src='+result[0].header.left+' class="img-fluid" alt="'+result[0].header.altLeft+'"></div><div class="col-sm-4 pt-5 pb-5"><span><p class="font-weight-bolder mb-0">'+result[0].header.text1+'</p><p class="font-weight-bolder mb-0">'+result[0].header.text2+'</p><p>'+result[0].header.text3+'</p></span><img src='+result[0].header.right+' class="img-fluid"></div>'
            );
              
            //premios

            // $(function(){

            //   let pq = Object.keys(result[0].premios).length;
            //   let premio = '';
            //   let col = 12 / pq;

            //   for (let i = 0; i < pq; i++) {
                

            //     if( i == 0 ){
            //       let prod1 = 'left';
            //       let path = result[0].premios;

            //       premio += "<div class='col-sm-" + col + " pt-5'><img src="+ path + prod1 +"/></div>"; 
            //     } 
            //     if ( i == 1 ) {
            //       let prod1 = 'midle';
            //       premio += "<div class='col-sm-" + col + " pt-5'>"+ prod1 +"</div>"; 
            //     } else {
            //       let prod1 = 'right';
            //       premio += "<div class='col-sm-" + col + " pt-5'>"+ prod1 +"</div>"; 
            //     }

            //   }

            //   console.log(premio);
            //   $(' .premios > .container > .row ').append(premio);
            // });
              
            $(' .premios > .container > .row ').append(
                '<div class="col-sm-4 pt-5"><img src='+ result[0].premios.left +' class="img-fluid" /></div><div class="col-sm-4 pt-5"><img src='+ result[0].premios.midle +' class="img-fluid" /></div><div class="col-sm-4 pt-5"><img src='+ result[0].premios.right +' class="img-fluid" /></div>'
            );

            //aceleradores

            $(' .aceleradores > .container > .row ').append('<div class="col-sm-6 pt-5 pb-5"><img src='+ result[0].aceleradores.left +' class="img-fluid acelerador__borda" /></div><div class="col-sm-6 pt-5 pb-5"><img src='+ result[0].aceleradores.right +' class="img-fluid acelerador__borda" /></div>');
                

            //participar

            $(' .participar ').append('<div class="col-sm-12"><h1 class="text-center font-weight-bolder text-uppercase">'+result[0].participar.titulo+'</h1></div><div class="col-sm-4 pt-5 pb-5"><div class="card p-3 card1"><h2 class="text-center font-weight-bolder">'+result[0].participar.rows[0].number+'</h2><p>'+result[0].participar.rows[0].text+'</p></div></div><div class="col-sm-4 pt-5 pb-5"><div class="card p-3 card2"><h2 class="text-center font-weight-bolder">'+result[0].participar.rows[1].number+'</h2><p>'+result[0].participar.rows[1].text+'</p></div></div><div class="col-sm-4 pt-5 pb-5"><div class="card p-3 card3"><h2 class="text-center font-weight-bolder">'+result[0].participar.rows[2].number+'</h2><p>'+result[0].participar.rows[2].text+'</p></div></div>');

            //numeroSorte

            $(' .numeroSorte ').append('<div class="col-sm-12"><h1 class="text-center font-weight-bolder text-uppercase">'+result[0].numeroSorte.titulo+'</h1></div><div class="col-sm-12 pt-5"><h3 class="text-center">'+result[0].numeroSorte.text+'</h3></div><div class="col-sm-12 col-lg-6 offset-lg-3 mt-5 btn"><a class="pt-4 pb-4" href="'+result[0].numeroSorte.link+'">'+result[0].numeroSorte.buttom+'</a></div>');

            //sorteio
            
            $(' .sorteio ').append('<div class="col-sm-12 pt-5"><h1 class="font-weight-bolder text-uppercase text-center">'+result[0].sorteio.titulo+'</h1></div><div class="col-sm-12 pt-5"><h2 class="text-center">'+result[0].sorteio.data[0].dia+'</h2></div><div class="col-sm-12 pt-5 sorteioGanhador"><ul class="pl-0"><li>'+result[0].sorteio.data[0].ganhadores[0].nome+'</li><li>'+result[0].sorteio.data[0].ganhadores[0].premio+'</li><li>'+result[0].sorteio.data[0].ganhadores[0].condor+'</li></ul><ul class="pt-3 pl-0"><li>'+result[0].sorteio.data[0].ganhadores[1].nome+'</li><li>'+result[0].sorteio.data[0].ganhadores[1].premio+'</li><li>'+result[0].sorteio.data[0].ganhadores[1].condor+'</li></ul><ul class="pt-3 pl-0"><li>'+result[0].sorteio.data[0].ganhadores[2].nome+'</li><li>'+result[0].sorteio.data[0].ganhadores[2].premio+'</li><li>'+result[0].sorteio.data[0].ganhadores[2].condor+'</li></ul></div></div><div class="col-sm-12 pt-5"><h2 class="text-center">'+result[0].sorteio.data[1].dia+'</h2><div class="col-sm-12 sorteioGanhador pl-0 pr-0"><ul class="pt-3 pl-0"><li>'+result[0].sorteio.data[1].ganhadores[0].nome+'</li><li>'+result[0].sorteio.data[1].ganhadores[0].premio+'</li><li>'+result[0].sorteio.data[1].ganhadores[0].condor+'</li></ul><ul class="pt-3 pl-0"><li>'+result[0].sorteio.data[1].ganhadores[1].nome+'</li><li>'+result[0].sorteio.data[1].ganhadores[1].premio+'</li><li>'+result[0].sorteio.data[1].ganhadores[1].condor+'</li></ul><ul class="pt-3 pl-0"><li>'+result[0].sorteio.data[1].ganhadores[2].nome+'</li><li>'+result[0].sorteio.data[1].ganhadores[2].premio+'</li><li>'+result[0].sorteio.data[1].ganhadores[2].condor+'</li></ul></div></div>');
            
            
            
            
            

            //gallery
            $(" #img1 > img ").attr('src', result[0].gallery[0].img);
            $(" #img1 > .carousel-caption > div").html('<p>'+result[0].gallery[0].alt+'</p>');

            $(" #img2 > img ").attr('src', result[0].gallery[1].img);
            $(" #img2 > .carousel-caption > div").html(result[0].gallery[1].alt);

            $(" #img3 > img ").attr('src', result[0].gallery[2].img);
            $(" #img3 .carousel-caption > div").html(result[0].gallery[2].alt);


            //download
            $(' .download > .container > .row ').append('<div class="col-sm-12 col-lg-6 pt-5 pb-5"><h3 class="font-weight-bolder text-uppercase text-center">'+result[0].download.titulo+'</h3></div><div class="col-sm-6 col-lg-3 pt-5 pb-5"><a href="'+result[0].download.linkA+'"><img class="mx-auto d-block" src="'+result[0].download.android+'" /></a></div><div class="col-sm-6 col-lg-3 pt-5 pb-5"><a href="'+result[0].download.linkI+'"><img class="mx-auto d-block" src="'+result[0].download.iphone+'" /></a></div>');


            //produtosParticipantes
            $(' .produtosParticipantes > .container > .row ').append('<div class="col-sm-12"><h1 class="font-weight-bolder text-uppercase text-center text-light">'+result[0].produtosParticipantes.titulo+'</h1><img class="pt-5 mx-auto d-none figure-img img-fluid d-sm-block" src="'+result[0].produtosParticipantes.desktop+'"/><img class="mx-auto figure-img img-fluid d-block d-none d-sm-block d-md-none" src="'+result[0].produtosParticipantes.mobile+'"/></div>');


            //footer
            $(' .footer > .container > .row ').append('<div class="col-sm-12 legal__texto"><p class="text-center">'+result[0].footer.legal2+'</p><p class="text-center">'+result[0].footer.legal+'</p></div><div class="col-sm-2 align-middle text-center pt-4 pb-4"><img src="./assets/images/logo.png"/></div><div class="col-sm-7 pt-4 pb-4"><p class="text-center mb-0 h-100 align-middle">'+result[0].footer.title+'</p></div><div class="col-sm-3 pt-4 pb-4"><ol class="redeSociais mb-0"><li><a href="'+result[0].footer.midia[0].fb+'"><img src="./assets/images/redesocial/facebook.svg"/></a></li><li><a href="'+result[0].footer.midia[1].ig+'"><img src="./assets/images/redesocial/instagram.svg"/></a></li><li><a href="'+result[0].footer.midia[2].tw+'"><img src="./assets/images/redesocial/twitter.svg"/></a></li><li><a href="'+result[0].footer.midia[3].yt+'"><img src="./assets/images/redesocial/youtube.svg"/></a></li></ol></div>');

        });

      });
    });


  });