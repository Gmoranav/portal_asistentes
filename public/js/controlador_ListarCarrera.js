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

        
            cnombre_carrera.innerHTML = plistaCarreras[i]['nombre_carrera'];
            cSede.innerHTML = plistaCarreras[i]['slt_sede'];
            cCreditos_totales.innerHTML = plistaCarreras[i]['creditos_totales'];
            cAcreditada.innerHTML = plistaCarreras[i]['acreditacion'];

        //} 
    }
};


function listarCarreras(){

        let listaCarreras = obtenerListaCarreras();
        imprimirListaCarrera(listaCarreras);
};
