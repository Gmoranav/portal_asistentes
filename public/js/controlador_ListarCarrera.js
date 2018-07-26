'use strict';

window.addEventListener('load', listarCarreras);

function imprimirListaCarrera(plistaCarreras){
    
    
    let tbody = document.querySelector('#tblListarCarreras');

    tbody.innerHTML = '';
    
    for(let i = 0; i < plistaCarreras.length; i++){

            let fila = tbody.insertRow();
                        
            
            let cnombre_carrera = fila.insertCell();
            let cSede = fila.insertCell();
            let cCreditos_totales = fila.insertCell();
            let cAcreditada = fila.insertCell();

        
            cnombre_carrera.innerHTML = plistaCarreras[i]['nombre_carrera'];
            cSede.innerHTML = plistaCarreras[i]['slt_sede'];
            cCreditos_totales.innerHTML = plistaCarreras[i]['creditos_totales'];
            cAcreditada.innerHTML = plistaCarreras[i]['acreditacion'];

    }
};


function listarCarreras(){

        let listaCarreras = obtenerListaCarreras();
        imprimirListaCarrera(listaCarreras);
};
