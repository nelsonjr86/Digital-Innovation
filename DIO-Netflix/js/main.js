// iniciando o carrousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoHeight: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

let olderMovie = $('.selectedMovie');

let nameMovie = $('.selectMovieName');
let olderName;

let descri = $('.selectMovieDescription');
let olderDescrip;

let clicked = false;

let listOfClassesOfMyElement;

//hover Shazam
$('.buttonShazam').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Shazam");
    descri.html("Billy Batson tem apenas 14 anos de idade, mas recebeu de um antigo mago o dom de se transformar em um super-herói adulto chamado Shazam. Ao gritar a palavra SHAZAM!, o adolescente se transforma nessa sua poderosa versão adulta para se divertir e testar suas habilidades. Contudo, ele precisa aprender a controlar seus poderes para enfrentar o malvado Dr. Thaddeus Sivana.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('Shazam');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "Shazam")
    {
        olderMovie.removeClass('Shazam');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover BATMANOCavaleirodasTrevaRenasce
$('.buttonBATMANOCavaleirodasTrevaRenasce').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("BATMANOCavaleirodasTrevaRenasce");
    descri.html("Após ser culpado pela morte de Harvey Dent e passar de herói a vilão, Batman desaparece. As coisas mudam com a chegada de uma ladra misteriosa, a Mulher-Gato, e Bane, um terrorista mascarado, que fazem Batman abandonar seu exílio forçado.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('BATMANOCavaleirodasTrevaRenasce');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "BATMANOCavaleirodasTrevaRenasce")
    {
        olderMovie.removeClass('BATMANOCavaleirodasTrevaRenasce');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});

//hover EsquadraoSuicida
$('.buttonEsquadraoSuicida').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("EsquadraoSuicida");
    descri.html("O governo dos Estados Unidos ordena o recrutamento dos piores criminosos para uma importante missão, que visa acabar com uma entidade misteriosa e aparentemente impossível de se derrotar. É justamente isso que o governo precisa, de bandidos que praticamente não têm nada a perder. Mas será que eles estão dispostos a arriscarem suas vidas em nome da lei?");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('EsquadraoSuicida');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "EsquadraoSuicida")
    {
        olderMovie.removeClass('EsquadraoSuicida');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover Aquaman
$('.buttonAquaman').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Aquaman");
        descri.html("A cidade de Atlantis, que já foi lar de uma das mais avançadas civilizações do mundo, agora é um reino submerso dominado pelo ganancioso Rei Orm. Com um vasto exército a seu dispor, Orm planeja conquistar tanto os demais reinos do oceano, quanto o mundo da superfície. Em seu caminho está Aquaman, meio-humano e meio-atlante, e verdadeiro herdeiro do trono. Com a ajuda da princesa Mera, Aquaman precisa recuperar o lendário Tridente de Atlan e aceitar seu destino como protetor das profundezas.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('Aquaman');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "Aquaman")
    {
        olderMovie.removeClass('Aquaman');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover Aves_de_Rapina
$('.buttonAves_de_Rapina').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Aves_de_Rapina");
    descri.html("Depois de se aventurar com o Coringa, Arlequina se junta a Canário Negro, Caçadora e Renee Montoya para salvar a vida de uma garotinha do criminoso Máscara Negra em Gotham City.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('Aves_de_Rapina');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "Aves_de_Rapina")
    {
        olderMovie.removeClass('Aves_de_Rapina');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});

//hover Liga_da_Justiça
$('.buttonLiga_da_Justiça').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Liga_da_Justiça");
    descri.html("Impulsionado pela restauração de sua fé na humanidade e inspirado pelo ato altruísta do Superman, Bruce Wayne convoca sua nova aliada Diana Prince para o combate contra um inimigo ainda maior, recém-despertado. Juntos, Batman e Mulher-Maravilha buscam e recrutam com agilidade um time de meta-humanos, mas mesmo com a formação da liga de heróis sem precedentes, poderá ser tarde demais para salvar o planeta de um catastrófico ataque.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('Liga_da_Justiça');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "Liga_da_Justiça")
    {
        olderMovie.removeClass('Liga_da_Justiça');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover Homem_de_Aco
$('.buttonHomem_de_Aco').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Homem_de_Aco");
    descri.html("Com a iminente destruição de Krypton, seu planeta natal, Jor-El e sua mulher procuram preservar a raça enviando o filho recém-nascido para a Terra. A nave espacial da criança aterrissa na fazenda de Jonathan e Martha Kent, que o batizam de Clark e o criam como seu próprio filho. Apesar das habilidades extraordinárias levarem o Clark adulto a viver à margem da sociedade, ele precisa se tornar um herói para salvar aqueles que ama de uma terrível ameaça.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('Homem_de_Aco');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "Homem_de_Aco")
    {
        olderMovie.removeClass('Homem_de_Aco');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover Mulher_Maravilha
$('.buttonMulher_Maravilha').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Mulher_Maravilha");
    descri.html("Treinada desde cedo para ser uma guerreira imbatível, Diana Prince nunca saiu da paradisíaca ilha em que é reconhecida como princesa das Amazonas. Quando o piloto Steve Trevor sofre um acidente e cai em uma praia do local, ela descobre que uma guerra sem precedentes está se espalhando pelo mundo e decide deixar seu lar certa de que pode parar o conflito. Lutando para acabar com a guerra, Diana percebe o alcance de seus poderes e sua verdadeira missão na Terra.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('Mulher_Maravilha');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "Mulher_Maravilha")
    {
        olderMovie.removeClass('Mulher_Maravilha');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover Mulher_Maravilha_1984
$('.buttonMulher_Maravilha_1984').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Mulher_Maravilha_1984");
    descri.html("Na década de 1980, a Mulher-Maravilha enfrenta dois novos inimigos: Max Lord e Mulher-Leopardo.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('Mulher_Maravilha_1984');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "Mulher_Maravilha_1984")
    {
        olderMovie.removeClass('Mulher_Maravilha_1984');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover LanternaVerde
$('.buttonLanternaVerde').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("LanternaVerde");
    descri.html("Hal Jordan, um vaidoso piloto de testes, recebe um poderoso anel e é recrutado por um esquadrão intergaláctico chamado Lanterna Verde para lutar contra um feroz inimigo que ameaça acabar com o equilíbrio do universo.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('LanternaVerde');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "LanternaVerde")
    {
        olderMovie.removeClass('LanternaVerde');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover comic
$('.buttonComic').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Comic");
    descri.html("Comic.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('Comic');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "Comic")
    {
        olderMovie.removeClass('Comic');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});

//hover HomemdeFerro3
$('.buttonHomemdeFerro3').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("HomemdeFerro3");
    descri.html("Depois de um inimigo reduzir o mundo de Tony Stark a destroços, o Homem de Ferro precisa aprender a confiar em seus instintos para proteger aqueles que ama, especialmente sua namorada, e lutar contra seu maior medo: o fracasso.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('HomemdeFerro3');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "HomemdeFerro3")
    {
        olderMovie.removeClass('HomemdeFerro3');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover ThorOMundoObscuro
$('.buttonThorOMundoObscuro').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("ThorOMundoObscuro");
    descri.html("Thor precisa contar com a ajuda de seus companheiros e até de seu traiçoeiro irmão Loki em um plano audacioso para salvar o universo. Entretanto, os caminhos de Thor se cruzam com Jane Foster e, dessa vez, a vida dela está realmente em perigo.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('ThorOMundoObscuro');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "ThorOMundoObscuro")
    {
        olderMovie.removeClass('ThorOMundoObscuro');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover CapitaoAmericaOPrimeiroVingador
$('.buttonCapitaoAmericaOPrimeiroVingador').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("CapitaoAmericaOPrimeiroVingador");
    descri.html("Steve Rogers é um jovem que participa de experiências visando a criação do supersoldado americano. Quando os oficiais militares conseguem transformá-lo em uma arma humana, eles percebem que não podem arriscar a vida do jovem nas batalhas de guerra.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('CapitaoAmericaOPrimeiroVingador');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "CapitaoAmericaOPrimeiroVingador")
    {
        olderMovie.removeClass('CapitaoAmericaOPrimeiroVingador');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover OsVingadores
$('.buttonOsVingadores').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("OsVingadores");
    descri.html("Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('OsVingadores');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "OsVingadores")
    {
        olderMovie.removeClass('OsVingadores');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover OIncrivelHulk
$('.buttonOIncrivelHulk').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("OIncrivelHulk");
    descri.html("O cientista Bruce Banner se esconde no Brasil enquanto busca desesperadamente a cura da mutação que o transforma em um monstro incontrolável. Só assim ele poderá novamente levar uma vida normal e ficar ao lado da mulher que ama. Porém, durante este processo, ele precisa lutar contra o Abominável, um novo inimigo que quer capturá-lo.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('OIncrivelHulk');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "OIncrivelHulk")
    {
        olderMovie.removeClass('OIncrivelHulk');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover HomemFormiga
$('.buttonHomemFormiga').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("HomemFormiga");
    descri.html("Dr. Hank Pym transforma um talentoso ladrão no herói Homem-Formiga. Ele quer impedir que seu antigo pupilo consiga replicar a fórmula da roupa que dá o poder do encolhimento, força sobre-humana e a capacidade de controlar um exército de formigas.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('HomemFormiga');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "HomemFormiga")
    {
        olderMovie.removeClass('HomemFormiga');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover CapitaoAmericaOSoldadoInvernal
$('.buttonCapitaoAmericaOSoldadoInvernal').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("CapitaoAmericaOSoldadoInvernal");
    descri.html("Após os eventos catastróficos em Nova York com Os Vingadores, Steve Rogers, também conhecido como Capitão América, segue tentando se ajustar ao mundo moderno. Porém, quando um colega da agência S.H.I.E.L.D. é atacado, Steve se vê preso em uma rede de intrigas que ameaça colocar o mundo em risco. Em parceria com a Viúva Negra e Falcão, seu novo aliado, o Capitão América tem que enfrentar um misterioso e inesperado inimigo, o Soldado Invernal.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('CapitaoAmericaOSoldadoInvernal');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "CapitaoAmericaOSoldadoInvernal")
    {
        olderMovie.removeClass('CapitaoAmericaOSoldadoInvernal');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover GalaxiadeGuardioes
$('.buttonGalaxiadeGuardioes').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("GalaxiadeGuardioes");
    descri.html("Das criadoras de “Matrix” e “Babylon 5”, esta série segue oito desconhecidos que passam a compartilhar sentimentos e habilidades enquanto tentam evitar seu extermínio.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('GalaxiadeGuardioes');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "GalaxiadeGuardioes")
    {
        olderMovie.removeClass('GalaxiadeGuardioes');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover Homem_de_Ferro
$('.buttonHomem_de_Ferro').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Homem_de_Ferro");
    descri.html("Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores. Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('Homem_de_Ferro');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "Homem_de_Ferro")
    {
        olderMovie.removeClass('Homem_de_Ferro');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover OsVingadores2
$('.buttonOsVingadores2').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("OsVingadores2");
    descri.html("Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron. Com o destino da Terra em jogo, Capitão América, Homem de Ferro, Thor, Hulk, Viúva Negra e Gavião Arqueiro terão que se unir para mais uma vez salvar a raça humana da extinção.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('OsVingadores2');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "OsVingadores2")
    {
        olderMovie.removeClass('OsVingadores2');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover Thor
$('.buttonThor').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Thor");
    descri.html("Como filho de Odin, rei dos deuses nórdicos, Thor logo herdará o trono de Asgard de seu idoso pai. Porém, no dia de sua coroação, Thor reage com brutalidade quando os inimigos dos deuses entram no palácio violando o tratado. Como punição, Odin manda Thor para a Terra. Enquanto seu irmão Loki conspira em Asgard, Thor, agora sem seus poderes, enfrenta sua maior ameaça.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('Thor');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "Thor")
    {
        olderMovie.removeClass('Thor');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover Homem_de_Ferro_2
$('.buttonHomem_de_Ferro_2').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Homem_de_Ferro_2");
    descri.html("Em um mundo ciente da existência do Homem de Ferro, o inventor bilionário Tony Stark sofre pressão de todos os lados para compartilhar sua tecnologia com as forças armadas. Ele resiste para divulgar os segredos de sua inigualável armadura, com medo de que estas informações caiam nas mãos erradas. Com a bela Pepper Potts e o amigo Rhodey Rhodes ao seu lado, Tony precisa forjar novas alianças e confrontar um inimigo poderoso.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('Homem_de_Ferro_2');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "Homem_de_Ferro_2")
    {
        olderMovie.removeClass('Homem_de_Ferro_2');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover Coringa
$('.buttonCoringa').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Coringa");
    descri.html("Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('Coringa');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "Coringa")
    {
        olderMovie.removeClass('Coringa');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});
//hover Batman_v_Superman
$('.buttonBatman_v_Superman').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Batman_v_Superman");
    descri.html("O confronto entre Superman e Zod em Metrópolis fez a população mundial se dividir sobre a presença de extraterrestres na Terra. Enquanto muitos consideram Superman um novo deus, há aqueles que entendem ser extremamente perigosa a existência de um ser tão poderoso sem qualquer tipo de controle. Bruce Wayne é um dos que acreditam nesta segunda hipótese. Sob o manto de um Batman violento e obcecado, ele enfrenta Superman enquanto o mundo se pergunta que tipo de herói precisa.");

    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('Batman_v_Superman');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "Batman_v_Superman")
    {
        olderMovie.removeClass('Batman_v_Superman');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});



$(document).ready(function() {
     
    $('.buttonShazam').on('click', function(event){
        clicked = true;
        olderMovie.removeClass();
        olderMovie.addClass('selectedMovie');
        olderMovie.addClass('Shazam');
        nameMovie.html("Shazam");
        descri.html("Billy Batson tem apenas 14 anos de idade, mas recebeu de um antigo mago o dom de se transformar em um super-herói adulto chamado Shazam. Ao gritar a palavra SHAZAM!, o adolescente se transforma nessa sua poderosa versão adulta para se divertir e testar suas habilidades. Contudo, ele precisa aprender a controlar seus poderes para enfrentar o malvado Dr. Thaddeus Sivana.");
    });
    $('.buttonBATMANOCavaleirodasTrevaRenasce').on('click', function(event){
        clicked = true;
        olderMovie.removeClass();
        olderMovie.addClass('selectedMovie');
        olderMovie.addClass('BATMANOCavaleirodasTrevaRenasce');

        nameMovie.html("BATMANOCavaleirodasTrevaRenasce");
        descri.html("Após ser culpado pela morte de Harvey Dent e passar de herói a vilão, Batman desaparece. As coisas mudam com a chegada de uma ladra misteriosa, a Mulher-Gato, e Bane, um terrorista mascarado, que fazem Batman abandonar seu exílio forçado.");
    })
    $('.buttonEsquadraoSuicida').on('click', function(event){
        clicked = true;

        olderMovie.removeClass();
        olderMovie.addClass('selectedMovie');
        olderMovie.addClass('EsquadraoSuicida');

        nameMovie.html("EsquadraoSuicida");
        descri.html("O governo dos Estados Unidos ordena o recrutamento dos piores criminosos para uma importante missão, que visa acabar com uma entidade misteriosa e aparentemente impossível de se derrotar. É justamente isso que o governo precisa, de bandidos que praticamente não têm nada a perder. Mas será que eles estão dispostos a arriscarem suas vidas em nome da lei?");
    });
    $('.buttonAquaman').on('click', function(event){
        clicked = true;

        olderMovie.removeClass();
        olderMovie.addClass('selectedMovie');
        olderMovie.addClass('Aquaman');
        nameMovie.html("Aquaman");
        descri.html("A cidade de Atlantis, que já foi lar de uma das mais avançadas civilizações do mundo, agora é um reino submerso dominado pelo ganancioso Rei Orm. Com um vasto exército a seu dispor, Orm planeja conquistar tanto os demais reinos do oceano, quanto o mundo da superfície. Em seu caminho está Aquaman, meio-humano e meio-atlante, e verdadeiro herdeiro do trono. Com a ajuda da princesa Mera, Aquaman precisa recuperar o lendário Tridente de Atlan e aceitar seu destino como protetor das profundezas.");
    });
    $('.buttonAves_de_Rapinae').on('click', function(event){
        clicked = true;

        olderMovie.removeClass();
        olderMovie.addClass('selectedMovie');
        olderMovie.addClass('Aves_de_Rapina');

        nameMovie.html("Aves_de_Rapina");
        descri.html("Depois de se aventurar com o Coringa, Arlequina se junta a Canário Negro, Caçadora e Renee Montoya para salvar a vida de uma garotinha do criminoso Máscara Negra em Gotham City.");
      });
      $('.buttonLiga_da_Justiça').on('click', function(event){
              clicked = true;

              olderMovie.removeClass();
              olderMovie.addClass('selectedMovie');
              olderMovie.addClass('Liga_da_Justiça');

              nameMovie.html("Liga_da_Justiça");
              descri.html("Impulsionado pela restauração de sua fé na humanidade e inspirado pelo ato altruísta do Superman, Bruce Wayne convoca sua nova aliada Diana Prince para o combate contra um inimigo ainda maior, recém-despertado. Juntos, Batman e Mulher-Maravilha buscam e recrutam com agilidade um time de meta-humanos, mas mesmo com a formação da liga de heróis sem precedentes, poderá ser tarde demais para salvar o planeta de um catastrófico ataque.");
      });
      $('.buttonHomem_de_Aco').on('click', function(event){
                    clicked = true;

                    olderMovie.removeClass();
                    olderMovie.addClass('selectedMovie');
                    olderMovie.addClass('Homem_de_Aco');

                    nameMovie.html("Homem_de_Aco");
                    descri.html("Com a iminente destruição de Krypton, seu planeta natal, Jor-El e sua mulher procuram preservar a raça enviando o filho recém-nascido para a Terra. A nave espacial da criança aterrissa na fazenda de Jonathan e Martha Kent, que o batizam de Clark e o criam como seu próprio filho. Apesar das habilidades extraordinárias levarem o Clark adulto a viver à margem da sociedade, ele precisa se tornar um herói para salvar aqueles que ama de uma terrível ameaça.");
      });
      $('.buttonMulher_Maravilha').on('click', function(event){
                    clicked = true;

                    olderMovie.removeClass();
                    olderMovie.addClass('selectedMovie');
                    olderMovie.addClass('Mulher_Maravilha');

                    nameMovie.html("Mulher_Maravilha");
                    descri.html("Treinada desde cedo para ser uma guerreira imbatível, Diana Prince nunca saiu da paradisíaca ilha em que é reconhecida como princesa das Amazonas. Quando o piloto Steve Trevor sofre um acidente e cai em uma praia do local, ela descobre que uma guerra sem precedentes está se espalhando pelo mundo e decide deixar seu lar certa de que pode parar o conflito. Lutando para acabar com a guerra, Diana percebe o alcance de seus poderes e sua verdadeira missão na Terra.");
      });
      $('.buttonMulher_Maravilha_1984').on('click', function(event){
                    clicked = true;

                    olderMovie.removeClass();
                    olderMovie.addClass('selectedMovie');
                    olderMovie.addClass('Mulher_Maravilha_1984');

                    nameMovie.html("Mulher_Maravilha_1984");
                    descri.html("Na década de 1980, a Mulher-Maravilha enfrenta dois novos inimigos: Max Lord e Mulher-Leopardo.");
      });
      $('.buttonBatman_v_Superman').on('click', function(event){
                          clicked = true;

                          olderMovie.removeClass();
                          olderMovie.addClass('selectedMovie');
                          olderMovie.addClass('Batman_v_Superman');

                          nameMovie.html("Batman_v_Superman");
                          descri.html("O confronto entre Superman e Zod em Metrópolis fez a população mundial se dividir sobre a presença de extraterrestres na Terra. Enquanto muitos consideram Superman um novo deus, há aqueles que entendem ser extremamente perigosa a existência de um ser tão poderoso sem qualquer tipo de controle. Bruce Wayne é um dos que acreditam nesta segunda hipótese. Sob o manto de um Batman violento e obcecado, ele enfrenta Superman enquanto o mundo se pergunta que tipo de herói precisa.");
      });
      $('.buttonCoringa').on('click', function(event){
                          clicked = true;

                          olderMovie.removeClass();
                          olderMovie.addClass('selectedMovie');
                          olderMovie.addClass('Coringa');

                          nameMovie.html("Coringa");
                          descri.html("Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.");
      });
      $('.buttonBatman_v_Superman').on('click', function(event){
                    clicked = true;

                    olderMovie.removeClass();
                    olderMovie.addClass('selectedMovie');
                    olderMovie.addClass('Batman_v_Superman');

                    nameMovie.html("Batman_v_Superman");
                    descri.html("O confronto entre Superman e Zod em Metrópolis fez a população mundial se dividir sobre a presença de extraterrestres na Terra. Enquanto muitos consideram Superman um novo deus, há aqueles que entendem ser extremamente perigosa a existência de um ser tão poderoso sem qualquer tipo de controle. Bruce Wayne é um dos que acreditam nesta segunda hipótese. Sob o manto de um Batman violento e obcecado, ele enfrenta Superman enquanto o mundo se pergunta que tipo de herói precisa.");
      });
      $('.buttonCoringa').on('click', function(event){
                    clicked = true;

                    olderMovie.removeClass();
                    olderMovie.addClass('selectedMovie');
                    olderMovie.addClass('Coringa');

                    nameMovie.html("Coringa");
                    descri.html("Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.");
      });
      $('.buttonLanternaVerde').on('click', function(event){
                    clicked = true;

                    olderMovie.removeClass();
                    olderMovie.addClass('selectedMovie');
                    olderMovie.addClass('LanternaVerde');

                    nameMovie.html("LanternaVerde");
                    descri.html("Hal Jordan, um vaidoso piloto de testes, recebe um poderoso anel e é recrutado por um esquadrão intergaláctico chamado Lanterna Verde para lutar contra um feroz inimigo que ameaça acabar com o equilíbrio do universo.");
      });
      $('.buttonComic').on('click', function(event){
                    clicked = true;

                    olderMovie.removeClass();
                    olderMovie.addClass('selectedMovie');
                    olderMovie.addClass('Comic');

                    nameMovie.html("Comic");
                    descri.html("Comic.");
      });
      $('.buttonHomemdeFerro3').on('click', function(event){
                          clicked = true;

                          olderMovie.removeClass();
                          olderMovie.addClass('selectedMovie');
                          olderMovie.addClass('HomemdeFerro3');

                          nameMovie.html("HomemdeFerro3");
                          descri.html("Depois de um inimigo reduzir o mundo de Tony Stark a destroços, o Homem de Ferro precisa aprender a confiar em seus instintos para proteger aqueles que ama, especialmente sua namorada, e lutar contra seu maior medo: o fracasso.");
      });
      $('.buttonThorOMundoObscuro').on('click', function(event){
                          clicked = true;

                          olderMovie.removeClass();
                          olderMovie.addClass('selectedMovie');
                          olderMovie.addClass('ThorOMundoObscuro');

                          nameMovie.html("ThorOMundoObscuro");
                          descri.html("Steve Rogers é um jovem que participa de experiências visando a criação do supersoldado americano. Quando os oficiais militares conseguem transformá-lo em uma arma humana, eles percebem que não podem arriscar a vida do jovem nas batalhas de guerra.");
      });
      $('.buttonCapitaoAmericaOPrimeiroVingador').on('click', function(event){
                          clicked = true;

                          olderMovie.removeClass();
                          olderMovie.addClass('selectedMovie');
                          olderMovie.addClass('CapitaoAmericaOPrimeiroVingador');

                          nameMovie.html("CapitaoAmericaOPrimeiroVingador");
                          descri.html("Steve Rogers é um jovem que participa de experiências visando a criação do supersoldado americano. Quando os oficiais militares conseguem transformá-lo em uma arma humana, eles percebem que não podem arriscar a vida do jovem nas batalhas de guerra.");
      });
      $('.buttonOsVingadores').on('click', function(event){
                          clicked = true;

                          olderMovie.removeClass();
                          olderMovie.addClass('selectedMovie');
                          olderMovie.addClass('OsVingadores');

                          nameMovie.html("OsVingadores");
                          descri.html("Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.");
      });
      $('.buttonOIncrivelHulk').on('click', function(event){
                          clicked = true;

                          olderMovie.removeClass();
                          olderMovie.addClass('selectedMovie');
                          olderMovie.addClass('OIncrivelHulk');

                          nameMovie.html("OIncrivelHulk");
                          descri.html("O cientista Bruce Banner se esconde no Brasil enquanto busca desesperadamente a cura da mutação que o transforma em um monstro incontrolável. Só assim ele poderá novamente levar uma vida normal e ficar ao lado da mulher que ama. Porém, durante este processo, ele precisa lutar contra o Abominável, um novo inimigo que quer capturá-lo.");
      });
      $('.buttonHomemFormiga').on('click', function(event){
                          clicked = true;

                          olderMovie.removeClass();
                          olderMovie.addClass('selectedMovie');
                          olderMovie.addClass('HomemFormiga');

                          nameMovie.html("HomemFormiga");
                          descri.html("Dr. Hank Pym transforma um talentoso ladrão no herói Homem-Formiga. Ele quer impedir que seu antigo pupilo consiga replicar a fórmula da roupa que dá o poder do encolhimento, força sobre-humana e a capacidade de controlar um exército de formigas.");
      });
      $('.buttonCapitaoAmericaOSoldadoInvernal').on('click', function(event){
                          clicked = true;

                          olderMovie.removeClass();
                          olderMovie.addClass('selectedMovie');
                          olderMovie.addClass('CapitaoAmericaOSoldadoInvernal');

                          nameMovie.html("CapitaoAmericaOSoldadoInvernal");
                          descri.html("Após os eventos catastróficos em Nova York com Os Vingadores, Steve Rogers, também conhecido como Capitão América, segue tentando se ajustar ao mundo moderno. Porém, quando um colega da agência S.H.I.E.L.D. é atacado, Steve se vê preso em uma rede de intrigas que ameaça colocar o mundo em risco. Em parceria com a Viúva Negra e Falcão, seu novo aliado, o Capitão América tem que enfrentar um misterioso e inesperado inimigo, o Soldado Invernal.");
      });
      $('.buttonGalaxiadeGuardioes').on('click', function(event){
                          clicked = true;

                          olderMovie.removeClass();
                          olderMovie.addClass('selectedMovie');
                          olderMovie.addClass('GalaxiadeGuardioes');

                          nameMovie.html("GalaxiadeGuardioes");
                          descri.html("O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia.");
      });
      $('.buttonHomem_de_Ferro').on('click', function(event){
                          clicked = true;

                          olderMovie.removeClass();
                          olderMovie.addClass('selectedMovie');
                          olderMovie.addClass('Homem_de_Ferro');

                          nameMovie.html("Homem_de_Ferro");
                          descri.html("Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores. Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime.");
      });
      $('.buttonOsVingadores2').on('click', function(event){
                          clicked = true;

                          olderMovie.removeClass();
                          olderMovie.addClass('selectedMovie');
                          olderMovie.addClass('OsVingadores2');

                          nameMovie.html("OsVingadores2");
                          descri.html("Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron. Com o destino da Terra em jogo, Capitão América, Homem de Ferro, Thor, Hulk, Viúva Negra e Gavião Arqueiro terão que se unir para mais uma vez salvar a raça humana da extinção.");
      });
      $('.buttonThor').on('click', function(event){
                          clicked = true;

                          olderMovie.removeClass();
                          olderMovie.addClass('selectedMovie');
                          olderMovie.addClass('Thor');

                          nameMovie.html("Thor");
                          descri.html("Como filho de Odin, rei dos deuses nórdicos, Thor logo herdará o trono de Asgard de seu idoso pai. Porém, no dia de sua coroação, Thor reage com brutalidade quando os inimigos dos deuses entram no palácio violando o tratado. Como punição, Odin manda Thor para a Terra. Enquanto seu irmão Loki conspira em Asgard, Thor, agora sem seus poderes, enfrenta sua maior ameaça.");
      });
      $('.buttonHomem_de_Ferro_2').on('click', function(event){
                                clicked = true;

                                olderMovie.removeClass();
                                olderMovie.addClass('selectedMovie');
                                olderMovie.addClass('Homem_de_Ferro_2');

                                nameMovie.html("Homem_de_Ferro_2");
                                descri.html("Em um mundo ciente da existência do Homem de Ferro, o inventor bilionário Tony Stark sofre pressão de todos os lados para compartilhar sua tecnologia com as forças armadas. Ele resiste para divulgar os segredos de sua inigualável armadura, com medo de que estas informações caiam nas mãos erradas. Com a bela Pepper Potts e o amigo Rhodey Rhodes ao seu lado, Tony precisa forjar novas alianças e confrontar um inimigo poderoso.");
      });

});



