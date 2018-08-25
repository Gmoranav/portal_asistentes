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
        let celdaCantidadCreditos = fila.insertCell();
        let cConfiguracion = fila.insertCell();
       

        celdaNombreCurso.innerHTML = llenarCursos[i]['nombre_curso'];
        celdaCodigo.innerHTML = llenarCursos[i]['codigo_curso'];
        celdaCantidadCreditos.innerHTML = llenarCursos[i]['cantidad_creditos'];
       
        //Se crean los componentes para actualizar 
        let botonModificar = document.createElement('a');
        botonModificar.classList.add('fas');
        botonModificar.classList.add('fa-pencil-alt');   

        botonModificar.dataset._id = llenarCursos[i]['_id'];
        botonModificar.addEventListener('click' , buscar_por_id);

        cConfiguracion.appendChild(botonModificar); 

    } 

};

function buscar_por_id(){

    let _id = this.dataset._id;
    let cursoPorId = obtener_curso_por_id(_id);
    let datosCurso = [];

    datosCurso[0] = cursoPorId['nombre_curso'];
    datosCurso[1] = cursoPorId['codigo_curso'];
    datosCurso[2] = cursoPorId['cantidad_creditos'];
    datosCurso[3] =  cursoPorId['_id'];

    setCursoParaModificar(datosCurso);
    cargar_pagina();

};

function setCursoParaModificar(infoUsuario) {
    localStorage.setItem("CursoParaModificar", JSON.stringify(infoUsuario));
    console.log(JSON.parse(localStorage.getItem("CursoParaModificar")));
};
