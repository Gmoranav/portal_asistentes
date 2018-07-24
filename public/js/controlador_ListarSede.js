/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';

window.addEventListener('load', llenarTabla);

function llenarTabla() {
    let llenarSedes = obtenerSedes();
    let tbody = document.querySelector('#tbodyListar');
    tbody.innerHTML = '';

    for (let i = 0; i < llenarSedes.length; i++) {
        let fila = tbody.insertRow();

        let celdaNombreSede = fila.insertCell();
        let celdaProvinciaSede = fila.insertCell();
        let celdaCantonSede = fila.insertCell();
        let celdaDistritoSede = fila.insertCell();
        let celdaUbicacionSede = fila.insertCell();

        celdaNombreSede.innerHTML = llenarSedes[i]['nombreSede'];
        celdaProvinciaSede.innerHTML = llenarSedes[i]['provinciaSede'];
        celdaCantonSede.innerHTML = llenarSedes[i]['cantonSede'];
        celdaDistritoSede.innerHTML = llenarSedes[i]['distritoSede'];
        celdaUbicacionSede.innerHTML = llenarSedes[i]['ubicacionSede'];
    }
};




