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

window.addEventListener('load', listarCarreras);

function imprimirListaCarrera(/*pFiltro*/plistaCarreras){
    
    
    let tbody = document.querySelector('#tblListarCarreras');
    /*if(!pFiltro){
        pFiltro = '';
    }*/
    tbody.innerHTML = '';


    
    for(let i = 0; i < plistaCarreras.length; i++){

       
        //if(plistaUsuarios[i]['nombre_completo'].toLowerCase().includes(pFiltro.toLowerCase())){
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

            botonModificar.dataset._id = plistaCarreras[i]['_id'];
            botonModificar.addEventListener('click' , buscar_por_id);

            cConfiguracion.appendChild(botonModificar); 

        //} 
    }
};


function listarCarreras(){

        let listaCarreras = obtenerListaCarreras();
        imprimirListaCarrera(listaCarreras);
};


function buscar_por_id(){

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

    setCarreraParaModificar(datosCarrera);
    cargar_pagina();

};

function setCarreraParaModificar(infoUsuario) {
    localStorage.setItem("CarreraParaModificar", JSON.stringify(infoUsuario));
    console.log(JSON.parse(localStorage.getItem("CarreraParaModificar")));
};
