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

/**
 * const inputFiltroCreditos = document.querySelector('#numCreditosTotales');
    const inputFiltroAcreditacion = document.querySelector('txtAcreditacion');

 * 
 */

//EventListeners de los filtros
inputFiltroNombre.addEventListener('keyup', function () {
    imprimirListaCarrera(listaCarreras, inputFiltroNombre.value)
});
inputFiltroSede.addEventListener('keyup', function () {
    imprimirListaCarreraSede(listaCarreras, inputFiltroSede.value)
});
/**
 * inputFiltroCreditos.addEventListener('keyup', function(){
    imprimirListaCarreraCreditos(listaCarreras, inputFiltroCreditos.value)
});
 */
/**
 * inputFiltroAcreditacion.addEventListener('keyup', function(){
    imprimirListaCarreraAcreditacion(listaCarreras, inputFiltroAcreditacion.value)
});
 */


function imprimirListaCarrera(plistaCarreras, pFiltro) {
    let tbody = document.querySelector('#tblListarCarreras');

    //Filtros 
    if (!pFiltro) {
        pFiltro = '';
    }

    tbody.innerHTML = '';

    for (let i = 0; i < plistaCarreras.length; i++) {


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

    for (let i = 0; i < plistaCarreras.length; i++) {


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
            botonModificar.appendChild(tooltipModificar);

            botonModificar.dataset._id = plistaCarreras[i]['_id'];
            botonModificar.addEventListener('click', buscar_por_id);

            cConfiguracion.appendChild(botonModificar);

        }
    }
};



/**
 * function imprimirListaCarreraCreditos(plistaCarreras , pFiltro){
    let tbody = document.querySelector('#tblListarCarreras');
    
    //Filtros 
    if(!pFiltro){
        pFiltro = '';
    }

    tbody.innerHTML = '';
    
    for(let i = 0; i < plistaCarreras.length; i++){

       
        if(plistaCarreras[i]['creditos_totales'].includes(pFiltro)){
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
            botonModificar.addEventListener('click' , buscar_por_id);

            cConfiguracion.appendChild(botonModificar); 

        } 
    }
};
 * 
 */
/**
 * function imprimirListaCarreraAcreditacion(plistaCarreras , pFiltro){
    let tbody = document.querySelector('#tblListarCarreras');
    
    //Filtros 
    if(!pFiltro){
        pFiltro = '';
    }

    tbody.innerHTML = '';
    
    for(let i = 0; i < plistaCarreras.length; i++){

       
        if(plistaCarreras[i]['acreditacion'].toLowerCase().includes(pFiltro.toLowerCase())){
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
            botonModificar.addEventListener('click' , buscar_por_id);

            cConfiguracion.appendChild(botonModificar); 

        } 
    }
};
 * 
 */


function listarCarreras() {

    listaCarreras = obtenerListaCarreras();
    imprimirListaCarrera(listaCarreras);

};



function buscar_por_id() {

    let _id = this.dataset._id;
    let carreraPorId = obtener_carrera_por_id(_id);
    let datosCarrera = [];

    console.log(carreraPorId);

    datosCarrera[0] = carreraPorId['codigo_carrera'];
    datosCarrera[1] = carreraPorId['nombre_carrera'];
    datosCarrera[2] = carreraPorId['creditos_totales'];
    datosCarrera[3] = carreraPorId['fecha_creacion'];
    datosCarrera[4] = carreraPorId['slt_sede'];
    datosCarrera[5] = carreraPorId['acreditacion'];
    datosCarrera[6] = carreraPorId['_id'];

    setCarreraParaModificar(datosCarrera);
    cargar_pagina();

};

function setCarreraParaModificar(infoUsuario) {
    localStorage.setItem("CarreraParaModificar", JSON.stringify(infoUsuario));
    console.log(JSON.parse(localStorage.getItem("CarreraParaModificar")));
};
