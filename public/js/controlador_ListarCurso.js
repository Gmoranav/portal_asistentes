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

function buscar_por_id(){

    let _id = this.dataset._id;
    let cursoPorId = obtener_curso_por_id(_id);
    let datosCurso = [];

    datosCurso[0] = cursoPorId['nombre_curso'];
    datosCurso[1] = cursoPorId['codigo_curso'];
    datosCurso[2] = cursoPorId['cantidad_creditos'];

    setCursoParaModificar(datosCurso);
    cargar_pagina();

};

function setCursoParaModificar(infoUsuario) {
    localStorage.setItem("CursoParaModificar", JSON.stringify(infoUsuario));
    console.log(JSON.parse(localStorage.getItem("CursoParaModificar")));
};
