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
let select_provincia = document.querySelector('#txtProvinciaSede');
let select_canton = document.querySelector('#txtCantonSede');
let select_distrito = document.querySelector('#txtDistritoSede');

document.getElementById("txtProvinciaSede").onchange = function () { opt_provincia_canton() };
document.getElementById("txtCantonSede").onchange = function () { opt_canton_distrito() };

function opt_provincia_canton() {

    select_canton.length = null;

    if (select_provincia[0].selected == true) {
        let seleccionar = new Option("");
        select_canton[0] = seleccionar;
    };

    if (select_provincia[1].selected == true) //Alajuela
    {
        let opt_canton_alajuela0 = new Option("");
        let opt_canton_alajuela1 = new Option("Alajuela");
        let opt_canton_alajuela2 = new Option("San Ramón");
        let opt_canton_alajuela3 = new Option("Grecia");
        let opt_canton_alajuela4 = new Option("San Mateo");
        let opt_canton_alajuela5 = new Option("Atenas");
        let opt_canton_alajuela6 = new Option("Naranjo");
        let opt_canton_alajuela7 = new Option("Palmares");
        let opt_canton_alajuela8 = new Option("Poás");
        let opt_canton_alajuela9 = new Option("Orotina");
        let opt_canton_alajuela10 = new Option("San Carlos");
        let opt_canton_alajuela11 = new Option("Alfaro Ruíz");
        let opt_canton_alajuela12 = new Option("Valverde Vega");
        let opt_canton_alajuela13 = new Option("Upala");
        let opt_canton_alajuela14 = new Option("Los Chiles");
        let opt_canton_alajuela15 = new Option("Guatuso");

        select_canton[0] = opt_canton_alajuela0;
        select_canton[1] = opt_canton_alajuela1;
        select_canton[2] = opt_canton_alajuela2;
        select_canton[3] = opt_canton_alajuela3;
        select_canton[4] = opt_canton_alajuela4;
        select_canton[5] = opt_canton_alajuela5;
        select_canton[6] = opt_canton_alajuela6;
        select_canton[7] = opt_canton_alajuela7;
        select_canton[8] = opt_canton_alajuela8;
        select_canton[9] = opt_canton_alajuela9;
        select_canton[10] = opt_canton_alajuela10;
        select_canton[11] = opt_canton_alajuela11;
        select_canton[12] = opt_canton_alajuela12;
        select_canton[13] = opt_canton_alajuela13;
        select_canton[14] = opt_canton_alajuela14;
        select_canton[15] = opt_canton_alajuela15;
    }
    if (select_provincia[2].selected == true) //Cartago
    {
        let opt_canton_cartago0 = new Option("");
        let opt_canton_cartago1 = new Option("Cartago");
        let opt_canton_cartago2 = new Option("Paraíso");
        let opt_canton_cartago3 = new Option("La Unión");
        let opt_canton_cartago4 = new Option("Jiménez");
        let opt_canton_cartago5 = new Option("Turrialba");
        let opt_canton_cartago6 = new Option("Alvarado");
        let opt_canton_cartago7 = new Option("Oreamuno");
        let opt_canton_cartago8 = new Option("El Guarco");

        select_canton[0] = opt_canton_cartago0;
        select_canton[1] = opt_canton_cartago1;
        select_canton[2] = opt_canton_cartago2;
        select_canton[3] = opt_canton_cartago3;
        select_canton[4] = opt_canton_cartago4;
        select_canton[5] = opt_canton_cartago5;
        select_canton[6] = opt_canton_cartago6;
        select_canton[7] = opt_canton_cartago7;
        select_canton[8] = opt_canton_cartago8;
    };
    if (select_provincia[3].selected == true) //Guanacaste
    {
        let opt_canton_guanacaste0 = new Option("");
        let opt_canton_guanacaste1 = new Option("Liberia");
        let opt_canton_guanacaste2 = new Option("Nicoya");
        let opt_canton_guanacaste3 = new Option("Santa Cruz");
        let opt_canton_guanacaste4 = new Option("Bagaces");
        let opt_canton_guanacaste5 = new Option("Carrillo");
        let opt_canton_guanacaste6 = new Option("Cañas");
        let opt_canton_guanacaste7 = new Option("Abangares");
        let opt_canton_guanacaste8 = new Option("Tilarán");
        let opt_canton_guanacaste9 = new Option("Nandayure");
        let opt_canton_guanacaste10 = new Option("La Cruz");
        let opt_canton_guanacaste11 = new Option("Hojancha");

        select_canton[0] = opt_canton_guanacaste0;
        select_canton[1] = opt_canton_guanacaste1;
        select_canton[2] = opt_canton_guanacaste2;
        select_canton[3] = opt_canton_guanacaste3;
        select_canton[4] = opt_canton_guanacaste4;
        select_canton[5] = opt_canton_guanacaste5;
        select_canton[6] = opt_canton_guanacaste6;
        select_canton[7] = opt_canton_guanacaste7;
        select_canton[8] = opt_canton_guanacaste8;
        select_canton[9] = opt_canton_guanacaste9;
        select_canton[10] = opt_canton_guanacaste10;
        select_canton[11] = opt_canton_guanacaste11;
    };
    if (select_provincia[4].selected == true) //Heredia
    {
        let opt_canton_heredia0 = new Option("");
        let opt_canton_heredia1 = new Option("Heredia");
        let opt_canton_heredia2 = new Option("Barba");
        let opt_canton_heredia3 = new Option("Santo Domingo");
        let opt_canton_heredia4 = new Option("Santa Bárbara");
        let opt_canton_heredia5 = new Option("San Rafael");
        let opt_canton_heredia6 = new Option("San Isidro");
        let opt_canton_heredia7 = new Option("Belén");
        let opt_canton_heredia8 = new Option("Flores");
        let opt_canton_heredia9 = new Option("San Pablo");
        let opt_canton_heredia10 = new Option("Sarapiquí");

        select_canton[0] = opt_canton_heredia0;
        select_canton[1] = opt_canton_heredia1;
        select_canton[2] = opt_canton_heredia2;
        select_canton[3] = opt_canton_heredia3;
        select_canton[4] = opt_canton_heredia4;
        select_canton[5] = opt_canton_heredia5;
        select_canton[6] = opt_canton_heredia6;
        select_canton[7] = opt_canton_heredia7;
        select_canton[8] = opt_canton_heredia8;
        select_canton[9] = opt_canton_heredia9;
        select_canton[10] = opt_canton_heredia10;
    };
    if (select_provincia[5].selected == true) //Limon
    {
        let opt_canton_limon0 = new Option("");
        let opt_canton_limon1 = new Option("Limón");
        let opt_canton_limon2 = new Option("Pococí");
        let opt_canton_limon3 = new Option("Siquírres");
        let opt_canton_limon4 = new Option("Talamanca");
        let opt_canton_limon5 = new Option("Matina");
        let opt_canton_limon6 = new Option("Guácimo");

        select_canton[0] = opt_canton_limon0;
        select_canton[1] = opt_canton_limon1;
        select_canton[2] = opt_canton_limon2;
        select_canton[3] = opt_canton_limon3;
        select_canton[4] = opt_canton_limon4;
        select_canton[5] = opt_canton_limon5;
        select_canton[6] = opt_canton_limon6;
    };
    if (select_provincia[6].selected == true) //Puntarenas
    {
        let opt_canton_puntarenas0 = new Option("");
        let opt_canton_puntarenas1 = new Option("Puntarenas");
        let opt_canton_puntarenas2 = new Option("Esparza");
        let opt_canton_puntarenas3 = new Option("Buenos Aires");
        let opt_canton_puntarenas4 = new Option("Montes de Oro");
        let opt_canton_puntarenas5 = new Option("Osa");
        let opt_canton_puntarenas6 = new Option("Golfito");
        let opt_canton_puntarenas7 = new Option("Coto Brus");
        let opt_canton_puntarenas8 = new Option("Parrita");
        let opt_canton_puntarenas9 = new Option("Corredores");
        let opt_canton_puntarenas10 = new Option("Garabito");

        select_canton[0] = opt_canton_puntarenas0;
        select_canton[1] = opt_canton_puntarenas1;
        select_canton[2] = opt_canton_puntarenas2;
        select_canton[3] = opt_canton_puntarenas3;
        select_canton[4] = opt_canton_puntarenas4;
        select_canton[5] = opt_canton_puntarenas5;
        select_canton[6] = opt_canton_puntarenas6;
        select_canton[7] = opt_canton_puntarenas7;
        select_canton[8] = opt_canton_puntarenas8;
        select_canton[9] = opt_canton_puntarenas9;
        select_canton[10] = opt_canton_puntarenas10;
    };
    if (select_provincia[7].selected == true) //San Jose
    {
        let opt_canton_san_jose0 = new Option("");
        let opt_canton_san_jose1 = new Option("San José");
        let opt_canton_san_jose2 = new Option("Escazú");
        let opt_canton_san_jose3 = new Option("Desamparados");
        let opt_canton_san_jose4 = new Option("Puriscal");
        let opt_canton_san_jose5 = new Option("Tarrazú");
        let opt_canton_san_jose6 = new Option("Aserrí");
        let opt_canton_san_jose7 = new Option("Mora");
        let opt_canton_san_jose8 = new Option("Goicoechea");
        let opt_canton_san_jose9 = new Option("Santa Ana");
        let opt_canton_san_jose10 = new Option("Alajuelita");
        let opt_canton_san_jose11 = new Option("Vásquez de Coronado");
        let opt_canton_san_jose12 = new Option("Acosta");
        let opt_canton_san_jose13 = new Option("Tibás");
        let opt_canton_san_jose14 = new Option("Moravia");
        let opt_canton_san_jose15 = new Option("Montes de Oca");
        let opt_canton_san_jose16 = new Option("Turrubares");
        let opt_canton_san_jose17 = new Option("Dota");
        let opt_canton_san_jose18 = new Option("Curridabat");
        let opt_canton_san_jose19 = new Option("Pérez Zeledón");
        let opt_canton_san_jose20 = new Option("León Cortéz");

        select_canton[0] = opt_canton_san_jose0;
        select_canton[1] = opt_canton_san_jose1;
        select_canton[2] = opt_canton_san_jose2;
        select_canton[3] = opt_canton_san_jose3;
        select_canton[4] = opt_canton_san_jose4;
        select_canton[5] = opt_canton_san_jose5;
        select_canton[6] = opt_canton_san_jose6;
        select_canton[7] = opt_canton_san_jose7;
        select_canton[8] = opt_canton_san_jose8;
        select_canton[9] = opt_canton_san_jose9;
        select_canton[10] = opt_canton_san_jose10;
        select_canton[11] = opt_canton_san_jose11;
        select_canton[12] = opt_canton_san_jose12;
        select_canton[13] = opt_canton_san_jose13;
        select_canton[14] = opt_canton_san_jose14;
        select_canton[15] = opt_canton_san_jose15;
        select_canton[16] = opt_canton_san_jose16;
        select_canton[17] = opt_canton_san_jose17;
        select_canton[18] = opt_canton_san_jose18;
        select_canton[19] = opt_canton_san_jose19;
        select_canton[20] = opt_canton_san_jose20;
    };
};
//=============================================================================

document.getElementById("txtCantonSede").onchange = function () { opt_canton_distrito() };
function opt_canton_distrito() {

    select_distrito.length = null;

    if (select_canton.value == "Alajuela" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("Alajuela");
        let opt_distrito_alajuela2 = new Option("San José");
        let opt_distrito_alajuela3 = new Option("Carrizal");
        let opt_distrito_alajuela4 = new Option("Guácima");
        let opt_distrito_alajuela5 = new Option("Río Segundo");
        let opt_distrito_alajuela6 = new Option("Turrúcares");
        let opt_distrito_alajuela7 = new Option("Tambor");
        let opt_distrito_alajuela8 = new Option("Garita");
        let opt_distrito_alajuela9 = new Option("Sarapiquí");
        let opt_distrito_alajuela10 = new Option("San Antonio");
        let opt_distrito_alajuela11 = new Option("San Isidro");
        let opt_distrito_alajuela12 = new Option("Sabanilla");
        let opt_distrito_alajuela13 = new Option("San Rafael");
        let opt_distrito_alajuela14 = new Option("Desamparados");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
        select_distrito[5] = opt_distrito_alajuela5;
        select_distrito[6] = opt_distrito_alajuela6;
        select_distrito[7] = opt_distrito_alajuela7;
        select_distrito[8] = opt_distrito_alajuela8;
        select_distrito[9] = opt_distrito_alajuela9;
        select_distrito[10] = opt_distrito_alajuela10;
        select_distrito[11] = opt_distrito_alajuela11;
        select_distrito[12] = opt_distrito_alajuela12;
        select_distrito[13] = opt_distrito_alajuela13;
        select_distrito[14] = opt_distrito_alajuela14;
    };

    if (select_canton.value == "Atenas" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("Atenas");
        let opt_distrito_alajuela2 = new Option("Jesús");
        let opt_distrito_alajuela3 = new Option("Santa Eulalia");
        let opt_distrito_alajuela4 = new Option("Escobal");
        let opt_distrito_alajuela5 = new Option("Mercedes");
        let opt_distrito_alajuela6 = new Option("San Isidro");
        let opt_distrito_alajuela7 = new Option("Concepción");
        let opt_distrito_alajuela8 = new Option("San José");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
        select_distrito[5] = opt_distrito_alajuela5;
        select_distrito[6] = opt_distrito_alajuela6;
        select_distrito[7] = opt_distrito_alajuela7;
        select_distrito[8] = opt_distrito_alajuela8;
    };
    if (select_canton.value == "Grecia" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("Grecia");
        let opt_distrito_alajuela2 = new Option("San Roque");
        let opt_distrito_alajuela3 = new Option("Tacares");
        let opt_distrito_alajuela4 = new Option("Río Cuarto");
        let opt_distrito_alajuela5 = new Option("Puentes de Piedra");
        let opt_distrito_alajuela6 = new Option("Bolívar");
        let opt_distrito_alajuela7 = new Option("San Isidro");
        let opt_distrito_alajuela8 = new Option("San José");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
        select_distrito[5] = opt_distrito_alajuela5;
        select_distrito[6] = opt_distrito_alajuela6;
        select_distrito[7] = opt_distrito_alajuela7;
        select_distrito[8] = opt_distrito_alajuela8;
    };
    if (select_canton.value == "Guatuso" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("Cote");
        let opt_distrito_alajuela2 = new Option("Katira");
        let opt_distrito_alajuela3 = new Option("San Rafael");
        let opt_distrito_alajuela4 = new Option("Buenavista");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
    };
    if (select_canton.value == "Los Chiles" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("Los Chiles");
        let opt_distrito_alajuela2 = new Option("Caño Negro");
        let opt_distrito_alajuela3 = new Option("El Amparo");
        let opt_distrito_alajuela4 = new Option("San Jorge");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
    };
    if (select_canton.value == "Naranjo" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("Naranjo");
        let opt_distrito_alajuela2 = new Option("San José");
        let opt_distrito_alajuela3 = new Option("Cirrí Sur");
        let opt_distrito_alajuela4 = new Option("El Rosario");
        let opt_distrito_alajuela5 = new Option("Palmitos");
        let opt_distrito_alajuela6 = new Option("San Juan");
        let opt_distrito_alajuela7 = new Option("San Jerónimo");
        let opt_distrito_alajuela8 = new Option("San Miguel");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
        select_distrito[5] = opt_distrito_alajuela5;
        select_distrito[6] = opt_distrito_alajuela6;
        select_distrito[7] = opt_distrito_alajuela7;
        select_distrito[8] = opt_distrito_alajuela8;
    };
    if (select_canton.value == "Orotina" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("Orotina");
        let opt_distrito_alajuela2 = new Option("El Mastate");
        let opt_distrito_alajuela3 = new Option("Hacienda Vieja");
        let opt_distrito_alajuela4 = new Option("Coyolar");
        let opt_distrito_alajuela5 = new Option("La Ceiba");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
        select_distrito[5] = opt_distrito_alajuela5;
    };

    if (select_canton.value == "Palmares" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("Palmares");
        let opt_distrito_alajuela2 = new Option("Zaragoza");
        let opt_distrito_alajuela3 = new Option("Buenos Aires");
        let opt_distrito_alajuela4 = new Option("Candelaria");
        let opt_distrito_alajuela5 = new Option("Esquipulas");
        let opt_distrito_alajuela6 = new Option("La Granja");
        let opt_distrito_alajuela7 = new Option("Santiago");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
        select_distrito[5] = opt_distrito_alajuela5;
        select_distrito[6] = opt_distrito_alajuela6;
        select_distrito[7] = opt_distrito_alajuela7;
    };

    if (select_canton.value == "Poás" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("San Juan");
        let opt_distrito_alajuela2 = new Option("Carrillos");
        let opt_distrito_alajuela3 = new Option("Sabana Redonda");
        let opt_distrito_alajuela4 = new Option("San Pedro");
        let opt_distrito_alajuela5 = new Option("San Rafael");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
        select_distrito[5] = opt_distrito_alajuela5;
    };

    if (select_canton.value == "San Carlos" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("Quesada");
        let opt_distrito_alajuela2 = new Option("Florencia");
        let opt_distrito_alajuela3 = new Option("Buenavista");
        let opt_distrito_alajuela4 = new Option("Aguas Zarcas");
        let opt_distrito_alajuela5 = new Option("Venecia");
        let opt_distrito_alajuela6 = new Option("La Fortuna");
        let opt_distrito_alajuela7 = new Option("La Tigra");
        let opt_distrito_alajuela8 = new Option("La Palmera");
        let opt_distrito_alajuela9 = new Option("Venado");
        let opt_distrito_alajuela10 = new Option("Cutris");
        let opt_distrito_alajuela11 = new Option("Monterrey");
        let opt_distrito_alajuela12 = new Option("Pocosol");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
        select_distrito[5] = opt_distrito_alajuela5;
        select_distrito[6] = opt_distrito_alajuela6;
        select_distrito[7] = opt_distrito_alajuela7;
        select_distrito[8] = opt_distrito_alajuela8;
        select_distrito[9] = opt_distrito_alajuela9;
        select_distrito[10] = opt_distrito_alajuela10;
        select_distrito[11] = opt_distrito_alajuela11;
        select_distrito[12] = opt_distrito_alajuela12;

    };

    if (select_canton.value == "San Mateo" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("San Mateo");
        let opt_distrito_alajuela2 = new Option("Desmonte");
        let opt_distrito_alajuela3 = new Option("Jesús María");
        let opt_distrito_alajuela4 = new Option("Labrador");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
    };

    if (select_canton.value == "San Ramón" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("San Ramón");
        let opt_distrito_alajuela2 = new Option("Piedades Norte");
        let opt_distrito_alajuela3 = new Option("Piedades Sur");
        let opt_distrito_alajuela4 = new Option("Ángeles");
        let opt_distrito_alajuela5 = new Option("Alfaro");
        let opt_distrito_alajuela6 = new Option("Volio");
        let opt_distrito_alajuela7 = new Option("Zapotal");
        let opt_distrito_alajuela8 = new Option("Peñas Blancas");
        let opt_distrito_alajuela9 = new Option("Santiango");
        let opt_distrito_alajuela10 = new Option("San Juan");
        let opt_distrito_alajuela11 = new Option("Concepción");
        let opt_distrito_alajuela12 = new Option("San Lorenzo");
        let opt_distrito_alajuela13 = new Option("San Isidro");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
        select_distrito[5] = opt_distrito_alajuela5;
        select_distrito[6] = opt_distrito_alajuela6;
        select_distrito[7] = opt_distrito_alajuela7;
        select_distrito[8] = opt_distrito_alajuela8;
        select_distrito[9] = opt_distrito_alajuela9;
        select_distrito[10] = opt_distrito_alajuela10;
        select_distrito[11] = opt_distrito_alajuela11;
        select_distrito[12] = opt_distrito_alajuela12;
        select_distrito[13] = opt_distrito_alajuela13;
    };

    if (select_canton.value == "Upala" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("Upala");
        let opt_distrito_alajuela2 = new Option("Aguas Claras");
        let opt_distrito_alajuela3 = new Option("San José");
        let opt_distrito_alajuela4 = new Option("Bijagua");
        let opt_distrito_alajuela5 = new Option("Delicias");
        let opt_distrito_alajuela6 = new Option("Dos Ríos");
        let opt_distrito_alajuela7 = new Option("Yolilal");
        let opt_distrito_alajuela8 = new Option("Canalete");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
        select_distrito[5] = opt_distrito_alajuela5;
        select_distrito[6] = opt_distrito_alajuela6;
        select_distrito[7] = opt_distrito_alajuela7;
        select_distrito[8] = opt_distrito_alajuela8;
    };

    if (select_canton.value == "Alfaro Ruíz" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("Zarcero");
        let opt_distrito_alajuela2 = new Option("Laguna");
        let opt_distrito_alajuela3 = new Option("Tapezco");
        let opt_distrito_alajuela4 = new Option("Guadalupe");
        let opt_distrito_alajuela5 = new Option("Palmira");
        let opt_distrito_alajuela6 = new Option("Brisas");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
        select_distrito[5] = opt_distrito_alajuela5;
        select_distrito[6] = opt_distrito_alajuela6;
    };

    if (select_canton.value == "Valverde Vega" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("Sarchí Norte");
        let opt_distrito_alajuela2 = new Option("Sarchí Sur");
        let opt_distrito_alajuela3 = new Option("Toro Amarillo");
        let opt_distrito_alajuela4 = new Option("Rodríguez");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
    };
    if (select_canton.value == "Zarcero" && select_provincia.value == "Alajuela") {
        let opt_distrito_alajuela0 = new Option("");
        let opt_distrito_alajuela1 = new Option("Zarcero");
        let opt_distrito_alajuela2 = new Option("Laguna");
        let opt_distrito_alajuela3 = new Option("Tapesco");
        let opt_distrito_alajuela4 = new Option("Palmira");
        let opt_distrito_alajuela5 = new Option("Brisas");

        select_distrito[0] = opt_distrito_alajuela0;
        select_distrito[1] = opt_distrito_alajuela1;
        select_distrito[2] = opt_distrito_alajuela2;
        select_distrito[3] = opt_distrito_alajuela3;
        select_distrito[4] = opt_distrito_alajuela4;
        select_distrito[5] = opt_distrito_alajuela5;
    };

    if (select_canton.value == "Alvarado" && select_provincia.value == "Cartago") {
        let opt_distrito_cartago0 = new Option("");
        let opt_distrito_cartago1 = new Option("Pacayas");
        let opt_distrito_cartago2 = new Option("Cervantes");
        let opt_distrito_cartago3 = new Option("Capellades");

        select_distrito[0] = opt_distrito_cartago0;
        select_distrito[1] = opt_distrito_cartago1;
        select_distrito[2] = opt_distrito_cartago2;
        select_distrito[3] = opt_distrito_cartago3;
    };
    if (select_canton.value == "Cartago" && select_provincia.value == "Cartago") {
        let opt_distrito_cartago0 = new Option("");
        let opt_distrito_cartago1 = new Option("Oriental");
        let opt_distrito_cartago2 = new Option("Occidental");
        let opt_distrito_cartago3 = new Option("San Nicolás");
        let opt_distrito_cartago4 = new Option("Aguacaliente");
        let opt_distrito_cartago5 = new Option("Arenilla");
        let opt_distrito_cartago6 = new Option("Corralillo");
        let opt_distrito_cartago7 = new Option("Tierra Blanca");
        let opt_distrito_cartago8 = new Option("Dulce Nombre");
        let opt_distrito_cartago9 = new Option("Llano Grande");
        let opt_distrito_cartago10 = new Option("Quebradilla");

        select_distrito[0] = opt_distrito_cartago0;
        select_distrito[1] = opt_distrito_cartago1;
        select_distrito[2] = opt_distrito_cartago2;
        select_distrito[3] = opt_distrito_cartago3;
        select_distrito[4] = opt_distrito_cartago4;
        select_distrito[5] = opt_distrito_cartago5;
        select_distrito[6] = opt_distrito_cartago6;
        select_distrito[7] = opt_distrito_cartago7;
        select_distrito[8] = opt_distrito_cartago8;
        select_distrito[9] = opt_distrito_cartago9;
        select_distrito[10] = opt_distrito_cartago10;
    };
    if (select_canton.value == "El Guarco" && select_provincia.value == "Cartago") {
        let opt_distrito_cartago0 = new Option("");
        let opt_distrito_cartago1 = new Option("El Tejar");
        let opt_distrito_cartago2 = new Option("Tobosi");
        let opt_distrito_cartago3 = new Option("Patio de Agua");

        select_distrito[0] = opt_distrito_cartago0;
        select_distrito[1] = opt_distrito_cartago1;
        select_distrito[2] = opt_distrito_cartago2;
        select_distrito[3] = opt_distrito_cartago3;
    };
    if (select_canton.value == "Jiménez" && select_provincia.value == "Cartago") {
        let opt_distrito_cartago0 = new Option("");
        let opt_distrito_cartago1 = new Option("Juan Viñas");
        let opt_distrito_cartago2 = new Option("Tucurrique");

        select_distrito[0] = opt_distrito_cartago0;
        select_distrito[1] = opt_distrito_cartago1;
        select_distrito[2] = opt_distrito_cartago2;
    };
    if (select_canton.value == "La Unión" && select_provincia.value == "Cartago") {
        let opt_distrito_cartago0 = new Option("");
        let opt_distrito_cartago1 = new Option("Tres Ríos");
        let opt_distrito_cartago2 = new Option("San Diego");
        let opt_distrito_cartago3 = new Option("Río Azúl");

        select_distrito[0] = opt_distrito_cartago0;
        select_distrito[1] = opt_distrito_cartago1;
        select_distrito[2] = opt_distrito_cartago2;
        select_distrito[3] = opt_distrito_cartago3;
    };
    if (select_canton.value == "Oreamuno" && select_provincia.value == "Cartago") {
        let opt_distrito_cartago0 = new Option("");
        let opt_distrito_cartago1 = new Option("Cot");
        let opt_distrito_cartago2 = new Option("Potrero Cerrado");
        let opt_distrito_cartago3 = new Option("Cipreses");

        select_distrito[0] = opt_distrito_cartago0;
        select_distrito[1] = opt_distrito_cartago1;
        select_distrito[2] = opt_distrito_cartago2;
        select_distrito[3] = opt_distrito_cartago3;
    };
    if (select_canton.value == "Paraíso" && select_provincia.value == "Cartago") {
        let opt_distrito_cartago0 = new Option("");
        let opt_distrito_cartago1 = new Option("Paraíso");
        let opt_distrito_cartago2 = new Option("Orosi");
        let opt_distrito_cartago3 = new Option("Cachí");
        let opt_distrito_cartago4 = new Option("Llanos de Santa Lucía");

        select_distrito[0] = opt_distrito_cartago0;
        select_distrito[1] = opt_distrito_cartago1;
        select_distrito[2] = opt_distrito_cartago2;
        select_distrito[3] = opt_distrito_cartago3;
        select_distrito[4] = opt_distrito_cartago4;
    };
    if (select_canton.value == "Turrialba" && select_provincia.value == "Cartago") {
        let opt_distrito_cartago0 = new Option("");
        let opt_distrito_cartago1 = new Option("Turrialba");
        let opt_distrito_cartago2 = new Option("La Suiza");
        let opt_distrito_cartago3 = new Option("Peralta");
        let opt_distrito_cartago4 = new Option("Santa Teresita");
        let opt_distrito_cartago5 = new Option("Pavones");
        let opt_distrito_cartago6 = new Option("Tuis");
        let opt_distrito_cartago7 = new Option("Tayutic");
        let opt_distrito_cartago8 = new Option("Santa Rosa");
        let opt_distrito_cartago9 = new Option("Tres Equis");
        let opt_distrito_cartago10 = new Option("La Isabel");
        let opt_distrito_cartago11 = new Option("Chirripó");

        select_distrito[0] = opt_distrito_cartago0;
        select_distrito[1] = opt_distrito_cartago1;
        select_distrito[2] = opt_distrito_cartago2;
        select_distrito[3] = opt_distrito_cartago3;
        select_distrito[4] = opt_distrito_cartago4;
        select_distrito[5] = opt_distrito_cartago5;
        select_distrito[6] = opt_distrito_cartago6;
        select_distrito[7] = opt_distrito_cartago7;
        select_distrito[8] = opt_distrito_cartago8;
        select_distrito[9] = opt_distrito_cartago9;
        select_distrito[10] = opt_distrito_cartago10;
        select_distrito[11] = opt_distrito_cartago11;
    };
    if (select_canton.value == "Abangares" && select_provincia.value == "Guanacaste") {
        let opt_distrito_guanacaste0 = new Option("");
        let opt_distrito_guanacaste1 = new Option("Las Juntas");
        let opt_distrito_guanacaste2 = new Option("Sierra");
        let opt_distrito_guanacaste3 = new Option("Colorado");

        select_distrito[0] = opt_distrito_guanacaste0;
        select_distrito[1] = opt_distrito_guanacaste1;
        select_distrito[2] = opt_distrito_guanacaste2;
        select_distrito[3] = opt_distrito_guanacaste3;
    };
    if (select_canton.value == "Bagaces" && select_provincia.value == "Guanacaste") {
        let opt_distrito_guanacaste0 = new Option("");
        let opt_distrito_guanacaste1 = new Option("Bagaces");
        let opt_distrito_guanacaste2 = new Option("Mogote");
        let opt_distrito_guanacaste3 = new Option("Río Naranjo");

        select_distrito[0] = opt_distrito_guanacaste0;
        select_distrito[1] = opt_distrito_guanacaste1;
        select_distrito[2] = opt_distrito_guanacaste2;
        select_distrito[3] = opt_distrito_guanacaste3;
    };
    if (select_canton.value == "Cañas" && select_provincia.value == "Guanacaste") {
        let opt_distrito_guanacaste0 = new Option("");
        let opt_distrito_guanacaste1 = new Option("Cañas");
        let opt_distrito_guanacaste2 = new Option("Bebedero");
        let opt_distrito_guanacaste3 = new Option("Porozal");

        select_distrito[0] = opt_distrito_guanacaste0;
        select_distrito[1] = opt_distrito_guanacaste1;
        select_distrito[2] = opt_distrito_guanacaste2;
        select_distrito[3] = opt_distrito_guanacaste3;
    };
    if (select_canton.value == "Carrillo" && select_provincia.value == "Guanacaste") {
        let opt_distrito_guanacaste0 = new Option("");
        let opt_distrito_guanacaste1 = new Option("Filadelfia");
        let opt_distrito_guanacaste2 = new Option("Sardinal");
        let opt_distrito_guanacaste3 = new Option("Belén");

        select_distrito[0] = opt_distrito_guanacaste0;
        select_distrito[1] = opt_distrito_guanacaste1;
        select_distrito[2] = opt_distrito_guanacaste2;
        select_distrito[3] = opt_distrito_guanacaste3;
    };
    if (select_canton.value == "Hojancha" && select_provincia.value == "Guanacaste") {
        let opt_distrito_guanacaste0 = new Option("");
        let opt_distrito_guanacaste1 = new Option("Hojancha");
        let opt_distrito_guanacaste2 = new Option("Monte Romo");
        let opt_distrito_guanacaste3 = new Option("Puerto Carrillo");
        let opt_distrito_guanacaste4 = new Option("Huacas");

        select_distrito[0] = opt_distrito_guanacaste0;
        select_distrito[1] = opt_distrito_guanacaste1;
        select_distrito[2] = opt_distrito_guanacaste2;
        select_distrito[3] = opt_distrito_guanacaste3;
        select_distrito[4] = opt_distrito_guanacaste4;
    };
    if (select_canton.value == "La Cruz" && select_provincia.value == "Guanacaste") {
        let opt_distrito_guanacaste0 = new Option("");
        let opt_distrito_guanacaste1 = new Option("La Cruz");
        let opt_distrito_guanacaste2 = new Option("Santa Cecilia");
        let opt_distrito_guanacaste3 = new Option("La Garita");
        let opt_distrito_guanacaste4 = new Option("Santa Elena");

        select_distrito[0] = opt_distrito_guanacaste0;
        select_distrito[1] = opt_distrito_guanacaste1;
        select_distrito[2] = opt_distrito_guanacaste2;
        select_distrito[3] = opt_distrito_guanacaste3;
        select_distrito[4] = opt_distrito_guanacaste4;
    };
    if (select_canton.value == "Liberia" && select_provincia.value == "Guanacaste") {
        let opt_distrito_guanacaste0 = new Option("");
        let opt_distrito_guanacaste1 = new Option("Liberia");
        let opt_distrito_guanacaste2 = new Option("Cañas Dulces");
        let opt_distrito_guanacaste3 = new Option("Mayorga");
        let opt_distrito_guanacaste4 = new Option("Nacascolo");
        let opt_distrito_guanacaste5 = new Option("Curubandé");

        select_distrito[0] = opt_distrito_guanacaste0;
        select_distrito[1] = opt_distrito_guanacaste1;
        select_distrito[2] = opt_distrito_guanacaste2;
        select_distrito[3] = opt_distrito_guanacaste3;
        select_distrito[4] = opt_distrito_guanacaste4;
        select_distrito[5] = opt_distrito_guanacaste5;
    };
    if (select_canton.value == "Nandayure" && select_provincia.value == "Guanacaste") {
        let opt_distrito_guanacaste0 = new Option("");
        let opt_distrito_guanacaste1 = new Option("Carmona");
        let opt_distrito_guanacaste2 = new Option("Santa Rita");
        let opt_distrito_guanacaste3 = new Option("Porvenir");
        let opt_distrito_guanacaste4 = new Option("Bejuco");

        select_distrito[0] = opt_distrito_guanacaste0;
        select_distrito[1] = opt_distrito_guanacaste1;
        select_distrito[2] = opt_distrito_guanacaste2;
        select_distrito[3] = opt_distrito_guanacaste3;
        select_distrito[4] = opt_distrito_guanacaste4;
    };
    if (select_canton.value == "Nicoya" && select_provincia.value == "Guanacaste") {
        let opt_distrito_guanacaste0 = new Option("");
        let opt_distrito_guanacaste1 = new Option("Nicoya");
        let opt_distrito_guanacaste2 = new Option("Mansión");
        let opt_distrito_guanacaste3 = new Option("Quebrada Honda");
        let opt_distrito_guanacaste4 = new Option("Sámara");
        let opt_distrito_guanacaste5 = new Option("Nosara");
        let opt_distrito_guanacaste6 = new Option("Belén de Nosarita");

        select_distrito[0] = opt_distrito_guanacaste0;
        select_distrito[1] = opt_distrito_guanacaste1;
        select_distrito[2] = opt_distrito_guanacaste2;
        select_distrito[3] = opt_distrito_guanacaste3;
        select_distrito[4] = opt_distrito_guanacaste4;
        select_distrito[5] = opt_distrito_guanacaste5;
        select_distrito[6] = opt_distrito_guanacaste6;
    };
    if (select_canton.value == "Santa Cruz" && select_provincia.value == "Guanacaste") {
        let opt_distrito_guanacaste0 = new Option("");
        let opt_distrito_guanacaste1 = new Option("Bolsón");
        let opt_distrito_guanacaste2 = new Option("Veintisiete de Abril");
        let opt_distrito_guanacaste3 = new Option("Tempete");
        let opt_distrito_guanacaste4 = new Option("Cartagena");
        let opt_distrito_guanacaste5 = new Option("Cuajiniquil");
        let opt_distrito_guanacaste6 = new Option("Diriá");
        let opt_distrito_guanacaste7 = new Option("Cabo Velas");
        let opt_distrito_guanacaste8 = new Option("Tamarindo");

        select_distrito[0] = opt_distrito_guanacaste0;
        select_distrito[1] = opt_distrito_guanacaste1;
        select_distrito[2] = opt_distrito_guanacaste2;
        select_distrito[3] = opt_distrito_guanacaste3;
        select_distrito[4] = opt_distrito_guanacaste4;
        select_distrito[5] = opt_distrito_guanacaste5;
        select_distrito[6] = opt_distrito_guanacaste6;
        select_distrito[7] = opt_distrito_guanacaste7;
        select_distrito[8] = opt_distrito_guanacaste8;
    };
    if (select_canton.value == "Nicoya" && select_provincia.value == "Guanacaste") {
        let opt_distrito_guanacaste0 = new Option("");
        let opt_distrito_guanacaste1 = new Option("Nicoya");
        let opt_distrito_guanacaste2 = new Option("Mansión");
        let opt_distrito_guanacaste3 = new Option("Quebrada Honda");
        let opt_distrito_guanacaste4 = new Option("Sámara");
        let opt_distrito_guanacaste5 = new Option("Nosara");
        let opt_distrito_guanacaste6 = new Option("Belén de Nosarita");

        select_distrito[0] = opt_distrito_guanacaste0;
        select_distrito[1] = opt_distrito_guanacaste1;
        select_distrito[2] = opt_distrito_guanacaste2;
        select_distrito[3] = opt_distrito_guanacaste3;
        select_distrito[4] = opt_distrito_guanacaste4;
        select_distrito[5] = opt_distrito_guanacaste5;
        select_distrito[6] = opt_distrito_guanacaste6;
    };
    if (select_canton.value == "Tilarán" && select_provincia.value == "Guanacaste") {
        let opt_distrito_guanacaste0 = new Option("");
        let opt_distrito_guanacaste1 = new Option("Tilarán");
        let opt_distrito_guanacaste2 = new Option("Quebrada Grande");
        let opt_distrito_guanacaste3 = new Option("Tronadora");
        let opt_distrito_guanacaste4 = new Option("Líbano");
        let opt_distrito_guanacaste5 = new Option("Tierras Morenas");
        let opt_distrito_guanacaste6 = new Option("Arenal");

        select_distrito[0] = opt_distrito_guanacaste0;
        select_distrito[1] = opt_distrito_guanacaste1;
        select_distrito[2] = opt_distrito_guanacaste2;
        select_distrito[3] = opt_distrito_guanacaste3;
        select_distrito[4] = opt_distrito_guanacaste4;
        select_distrito[5] = opt_distrito_guanacaste5;
        select_distrito[6] = opt_distrito_guanacaste6;
    };
    if (select_canton.value == "Santo Domingo" && select_provincia.value == "Heredia") {
        let opt_distrito_heredia0 = new Option("");
        let opt_distrito_heredia1 = new Option("Santo Domingo");
        let opt_distrito_heredia2 = new Option("San Miguel");
        let opt_distrito_heredia3 = new Option("Paracito");
        let opt_distrito_heredia4 = new Option("Santo Tomás");
        let opt_distrito_heredia5 = new Option("Tures");
        let opt_distrito_heredia6 = new Option("Pará");

        select_distrito[0] = opt_distrito_heredia0;
        select_distrito[1] = opt_distrito_heredia1;
        select_distrito[2] = opt_distrito_heredia2;
        select_distrito[3] = opt_distrito_heredia3;
        select_distrito[4] = opt_distrito_heredia4;
        select_distrito[5] = opt_distrito_heredia5;
        select_distrito[6] = opt_distrito_heredia6;
    };
    if (select_canton.value == "Barba" && select_provincia.value == "Heredia") {
        let opt_distrito_heredia0 = new Option("");
        let opt_distrito_heredia1 = new Option("Barba");
        let opt_distrito_heredia2 = new Option("Santa Lucía");
        let opt_distrito_heredia3 = new Option("San José de la Montaña");
        let opt_distrito_heredia4 = new Option("San Pedro");
        let opt_distrito_heredia5 = new Option("San Roque");

        select_distrito[0] = opt_distrito_heredia0;
        select_distrito[1] = opt_distrito_heredia1;
        select_distrito[2] = opt_distrito_heredia2;
        select_distrito[3] = opt_distrito_heredia3;
        select_distrito[4] = opt_distrito_heredia4;
        select_distrito[5] = opt_distrito_heredia5;
    };
    if (select_canton.value == "Belén" && select_provincia.value == "Heredia") {
        let opt_distrito_heredia0 = new Option("");
        let opt_distrito_heredia1 = new Option("La Ribera");
        let opt_distrito_heredia2 = new Option("La Asunción");

        select_distrito[0] = opt_distrito_heredia0;
        select_distrito[1] = opt_distrito_heredia1;
        select_distrito[2] = opt_distrito_heredia2;
    };
    if (select_canton.value == "Flores" && select_provincia.value == "Heredia") {
        let opt_distrito_heredia0 = new Option("");
        let opt_distrito_heredia1 = new Option("San Joaquín");
        let opt_distrito_heredia2 = new Option("Barrantes");
        let opt_distrito_heredia3 = new Option("Llorente");

        select_distrito[0] = opt_distrito_heredia0;
        select_distrito[1] = opt_distrito_heredia1;
        select_distrito[2] = opt_distrito_heredia2;
        select_distrito[3] = opt_distrito_heredia3;
    };
    if (select_canton.value == "Heredia" && select_provincia.value == "Heredia") {
        let opt_distrito_heredia0 = new Option("");
        let opt_distrito_heredia1 = new Option("Heredia");
        let opt_distrito_heredia2 = new Option("San Francisco");
        let opt_distrito_heredia3 = new Option("Ulloa");
        let opt_distrito_heredia4 = new Option("Varablanca");
        let opt_distrito_heredia5 = new Option("Mercedes");

        select_distrito[0] = opt_distrito_heredia0;
        select_distrito[1] = opt_distrito_heredia1;
        select_distrito[2] = opt_distrito_heredia2;
        select_distrito[3] = opt_distrito_heredia3;
        select_distrito[4] = opt_distrito_heredia4;
        select_distrito[5] = opt_distrito_heredia5;
    };
    if (select_canton.value == "San Isidro" && select_provincia.value == "Heredia") {
        let opt_distrito_heredia0 = new Option("");
        let opt_distrito_heredia1 = new Option("San Isidro");
        let opt_distrito_heredia2 = new Option("San José");
        let opt_distrito_heredia3 = new Option("Concepción");
        let opt_distrito_heredia4 = new Option("San Francisco");

        select_distrito[0] = opt_distrito_heredia0;
        select_distrito[1] = opt_distrito_heredia1;
        select_distrito[2] = opt_distrito_heredia2;
        select_distrito[3] = opt_distrito_heredia3;
        select_distrito[4] = opt_distrito_heredia4;
    };
    if (select_canton.value == "San Pablo" && select_provincia.value == "Heredia") {
        let opt_distrito_heredia0 = new Option("");
        let opt_distrito_heredia1 = new Option("San Pablo");
        let opt_distrito_heredia2 = new Option("Rincón de Sabanilla");

        select_distrito[0] = opt_distrito_heredia0;
        select_distrito[1] = opt_distrito_heredia1;
        select_distrito[2] = opt_distrito_heredia2;
    };
    if (select_canton.value == "San Rafael" && select_provincia.value == "Heredia") {
        let opt_distrito_heredia0 = new Option("");
        let opt_distrito_heredia1 = new Option("San Rafael");
        let opt_distrito_heredia2 = new Option("San Josécito");
        let opt_distrito_heredia3 = new Option("Santiago");
        let opt_distrito_heredia4 = new Option("Ángeles");
        let opt_distrito_heredia5 = new Option("Concepción");

        select_distrito[0] = opt_distrito_heredia0;
        select_distrito[1] = opt_distrito_heredia1;
        select_distrito[2] = opt_distrito_heredia2;
        select_distrito[3] = opt_distrito_heredia3;
        select_distrito[4] = opt_distrito_heredia4;
        select_distrito[5] = opt_distrito_heredia5;
    };
    if (select_canton.value == "Santa Bárbara" && select_provincia.value == "Heredia") {
        let opt_distrito_heredia0 = new Option("");
        let opt_distrito_heredia1 = new Option("Santa Barbara");
        let opt_distrito_heredia2 = new Option("San Pedro");
        let opt_distrito_heredia3 = new Option("San Juan");
        let opt_distrito_heredia4 = new Option("Santo Domingo");
        let opt_distrito_heredia5 = new Option("Jesús");
        let opt_distrito_heredia6 = new Option("Puraba");

        select_distrito[0] = opt_distrito_heredia0;
        select_distrito[1] = opt_distrito_heredia1;
        select_distrito[2] = opt_distrito_heredia2;
        select_distrito[3] = opt_distrito_heredia3;
        select_distrito[4] = opt_distrito_heredia4;
        select_distrito[5] = opt_distrito_heredia5;
        select_distrito[6] = opt_distrito_heredia6;
    };
    if (select_canton.value == "Santo Domingo" && select_provincia.value == "Heredia") {
        let opt_distrito_heredia0 = new Option("");
        let opt_distrito_heredia1 = new Option("Santo Domingo");
        let opt_distrito_heredia2 = new Option("San Vicente");
        let opt_distrito_heredia3 = new Option("San Miguel");
        let opt_distrito_heredia4 = new Option("Paracito");
        let opt_distrito_heredia5 = new Option("Santo Tómas");
        let opt_distrito_heredia6 = new Option("Santa Rosa");
        let opt_distrito_heredia7 = new Option("Tures");
        let opt_distrito_heredia8 = new Option("Para");

        select_distrito[0] = opt_distrito_heredia0;
        select_distrito[1] = opt_distrito_heredia1;
        select_distrito[2] = opt_distrito_heredia2;
        select_distrito[3] = opt_distrito_heredia3;
        select_distrito[4] = opt_distrito_heredia4;
        select_distrito[5] = opt_distrito_heredia5;
        select_distrito[6] = opt_distrito_heredia6;
        select_distrito[7] = opt_distrito_heredia7;
        select_distrito[8] = opt_distrito_heredia8;
    };
    if (select_canton.value == "Sarapiquí" && select_provincia.value == "Heredia") {
        let opt_distrito_heredia0 = new Option("");
        let opt_distrito_heredia1 = new Option("Cureña");
        let opt_distrito_heredia2 = new Option("Horquetas");
        let opt_distrito_heredia3 = new Option("La Virgen");
        let opt_distrito_heredia4 = new Option("LLanuras del Gaspar");

        select_distrito[0] = opt_distrito_heredia0;
        select_distrito[1] = opt_distrito_heredia1;
        select_distrito[2] = opt_distrito_heredia2;
        select_distrito[3] = opt_distrito_heredia3;
        select_distrito[4] = opt_distrito_heredia4;
    };
    if (select_canton.value == "Guácimo" && select_provincia.value == "Limón") {
        let optDistritoLimon0 = new Option("");
        let optDistritoLimon1 = new Option("Guácimo");
        let optDistritoLimon2 = new Option("Mercedes");
        let optDistritoLimon3 = new Option("Pocora");
        let optDistritoLimon4 = new Option("Río Jiménez");
        let optDistritoLimon5 = new Option("Duacarí");

        select_distrito[0] = optDistritoLimon0;
        select_distrito[1] = optDistritoLimon1;
        select_distrito[2] = optDistritoLimon2;
        select_distrito[3] = optDistritoLimon3;
        select_distrito[4] = optDistritoLimon4;
        select_distrito[5] = optDistritoLimon5;
    };
    if (select_canton.value == "Limón" && select_provincia.value == "Limón") {
        let optDistritoLimon0 = new Option("");
        let optDistritoLimon1 = new Option("Limón");
        let optDistritoLimon2 = new Option("Valle La Estrella");
        let optDistritoLimon3 = new Option("Río Blanco");
        let optDistritoLimon4 = new Option("Matama");

        select_distrito[0] = optDistritoLimon0;
        select_distrito[1] = optDistritoLimon1;
        select_distrito[2] = optDistritoLimon2;
        select_distrito[3] = optDistritoLimon3;
        select_distrito[4] = optDistritoLimon4;
    };
    if (select_canton.value == "Matina" && select_provincia.value == "Limón") {
        let optDistritoLimon0 = new Option("");
        let optDistritoLimon1 = new Option("Matina");
        let optDistritoLimon2 = new Option("Batán");
        let optDistritoLimon3 = new Option("Carrandi");

        select_distrito[0] = optDistritoLimon0;
        select_distrito[1] = optDistritoLimon1;
        select_distrito[2] = optDistritoLimon2;
        select_distrito[3] = optDistritoLimon3;
    };
    if (select_canton.value == "Pococí" && select_provincia.value == "Limón") {
        let optDistritoLimon0 = new Option("");
        let optDistritoLimon1 = new Option("Guapiles");
        let optDistritoLimon2 = new Option("Jiménez");
        let optDistritoLimon3 = new Option("La Rita");
        let optDistritoLimon4 = new Option("Roxana");
        let optDistritoLimon5 = new Option("Cariari");
        let optDistritoLimon6 = new Option("Colorado");

        select_distrito[0] = optDistritoLimon0;
        select_distrito[1] = optDistritoLimon1;
        select_distrito[2] = optDistritoLimon2;
        select_distrito[3] = optDistritoLimon3;
        select_distrito[4] = optDistritoLimon4;
        select_distrito[5] = optDistritoLimon5;
        select_distrito[6] = optDistritoLimon6;
    };
    if (select_canton.value == "Siquírres" && select_provincia.value == "Limón") {
        let optDistritoLimon0 = new Option("");
        let optDistritoLimon1 = new Option("Siquírres");
        let optDistritoLimon2 = new Option("Pacuarito");
        let optDistritoLimon3 = new Option("Florida");
        let optDistritoLimon4 = new Option("Germania");
        let optDistritoLimon5 = new Option("Cairo");
        let optDistritoLimon6 = new Option("Alegría");

        select_distrito[0] = optDistritoLimon0;
        select_distrito[1] = optDistritoLimon1;
        select_distrito[2] = optDistritoLimon2;
        select_distrito[3] = optDistritoLimon3;
        select_distrito[4] = optDistritoLimon4;
        select_distrito[5] = optDistritoLimon5;
        select_distrito[6] = optDistritoLimon6;
    };
    if (select_canton.value == "Talamanca" && select_provincia.value == "Limón") {
        let optDistritoLimon0 = new Option("");
        let optDistritoLimon1 = new Option("Bratsi");
        let optDistritoLimon2 = new Option("Sixaola");
        let optDistritoLimon3 = new Option("Cahuita");
        let optDistritoLimon4 = new Option("Telire");

        select_distrito[0] = optDistritoLimon0;
        select_distrito[1] = optDistritoLimon1;
        select_distrito[2] = optDistritoLimon2;
        select_distrito[3] = optDistritoLimon3;
        select_distrito[4] = optDistritoLimon4;
    };
    if (select_canton.value == "Buenos Aires" && select_provincia.value == "Puntarenas") {
        let opt_distrito_puntarenas0 = new Option("");
        let opt_distrito_puntarenas1 = new Option("Boruca");
        let opt_distrito_puntarenas2 = new Option("Briolley");
        let opt_distrito_puntarenas3 = new Option("Brunka");
        let opt_distrito_puntarenas4 = new Option("Buenos Aires");
        let opt_distrito_puntarenas5 = new Option("Changena");
        let opt_distrito_puntarenas6 = new Option("Colinas");
        let opt_distrito_puntarenas7 = new Option("Pilas");
        let opt_distrito_puntarenas8 = new Option("Potrero Grande");
        let opt_distrito_puntarenas9 = new Option("Volcán");

        select_distrito[0] = opt_distrito_puntarenas0;
        select_distrito[1] = opt_distrito_puntarenas1;
        select_distrito[2] = opt_distrito_puntarenas2;
        select_distrito[3] = opt_distrito_puntarenas3;
        select_distrito[4] = opt_distrito_puntarenas4;
        select_distrito[5] = opt_distrito_puntarenas5;
        select_distrito[6] = opt_distrito_puntarenas6;
        select_distrito[7] = opt_distrito_puntarenas7;
        select_distrito[8] = opt_distrito_puntarenas8;
        select_distrito[9] = opt_distrito_puntarenas9;
    };
    if (select_canton.value == "Corredores" && select_provincia.value == "Puntarenas") {
        let opt_distrito_puntarenas0 = new Option("");
        let opt_distrito_puntarenas1 = new Option("Corredor");
        let opt_distrito_puntarenas2 = new Option("La Cuesta");
        let opt_distrito_puntarenas3 = new Option("Canoas");
        let opt_distrito_puntarenas4 = new Option("Laurel");

        select_distrito[0] = opt_distrito_puntarenas0;
        select_distrito[1] = opt_distrito_puntarenas1;
        select_distrito[2] = opt_distrito_puntarenas2;
        select_distrito[3] = opt_distrito_puntarenas3;
        select_distrito[4] = opt_distrito_puntarenas4;
    };
    if (select_canton.value == "Coto Brus" && select_provincia.value == "Puntarenas") {
        let opt_distrito_puntarenas0 = new Option("");
        let opt_distrito_puntarenas1 = new Option("San Vito");
        let opt_distrito_puntarenas2 = new Option("Sabalito");
        let opt_distrito_puntarenas3 = new Option("Aguabuena");
        let opt_distrito_puntarenas4 = new Option("Limóncito");
        let opt_distrito_puntarenas5 = new Option("Pittier");
        let opt_distrito_puntarenas6 = new Option("Gutiérrez Braun");

        select_distrito[0] = opt_distrito_puntarenas0;
        select_distrito[1] = opt_distrito_puntarenas1;
        select_distrito[2] = opt_distrito_puntarenas2;
        select_distrito[3] = opt_distrito_puntarenas3;
        select_distrito[4] = opt_distrito_puntarenas4;
        select_distrito[5] = opt_distrito_puntarenas5;
        select_distrito[6] = opt_distrito_puntarenas6;
    };
    if (select_canton.value == "Esparza" && select_provincia.value == "Puntarenas") {
        let opt_distrito_puntarenas0 = new Option("");
        let opt_distrito_puntarenas1 = new Option("Caldera");
        let opt_distrito_puntarenas2 = new Option("Espiritu Santo");
        let opt_distrito_puntarenas3 = new Option("Macacona");
        let opt_distrito_puntarenas4 = new Option("San Rafael");
        let opt_distrito_puntarenas5 = new Option("San Jerónimo");
        let opt_distrito_puntarenas6 = new Option("San Juan Grande");

        select_distrito[0] = opt_distrito_puntarenas0;
        select_distrito[1] = opt_distrito_puntarenas1;
        select_distrito[2] = opt_distrito_puntarenas2;
        select_distrito[3] = opt_distrito_puntarenas3;
        select_distrito[4] = opt_distrito_puntarenas4;
        select_distrito[5] = opt_distrito_puntarenas5;
        select_distrito[6] = opt_distrito_puntarenas6;
    };
    if (select_canton.value == "Garabito" && select_provincia.value == "Puntarenas") {
        let opt_distrito_puntarenas0 = new Option("");
        let opt_distrito_puntarenas1 = new Option("Jacó");
        let opt_distrito_puntarenas2 = new Option("Tarcoles");

        select_distrito[0] = opt_distrito_puntarenas0;
        select_distrito[1] = opt_distrito_puntarenas1;
        select_distrito[2] = opt_distrito_puntarenas2;
    };
    if (select_canton.value == "Golfito" && select_provincia.value == "Puntarenas") {
        let opt_distrito_puntarenas0 = new Option("");
        let opt_distrito_puntarenas1 = new Option("Golfito");
        let opt_distrito_puntarenas2 = new Option("Puerto Jiménez");
        let opt_distrito_puntarenas3 = new Option("Guaycará");
        let opt_distrito_puntarenas4 = new Option("Pavón");

        select_distrito[0] = opt_distrito_puntarenas0;
        select_distrito[1] = opt_distrito_puntarenas1;
        select_distrito[2] = opt_distrito_puntarenas2;
        select_distrito[3] = opt_distrito_puntarenas3;
        select_distrito[4] = opt_distrito_puntarenas4;
    };
    if (select_canton.value == "Montes de Oro" && select_provincia.value == "Puntarenas") {
        let opt_distrito_puntarenas0 = new Option("");
        let opt_distrito_puntarenas1 = new Option("Miramar");
        let opt_distrito_puntarenas2 = new Option("La Unión");
        let opt_distrito_puntarenas3 = new Option("San Isidro");

        select_distrito[0] = opt_distrito_puntarenas0;
        select_distrito[1] = opt_distrito_puntarenas1;
        select_distrito[2] = opt_distrito_puntarenas2;
        select_distrito[3] = opt_distrito_puntarenas3;
    };
    if (select_canton.value == "Osa" && select_provincia.value == "Puntarenas") {
        let opt_distrito_puntarenas0 = new Option("");
        let opt_distrito_puntarenas1 = new Option("Puerto Cortéz");
        let opt_distrito_puntarenas2 = new Option("Palmar");
        let opt_distrito_puntarenas3 = new Option("Sierpe");
        let opt_distrito_puntarenas4 = new Option("Bahía Ballena");
        let opt_distrito_puntarenas5 = new Option("Piedras Blancas");
        let opt_distrito_puntarenas6 = new Option("Bahía Drake");

        select_distrito[0] = opt_distrito_puntarenas0;
        select_distrito[1] = opt_distrito_puntarenas1;
        select_distrito[2] = opt_distrito_puntarenas2;
        select_distrito[3] = opt_distrito_puntarenas3;
        select_distrito[4] = opt_distrito_puntarenas4;
        select_distrito[5] = opt_distrito_puntarenas5;
        select_distrito[6] = opt_distrito_puntarenas6;
    };
    if (select_canton.value == "Parrita" && select_provincia.value == "Puntarenas") {
        let opt_distrito_puntarenas0 = new Option("");
        let opt_distrito_puntarenas1 = new Option("Parrita");

        select_distrito[0] = opt_distrito_puntarenas0;
        select_distrito[1] = opt_distrito_puntarenas1;
    };
    if (select_canton.value == "Puntarenas" && select_provincia.value == "Puntarenas") {
        let opt_distrito_puntarenas0 = new Option("");
        let opt_distrito_puntarenas1 = new Option("Acapulco");
        let opt_distrito_puntarenas2 = new Option("Arancibia");
        let opt_distrito_puntarenas3 = new Option("Barranca");
        let opt_distrito_puntarenas4 = new Option("Chacarita");
        let opt_distrito_puntarenas5 = new Option("Chira");
        let opt_distrito_puntarenas6 = new Option("Chomes");
        let opt_distrito_puntarenas7 = new Option("Cobano");
        let opt_distrito_puntarenas8 = new Option("El Roble");
        let opt_distrito_puntarenas9 = new Option("Guacimal");
        let opt_distrito_puntarenas10 = new Option("Isla del Coco");
        let opt_distrito_puntarenas11 = new Option("Lepanto");
        let opt_distrito_puntarenas12 = new Option("Manzanillo");
        let opt_distrito_puntarenas13 = new Option("Monte Verde");
        let opt_distrito_puntarenas14 = new Option("Paquera");
        let opt_distrito_puntarenas15 = new Option("Pitahaya");
        let opt_distrito_puntarenas16 = new Option("Puntarenas");

        select_distrito[0] = opt_distrito_puntarenas0;
        select_distrito[1] = opt_distrito_puntarenas1;
        select_distrito[2] = opt_distrito_puntarenas2;
        select_distrito[3] = opt_distrito_puntarenas3;
        select_distrito[4] = opt_distrito_puntarenas4;
        select_distrito[5] = opt_distrito_puntarenas5;
        select_distrito[6] = opt_distrito_puntarenas6;
        select_distrito[7] = opt_distrito_puntarenas7;
        select_distrito[8] = opt_distrito_puntarenas8;
        select_distrito[9] = opt_distrito_puntarenas9;
        select_distrito[10] = opt_distrito_puntarenas10;
        select_distrito[11] = opt_distrito_puntarenas11;
        select_distrito[12] = opt_distrito_puntarenas12;
        select_distrito[13] = opt_distrito_puntarenas13;
        select_distrito[14] = opt_distrito_puntarenas14;
        select_distrito[15] = opt_distrito_puntarenas15;
        select_distrito[16] = opt_distrito_puntarenas16;
    };
    if (select_canton.value == "Quepos" && select_provincia.value == "Puntarenas") {
        let opt_distrito_puntarenas0 = new Option("");
        let opt_distrito_puntarenas1 = new Option("Quepos");
        let opt_distrito_puntarenas2 = new Option("Savegre");
        let opt_distrito_puntarenas3 = new Option("Nranjito");

        select_distrito[0] = opt_distrito_puntarenas0;
        select_distrito[1] = opt_distrito_puntarenas1;
        select_distrito[2] = opt_distrito_puntarenas2;
        select_distrito[3] = opt_distrito_puntarenas3;
    };
    if (select_canton.value == "Acosta" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Cangrejal");
        let opt_distrito_san_jose2 = new Option("Guaitil");
        let opt_distrito_san_jose3 = new Option("Palmichal");
        let opt_distrito_san_jose4 = new Option("Sabanillas");
        let opt_distrito_san_jose5 = new Option("San Ignacio");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
    };
    if (select_canton.value == "Alajuelita" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Alajuelita");
        let opt_distrito_san_jose2 = new Option("Concepción");
        let opt_distrito_san_jose3 = new Option("San Antonio");
        let opt_distrito_san_jose4 = new Option("San Jocesito");
        let opt_distrito_san_jose5 = new Option("San Felipe");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
    };
    if (select_canton.value == "Aserrí" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Aserrí");
        let opt_distrito_san_jose2 = new Option("Tarbaca");
        let opt_distrito_san_jose3 = new Option("Vuelta de Jorco");
        let opt_distrito_san_jose4 = new Option("San Gabriel");
        let opt_distrito_san_jose5 = new Option("Legua");
        let opt_distrito_san_jose6 = new Option("Monterrey");
        let opt_distrito_san_jose7 = new Option("Salitrillos");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
        select_distrito[6] = opt_distrito_san_jose6;
        select_distrito[7] = opt_distrito_san_jose7;
    };
    if (select_canton.value == "Curridabat" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Curridabat");
        let opt_distrito_san_jose2 = new Option("Granadilla");
        let opt_distrito_san_jose3 = new Option("Sánchez");
        let opt_distrito_san_jose4 = new Option("Tirrases");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
    };
    if (select_canton.value == "Desamparados" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Damas");
        let opt_distrito_san_jose2 = new Option("Desamparados");
        let opt_distrito_san_jose3 = new Option("Frailes");
        let opt_distrito_san_jose4 = new Option("Gravilias");
        let opt_distrito_san_jose5 = new Option("Los Guido");
        let opt_distrito_san_jose6 = new Option("Patarrá");
        let opt_distrito_san_jose7 = new Option("Rosario");
        let opt_distrito_san_jose8 = new Option("San Antonio");
        let opt_distrito_san_jose9 = new Option("San Cristóbal");
        let opt_distrito_san_jose10 = new Option("San Juan de Dios");
        let opt_distrito_san_jose11 = new Option("San Miguel");
        let opt_distrito_san_jose12 = new Option("San Rafael Abajo");
        let opt_distrito_san_jose13 = new Option("San Rafael Arriba");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
        select_distrito[6] = opt_distrito_san_jose6;
        select_distrito[7] = opt_distrito_san_jose7;
        select_distrito[8] = opt_distrito_san_jose8;
        select_distrito[9] = opt_distrito_san_jose9;
        select_distrito[10] = opt_distrito_san_jose10;
        select_distrito[11] = opt_distrito_san_jose11;
        select_distrito[12] = opt_distrito_san_jose12;
        select_distrito[13] = opt_distrito_san_jose13;
    };
    if (select_canton.value == "Dota" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Copey");
        let opt_distrito_san_jose2 = new Option("Jardín");
        let opt_distrito_san_jose3 = new Option("Santa María");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
    };
    if (select_canton.value == "Escazú" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Escazú");
        let opt_distrito_san_jose2 = new Option("San Antonio");
        let opt_distrito_san_jose3 = new Option("San Rafael");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
    };
    if (select_canton.value == "Goicoechea" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Calle Blancos");
        let opt_distrito_san_jose2 = new Option("Guadalupe");
        let opt_distrito_san_jose3 = new Option("Ipís");
        let opt_distrito_san_jose4 = new Option("Mata de Platano");
        let opt_distrito_san_jose5 = new Option("Purral");
        let opt_distrito_san_jose6 = new Option("Rancho Redondo");
        let opt_distrito_san_jose7 = new Option("San Francisco");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
        select_distrito[6] = opt_distrito_san_jose6;
        select_distrito[7] = opt_distrito_san_jose7;
    };
    if (select_canton.value == "León Cortéz" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Llano Bonito");
        let opt_distrito_san_jose2 = new Option("San Andrés");
        let opt_distrito_san_jose3 = new Option("San Antonio");
        let opt_distrito_san_jose4 = new Option("San Isidro");
        let opt_distrito_san_jose5 = new Option("San Pablo");
        let opt_distrito_san_jose6 = new Option("Santa Cruz");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
        select_distrito[6] = opt_distrito_san_jose6;
    };
    if (select_canton.value == "Montes de Oca" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("San Pedro");
        let opt_distrito_san_jose2 = new Option("Sabanilla");
        let opt_distrito_san_jose3 = new Option("Mercedes");
        let opt_distrito_san_jose4 = new Option("San Rafael");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
    };
    if (select_canton.value == "Mora" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Colón");
        let opt_distrito_san_jose2 = new Option("Guayabo");
        let opt_distrito_san_jose3 = new Option("Jaris");
        let opt_distrito_san_jose4 = new Option("Picagres");
        let opt_distrito_san_jose5 = new Option("Piedras Negras");
        let opt_distrito_san_jose6 = new Option("Quitirrisí");
        let opt_distrito_san_jose7 = new Option("Tabarcia");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
        select_distrito[6] = opt_distrito_san_jose6;
        select_distrito[7] = opt_distrito_san_jose7;
    };
    if (select_canton.value == "Moravia" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("San Vicente");
        let opt_distrito_san_jose2 = new Option("San Jerónimo");
        let opt_distrito_san_jose3 = new Option("La Trinidad");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
    };
    if (select_canton.value == "Pérez Zeledón" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Barú");
        let opt_distrito_san_jose2 = new Option("Cajón");
        let opt_distrito_san_jose3 = new Option("Daniel Flores");
        let opt_distrito_san_jose4 = new Option("El General");
        let opt_distrito_san_jose5 = new Option("La Amistad");
        let opt_distrito_san_jose6 = new Option("Páramo");
        let opt_distrito_san_jose7 = new Option("Pejibaye");
        let opt_distrito_san_jose8 = new Option("Platanares");
        let opt_distrito_san_jose9 = new Option("Río Nuevo");
        let opt_distrito_san_jose10 = new Option("Rivas");
        let opt_distrito_san_jose11 = new Option("San Isidro de El General");
        let opt_distrito_san_jose12 = new Option("San Pedro");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
        select_distrito[6] = opt_distrito_san_jose6;
        select_distrito[7] = opt_distrito_san_jose7;
        select_distrito[8] = opt_distrito_san_jose8;
        select_distrito[9] = opt_distrito_san_jose9;
        select_distrito[10] = opt_distrito_san_jose10;
        select_distrito[11] = opt_distrito_san_jose11;
        select_distrito[12] = opt_distrito_san_jose12;
    };
    if (select_canton.value == "Puriscal" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Barbacoas");
        let opt_distrito_san_jose2 = new Option("Candelarita");
        let opt_distrito_san_jose3 = new Option("Chires");
        let opt_distrito_san_jose4 = new Option("Desamparaditos");
        let opt_distrito_san_jose5 = new Option("Grifo Alto");
        let opt_distrito_san_jose6 = new Option("Mercedes Sur");
        let opt_distrito_san_jose7 = new Option("San Antonio");
        let opt_distrito_san_jose8 = new Option("San Rafael");
        let opt_distrito_san_jose9 = new Option("Santiago");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
        select_distrito[6] = opt_distrito_san_jose6;
        select_distrito[7] = opt_distrito_san_jose7;
        select_distrito[8] = opt_distrito_san_jose8;
        select_distrito[9] = opt_distrito_san_jose9;
    };
    if (select_canton.value == "San José" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Carmen");
        let opt_distrito_san_jose2 = new Option("Catedral");
        let opt_distrito_san_jose3 = new Option("Hatillo");
        let opt_distrito_san_jose4 = new Option("Hospital");
        let opt_distrito_san_jose5 = new Option("Mata Redonda");
        let opt_distrito_san_jose6 = new Option("Merced");
        let opt_distrito_san_jose7 = new Option("Pavas");
        let opt_distrito_san_jose8 = new Option("San Francisco de Dos Ríos");
        let opt_distrito_san_jose9 = new Option("San Sebastián");
        let opt_distrito_san_jose10 = new Option("Uruca");
        let opt_distrito_san_jose11 = new Option("Zapote");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
        select_distrito[6] = opt_distrito_san_jose6;
        select_distrito[7] = opt_distrito_san_jose7;
        select_distrito[8] = opt_distrito_san_jose8;
        select_distrito[9] = opt_distrito_san_jose9;
        select_distrito[10] = opt_distrito_san_jose10;
        select_distrito[11] = opt_distrito_san_jose11;
    };
    if (select_canton.value == "Santa Ana" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Santa Ana");
        let opt_distrito_san_jose2 = new Option("Salitral");
        let opt_distrito_san_jose3 = new Option("Pozos");
        let opt_distrito_san_jose4 = new Option("Uruca");
        let opt_distrito_san_jose5 = new Option("Piedades");
        let opt_distrito_san_jose6 = new Option("Brasil");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
        select_distrito[6] = opt_distrito_san_jose6;
    };
    if (select_canton.value == "Tarrazú" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("San Marcos");
        let opt_distrito_san_jose2 = new Option("San Lorenzo");
        let opt_distrito_san_jose3 = new Option("San Carlos");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
    };
    if (select_canton.value == "Tibás" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Anselmo Llorente");
        let opt_distrito_san_jose2 = new Option("Cinco Esquinas");
        let opt_distrito_san_jose3 = new Option("Colima");
        let opt_distrito_san_jose4 = new Option("Léon XIII");
        let opt_distrito_san_jose5 = new Option("San Juan");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
    };
    if (select_canton.value == "Turrubares" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Carara");
        let opt_distrito_san_jose2 = new Option("San Juan de Mata");
        let opt_distrito_san_jose3 = new Option("San Luis");
        let opt_distrito_san_jose4 = new Option("San Pablo");
        let opt_distrito_san_jose5 = new Option("San Pedro");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
    };
    if (select_canton.value == "Vásquez de Coronado" && select_provincia.value == "San José") {
        let opt_distrito_san_jose0 = new Option("");
        let opt_distrito_san_jose1 = new Option("Cascajal");
        let opt_distrito_san_jose2 = new Option("Dulce Nombre de Jesús");
        let opt_distrito_san_jose3 = new Option("Patalillo");
        let opt_distrito_san_jose4 = new Option("San Isidro");
        let opt_distrito_san_jose5 = new Option("San Rafael");

        select_distrito[0] = opt_distrito_san_jose0;
        select_distrito[1] = opt_distrito_san_jose1;
        select_distrito[2] = opt_distrito_san_jose2;
        select_distrito[3] = opt_distrito_san_jose3;
        select_distrito[4] = opt_distrito_san_jose4;
        select_distrito[5] = opt_distrito_san_jose5;
    };
};
//============================== FIN DROPDOWNS ==================================

const boton_registrar = document.querySelector('#btnRegistrar');

boton_registrar.addEventListener('click', obtener_datos);

const input_nombre_sede = document.querySelector('#txtNombreSede');
const input_provincia_sede = document.querySelector('#txtProvinciaSede');
const input_canton_sede = document.querySelector('#txtCantonSede');
const input_distrito_sede = document.querySelector('#txtDistritoSede');
const input_ubicacion_sede = document.querySelector('#txtUbicacionSede');

function obtener_datos() {

    let bError = false;

    let sNombreSede = input_nombre_sede.value;
    let sProvinciaSede = input_provincia_sede.value;
    let sCantonSede = input_canton_sede.value;
    let sDistritoSede = input_distrito_sede.value;
    let sUbicacionSede = input_ubicacion_sede.value;

    bError = validar();
    let respuesta;

    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar la sede',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });
    } else {

        //AQUI SUCEDE LA MAGIA = SERVICIO
        respuesta = registrar_sede(sNombreSede, sProvinciaSede, sCantonSede, sDistritoSede, sUbicacionSede);

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
function validar() {
    let bError = false;

    //let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    //let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del nombre Nombre
    if (input_nombre_sede.value == '') {

        input_nombre_sede.classList.add('input_error');
        bError = true;
    } else {
        input_nombre_sede.classList.remove('input_error');
    }

    //Validación de Provincia
    if (input_provincia_sede.value == '') {
        input_provincia_sede.classList.add('input_error');
        bError = true;
    } else {
        input_provincia_sede.classList.remove('input_error');
    }

    //Validación de Cantón
    if (input_canton_sede.value == '') {
        input_canton_sede.classList.add('input_error');
        bError = true;
    } else {
        input_canton_sede.classList.remove('input_error');
    }

    //Validación de Disrtito
    if (input_distrito_sede.value == '') {
        input_distrito_sede.classList.add('input_error');
        bError = true;
    } else {
        input_distrito_sede.classList.remove('input_error');
    }

    //Validación de la Ubicación
    if (input_ubicacion_sede.value == '') {
        input_ubicacion_sede.classList.add('input_error');
        bError = true;
    } else {
        input_ubicacion_sede.classList.remove('input_error');
    }

    return bError;
};

function limpiarFormulario() {
    input_nombre_sede.value = '';
    input_provincia_sede.value = '';
    input_ubicacion_sede.value = '';
    input_distrito_sede.value = '';
    input_canton_sede.value = '';
}



// ***  inicio: para enviar la informacion para modificar al formulario.  (del controlador_ListarPeriodo.js) *** 
window.onload = function() {
    cargar_datos_modificar();
   };

   function cargar_datos_modificar(){
    
    let sede = [];
    
    sede = getSedeParaModificar();
    if (sede[0]!= undefined){

        input_nombre_sede.value = sede[0];
        input_provincia_sede.value = sede[1];
        input_canton_sede.value = sede[2];
        input_distrito_sede.value = sede[3];
        input_ubicacion_sede.value = sede[4];

        sede = [];
        localStorage.setItem("sedeParaModificar", JSON.stringify(sede));
        botonModificar.hidden = false;
        botonRegistrar.hidden = true;
    }
};

function getSedeParaModificar() {
    return JSON.parse(localStorage.getItem("sedeParaModificar"));
}
// fin: enviar info del listar al form 