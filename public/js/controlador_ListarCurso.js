'use strict';

let listaCursos;
listarCurso();

//Filtros
const inputFiltroNombre = document.querySelector('#txtCurso');
const inputFiltroCodigo = document.querySelector('#txtCodigoCurso');

let estadoBandera = false;
setBanderaModificar(estadoBandera);

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

        if (listaCursos[i]['estado'] == 1) {

            if (plistaCursos[i]['nombre_curso'].toLowerCase().includes(pFiltro.toLowerCase())) {

                let fila = tbody.insertRow();
                let celdaNombreCurso = fila.insertCell();
                let celdaCodigo = fila.insertCell();
                let celdaCantidadCreditos = fila.insertCell();
                let cConfiguracion = fila.insertCell();

                celdaNombreCurso.innerHTML = plistaCursos[i]['nombre_curso'];
                celdaCodigo.innerHTML = plistaCursos[i]['codigo_curso'];
                celdaCantidadCreditos.innerHTML = plistaCursos[i]['cantidad_creditos'];

               // let cDesactivacion = fila.insertCell();

                //Se crean los componentes para actualizar/modificar 
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
                botonModificar.appendChild(tooltipModificar);
                
                cConfiguracion.appendChild(botonModificar);

                //Se crean los componentes para desactivar
                let botonDesactivar = document.createElement('a');
                botonDesactivar.classList.add('fas');
                botonDesactivar.classList.add('fa-ban');
                botonDesactivar.classList.add('tooltip');

                let tooltipDesactivar = document.createElement('span');
                tooltipDesactivar.textContent = "Desactivar";
                tooltipDesactivar.setAttribute('class', 'tooltiptext');
                botonDesactivar.appendChild(tooltipDesactivar);

                botonDesactivar.dataset._id = listaCursos[i]['_id'];
                botonDesactivar.addEventListener('click', remover_curso);

                cConfiguracion.appendChild(botonDesactivar); 
            }

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

    estadoBandera = true;

    datosCurso[0] = cursoPorId['nombre_curso'];
    datosCurso[1] = cursoPorId['codigo_curso'];
    datosCurso[2] = cursoPorId['cantidad_creditos'];
    datosCurso[3] = cursoPorId['_id'];

    setCursoParaModificar(datosCurso);
    setBanderaModificar(estadoBandera);

    cargar_pagina();

    function cargar_pagina() {
        window.location.replace('curso_registrar.html');
    }

};


function setBanderaModificar(estadoBandera){
    localStorage.setItem("estadoBanderaModificar", JSON.stringify(estadoBandera));
    console.log(JSON.parse(localStorage.getItem("estadoBanderaModificar"))); //para verificar el estatus en consola.
};

function setCursoParaModificar(p_datosCurso) {
    localStorage.setItem("cursoParaModificar", JSON.stringify(p_datosCurso));
    console.log(JSON.parse(localStorage.getItem("cursoParaModificar")));
};



function remover_curso() {
    let _id = this.dataset._id;
    let estado = 0;

    swal({
        title: '¿Está seguro?',
        text: "El curso se desactivará",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Desactivar'
    }).then((result) => {
        if (result.value) {
            desactivar_curso(_id, estado);  //funcion en servicio_ListarPeriodo.js
            listarCurso();

            // setPeriodoParaModificar(_id);

            swal(
                '¡Desactivado!',
                'El curso ha sido desactivado con éxito',
                'success'
            )
        }
    });
}

