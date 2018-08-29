/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';


//=============================================================================
let selectProvincia = document.querySelector('#txtProvinciaSede');
let selectCanton = document.querySelector('#txtCantonSede');
let selectDistrito = document.querySelector('#txtDistritoSede');

document.getElementById("txtProvinciaSede").onchange = function () { optProvincia_Canton() };
document.getElementById("txtCantonSede").onchange = function () { optCanton_Distrito () };

function optProvincia_Canton() {

    selectCanton.length = null;

    if (selectProvincia[0].selected == true) {
        let seleccionar = new Option("");
        selectCanton[0] = seleccionar;
    };

    if (selectProvincia[1].selected == true) //Alajuela
    {
        let optCantonAlajuela0 = new Option("");
        let optCantonAlajuela1 = new Option("Alajuela");
        let optCantonAlajuela2 = new Option("San Ramón");
        let optCantonAlajuela3 = new Option("Grecia");
        let optCantonAlajuela4 = new Option("San Mateo");
        let optCantonAlajuela5 = new Option("Atenas");
        let optCantonAlajuela6 = new Option("Naranjo");
        let optCantonAlajuela7 = new Option("Palmares");
        let optCantonAlajuela8 = new Option("Poás");
        let optCantonAlajuela9 = new Option("Orotina");
        let optCantonAlajuela10 = new Option("San Carlos");
        let optCantonAlajuela11 = new Option("Alfaro Ruíz");
        let optCantonAlajuela12 = new Option("Valverde Vega");
        let optCantonAlajuela13 = new Option("Upala");
        let optCantonAlajuela14 = new Option("Los Chiles");
        let optCantonAlajuela15 = new Option("Guatuso");

        selectCanton[0] = optCantonAlajuela0;
        selectCanton[1] = optCantonAlajuela1;
        selectCanton[2] = optCantonAlajuela2;
        selectCanton[3] = optCantonAlajuela3;
        selectCanton[4] = optCantonAlajuela4;
        selectCanton[5] = optCantonAlajuela5;
        selectCanton[6] = optCantonAlajuela6;
        selectCanton[7] = optCantonAlajuela7;
        selectCanton[8] = optCantonAlajuela8;
        selectCanton[9] = optCantonAlajuela9;
        selectCanton[10] = optCantonAlajuela10;
        selectCanton[11] = optCantonAlajuela11;
        selectCanton[12] = optCantonAlajuela12;
        selectCanton[13] = optCantonAlajuela13;
        selectCanton[14] = optCantonAlajuela14;
        selectCanton[15] = optCantonAlajuela15;
    }
    if (selectProvincia[2].selected == true) //Cartago
    {
        let optCantonCartago0 = new Option("");
        let optCantonCartago1 = new Option("Cartago");
        let optCantonCartago2 = new Option("Paraíso");
        let optCantonCartago3 = new Option("La Unión");
        let optCantonCartago4 = new Option("Jiménez");
        let optCantonCartago5 = new Option("Turrialba");
        let optCantonCartago6 = new Option("Alvarado");
        let optCantonCartago7 = new Option("Oreamuno");
        let optCantonCartago8 = new Option("El Guarco");

        selectCanton[0] = optCantonCartago0;
        selectCanton[1] = optCantonCartago1;
        selectCanton[2] = optCantonCartago2;
        selectCanton[3] = optCantonCartago3;
        selectCanton[4] = optCantonCartago4;
        selectCanton[5] = optCantonCartago5;
        selectCanton[6] = optCantonCartago6;
        selectCanton[7] = optCantonCartago7;
        selectCanton[8] = optCantonCartago8;
    };
    if (selectProvincia[3].selected == true) //Guanacaste
    {
        let optCantonGuanacaste0 = new Option("");
        let optCantonGuanacaste1 = new Option("Liberia");
        let optCantonGuanacaste2 = new Option("Nicoya");
        let optCantonGuanacaste3 = new Option("Santa Cruz");
        let optCantonGuanacaste4 = new Option("Bagaces");
        let optCantonGuanacaste5 = new Option("Carrillo");
        let optCantonGuanacaste6 = new Option("Cañas");
        let optCantonGuanacaste7 = new Option("Abangares");
        let optCantonGuanacaste8 = new Option("Tilarán");
        let optCantonGuanacaste9 = new Option("Nandayure");
        let optCantonGuanacaste10 = new Option("La Cruz");
        let optCantonGuanacaste11 = new Option("Hojancha");

        selectCanton[0] = optCantonGuanacaste0;
        selectCanton[1] = optCantonGuanacaste1;
        selectCanton[2] = optCantonGuanacaste2;
        selectCanton[3] = optCantonGuanacaste3;
        selectCanton[4] = optCantonGuanacaste4;
        selectCanton[5] = optCantonGuanacaste5;
        selectCanton[6] = optCantonGuanacaste6;
        selectCanton[7] = optCantonGuanacaste7;
        selectCanton[8] = optCantonGuanacaste8;
        selectCanton[9] = optCantonGuanacaste9;
        selectCanton[10] = optCantonGuanacaste10;
        selectCanton[11] = optCantonGuanacaste11;
    };
    if (selectProvincia[4].selected == true) //Heredia
    {
        let optCantonHeredia0 = new Option("");
        let optCantonHeredia1 = new Option("Heredia");
        let optCantonHeredia2 = new Option("Barba");
        let optCantonHeredia3 = new Option("Santo Domingo");
        let optCantonHeredia4 = new Option("Santa Bárbara");
        let optCantonHeredia5 = new Option("San Rafael");
        let optCantonHeredia6 = new Option("San Isidro");
        let optCantonHeredia7 = new Option("Belén");
        let optCantonHeredia8 = new Option("Flores");
        let optCantonHeredia9 = new Option("San Pablo");
        let optCantonHeredia10 = new Option("Sarapiquí");

        selectCanton[0] = optCantonHeredia0;
        selectCanton[1] = optCantonHeredia1;
        selectCanton[2] = optCantonHeredia2;
        selectCanton[3] = optCantonHeredia3;
        selectCanton[4] = optCantonHeredia4;
        selectCanton[5] = optCantonHeredia5;
        selectCanton[6] = optCantonHeredia6;
        selectCanton[7] = optCantonHeredia7;
        selectCanton[8] = optCantonHeredia8;
        selectCanton[9] = optCantonHeredia9;
        selectCanton[10] = optCantonHeredia10;
    };
    if (selectProvincia[5].selected == true) //Limon
    {
        let optCantonLimon0 = new Option("");
        let optCantonLimon1 = new Option("Limón");
        let optCantonLimon2 = new Option("Pococí");
        let optCantonLimon3 = new Option("Siquírres");
        let optCantonLimon4 = new Option("Talamanca");
        let optCantonLimon5 = new Option("Matina");
        let optCantonLimon6 = new Option("Guácimo");

        selectCanton[0] = optCantonLimon0;
        selectCanton[1] = optCantonLimon1;
        selectCanton[2] = optCantonLimon2;
        selectCanton[3] = optCantonLimon3;
        selectCanton[4] = optCantonLimon4;
        selectCanton[5] = optCantonLimon5;
        selectCanton[6] = optCantonLimon6;
    };
    if (selectProvincia[6].selected == true) //Puntarenas
    {
        let optCantonPuntarenas0 = new Option("");
        let optCantonPuntarenas1 = new Option("Puntarenas");
        let optCantonPuntarenas2 = new Option("Esparza");
        let optCantonPuntarenas3 = new Option("Buenos Aires");
        let optCantonPuntarenas4 = new Option("Montes de Oro");
        let optCantonPuntarenas5 = new Option("Osa");
        let optCantonPuntarenas6 = new Option("Golfito");
        let optCantonPuntarenas7 = new Option("Coto Brus");
        let optCantonPuntarenas8 = new Option("Parrita");
        let optCantonPuntarenas9 = new Option("Corredores");
        let optCantonPuntarenas10 = new Option("Garabito");

        selectCanton[0] = optCantonPuntarenas0;
        selectCanton[1] = optCantonPuntarenas1;
        selectCanton[2] = optCantonPuntarenas2;
        selectCanton[3] = optCantonPuntarenas3;
        selectCanton[4] = optCantonPuntarenas4;
        selectCanton[5] = optCantonPuntarenas5;
        selectCanton[6] = optCantonPuntarenas6;
        selectCanton[7] = optCantonPuntarenas7;
        selectCanton[8] = optCantonPuntarenas8;
        selectCanton[9] = optCantonPuntarenas9;
        selectCanton[10] = optCantonPuntarenas10;
    };
    if (selectProvincia[7].selected == true) //San Jose
    {
        let optCantonSanJose0 = new Option("");
        let optCantonSanJose1 = new Option("San José");
        let optCantonSanJose2 = new Option("Escazú");
        let optCantonSanJose3 = new Option("Desamparados");
        let optCantonSanJose4 = new Option("Puriscal");
        let optCantonSanJose5 = new Option("Tarrazú");
        let optCantonSanJose6 = new Option("Aserrí");
        let optCantonSanJose7 = new Option("Mora");
        let optCantonSanJose8 = new Option("Goicoechea");
        let optCantonSanJose9 = new Option("Santa Ana");
        let optCantonSanJose10 = new Option("Alajuelita");
        let optCantonSanJose11 = new Option("Vásquez de Coronado");
        let optCantonSanJose12 = new Option("Acosta");
        let optCantonSanJose13 = new Option("Tibás");
        let optCantonSanJose14 = new Option("Moravia");
        let optCantonSanJose15 = new Option("Montes de Oca");
        let optCantonSanJose16 = new Option("Turrubares");
        let optCantonSanJose17 = new Option("Dota");
        let optCantonSanJose18 = new Option("Curridabat");
        let optCantonSanJose19 = new Option("Pérez Zeledón");
        let optCantonSanJose20 = new Option("León Cortéz");

        selectCanton[0] = optCantonSanJose0;
        selectCanton[1] = optCantonSanJose1;
        selectCanton[2] = optCantonSanJose2;
        selectCanton[3] = optCantonSanJose3;
        selectCanton[4] = optCantonSanJose4;
        selectCanton[5] = optCantonSanJose5;
        selectCanton[6] = optCantonSanJose6;
        selectCanton[7] = optCantonSanJose7;
        selectCanton[8] = optCantonSanJose8;
        selectCanton[9] = optCantonSanJose9;
        selectCanton[10] = optCantonSanJose10;
        selectCanton[11] = optCantonSanJose11;
        selectCanton[12] = optCantonSanJose12;
        selectCanton[13] = optCantonSanJose13;
        selectCanton[14] = optCantonSanJose14;
        selectCanton[15] = optCantonSanJose15;
        selectCanton[16] = optCantonSanJose16;
        selectCanton[17] = optCantonSanJose17;
        selectCanton[18] = optCantonSanJose18;
        selectCanton[19] = optCantonSanJose19;
        selectCanton[20] = optCantonSanJose20;
    };
};
//=============================================================================

document.getElementById("txtCantonSede").onchange = function () { optCanton_Distrito() };
function optCanton_Distrito() {

    selectDistrito.length = null;

    if (selectCanton.value == "Alajuela" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("Alajuela");
        let optDistritoAlajuela2 = new Option("San José");
        let optDistritoAlajuela3 = new Option("Carrizal");
        let optDistritoAlajuela4 = new Option("Guácima");
        let optDistritoAlajuela5 = new Option("Río Segundo");
        let optDistritoAlajuela6 = new Option("Turrúcares");
        let optDistritoAlajuela7 = new Option("Tambor");
        let optDistritoAlajuela8 = new Option("Garita");
        let optDistritoAlajuela9 = new Option("Sarapiquí");
        let optDistritoAlajuela10 = new Option("San Antonio");
        let optDistritoAlajuela11 = new Option("San Isidro");
        let optDistritoAlajuela12 = new Option("Sabanilla");
        let optDistritoAlajuela13 = new Option("San Rafael");
        let optDistritoAlajuela14 = new Option("Desamparados");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
        selectDistrito[5] = optDistritoAlajuela5;
        selectDistrito[6] = optDistritoAlajuela6;
        selectDistrito[7] = optDistritoAlajuela7;
        selectDistrito[8] = optDistritoAlajuela8;
        selectDistrito[9] = optDistritoAlajuela9;
        selectDistrito[10] = optDistritoAlajuela10;
        selectDistrito[11] = optDistritoAlajuela11;
        selectDistrito[12] = optDistritoAlajuela12;
        selectDistrito[13] = optDistritoAlajuela13;
        selectDistrito[14] = optDistritoAlajuela14;
    };

    if (selectCanton.value == "Atenas" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("Atenas");
        let optDistritoAlajuela2 = new Option("Jesús");
        let optDistritoAlajuela3 = new Option("Santa Eulalia");
        let optDistritoAlajuela4 = new Option("Escobal");
        let optDistritoAlajuela5 = new Option("Mercedes");
        let optDistritoAlajuela6 = new Option("San Isidro");
        let optDistritoAlajuela7 = new Option("Concepción");
        let optDistritoAlajuela8 = new Option("San José");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
        selectDistrito[5] = optDistritoAlajuela5;
        selectDistrito[6] = optDistritoAlajuela6;
        selectDistrito[7] = optDistritoAlajuela7;
        selectDistrito[8] = optDistritoAlajuela8;
    };
    if (selectCanton.value == "Grecia" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("Grecia");
        let optDistritoAlajuela2 = new Option("San Roque");
        let optDistritoAlajuela3 = new Option("Tacares");
        let optDistritoAlajuela4 = new Option("Río Cuarto");
        let optDistritoAlajuela5 = new Option("Puentes de Piedra");
        let optDistritoAlajuela6 = new Option("Bolívar");
        let optDistritoAlajuela7 = new Option("San Isidro");
        let optDistritoAlajuela8 = new Option("San José");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
        selectDistrito[5] = optDistritoAlajuela5;
        selectDistrito[6] = optDistritoAlajuela6;
        selectDistrito[7] = optDistritoAlajuela7;
        selectDistrito[8] = optDistritoAlajuela8;
    };
    if (selectCanton.value == "Guatuso" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("Cote");
        let optDistritoAlajuela2 = new Option("Katira");
        let optDistritoAlajuela3 = new Option("San Rafael");
        let optDistritoAlajuela4 = new Option("Buenavista");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
    };
    if (selectCanton.value == "Los Chiles" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("Los Chiles");
        let optDistritoAlajuela2 = new Option("Caño Negro");
        let optDistritoAlajuela3 = new Option("El Amparo");
        let optDistritoAlajuela4 = new Option("San Jorge");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
    };
    if (selectCanton.value == "Naranjo" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("Naranjo");
        let optDistritoAlajuela2 = new Option("San José");
        let optDistritoAlajuela3 = new Option("Cirrí Sur");
        let optDistritoAlajuela4 = new Option("El Rosario");
        let optDistritoAlajuela5 = new Option("Palmitos");
        let optDistritoAlajuela6 = new Option("San Juan");
        let optDistritoAlajuela7 = new Option("San Jerónimo");
        let optDistritoAlajuela8 = new Option("San Miguel");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
        selectDistrito[5] = optDistritoAlajuela5;
        selectDistrito[6] = optDistritoAlajuela6;
        selectDistrito[7] = optDistritoAlajuela7;
        selectDistrito[8] = optDistritoAlajuela8;
    };
    if (selectCanton.value == "Orotina" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("Orotina");
        let optDistritoAlajuela2 = new Option("El Mastate");
        let optDistritoAlajuela3 = new Option("Hacienda Vieja");
        let optDistritoAlajuela4 = new Option("Coyolar");
        let optDistritoAlajuela5 = new Option("La Ceiba");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
        selectDistrito[5] = optDistritoAlajuela5;
    };

    if (selectCanton.value == "Palmares" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("Palmares");
        let optDistritoAlajuela2 = new Option("Zaragoza");
        let optDistritoAlajuela3 = new Option("Buenos Aires");
        let optDistritoAlajuela4 = new Option("Candelaria");
        let optDistritoAlajuela5 = new Option("Esquipulas");
        let optDistritoAlajuela6 = new Option("La Granja");
        let optDistritoAlajuela7 = new Option("Santiago");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
        selectDistrito[5] = optDistritoAlajuela5;
        selectDistrito[6] = optDistritoAlajuela6;
        selectDistrito[7] = optDistritoAlajuela7;
    };

    if (selectCanton.value == "Poás" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("San Juan");
        let optDistritoAlajuela2 = new Option("Carrillos");
        let optDistritoAlajuela3 = new Option("Sabana Redonda");
        let optDistritoAlajuela4 = new Option("San Pedro");
        let optDistritoAlajuela5 = new Option("San Rafael");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
        selectDistrito[5] = optDistritoAlajuela5;
    };

    if (selectCanton.value == "San Carlos" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("Quesada");
        let optDistritoAlajuela2 = new Option("Florencia");
        let optDistritoAlajuela3 = new Option("Buenavista");
        let optDistritoAlajuela4 = new Option("Aguas Zarcas");
        let optDistritoAlajuela5 = new Option("Venecia");
        let optDistritoAlajuela6 = new Option("La Fortuna");
        let optDistritoAlajuela7 = new Option("La Tigra");
        let optDistritoAlajuela8 = new Option("La Palmera");
        let optDistritoAlajuela9 = new Option("Venado");
        let optDistritoAlajuela10 = new Option("Cutris");
        let optDistritoAlajuela11 = new Option("Monterrey");
        let optDistritoAlajuela12 = new Option("Pocosol");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
        selectDistrito[5] = optDistritoAlajuela5;
        selectDistrito[6] = optDistritoAlajuela6;
        selectDistrito[7] = optDistritoAlajuela7;
        selectDistrito[8] = optDistritoAlajuela8;
        selectDistrito[9] = optDistritoAlajuela9;
        selectDistrito[10] = optDistritoAlajuela10;
        selectDistrito[11] = optDistritoAlajuela11;
        selectDistrito[12] = optDistritoAlajuela12;

    };

    if (selectCanton.value == "San Mateo" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("San Mateo");
        let optDistritoAlajuela2 = new Option("Desmonte");
        let optDistritoAlajuela3 = new Option("Jesús María");
        let optDistritoAlajuela4 = new Option("Labrador");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
    };

    if (selectCanton.value == "San Ramón" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("San Ramón");
        let optDistritoAlajuela2 = new Option("Piedades Norte");
        let optDistritoAlajuela3 = new Option("Piedades Sur");
        let optDistritoAlajuela4 = new Option("Ángeles");
        let optDistritoAlajuela5 = new Option("Alfaro");
        let optDistritoAlajuela6 = new Option("Volio");
        let optDistritoAlajuela7 = new Option("Zapotal");
        let optDistritoAlajuela8 = new Option("Peñas Blancas");
        let optDistritoAlajuela9 = new Option("Santiango");
        let optDistritoAlajuela10 = new Option("San Juan");
        let optDistritoAlajuela11 = new Option("Concepción");
        let optDistritoAlajuela12 = new Option("San Lorenzo");
        let optDistritoAlajuela13 = new Option("San Isidro");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
        selectDistrito[5] = optDistritoAlajuela5;
        selectDistrito[6] = optDistritoAlajuela6;
        selectDistrito[7] = optDistritoAlajuela7;
        selectDistrito[8] = optDistritoAlajuela8;
        selectDistrito[9] = optDistritoAlajuela9;
        selectDistrito[10] = optDistritoAlajuela10;
        selectDistrito[11] = optDistritoAlajuela11;
        selectDistrito[12] = optDistritoAlajuela12;
        selectDistrito[13] = optDistritoAlajuela13;
    };

    if (selectCanton.value == "Upala" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("Upala");
        let optDistritoAlajuela2 = new Option("Aguas Claras");
        let optDistritoAlajuela3 = new Option("San José");
        let optDistritoAlajuela4 = new Option("Bijagua");
        let optDistritoAlajuela5 = new Option("Delicias");
        let optDistritoAlajuela6 = new Option("Dos Ríos");
        let optDistritoAlajuela7 = new Option("Yolilal");
        let optDistritoAlajuela8 = new Option("Canalete");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
        selectDistrito[5] = optDistritoAlajuela5;
        selectDistrito[6] = optDistritoAlajuela6;
        selectDistrito[7] = optDistritoAlajuela7;
        selectDistrito[8] = optDistritoAlajuela8;
    };

    if (selectCanton.value == "Alfaro Ruíz" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("Zarcero");
        let optDistritoAlajuela2 = new Option("Laguna");
        let optDistritoAlajuela3 = new Option("Tapezco");
        let optDistritoAlajuela4 = new Option("Guadalupe");
        let optDistritoAlajuela5 = new Option("Palmira");
        let optDistritoAlajuela6 = new Option("Brisas");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
        selectDistrito[5] = optDistritoAlajuela5;
        selectDistrito[6] = optDistritoAlajuela6;
    };

    if (selectCanton.value == "Valverde Vega" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("Sarchí Norte");
        let optDistritoAlajuela2 = new Option("Sarchí Sur");
        let optDistritoAlajuela3 = new Option("Toro Amarillo");
        let optDistritoAlajuela4 = new Option("Rodríguez");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
    };
    if (selectCanton.value == "Zarcero" && selectProvincia.value == "Alajuela") {
        let optDistritoAlajuela0 = new Option("");
        let optDistritoAlajuela1 = new Option("Zarcero");
        let optDistritoAlajuela2 = new Option("Laguna");
        let optDistritoAlajuela3 = new Option("Tapesco");
        let optDistritoAlajuela4 = new Option("Palmira");
        let optDistritoAlajuela5 = new Option("Brisas");

        selectDistrito[0] = optDistritoAlajuela0;
        selectDistrito[1] = optDistritoAlajuela1;
        selectDistrito[2] = optDistritoAlajuela2;
        selectDistrito[3] = optDistritoAlajuela3;
        selectDistrito[4] = optDistritoAlajuela4;
        selectDistrito[5] = optDistritoAlajuela5;
    };

    if (selectCanton.value == "Alvarado" && selectProvincia.value == "Cartago") {
        let optDistritoCartago0 = new Option("");
        let optDistritoCartago1 = new Option("Pacayas");
        let optDistritoCartago2 = new Option("Cervantes");
        let optDistritoCartago3 = new Option("Capellades");

        selectDistrito[0] = optDistritoCartago0;
        selectDistrito[1] = optDistritoCartago1;
        selectDistrito[2] = optDistritoCartago2;
        selectDistrito[3] = optDistritoCartago3;
    };
    if (selectCanton.value == "Cartago" && selectProvincia.value == "Cartago") {
        let optDistritoCartago0 = new Option("");
        let optDistritoCartago1 = new Option("Oriental");
        let optDistritoCartago2 = new Option("Occidental");
        let optDistritoCartago3 = new Option("San Nicolás");
        let optDistritoCartago4 = new Option("Aguacaliente");
        let optDistritoCartago5 = new Option("Arenilla");
        let optDistritoCartago6 = new Option("Corralillo");
        let optDistritoCartago7 = new Option("Tierra Blanca");
        let optDistritoCartago8 = new Option("Dulce Nombre");
        let optDistritoCartago9 = new Option("Llano Grande");
        let optDistritoCartago10 = new Option("Quebradilla");

        selectDistrito[0] = optDistritoCartago0;
        selectDistrito[1] = optDistritoCartago1;
        selectDistrito[2] = optDistritoCartago2;
        selectDistrito[3] = optDistritoCartago3;
        selectDistrito[4] = optDistritoCartago4;
        selectDistrito[5] = optDistritoCartago5;
        selectDistrito[6] = optDistritoCartago6;
        selectDistrito[7] = optDistritoCartago7;
        selectDistrito[8] = optDistritoCartago8;
        selectDistrito[9] = optDistritoCartago9;
        selectDistrito[10] = optDistritoCartago10;
    };
    if (selectCanton.value == "El Guarco" && selectProvincia.value == "Cartago") {
        let optDistritoCartago0 = new Option("");
        let optDistritoCartago1 = new Option("El Tejar");
        let optDistritoCartago2 = new Option("Tobosi");
        let optDistritoCartago3 = new Option("Patio de Agua");

        selectDistrito[0] = optDistritoCartago0;
        selectDistrito[1] = optDistritoCartago1;
        selectDistrito[2] = optDistritoCartago2;
        selectDistrito[3] = optDistritoCartago3;
    };
    if (selectCanton.value == "Jiménez" && selectProvincia.value == "Cartago") {
        let optDistritoCartago0 = new Option("");
        let optDistritoCartago1 = new Option("Juan Viñas");
        let optDistritoCartago2 = new Option("Tucurrique");

        selectDistrito[0] = optDistritoCartago0;
        selectDistrito[1] = optDistritoCartago1;
        selectDistrito[2] = optDistritoCartago2;
    };
    if (selectCanton.value == "La Unión" && selectProvincia.value == "Cartago") {
        let optDistritoCartago0 = new Option("");
        let optDistritoCartago1 = new Option("Tres Ríos");
        let optDistritoCartago2 = new Option("San Diego");
        let optDistritoCartago3 = new Option("Río Azúl");

        selectDistrito[0] = optDistritoCartago0;
        selectDistrito[1] = optDistritoCartago1;
        selectDistrito[2] = optDistritoCartago2;
        selectDistrito[3] = optDistritoCartago3;
    };
    if (selectCanton.value == "Oreamuno" && selectProvincia.value == "Cartago") {
        let optDistritoCartago0 = new Option("");
        let optDistritoCartago1 = new Option("Cot");
        let optDistritoCartago2 = new Option("Potrero Cerrado");
        let optDistritoCartago3 = new Option("Cipreses");

        selectDistrito[0] = optDistritoCartago0;
        selectDistrito[1] = optDistritoCartago1;
        selectDistrito[2] = optDistritoCartago2;
        selectDistrito[3] = optDistritoCartago3;
    };
    if (selectCanton.value == "Paraíso" && selectProvincia.value == "Cartago") {
        let optDistritoCartago0 = new Option("");
        let optDistritoCartago1 = new Option("Paraíso");
        let optDistritoCartago2 = new Option("Orosi");
        let optDistritoCartago3 = new Option("Cachí");
        let optDistritoCartago4 = new Option("Llanos de Santa Lucía");

        selectDistrito[0] = optDistritoCartago0;
        selectDistrito[1] = optDistritoCartago1;
        selectDistrito[2] = optDistritoCartago2;
        selectDistrito[3] = optDistritoCartago3;
        selectDistrito[4] = optDistritoCartago4;
    };
    if (selectCanton.value == "Turrialba" && selectProvincia.value == "Cartago") {
        let optDistritoCartago0 = new Option("");
        let optDistritoCartago1 = new Option("Turrialba");
        let optDistritoCartago2 = new Option("La Suiza");
        let optDistritoCartago3 = new Option("Peralta");
        let optDistritoCartago4 = new Option("Santa Teresita");
        let optDistritoCartago5 = new Option("Pavones");
        let optDistritoCartago6 = new Option("Tuis");
        let optDistritoCartago7 = new Option("Tayutic");
        let optDistritoCartago8 = new Option("Santa Rosa");
        let optDistritoCartago9 = new Option("Tres Equis");
        let optDistritoCartago10 = new Option("La Isabel");
        let optDistritoCartago11 = new Option("Chirripó");

        selectDistrito[0] = optDistritoCartago0;
        selectDistrito[1] = optDistritoCartago1;
        selectDistrito[2] = optDistritoCartago2;
        selectDistrito[3] = optDistritoCartago3;
        selectDistrito[4] = optDistritoCartago4;
        selectDistrito[5] = optDistritoCartago5;
        selectDistrito[6] = optDistritoCartago6;
        selectDistrito[7] = optDistritoCartago7;
        selectDistrito[8] = optDistritoCartago8;
        selectDistrito[9] = optDistritoCartago9;
        selectDistrito[10] = optDistritoCartago10;
        selectDistrito[11] = optDistritoCartago11;
    };
    if (selectCanton.value == "Abangares" && selectProvincia.value == "Guanacaste") {
        let optDistritoGuanacaste0 = new Option("");
        let optDistritoGuanacaste1 = new Option("Las Juntas");
        let optDistritoGuanacaste2 = new Option("Sierra");
        let optDistritoGuanacaste3 = new Option("Colorado");

        selectDistrito[0] = optDistritoGuanacaste0;
        selectDistrito[1] = optDistritoGuanacaste1;
        selectDistrito[2] = optDistritoGuanacaste2;
        selectDistrito[3] = optDistritoGuanacaste3;
    };
    if (selectCanton.value == "Bagaces" && selectProvincia.value == "Guanacaste") {
        let optDistritoGuanacaste0 = new Option("");
        let optDistritoGuanacaste1 = new Option("Bagaces");
        let optDistritoGuanacaste2 = new Option("Mogote");
        let optDistritoGuanacaste3 = new Option("Río Naranjo");

        selectDistrito[0] = optDistritoGuanacaste0;
        selectDistrito[1] = optDistritoGuanacaste1;
        selectDistrito[2] = optDistritoGuanacaste2;
        selectDistrito[3] = optDistritoGuanacaste3;
    };
    if (selectCanton.value == "Cañas" && selectProvincia.value == "Guanacaste") {
        let optDistritoGuanacaste0 = new Option("");
        let optDistritoGuanacaste1 = new Option("Cañas");
        let optDistritoGuanacaste2 = new Option("Bebedero");
        let optDistritoGuanacaste3 = new Option("Porozal");

        selectDistrito[0] = optDistritoGuanacaste0;
        selectDistrito[1] = optDistritoGuanacaste1;
        selectDistrito[2] = optDistritoGuanacaste2;
        selectDistrito[3] = optDistritoGuanacaste3;
    };
    if (selectCanton.value == "Carrillo" && selectProvincia.value == "Guanacaste") {
        let optDistritoGuanacaste0 = new Option("");
        let optDistritoGuanacaste1 = new Option("Filadelfia");
        let optDistritoGuanacaste2 = new Option("Sardinal");
        let optDistritoGuanacaste3 = new Option("Belén");

        selectDistrito[0] = optDistritoGuanacaste0;
        selectDistrito[1] = optDistritoGuanacaste1;
        selectDistrito[2] = optDistritoGuanacaste2;
        selectDistrito[3] = optDistritoGuanacaste3;
    };
    if (selectCanton.value == "Hojancha" && selectProvincia.value == "Guanacaste") {
        let optDistritoGuanacaste0 = new Option("");
        let optDistritoGuanacaste1 = new Option("Hojancha");
        let optDistritoGuanacaste2 = new Option("Monte Romo");
        let optDistritoGuanacaste3 = new Option("Puerto Carrillo");
        let optDistritoGuanacaste4 = new Option("Huacas");

        selectDistrito[0] = optDistritoGuanacaste0;
        selectDistrito[1] = optDistritoGuanacaste1;
        selectDistrito[2] = optDistritoGuanacaste2;
        selectDistrito[3] = optDistritoGuanacaste3;
        selectDistrito[4] = optDistritoGuanacaste4;
    };
    if (selectCanton.value == "La Cruz" && selectProvincia.value == "Guanacaste") {
        let optDistritoGuanacaste0 = new Option("");
        let optDistritoGuanacaste1 = new Option("La Cruz");
        let optDistritoGuanacaste2 = new Option("Santa Cecilia");
        let optDistritoGuanacaste3 = new Option("La Garita");
        let optDistritoGuanacaste4 = new Option("Santa Elena");

        selectDistrito[0] = optDistritoGuanacaste0;
        selectDistrito[1] = optDistritoGuanacaste1;
        selectDistrito[2] = optDistritoGuanacaste2;
        selectDistrito[3] = optDistritoGuanacaste3;
        selectDistrito[4] = optDistritoGuanacaste4;
    };
    if (selectCanton.value == "Liberia" && selectProvincia.value == "Guanacaste") {
        let optDistritoGuanacaste0 = new Option("");
        let optDistritoGuanacaste1 = new Option("Liberia");
        let optDistritoGuanacaste2 = new Option("Cañas Dulces");
        let optDistritoGuanacaste3 = new Option("Mayorga");
        let optDistritoGuanacaste4 = new Option("Nacascolo");
        let optDistritoGuanacaste5 = new Option("Curubandé");

        selectDistrito[0] = optDistritoGuanacaste0;
        selectDistrito[1] = optDistritoGuanacaste1;
        selectDistrito[2] = optDistritoGuanacaste2;
        selectDistrito[3] = optDistritoGuanacaste3;
        selectDistrito[4] = optDistritoGuanacaste4;
        selectDistrito[5] = optDistritoGuanacaste5;
    };
    if (selectCanton.value == "Nandayure" && selectProvincia.value == "Guanacaste") {
        let optDistritoGuanacaste0 = new Option("");
        let optDistritoGuanacaste1 = new Option("Carmona");
        let optDistritoGuanacaste2 = new Option("Santa Rita");
        let optDistritoGuanacaste3 = new Option("Porvenir");
        let optDistritoGuanacaste4 = new Option("Bejuco");

        selectDistrito[0] = optDistritoGuanacaste0;
        selectDistrito[1] = optDistritoGuanacaste1;
        selectDistrito[2] = optDistritoGuanacaste2;
        selectDistrito[3] = optDistritoGuanacaste3;
        selectDistrito[4] = optDistritoGuanacaste4;
    };
    if (selectCanton.value == "Nicoya" && selectProvincia.value == "Guanacaste") {
        let optDistritoGuanacaste0 = new Option("");
        let optDistritoGuanacaste1 = new Option("Nicoya");
        let optDistritoGuanacaste2 = new Option("Mansión");
        let optDistritoGuanacaste3 = new Option("Quebrada Honda");
        let optDistritoGuanacaste4 = new Option("Sámara");
        let optDistritoGuanacaste5 = new Option("Nosara");
        let optDistritoGuanacaste6 = new Option("Belén de Nosarita");

        selectDistrito[0] = optDistritoGuanacaste0;
        selectDistrito[1] = optDistritoGuanacaste1;
        selectDistrito[2] = optDistritoGuanacaste2;
        selectDistrito[3] = optDistritoGuanacaste3;
        selectDistrito[4] = optDistritoGuanacaste4;
        selectDistrito[5] = optDistritoGuanacaste5;
        selectDistrito[6] = optDistritoGuanacaste6;
    };
    if (selectCanton.value == "Santa Cruz" && selectProvincia.value == "Guanacaste") {
        let optDistritoGuanacaste0 = new Option("");
        let optDistritoGuanacaste1 = new Option("Bolsón");
        let optDistritoGuanacaste2 = new Option("Veintisiete de Abril");
        let optDistritoGuanacaste3 = new Option("Tempete");
        let optDistritoGuanacaste4 = new Option("Cartagena");
        let optDistritoGuanacaste5 = new Option("Cuajiniquil");
        let optDistritoGuanacaste6 = new Option("Diriá");
        let optDistritoGuanacaste7 = new Option("Cabo Velas");
        let optDistritoGuanacaste8 = new Option("Tamarindo");

        selectDistrito[0] = optDistritoGuanacaste0;
        selectDistrito[1] = optDistritoGuanacaste1;
        selectDistrito[2] = optDistritoGuanacaste2;
        selectDistrito[3] = optDistritoGuanacaste3;
        selectDistrito[4] = optDistritoGuanacaste4;
        selectDistrito[5] = optDistritoGuanacaste5;
        selectDistrito[6] = optDistritoGuanacaste6;
        selectDistrito[7] = optDistritoGuanacaste7;
        selectDistrito[8] = optDistritoGuanacaste8;
    };
    if (selectCanton.value == "Nicoya" && selectProvincia.value == "Guanacaste") {
        let optDistritoGuanacaste0 = new Option("");
        let optDistritoGuanacaste1 = new Option("Nicoya");
        let optDistritoGuanacaste2 = new Option("Mansión");
        let optDistritoGuanacaste3 = new Option("Quebrada Honda");
        let optDistritoGuanacaste4 = new Option("Sámara");
        let optDistritoGuanacaste5 = new Option("Nosara");
        let optDistritoGuanacaste6 = new Option("Belén de Nosarita");

        selectDistrito[0] = optDistritoGuanacaste0;
        selectDistrito[1] = optDistritoGuanacaste1;
        selectDistrito[2] = optDistritoGuanacaste2;
        selectDistrito[3] = optDistritoGuanacaste3;
        selectDistrito[4] = optDistritoGuanacaste4;
        selectDistrito[5] = optDistritoGuanacaste5;
        selectDistrito[6] = optDistritoGuanacaste6;
    };
    if (selectCanton.value == "Tilarán" && selectProvincia.value == "Guanacaste") {
        let optDistritoGuanacaste0 = new Option("");
        let optDistritoGuanacaste1 = new Option("Tilarán");
        let optDistritoGuanacaste2 = new Option("Quebrada Grande");
        let optDistritoGuanacaste3 = new Option("Tronadora");
        let optDistritoGuanacaste4 = new Option("Líbano");
        let optDistritoGuanacaste5 = new Option("Tierras Morenas");
        let optDistritoGuanacaste6 = new Option("Arenal");

        selectDistrito[0] = optDistritoGuanacaste0;
        selectDistrito[1] = optDistritoGuanacaste1;
        selectDistrito[2] = optDistritoGuanacaste2;
        selectDistrito[3] = optDistritoGuanacaste3;
        selectDistrito[4] = optDistritoGuanacaste4;
        selectDistrito[5] = optDistritoGuanacaste5;
        selectDistrito[6] = optDistritoGuanacaste6;
    };
    if (selectCanton.value == "Santo Domingo" && selectProvincia.value == "Heredia") {
        let optDistritoHeredia0 = new Option("");
        let optDistritoHeredia1 = new Option("Santo Domingo");
        let optDistritoHeredia2 = new Option("San Miguel");
        let optDistritoHeredia3 = new Option("Paracito");
        let optDistritoHeredia4 = new Option("Santo Tomás");
        let optDistritoHeredia5 = new Option("Tures");
        let optDistritoHeredia6 = new Option("Pará");

        selectDistrito[0] = optDistritoHeredia0;
        selectDistrito[1] = optDistritoHeredia1;
        selectDistrito[2] = optDistritoHeredia2;
        selectDistrito[3] = optDistritoHeredia3;
        selectDistrito[4] = optDistritoHeredia4;
        selectDistrito[5] = optDistritoHeredia5;
        selectDistrito[6] = optDistritoHeredia6;
    };
    if (selectCanton.value == "Barba" && selectProvincia.value == "Heredia") {
        let optDistritoHeredia0 = new Option("");
        let optDistritoHeredia1 = new Option("Barba");
        let optDistritoHeredia2 = new Option("Santa Lucía");
        let optDistritoHeredia3 = new Option("San José de la Montaña");
        let optDistritoHeredia4 = new Option("San Pedro");
        let optDistritoHeredia5 = new Option("San Roque");

        selectDistrito[0] = optDistritoHeredia0;
        selectDistrito[1] = optDistritoHeredia1;
        selectDistrito[2] = optDistritoHeredia2;
        selectDistrito[3] = optDistritoHeredia3;
        selectDistrito[4] = optDistritoHeredia4;
        selectDistrito[5] = optDistritoHeredia5;
    };
    if (selectCanton.value == "Belén" && selectProvincia.value == "Heredia") {
        let optDistritoHeredia0 = new Option("");
        let optDistritoHeredia1 = new Option("La Ribera");
        let optDistritoHeredia2 = new Option("La Asunción");

        selectDistrito[0] = optDistritoHeredia0;
        selectDistrito[1] = optDistritoHeredia1;
        selectDistrito[2] = optDistritoHeredia2;
    };
    if (selectCanton.value == "Flores" && selectProvincia.value == "Heredia") {
        let optDistritoHeredia0 = new Option("");
        let optDistritoHeredia1 = new Option("San Joaquín");
        let optDistritoHeredia2 = new Option("Barrantes");
        let optDistritoHeredia3 = new Option("Llorente");

        selectDistrito[0] = optDistritoHeredia0;
        selectDistrito[1] = optDistritoHeredia1;
        selectDistrito[2] = optDistritoHeredia2;
        selectDistrito[3] = optDistritoHeredia3;
    };
    if (selectCanton.value == "Heredia" && selectProvincia.value == "Heredia") {
        let optDistritoHeredia0 = new Option("");
        let optDistritoHeredia1 = new Option("Heredia");
        let optDistritoHeredia2 = new Option("San Francisco");
        let optDistritoHeredia3 = new Option("Ulloa");
        let optDistritoHeredia4 = new Option("Varablanca");
        let optDistritoHeredia5 = new Option("Mercedes");

        selectDistrito[0] = optDistritoHeredia0;
        selectDistrito[1] = optDistritoHeredia1;
        selectDistrito[2] = optDistritoHeredia2;
        selectDistrito[3] = optDistritoHeredia3;
        selectDistrito[4] = optDistritoHeredia4;
        selectDistrito[5] = optDistritoHeredia5;
    };
    if (selectCanton.value == "San Isidro" && selectProvincia.value == "Heredia") {
        let optDistritoHeredia0 = new Option("");
        let optDistritoHeredia1 = new Option("San Isidro");
        let optDistritoHeredia2 = new Option("San José");
        let optDistritoHeredia3 = new Option("Concepción");
        let optDistritoHeredia4 = new Option("San Francisco");

        selectDistrito[0] = optDistritoHeredia0;
        selectDistrito[1] = optDistritoHeredia1;
        selectDistrito[2] = optDistritoHeredia2;
        selectDistrito[3] = optDistritoHeredia3;
        selectDistrito[4] = optDistritoHeredia4;
    };
    if (selectCanton.value == "San Pablo" && selectProvincia.value == "Heredia") {
        let optDistritoHeredia0 = new Option("");
        let optDistritoHeredia1 = new Option("San Pablo");
        let optDistritoHeredia2 = new Option("Rincón de Sabanilla");

        selectDistrito[0] = optDistritoHeredia0;
        selectDistrito[1] = optDistritoHeredia1;
        selectDistrito[2] = optDistritoHeredia2;
    };
    if (selectCanton.value == "San Rafael" && selectProvincia.value == "Heredia") {
        let optDistritoHeredia0 = new Option("");
        let optDistritoHeredia1 = new Option("San Rafael");
        let optDistritoHeredia2 = new Option("San Josécito");
        let optDistritoHeredia3 = new Option("Santiago");
        let optDistritoHeredia4 = new Option("Ángeles");
        let optDistritoHeredia5 = new Option("Concepción");

        selectDistrito[0] = optDistritoHeredia0;
        selectDistrito[1] = optDistritoHeredia1;
        selectDistrito[2] = optDistritoHeredia2;
        selectDistrito[3] = optDistritoHeredia3;
        selectDistrito[4] = optDistritoHeredia4;
        selectDistrito[5] = optDistritoHeredia5;
    };
    if (selectCanton.value == "Santa Bárbara" && selectProvincia.value == "Heredia") {
        let optDistritoHeredia0 = new Option("");
        let optDistritoHeredia1 = new Option("Santa Barbara");
        let optDistritoHeredia2 = new Option("San Pedro");
        let optDistritoHeredia3 = new Option("San Juan");
        let optDistritoHeredia4 = new Option("Santo Domingo");
        let optDistritoHeredia5 = new Option("Jesús");
        let optDistritoHeredia6 = new Option("Puraba");

        selectDistrito[0] = optDistritoHeredia0;
        selectDistrito[1] = optDistritoHeredia1;
        selectDistrito[2] = optDistritoHeredia2;
        selectDistrito[3] = optDistritoHeredia3;
        selectDistrito[4] = optDistritoHeredia4;
        selectDistrito[5] = optDistritoHeredia5;
        selectDistrito[6] = optDistritoHeredia6;
    };
    if (selectCanton.value == "Santo Domingo" && selectProvincia.value == "Heredia") {
        let optDistritoHeredia0 = new Option("");
        let optDistritoHeredia1 = new Option("Santo Domingo");
        let optDistritoHeredia2 = new Option("San Vicente");
        let optDistritoHeredia3 = new Option("San Miguel");
        let optDistritoHeredia4 = new Option("Paracito");
        let optDistritoHeredia5 = new Option("Santo Tómas");
        let optDistritoHeredia6 = new Option("Santa Rosa");
        let optDistritoHeredia7 = new Option("Tures");
        let optDistritoHeredia8 = new Option("Para");

        selectDistrito[0] = optDistritoHeredia0;
        selectDistrito[1] = optDistritoHeredia1;
        selectDistrito[2] = optDistritoHeredia2;
        selectDistrito[3] = optDistritoHeredia3;
        selectDistrito[4] = optDistritoHeredia4;
        selectDistrito[5] = optDistritoHeredia5;
        selectDistrito[6] = optDistritoHeredia6;
        selectDistrito[7] = optDistritoHeredia7;
        selectDistrito[8] = optDistritoHeredia8;
    };
    if (selectCanton.value == "Sarapiquí" && selectProvincia.value == "Heredia") {
        let optDistritoHeredia0 = new Option("");
        let optDistritoHeredia1 = new Option("Cureña");
        let optDistritoHeredia2 = new Option("Horquetas");
        let optDistritoHeredia3 = new Option("La Virgen");
        let optDistritoHeredia4 = new Option("LLanuras del Gaspar");

        selectDistrito[0] = optDistritoHeredia0;
        selectDistrito[1] = optDistritoHeredia1;
        selectDistrito[2] = optDistritoHeredia2;
        selectDistrito[3] = optDistritoHeredia3;
        selectDistrito[4] = optDistritoHeredia4;
    };
    if (selectCanton.value == "Guácimo" && selectProvincia.value == "Limón") {
        let optDistritoLimon0 = new Option("");
        let optDistritoLimon1 = new Option("Guácimo");
        let optDistritoLimon2 = new Option("Mercedes");
        let optDistritoLimon3 = new Option("Pocora");
        let optDistritoLimon4 = new Option("Río Jiménez");
        let optDistritoLimon5 = new Option("Duacarí");

        selectDistrito[0] = optDistritoLimon0;
        selectDistrito[1] = optDistritoLimon1;
        selectDistrito[2] = optDistritoLimon2;
        selectDistrito[3] = optDistritoLimon3;
        selectDistrito[4] = optDistritoLimon4;
        selectDistrito[5] = optDistritoLimon5;
    };
    if (selectCanton.value == "Limón" && selectProvincia.value == "Limón") {
        let optDistritoLimon0 = new Option("");
        let optDistritoLimon1 = new Option("Limón");
        let optDistritoLimon2 = new Option("Valle La Estrella");
        let optDistritoLimon3 = new Option("Río Blanco");
        let optDistritoLimon4 = new Option("Matama");

        selectDistrito[0] = optDistritoLimon0;
        selectDistrito[1] = optDistritoLimon1;
        selectDistrito[2] = optDistritoLimon2;
        selectDistrito[3] = optDistritoLimon3;
        selectDistrito[4] = optDistritoLimon4;
    };
    if (selectCanton.value == "Matina" && selectProvincia.value == "Limón") {
        let optDistritoLimon0 = new Option("");
        let optDistritoLimon1 = new Option("Matina");
        let optDistritoLimon2 = new Option("Batán");
        let optDistritoLimon3 = new Option("Carrandi");

        selectDistrito[0] = optDistritoLimon0;
        selectDistrito[1] = optDistritoLimon1;
        selectDistrito[2] = optDistritoLimon2;
        selectDistrito[3] = optDistritoLimon3;
    };
    if (selectCanton.value == "Pococí" && selectProvincia.value == "Limón") {
        let optDistritoLimon0 = new Option("");
        let optDistritoLimon1 = new Option("Guapiles");
        let optDistritoLimon2 = new Option("Jiménez");
        let optDistritoLimon3 = new Option("La Rita");
        let optDistritoLimon4 = new Option("Roxana");
        let optDistritoLimon5 = new Option("Cariari");
        let optDistritoLimon6 = new Option("Colorado");

        selectDistrito[0] = optDistritoLimon0;
        selectDistrito[1] = optDistritoLimon1;
        selectDistrito[2] = optDistritoLimon2;
        selectDistrito[3] = optDistritoLimon3;
        selectDistrito[4] = optDistritoLimon4;
        selectDistrito[5] = optDistritoLimon5;
        selectDistrito[6] = optDistritoLimon6;
    };
    if (selectCanton.value == "Siquírres" && selectProvincia.value == "Limón") {
        let optDistritoLimon0 = new Option("");
        let optDistritoLimon1 = new Option("Siquírres");
        let optDistritoLimon2 = new Option("Pacuarito");
        let optDistritoLimon3 = new Option("Florida");
        let optDistritoLimon4 = new Option("Germania");
        let optDistritoLimon5 = new Option("Cairo");
        let optDistritoLimon6 = new Option("Alegría");

        selectDistrito[0] = optDistritoLimon0;
        selectDistrito[1] = optDistritoLimon1;
        selectDistrito[2] = optDistritoLimon2;
        selectDistrito[3] = optDistritoLimon3;
        selectDistrito[4] = optDistritoLimon4;
        selectDistrito[5] = optDistritoLimon5;
        selectDistrito[6] = optDistritoLimon6;
    };
    if (selectCanton.value == "Talamanca" && selectProvincia.value == "Limón") {
        let optDistritoLimon0 = new Option("");
        let optDistritoLimon1 = new Option("Bratsi");
        let optDistritoLimon2 = new Option("Sixaola");
        let optDistritoLimon3 = new Option("Cahuita");
        let optDistritoLimon4 = new Option("Telire");

        selectDistrito[0] = optDistritoLimon0;
        selectDistrito[1] = optDistritoLimon1;
        selectDistrito[2] = optDistritoLimon2;
        selectDistrito[3] = optDistritoLimon3;
        selectDistrito[4] = optDistritoLimon4;
    };
    if (selectCanton.value == "Buenos Aires" && selectProvincia.value == "Puntarenas") {
        let optDistritoPuntarenas0 = new Option("");
        let optDistritoPuntarenas1 = new Option("Boruca");
        let optDistritoPuntarenas2 = new Option("Briolley");
        let optDistritoPuntarenas3 = new Option("Brunka");
        let optDistritoPuntarenas4 = new Option("Buenos Aires");
        let optDistritoPuntarenas5 = new Option("Changena");
        let optDistritoPuntarenas6 = new Option("Colinas");
        let optDistritoPuntarenas7 = new Option("Pilas");
        let optDistritoPuntarenas8 = new Option("Potrero Grande");
        let optDistritoPuntarenas9 = new Option("Volcán");

        selectDistrito[0] = optDistritoPuntarenas0;
        selectDistrito[1] = optDistritoPuntarenas1;
        selectDistrito[2] = optDistritoPuntarenas2;
        selectDistrito[3] = optDistritoPuntarenas3;
        selectDistrito[4] = optDistritoPuntarenas4;
        selectDistrito[5] = optDistritoPuntarenas5;
        selectDistrito[6] = optDistritoPuntarenas6;
        selectDistrito[7] = optDistritoPuntarenas7;
        selectDistrito[8] = optDistritoPuntarenas8;
        selectDistrito[9] = optDistritoPuntarenas9;
    };
    if (selectCanton.value == "Corredores" && selectProvincia.value == "Puntarenas") {
        let optDistritoPuntarenas0 = new Option("");
        let optDistritoPuntarenas1 = new Option("Corredor");
        let optDistritoPuntarenas2 = new Option("La Cuesta");
        let optDistritoPuntarenas3 = new Option("Canoas");
        let optDistritoPuntarenas4 = new Option("Laurel");

        selectDistrito[0] = optDistritoPuntarenas0;
        selectDistrito[1] = optDistritoPuntarenas1;
        selectDistrito[2] = optDistritoPuntarenas2;
        selectDistrito[3] = optDistritoPuntarenas3;
        selectDistrito[4] = optDistritoPuntarenas4;
    };
    if (selectCanton.value == "Coto Brus" && selectProvincia.value == "Puntarenas") {
        let optDistritoPuntarenas0 = new Option("");
        let optDistritoPuntarenas1 = new Option("San Vito");
        let optDistritoPuntarenas2 = new Option("Sabalito");
        let optDistritoPuntarenas3 = new Option("Aguabuena");
        let optDistritoPuntarenas4 = new Option("Limóncito");
        let optDistritoPuntarenas5 = new Option("Pittier");
        let optDistritoPuntarenas6 = new Option("Gutiérrez Braun");

        selectDistrito[0] = optDistritoPuntarenas0;
        selectDistrito[1] = optDistritoPuntarenas1;
        selectDistrito[2] = optDistritoPuntarenas2;
        selectDistrito[3] = optDistritoPuntarenas3;
        selectDistrito[4] = optDistritoPuntarenas4;
        selectDistrito[5] = optDistritoPuntarenas5;
        selectDistrito[6] = optDistritoPuntarenas6;
    };
    if (selectCanton.value == "Esparza" && selectProvincia.value == "Puntarenas") {
        let optDistritoPuntarenas0 = new Option("");
        let optDistritoPuntarenas1 = new Option("Caldera");
        let optDistritoPuntarenas2 = new Option("Espiritu Santo");
        let optDistritoPuntarenas3 = new Option("Macacona");
        let optDistritoPuntarenas4 = new Option("San Rafael");
        let optDistritoPuntarenas5 = new Option("San Jerónimo");
        let optDistritoPuntarenas6 = new Option("San Juan Grande");

        selectDistrito[0] = optDistritoPuntarenas0;
        selectDistrito[1] = optDistritoPuntarenas1;
        selectDistrito[2] = optDistritoPuntarenas2;
        selectDistrito[3] = optDistritoPuntarenas3;
        selectDistrito[4] = optDistritoPuntarenas4;
        selectDistrito[5] = optDistritoPuntarenas5;
        selectDistrito[6] = optDistritoPuntarenas6;
    };
    if (selectCanton.value == "Garabito" && selectProvincia.value == "Puntarenas") {
        let optDistritoPuntarenas0 = new Option("");
        let optDistritoPuntarenas1 = new Option("Jacó");
        let optDistritoPuntarenas2 = new Option("Tarcoles");

        selectDistrito[0] = optDistritoPuntarenas0;
        selectDistrito[1] = optDistritoPuntarenas1;
        selectDistrito[2] = optDistritoPuntarenas2;
    };
    if (selectCanton.value == "Golfito" && selectProvincia.value == "Puntarenas") {
        let optDistritoPuntarenas0 = new Option("");
        let optDistritoPuntarenas1 = new Option("Golfito");
        let optDistritoPuntarenas2 = new Option("Puerto Jiménez");
        let optDistritoPuntarenas3 = new Option("Guaycará");
        let optDistritoPuntarenas4 = new Option("Pavón");

        selectDistrito[0] = optDistritoPuntarenas0;
        selectDistrito[1] = optDistritoPuntarenas1;
        selectDistrito[2] = optDistritoPuntarenas2;
        selectDistrito[3] = optDistritoPuntarenas3;
        selectDistrito[4] = optDistritoPuntarenas4;
    };
    if (selectCanton.value == "Montes de Oro" && selectProvincia.value == "Puntarenas") {
        let optDistritoPuntarenas0 = new Option("");
        let optDistritoPuntarenas1 = new Option("Miramar");
        let optDistritoPuntarenas2 = new Option("La Unión");
        let optDistritoPuntarenas3 = new Option("San Isidro");

        selectDistrito[0] = optDistritoPuntarenas0;
        selectDistrito[1] = optDistritoPuntarenas1;
        selectDistrito[2] = optDistritoPuntarenas2;
        selectDistrito[3] = optDistritoPuntarenas3;
    };
    if (selectCanton.value == "Osa" && selectProvincia.value == "Puntarenas") {
        let optDistritoPuntarenas0 = new Option("");
        let optDistritoPuntarenas1 = new Option("Puerto Cortéz");
        let optDistritoPuntarenas2 = new Option("Palmar");
        let optDistritoPuntarenas3 = new Option("Sierpe");
        let optDistritoPuntarenas4 = new Option("Bahía Ballena");
        let optDistritoPuntarenas5 = new Option("Piedras Blancas");
        let optDistritoPuntarenas6 = new Option("Bahía Drake");

        selectDistrito[0] = optDistritoPuntarenas0;
        selectDistrito[1] = optDistritoPuntarenas1;
        selectDistrito[2] = optDistritoPuntarenas2;
        selectDistrito[3] = optDistritoPuntarenas3;
        selectDistrito[4] = optDistritoPuntarenas4;
        selectDistrito[5] = optDistritoPuntarenas5;
        selectDistrito[6] = optDistritoPuntarenas6;
    };
    if (selectCanton.value == "Parrita" && selectProvincia.value == "Puntarenas") {
        let optDistritoPuntarenas0 = new Option("");
        let optDistritoPuntarenas1 = new Option("Parrita");

        selectDistrito[0] = optDistritoPuntarenas0;
        selectDistrito[1] = optDistritoPuntarenas1;
    };
    if (selectCanton.value == "Puntarenas" && selectProvincia.value == "Puntarenas") {
        let optDistritoPuntarenas0 = new Option("");
        let optDistritoPuntarenas1 = new Option("Acapulco");
        let optDistritoPuntarenas2 = new Option("Arancibia");
        let optDistritoPuntarenas3 = new Option("Barranca");
        let optDistritoPuntarenas4 = new Option("Chacarita");
        let optDistritoPuntarenas5 = new Option("Chira");
        let optDistritoPuntarenas6 = new Option("Chomes");
        let optDistritoPuntarenas7 = new Option("Cobano");
        let optDistritoPuntarenas8 = new Option("El Roble");
        let optDistritoPuntarenas9 = new Option("Guacimal");
        let optDistritoPuntarenas10 = new Option("Isla del Coco");
        let optDistritoPuntarenas11 = new Option("Lepanto");
        let optDistritoPuntarenas12 = new Option("Manzanillo");
        let optDistritoPuntarenas13 = new Option("Monte Verde");
        let optDistritoPuntarenas14 = new Option("Paquera");
        let optDistritoPuntarenas15 = new Option("Pitahaya");
        let optDistritoPuntarenas16 = new Option("Puntarenas");

        selectDistrito[0] = optDistritoPuntarenas0;
        selectDistrito[1] = optDistritoPuntarenas1;
        selectDistrito[2] = optDistritoPuntarenas2;
        selectDistrito[3] = optDistritoPuntarenas3;
        selectDistrito[4] = optDistritoPuntarenas4;
        selectDistrito[5] = optDistritoPuntarenas5;
        selectDistrito[6] = optDistritoPuntarenas6;
        selectDistrito[7] = optDistritoPuntarenas7;
        selectDistrito[8] = optDistritoPuntarenas8;
        selectDistrito[9] = optDistritoPuntarenas9;
        selectDistrito[10] = optDistritoPuntarenas10;
        selectDistrito[11] = optDistritoPuntarenas11;
        selectDistrito[12] = optDistritoPuntarenas12;
        selectDistrito[13] = optDistritoPuntarenas13;
        selectDistrito[14] = optDistritoPuntarenas14;
        selectDistrito[15] = optDistritoPuntarenas15;
        selectDistrito[16] = optDistritoPuntarenas16;
    };
    if (selectCanton.value == "Quepos" && selectProvincia.value == "Puntarenas") {
        let optDistritoPuntarenas0 = new Option("");
        let optDistritoPuntarenas1 = new Option("Quepos");
        let optDistritoPuntarenas2 = new Option("Savegre");
        let optDistritoPuntarenas3 = new Option("Nranjito");

        selectDistrito[0] = optDistritoPuntarenas0;
        selectDistrito[1] = optDistritoPuntarenas1;
        selectDistrito[2] = optDistritoPuntarenas2;
        selectDistrito[3] = optDistritoPuntarenas3;
    };
    if (selectCanton.value == "Acosta" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Cangrejal");
        let optDistritoSanJose2 = new Option("Guaitil");
        let optDistritoSanJose3 = new Option("Palmichal");
        let optDistritoSanJose4 = new Option("Sabanillas");
        let optDistritoSanJose5 = new Option("San Ignacio");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
    };
    if (selectCanton.value == "Alajuelita" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Alajuelita");
        let optDistritoSanJose2 = new Option("Concepción");
        let optDistritoSanJose3 = new Option("San Antonio");
        let optDistritoSanJose4 = new Option("San Jocesito");
        let optDistritoSanJose5 = new Option("San Felipe");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
    };
    if (selectCanton.value == "Aserrí" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Aserrí");
        let optDistritoSanJose2 = new Option("Tarbaca");
        let optDistritoSanJose3 = new Option("Vuelta de Jorco");
        let optDistritoSanJose4 = new Option("San Gabriel");
        let optDistritoSanJose5 = new Option("Legua");
        let optDistritoSanJose6 = new Option("Monterrey");
        let optDistritoSanJose7 = new Option("Salitrillos");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
        selectDistrito[6] = optDistritoSanJose6;
        selectDistrito[7] = optDistritoSanJose7;
    };
    if (selectCanton.value == "Curridabat" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Curridabat");
        let optDistritoSanJose2 = new Option("Granadilla");
        let optDistritoSanJose3 = new Option("Sánchez");
        let optDistritoSanJose4 = new Option("Tirrases");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
    };
    if (selectCanton.value == "Desamparados" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Damas");
        let optDistritoSanJose2 = new Option("Desamparados");
        let optDistritoSanJose3 = new Option("Frailes");
        let optDistritoSanJose4 = new Option("Gravilias");
        let optDistritoSanJose5 = new Option("Los Guido");
        let optDistritoSanJose6 = new Option("Patarrá");
        let optDistritoSanJose7 = new Option("Rosario");
        let optDistritoSanJose8 = new Option("San Antonio");
        let optDistritoSanJose9 = new Option("San Cristóbal");
        let optDistritoSanJose10 = new Option("San Juan de Dios");
        let optDistritoSanJose11 = new Option("San Miguel");
        let optDistritoSanJose12 = new Option("San Rafael Abajo");
        let optDistritoSanJose13 = new Option("San Rafael Arriba");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
        selectDistrito[6] = optDistritoSanJose6;
        selectDistrito[7] = optDistritoSanJose7;
        selectDistrito[8] = optDistritoSanJose8;
        selectDistrito[9] = optDistritoSanJose9;
        selectDistrito[10] = optDistritoSanJose10;
        selectDistrito[11] = optDistritoSanJose11;
        selectDistrito[12] = optDistritoSanJose12;
        selectDistrito[13] = optDistritoSanJose13;
    };
    if (selectCanton.value == "Dota" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Copey");
        let optDistritoSanJose2 = new Option("Jardín");
        let optDistritoSanJose3 = new Option("Santa María");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
    };
    if (selectCanton.value == "Escazú" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Escazú");
        let optDistritoSanJose2 = new Option("San Antonio");
        let optDistritoSanJose3 = new Option("San Rafael");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
    };
    if (selectCanton.value == "Goicoechea" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Calle Blancos");
        let optDistritoSanJose2 = new Option("Guadalupe");
        let optDistritoSanJose3 = new Option("Ipís");
        let optDistritoSanJose4 = new Option("Mata de Platano");
        let optDistritoSanJose5 = new Option("Purral");
        let optDistritoSanJose6 = new Option("Rancho Redondo");
        let optDistritoSanJose7 = new Option("San Francisco");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
        selectDistrito[6] = optDistritoSanJose6;
        selectDistrito[7] = optDistritoSanJose7;
    };
    if (selectCanton.value == "León Cortéz" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Llano Bonito");
        let optDistritoSanJose2 = new Option("San Andrés");
        let optDistritoSanJose3 = new Option("San Antonio");
        let optDistritoSanJose4 = new Option("San Isidro");
        let optDistritoSanJose5 = new Option("San Pablo");
        let optDistritoSanJose6 = new Option("Santa Cruz");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
        selectDistrito[6] = optDistritoSanJose6;
    };
    if (selectCanton.value == "Montes de Oca" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("San Pedro");
        let optDistritoSanJose2 = new Option("Sabanilla");
        let optDistritoSanJose3 = new Option("Mercedes");
        let optDistritoSanJose4 = new Option("San Rafael");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
    };
    if (selectCanton.value == "Mora" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Colón");
        let optDistritoSanJose2 = new Option("Guayabo");
        let optDistritoSanJose3 = new Option("Jaris");
        let optDistritoSanJose4 = new Option("Picagres");
        let optDistritoSanJose5 = new Option("Piedras Negras");
        let optDistritoSanJose6 = new Option("Quitirrisí");
        let optDistritoSanJose7 = new Option("Tabarcia");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
        selectDistrito[6] = optDistritoSanJose6;
        selectDistrito[7] = optDistritoSanJose7;
    };
    if (selectCanton.value == "Moravia" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("San Vicente");
        let optDistritoSanJose2 = new Option("San Jerónimo");
        let optDistritoSanJose3 = new Option("La Trinidad");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
    };
    if (selectCanton.value == "Pérez Zeledón" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Barú");
        let optDistritoSanJose2 = new Option("Cajón");
        let optDistritoSanJose3 = new Option("Daniel Flores");
        let optDistritoSanJose4 = new Option("El General");
        let optDistritoSanJose5 = new Option("La Amistad");
        let optDistritoSanJose6 = new Option("Páramo");
        let optDistritoSanJose7 = new Option("Pejibaye");
        let optDistritoSanJose8 = new Option("Platanares");
        let optDistritoSanJose9 = new Option("Río Nuevo");
        let optDistritoSanJose10 = new Option("Rivas");
        let optDistritoSanJose11 = new Option("San Isidro de El General");
        let optDistritoSanJose12 = new Option("San Pedro");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
        selectDistrito[6] = optDistritoSanJose6;
        selectDistrito[7] = optDistritoSanJose7;
        selectDistrito[8] = optDistritoSanJose8;
        selectDistrito[9] = optDistritoSanJose9;
        selectDistrito[10] = optDistritoSanJose10;
        selectDistrito[11] = optDistritoSanJose11;
        selectDistrito[12] = optDistritoSanJose12;
    };
    if (selectCanton.value == "Puriscal" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Barbacoas");
        let optDistritoSanJose2 = new Option("Candelarita");
        let optDistritoSanJose3 = new Option("Chires");
        let optDistritoSanJose4 = new Option("Desamparaditos");
        let optDistritoSanJose5 = new Option("Grifo Alto");
        let optDistritoSanJose6 = new Option("Mercedes Sur");
        let optDistritoSanJose7 = new Option("San Antonio");
        let optDistritoSanJose8 = new Option("San Rafael");
        let optDistritoSanJose9 = new Option("Santiago");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
        selectDistrito[6] = optDistritoSanJose6;
        selectDistrito[7] = optDistritoSanJose7;
        selectDistrito[8] = optDistritoSanJose8;
        selectDistrito[9] = optDistritoSanJose9;
    };
    if (selectCanton.value == "San José" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Carmen");
        let optDistritoSanJose2 = new Option("Catedral");
        let optDistritoSanJose3 = new Option("Hatillo");
        let optDistritoSanJose4 = new Option("Hospital");
        let optDistritoSanJose5 = new Option("Mata Redonda");
        let optDistritoSanJose6 = new Option("Merced");
        let optDistritoSanJose7 = new Option("Pavas");
        let optDistritoSanJose8 = new Option("San Francisco de Dos Ríos");
        let optDistritoSanJose9 = new Option("San Sebastián");
        let optDistritoSanJose10 = new Option("Uruca");
        let optDistritoSanJose11 = new Option("Zapote");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
        selectDistrito[6] = optDistritoSanJose6;
        selectDistrito[7] = optDistritoSanJose7;
        selectDistrito[8] = optDistritoSanJose8;
        selectDistrito[9] = optDistritoSanJose9;
        selectDistrito[10] = optDistritoSanJose10;
        selectDistrito[11] = optDistritoSanJose11;
    };
    if (selectCanton.value == "Santa Ana" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Santa Ana");
        let optDistritoSanJose2 = new Option("Salitral");
        let optDistritoSanJose3 = new Option("Pozos");
        let optDistritoSanJose4 = new Option("Uruca");
        let optDistritoSanJose5 = new Option("Piedades");
        let optDistritoSanJose6 = new Option("Brasil");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
        selectDistrito[6] = optDistritoSanJose6;
    };
    if (selectCanton.value == "Tarrazú" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("San Marcos");
        let optDistritoSanJose2 = new Option("San Lorenzo");
        let optDistritoSanJose3 = new Option("San Carlos");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
    };
    if (selectCanton.value == "Tibás" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Anselmo Llorente");
        let optDistritoSanJose2 = new Option("Cinco Esquinas");
        let optDistritoSanJose3 = new Option("Colima");
        let optDistritoSanJose4 = new Option("Léon XIII");
        let optDistritoSanJose5 = new Option("San Juan");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
    };
    if (selectCanton.value == "Turrubares" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Carara");
        let optDistritoSanJose2 = new Option("San Juan de Mata");
        let optDistritoSanJose3 = new Option("San Luis");
        let optDistritoSanJose4 = new Option("San Pablo");
        let optDistritoSanJose5 = new Option("San Pedro");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
    };
    if (selectCanton.value == "Vásquez de Coronado" && selectProvincia.value == "San José") {
        let optDistritoSanJose0 = new Option("");
        let optDistritoSanJose1 = new Option("Cascajal");
        let optDistritoSanJose2 = new Option("Dulce Nombre de Jesús");
        let optDistritoSanJose3 = new Option("Patalillo");
        let optDistritoSanJose4 = new Option("San Isidro");
        let optDistritoSanJose5 = new Option("San Rafael");

        selectDistrito[0] = optDistritoSanJose0;
        selectDistrito[1] = optDistritoSanJose1;
        selectDistrito[2] = optDistritoSanJose2;
        selectDistrito[3] = optDistritoSanJose3;
        selectDistrito[4] = optDistritoSanJose4;
        selectDistrito[5] = optDistritoSanJose5;
    };
};
//============================== FIN DROPDOWNS ==================================

let banderaModificar = false;

const botonRegistrar = document.querySelector('#btnRegistrar');
const botonModificar = document.querySelector('#btnModificar');

botonModificar.hidden = true;

const inputNombreSede = document.querySelector('#txtNombreSede');
const inputProvinciaSede = document.querySelector('#txtProvinciaSede');
const inputCantonSede = document.querySelector('#txtCantonSede');
const inputDistritoSede = document.querySelector('#txtDistritoSede');
const inputUbicacionSede = document.querySelector('#txtUbicacionSede');
const inputId = document.querySelector('#txtID');


botonRegistrar.addEventListener('click', obtenerDatos);
botonModificar.addEventListener('click', obtenerDatosModificar);

function obtenerDatos() {

    let bError = false;
    let respuesta;

    bError = validar();

    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar la sede',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });
    } else {

    let sNombreSede = inputNombreSede.value;
    let sProvinciaSede = inputProvinciaSede.value;
    let sCantonSede = inputCantonSede.value;
    let sDistritoSede = inputDistritoSede.value;
    let sUbicacionSede = inputUbicacionSede.value;
    let estado = 1;

        //funcion que va al servicio_RegistrarSede.js
        respuesta = registrarSede(sNombreSede, sProvinciaSede, sCantonSede, sDistritoSede, sUbicacionSede, estado);

        if(respuesta.success == true){

            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "Se registró la sede con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
                }).then((result) => {
                    if(result.value){
    
                        window.location.href = "sede_listar.html";
                    }
    
                });

        }else{

            swal({
                type: 'error',
                title: 'No se pudo registrar la sede',
                text: 'Por favor contactar al administrador',
                confirmButtonText: 'Aceptar'
            });

        }

        limpiarFormulario();
    }
};

function obtenerDatosModificar() {

    let bError = false;
    let respuesta;

    bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo modificar la sede',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });

    } else {

        let sNombreSede = inputNombreSede.value;
        let sProvinciaSede = inputProvinciaSede.value;
        let sCantonSede = inputCantonSede.value;
        let sDistritoSede = inputDistritoSede.value;
        let sUbicacionSede = inputUbicacionSede.value;
        let _id = JSON.parse(localStorage.getItem("sedeParaModificar"))[2];  //aqui trae el _id

        respuesta = modificarSede(_id, sNombreSede, sProvinciaSede, sCantonSede, sDistritoSede, sUbicacionSede);//esta funcion está en el servicio_RegistrarPeriodo.js

        if (respuesta.success = true) {
            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "La sede se modificó con éxito!",
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#3085d6',
            }).then((result) => {
                if (result.value) {

                    window.location.href = "sede_listar.html";
                }

            });
        } else {
            swal({
                type: 'error',
                title: 'Problemas de conexión',
                text: 'Por favor contactar al administrador',
                confirmButtonText: 'Aceptar'
            });
        }

         limpiarFormulario()         
         botonModificar.hidden = true;
         botonRegistrar.hidden = false;
        }
        
    };

function validar() {
    let bError = false;

    //let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    //let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del nombre Nombre
    if (inputNombreSede.value == '') {

        inputNombreSede.classList.add('input_error');
        bError = true;
    } else {
        inputNombreSede.classList.remove('input_error');
    }

    //Validación de Provincia
    if (inputProvinciaSede.value == '') {
        inputProvinciaSede.classList.add('input_error');
        bError = true;
    } else {
        inputProvinciaSede.classList.remove('input_error');
    }

    //Validación de Cantón
    if (inputCantonSede.value == '') {
        inputCantonSede.classList.add('input_error');
        bError = true;
    } else {
        inputCantonSede.classList.remove('input_error');
    }

    //Validación de Disrtito
    if (inputDistritoSede.value == '') {
        inputDistritoSede.classList.add('input_error');
        bError = true;
    } else {
        inputDistritoSede.classList.remove('input_error');
    }

    //Validación de la Ubicación
    if (inputUbicacionSede.value == '') {
        inputUbicacionSede.classList.add('input_error');
        bError = true;
    } else {
        inputUbicacionSede.classList.remove('input_error');
    }

    return bError;
};

function limpiarFormulario() {
    inputNombreSede.value = '';
    inputProvinciaSede.value = '';
    inputUbicacionSede.value = '';
    inputDistritoSede.value = '';
    inputCantonSede.value = '';
}



// ***  inicio: para enviar la informacion para modificar al formulario.  (del controlador_ListarPeriodo.js) *** 
banderaModificar = JSON.parse(localStorage.getItem("estadoBanderaModificar"));

if (banderaModificar == true) {
    window.onload = function () {
        cargar_datos_modificar();
    };

   function cargar_datos_modificar(){
    
    let sede = [];
    sede = getSedeParaModificar();

    if (sede[0]!= undefined){

        setProvinciaSeleccionada(sede[1], sede[2], sede[3]);
        optProvincia_Canton();        

        inputNombreSede.value = sede[0];
        inputProvinciaSede.value = sede[1];
        inputCantonSede.value = sede[2];
        inputDistritoSede.value = sede[3];
        inputUbicacionSede.value = sede[4];

        optCanton_Distrito();
        inputDistritoSede.value = sede[3];


        sede = [];
        localStorage.setItem("sedeParaModificar", JSON.stringify(sede));
        botonModificar.hidden = false;
        botonRegistrar.hidden = true;
    }
    }
};

function getSedeParaModificar() {
    return JSON.parse(localStorage.getItem("sedeParaModificar"));
}

function setProvinciaSeleccionada(provincia, canton, distrito) {
    
    switch (provincia) {
        case "Alajuela":
            selectProvincia[1].selected = true;
            selectCanton.value = canton;
            selectDistrito.value = distrito;
            break;
        case "Cartago":
            selectProvincia[2].selected = true;
            selectCanton.value = canton;
            selectDistrito.value = distrito;
            break;
        case "Guanacaste":
            selectProvincia[3].selected = true;
            selectCanton.value = canton;
            selectDistrito.value = distrito;
            break;
        case "Heredia":
            selectProvincia[4].selected = true;
            selectCanton.value = canton;
            selectDistrito.value = distrito;
            break;
        case "Limón":
            selectProvincia[5].selected = true;
            selectCanton.value = canton;
            selectDistrito.value = distrito;
            break;
        case "Puntarenas":
            selectProvincia[6].selected = true;
            selectCanton.value = canton;
            selectDistrito.value = distrito;
            break;  
        case "San José":
            selectProvincia[7].selected = true;
            selectCanton.value = canton;
            selectDistrito.value = distrito;
            break;            
        default:
            break;
    }
}
// fin: enviar info del listar al form 