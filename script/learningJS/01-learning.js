/* var domingo = true;
var segunda = false;
var terca = true;
var quarta = false;
var quinta = true;
var sexta = false;
var sabado = false; */


function rotina () {
    document.write("Brian come parmegiana.<br>")
    document.write("Rodrigo vai a academia.<br>")
    document.write("Jonas joga vôlei.<br>")
    document.write("Carla come pizza.<br>")
    document.write("Stephany come brócolis.<br>")
}


var nome = "junior";
var comida1 = "coco";
function rotina_com_parametros (nome, comida1, comida2, bebida, esporte1, esporte2) {
    document.write(nome + " come "+ comida1 + " .<br>");
    document.write(nome + " vai" + esporte1 + " .<br>");
    document.write(nome + " joga " + esporte2 + " .<br>");
    document.write(nome + " come " + comida2 + " <br>");
    document.write(nome + " come " + comida1 + " enquanto assiste " + esporte2a + " .<br>");
}

rotina_com_parametros(nome, comida1)