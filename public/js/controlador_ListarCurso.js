'use strict';


let listaCursos;
listarCurso();

//Filtros
const inputFiltroNombre = document.querySelector('#txtCurso');
const inputFiltroCodigo = document.querySelector('#txtCodigoCurso');

//EventListeners
inputFiltroNombre.addEventListener('keyup', function () {
    llenarTabla(listaCursos, inputFiltroNombre.value)
});
inputFiltroCodigo.addEventListener('keyup', function () {
    llenarTablaCodigo(listaCursos, inputFiltroCodigo.value)
});

function llenarTabla(plistaCursos, pFiltro) {
    
    let tbody = document.querySelector('#tbodyListar');

    //Filtros 
    if (!pFiltro) {
        pFiltro = '';
    }

    tbody.innerHTML = '';

    for (let i = 0; i < listaCursos.length; i++) {
        if (plistaCursos[i]['nombre_curso'].toLowerCase().includes(pFiltro.toLowerCase())) {

            let fila = tbody.insertRow();

            let celdaNombreCurso = fila.insertCell();
            let celdaCodigo = fila.insertCell();
            let celdaCantidadCreditos = fila.insertCell();
            let cConfiguracion = fila.insertCell();


            celdaNombreCurso.innerHTML = plistaCursos[i]['nombre_curso'];
            celdaCodigo.innerHTML = plistaCursos[i]['codigo_curso'];
            celdaCantidadCreditos.innerHTML = plistaCursos[i]['cantidad_creditos'];

            //Se crean los componentes para actualizar 
            let botonModificar = document.createElement('a');
            botonModificar.classList.add('fas');
            botonModificar.classList.add('fa-pencil-alt');
            botonModificar.classList.add('tooltip');

            let tooltipModificar = document.createElement('span');
            tooltipModificar.textContent = "Editar";
            tooltipModificar.setAttribute('class', 'tooltiptext');
            botonModificar.appendChild(tooltipModificar);

            botonModificar.dataset._id = plistaCursos[i]['_id'];
            botonModificar.addEventListener('click', buscar_por_id);

            cConfiguracion.appendChild(botonModificar);

        }


    }

};

function llenarTablaCodigo(plistaCursos, pFiltro) {
    //let llenarCursos = obtenerCursos();
    let tbody = document.querySelector('#tbodyListar');

    //Filtros 
    if (!pFiltro) {
        pFiltro = '';
    }

    tbody.innerHTML = '';

    for (let i = 0; i < plistaCursos.length; i++) {
        if (plistaCursos[i]['codigo_curso'].toLowerCase().includes(pFiltro.toLowerCase())) {

            let fila = tbody.insertRow();

            let celdaNombreCurso = fila.insertCell();
            let celdaCodigo = fila.insertCell();
            let celdaCantidadCreditos = fila.insertCell();
            let cConfiguracion = fila.insertCell();


            celdaNombreCurso.innerHTML = plistaCursos[i]['nombre_curso'];
            celdaCodigo.innerHTML = plistaCursos[i]['codigo_curso'];
            celdaCantidadCreditos.innerHTML = plistaCursos[i]['cantidad_creditos'];

            //Se crean los componentes para actualizar 
            let botonModificar = document.createElement('a');
            botonModificar.classList.add('fas');
            botonModificar.classList.add('fa-pencil-alt');
            botonModificar.classList.add('tooltip');

            let tooltipModificar = document.createElement('span');
            tooltipModificar.textContent = "Editar";
            tooltipModificar.setAttribute('class', 'tooltiptext');
            botonModificar.appendChild(tooltipModificar);

            botonModificar.dataset._id = plistaCursos[i]['_id'];
            botonModificar.addEventListener('click', buscar_por_id);

            cConfiguracion.appendChild(botonModificar);

        }


    }

};


function listarCurso() {

    listaCursos = obtenerCursos();
    llenarTabla(listaCursos);

};


function buscar_por_id() {

    let _id = this.dataset._id;
    let cursoPorId = obtener_curso_por_id(_id);
    let datosCurso = [];

    datosCurso[0] = cursoPorId['nombre_curso'];
    datosCurso[1] = cursoPorId['codigo_curso'];
    datosCurso[2] = cursoPorId['cantidad_creditos'];
    datosCurso[3] = cursoPorId['_id'];

    setCursoParaModificar(datosCurso);
    cargar_pagina();

};

function setCursoParaModificar(infoUsuario) {
    localStorage.setItem("CursoParaModificar", JSON.stringify(infoUsuario));
    console.log(JSON.parse(localStorage.getItem("CursoParaModificar")));
};
