/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/
'use strict';

window.addEventListener('load', llenar_tabla);

function llenar_tabla() {
    let llenar_sedes = obtener_sedes();
    let tbody = document.querySelector('#tbodyListar');
    tbody.innerHTML = '';

    for (let i = 0; i < llenar_sedes.length; i++) {
        let fila = tbody.insertRow();

        let celda_nombre_sede = fila.insertCell();
        let celda_provincia_sede = fila.insertCell();
        let celda_canton_sede = fila.insertCell();
        let celda_distrito_sede = fila.insertCell();
        let celda_ubicacion_sede = fila.insertCell();

        celda_nombre_sede.innerHTML = llenar_sedes[i]['nombre_sede'];
        celda_provincia_sede.innerHTML = llenar_sedes[i]['provincia_sede'];
        celda_canton_sede.innerHTML = llenar_sedes[i]['canton_sede'];
        celda_distrito_sede.innerHTML = llenar_sedes[i]['distrito_sede'];
        celda_ubicacion_sede.innerHTML = llenar_sedes[i]['ubicacion_sede'];
    }
};


