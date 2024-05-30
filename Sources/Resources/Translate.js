var spanish = {
First:"Inicio",
Team:"Clan",
Start:"¡Bienvenido a MAV!",
Welcome: "¡Hola y bienvenido a Mav! Somos un clan en crecimiento y nos emociona contar tanto con jugadores experimentados como con recién llegados a Death Ball. Si estás empezando en el juego y buscas aprender y mejorar, estás en el lugar adecuado. Contamos con miembros experimentados dispuestos a compartir sus conocimientos y ayudarte a mejorar, sin toxicidad. Para unirte a MAV, simplemente realizamos una pequeña prueba para conocerte mejor y asegurarnos de que encuentres tu lugar en nuestro clan. Así que, si estás buscando unirte a una comunidad divertida y acogedora. ¡Bienvenido a Mav!",
News: "Novedades",
Community: "Comunidad",
Info:"En MAV nos esforzamos para que todos se puedan divertir y pasarla bien, por lo que en nuestra comunidad hacemos eventos, sorteos y torneos con grandes recompensas. También puedes intercambiar objetos, y convivir con los demás miembros para hacer amigos. ¿Te gustaría unirte a nuestra comunidad?",
Clan:"Entrar al clan",
Join: "Para poder entrar al clan, se tiene que realizar una prueba de habilidad, hay dos tipos de pruebas con diferentes dificultades explicadas a continuación:",
Test: "Tipo de prueba #1",
TestC: "Prueba de habilidades con personaje",
TestWOC: "Prueba sin habilidades de personaje",
spamClick: "Spam click sin desviar la pelota",
Test2: "Tipo de prueba #2",
Test2v2C: "Prueba 2vs2 de habilidades con personaje (Puedes escoger a tu compañero)",
Test2vs2: "Prueba 2vs2 sin habilidades de personaje (Puedes escoger a tu compañero)",
Focus: "Focus todos contra ti",
Draws: "Dibujos",
SeeDraws: "Aquí estan los dibujos que hace la comunidad, para verlos, da click en la pelota:",
dMAV:"Dibujos MAV"
};

var portuguese = {
First:"Começar",
Team:"Clã",
Start:"Bem-vindo ao MAV!",
Welcome: "Olá e bem-vindo à Mav! Somos um clã em crescimento e estamos entusiasmados por ter jogadores experientes e novatos no Death Ball. Se você está apenas começando no jogo e quer aprender e melhorar, você está no lugar certo. Temos membros experientes dispostos a compartilhar seus conhecimentos e ajudá-lo a melhorar, sem toxicidade. Para ingressar no MAV, basta fazer um pequeno teste para conhecê-lo melhor e garantir que você encontre seu lugar em nosso clã. Então, se você deseja ingressar em uma comunidade divertida e acolhedora. Bem-vindo à Mav!",
News: "Novidades",
Community: "Comunidade",
Info:"No MAV nos esforçamos para que todos possam se divertir e se divertir, por isso em nossa comunidade realizamos eventos, sorteios e torneios com grandes recompensas. Você também pode trocar itens e conviver com outros membros para fazer amigos. Você gostaria de se juntar à nossa comunidade?",
Clan:"Entre no clã",
Join: "Para entrar no clã é necessário realizar um teste de habilidade. Existem dois tipos de testes com dificuldades diferentes explicadas a seguir:",
Test: "Tipo de teste #1",
TestC: "Teste de habilidades de personagem",
TestWOC: "Teste sem habilidades de personagem",
spamClick: "Clique de spam sem desviar a bola",
Test2: "Tipo de teste #2",
Test2v2C: "Teste de habilidades de personagem 2vs2 (você pode escolher seu parceiro)",
Test2vs2: "Experimente 2vs2 sem habilidades de personagem (você pode escolher seu parceiro)",
Focus: "Concentre todos contra você",
Draws: "Desenhos",
SeeDraws: "Aqui estão os desenhos feitos pela comunidade, para vê-los clique na bolinha:",
dMAV:"Desenhos MAV"
};

function changeLanguage() {
const language = navigator.language.split('-')[0];
const translation = language === 'es' ? spanish : portuguese;

$('#navbarNav ul li:nth-child(1) a').text(translation.First);
$('#navbarNav ul li:nth-child(2) a').text(translation.News);
$('#navbarNav ul li:nth-child(3) a').text(translation.Community);
$('#navbarNav ul li:nth-child(4) a').text(translation.Team);
$('#navbarNav ul li:nth-child(5) a').text(translation.Draws);
$('#Inicio h1').text(translation.Start);
$('#Inicio p').text(translation.Welcome);
$('#Novedades h1').text(translation.News);
$('#Comunidad h1').text(translation.Community);
$('#Comunidad p').text(translation.Info);
$('#Clan h1').text(translation.Clan);
$('#Clan p').text(translation.Join);
$('#Dibujos h1').text(translation.Draws);
$('#Clan .TypeOne .accordion-header button .fw-bold').text(translation.Test);
$('#Clan .TypeOne .accordion-body ul li:nth-child(1)').text(translation.TestC);
$('#Clan .TypeOne .accordion-body ul li:nth-child(2)').text(translation.TestWOC);
$('#Clan .TypeOne .accordion-body ul li:nth-child(3)').text(translation.spamClick);
$('#Clan .TypeTwo .accordion-header button .fw-bold').text(translation.Test2);
$('#Clan .TypeTwo .accordion-body ul li:nth-child(1)').text(translation.TestC);
$('#Clan .TypeTwo .accordion-body ul li:nth-child(2)').text(translation.TestWOC);
$('#Clan .TypeTwo .accordion-body ul li:nth-child(3)').text(translation.Test2v2C);
$('#Clan .TypeTwo .accordion-body ul li:nth-child(4)').text(translation.Test2vs2);
$('#Clan .TypeTwo .accordion-body ul li:nth-child(5)').text(translation.spamClick);
$('#Clan .TypeTwo .accordion-body ul li:nth-child(6)').text(translation.Focus);
$('#Dibujos .container .col-md-8 p').text(translation.SeeDraws);
$('#offcanvasRightLabel').text(translation.dMAV);
$('#myModal .modal-content .modal-header .offcanvas-title').text(translation.Draws);
}

$(document).ready(function() {
changeLanguage();
});
