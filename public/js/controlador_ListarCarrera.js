/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';

//const botonRegistrar = document.querySelector('#btnRegistrar');
//botonRegistrar.addEventListener('click', listarUsuarios);
let listaCarreras;
listarCarreras();

//Filtros 
const inputFiltroNombre = document.querySelector('#txtNombreCarrera');
const inputFiltroSede = document.querySelector('#sltSede');

let estadoBandera = false;
setBanderaModificar(estadoBandera);

//EventListeners de los filtros
inputFiltroNombre.addEventListener('keyup', function () {
    imprimirListaCarrera(listaCarreras, inputFiltroNombre.value)
});
inputFiltroSede.addEventListener('keyup', function () {
    imprimirListaCarreraSede(listaCarreras, inputFiltroSede.value)
});


function imprimirListaCarrera(plistaCarreras, pFiltro) {
    let tbody = document.querySelector('#tblListarCarreras');

    //Filtros 
    if (!pFiltro) {
        pFiltro = '';
    }

    tbody.innerHTML = '';

    for (let i = 0; i < listaCarreras.length; i++) {

        if (listaCarreras[i]['estado'] == 1) {

            if (plistaCarreras[i]['nombre_carrera'].toLowerCase().includes(pFiltro.toLowerCase())) {
                let fila = tbody.insertRow();


                let cnombre_carrera = fila.insertCell();
                let cSede = fila.insertCell();
                let cCreditos_totales = fila.insertCell();
                let cAcreditada = fila.insertCell();
                let cConfiguracion = fila.insertCell();



                cnombre_carrera.innerHTML = plistaCarreras[i]['nombre_carrera'];
                cSede.innerHTML = plistaCarreras[i]['slt_sede'];
                cCreditos_totales.innerHTML = plistaCarreras[i]['creditos_totales'];
                cAcreditada.innerHTML = plistaCarreras[i]['acreditacion'];


                //Se crean los componentes para actualizar 
                let botonModificar = document.createElement('a');
                botonModificar.classList.add('fas');
                botonModificar.classList.add('fa-pencil-alt');
                botonModificar.classList.add('tooltip');

                let tooltipModificar = document.createElement('span');
                tooltipModificar.textContent = "Editar";
                tooltipModificar.setAttribute('class', 'tooltiptext');
                botonModificar.appendChild(tooltipModificar);

                botonModificar.dataset._id = plistaCarreras[i]['_id'];
                botonModificar.addEventListener('click', buscar_por_id);

                cConfiguracion.appendChild(botonModificar);
                botonModificar.appendChild(tooltipModificar);

                //Se crean los componentes para desactivar
                let botonDesactivar = document.createElement('a');
                botonDesactivar.classList.add('fas');
                botonDesactivar.classList.add('fa-ban');
                botonDesactivar.classList.add('tooltip');

                let tooltipDesactivar = document.createElement('span');
                tooltipDesactivar.textContent = "Desactivar";
                tooltipDesactivar.setAttribute('class', 'tooltiptext');
                botonDesactivar.appendChild(tooltipDesactivar);

                botonDesactivar.dataset._id = plistaCarreras[i]['_id'];
                botonDesactivar.addEventListener('click', remover_carrera);

                cConfiguracion.appendChild(botonDesactivar); 
                botonDesactivar.appendChild(tooltipDesactivar);

            }
        }
    }
};

function imprimirListaCarreraSede(plistaCarreras, pFiltro) {
    let tbody = document.querySelector('#tblListarCarreras');

    //Filtros 
    if (!pFiltro) {
        pFiltro = '';
    }

    tbody.innerHTML = '';

    for (let i = 0; i < listaCarreras.length; i++) {

        if (listaCarreras[i]['estado'] == 1) {

            if (plistaCarreras[i]['slt_sede'].toLowerCase().includes(pFiltro.toLowerCase())) {
                let fila = tbody.insertRow();


                let cnombre_carrera = fila.insertCell();
                let cSede = fila.insertCell();
                let cCreditos_totales = fila.insertCell();
                let cAcreditada = fila.insertCell();
                let cConfiguracion = fila.insertCell();



                cnombre_carrera.innerHTML = plistaCarreras[i]['nombre_carrera'];
                cSede.innerHTML = plistaCarreras[i]['slt_sede'];
                cCreditos_totales.innerHTML = plistaCarreras[i]['creditos_totales'];
                cAcreditada.innerHTML = plistaCarreras[i]['acreditacion'];


                //Se crean los componentes para actualizar 
                let botonModificar = document.createElement('a');
                botonModificar.classList.add('fas');
                botonModificar.classList.add('fa-pencil-alt');
                botonModificar.classList.add('tooltip');

                let tooltipModificar = document.createElement('span');
                tooltipModificar.textContent = "Editar";
                tooltipModificar.setAttribute('class', 'tooltiptext');
                
                botonModificar.dataset._id = plistaCarreras[i]['_id'];
                botonModificar.addEventListener('click', buscar_por_id);

                cConfiguracion.appendChild(botonModificar);
                botonModificar.appendChild(tooltipModificar);

                //Se crean los componentes para desactivar
                let botonDesactivar = document.createElement('a');
                botonDesactivar.classList.add('fas');
                botonDesactivar.classList.add('fa-ban');
                botonDesactivar.classList.add('tooltip');

                let tooltipDesactivar = document.createElement('span');
                tooltipDesactivar.textContent = "Desactivar";
                tooltipDesactivar.setAttribute('class', 'tooltiptext');
                

                botonDesactivar.dataset._id = plistaCarreras[i]['_id'];
                botonDesactivar.addEventListener('click', remover_carrera);

                cConfiguracion.appendChild(botonDesactivar);
                botonDesactivar.appendChild(tooltipDesactivar); 

            }
        }
    }
};




function listarCarreras() {

    listaCarreras = obtenerListaCarreras();
    imprimirListaCarrera(listaCarreras);

};


function buscar_por_id() {

    let _id = this.dataset._id;
    let carreraPorId = obtener_carrera_por_id(_id);
    let datosCarrera = [];

    estadoBandera = true;

    datosCarrera[0] = carreraPorId['codigo_carrera'];
    datosCarrera[1] = carreraPorId['nombre_carrera'];
    datosCarrera[2] = carreraPorId['creditos_totales'];
    datosCarrera[3] = carreraPorId['fecha_creacion'];
    datosCarrera[4] = carreraPorId['slt_sede'];
    datosCarrera[5] = carreraPorId['acreditacion'];
    datosCarrera[6] = carreraPorId['_id'];

    setCarreraParaModificar(datosCarrera);
    setBanderaModificar(estadoBandera);

    cargar_pagina();

    function cargar_pagina() {
        window.location.replace('carrera_registrar.html');
    };

};

function setBanderaModificar(estadoBandera) {
    localStorage.setItem("estadoBanderaModificar", JSON.stringify(estadoBandera));
    console.log(JSON.parse(localStorage.getItem("estadoBanderaModificar"))); //para verificar el estatus en consola.
};

function setCarreraParaModificar(p_datosCarrera) {
    localStorage.setItem("carreraParaModificar", JSON.stringify(p_datosCarrera));
    console.log(JSON.parse(localStorage.getItem("carreraParaModificar")));
};

function remover_carrera() {
    let _id = this.dataset._id;
    let estado = 0;

    swal({
        title: '¿Está seguro?',
        text: "La carrera se desactivará",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Desactivar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.value) {
            desactivar_carrera(_id, estado);  //funcion en servicio_ListarPeriodo.js
            listarCarreras();

            // setPeriodoParaModificar(_id);

            swal(
                '¡Desactivado!',
                'La carrera ha sido desactivado con éxito',
                'success'
            )
        }
    });


}