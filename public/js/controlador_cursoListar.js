'use strict';

window.addEventListener('load' , llenarTabla);

function llenarTabla(){
    let llenarCursos = obtenerCursos();
    let tbody = document.querySelector('#tbodyListar');

    tbody.innerHTML = '';

    for (let i = 0; i < llenarCursos.length; i++){

        let fila = tbody.insertRow();

        let celdaNombreCurso = fila.insertCell();
        let celdaCodigo = fila.insertCell();
        let celdaSede = fila.insertCell();
        let celdaCantidadCreditos = fila.insertCell();
        let celdaCarreras = fila.insertCell();

        celdaNombreCurso.innerHTML = llenarCursos[i]['nombre_curso'];
        celdaCodigo.innerHTML = llenarCursos[i]['codigo_curso'];
        celdaSede.innerHTML = llenarCursos[i]['slt_sede'];
        celdaCantidadCreditos.innerHTML = llenarCursos[i]['cantidad_creditos'];
        celdaCarreras.innerHTML =llenarCursos[i]['slt_carreraCurso'];

    } 

};
