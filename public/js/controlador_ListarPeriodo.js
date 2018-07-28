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

window.addEventListener('load', listarPeriodos);

function imprimirListaPeridodos(plistaPeriodos){
    
    
    let tbody = document.querySelector('#tblListarPeriodos');
   
    tbody.innerHTML = '';


    
    for(let i = 0; i < plistaPeriodos.length; i++){

 
            let fila = tbody.insertRow();
                        
            
            let cnombre_periodo = fila.insertCell();
            let cestado_periodo = fila.insertCell();
        
        
            cnombre_periodo.innerHTML = plistaPeriodos[i]['nombre_periodo'];
            cestado_periodo.innerHTML = plistaPeriodos[i]['estado_periodo'];
            console.log(cestado_periodo);
    
    }
};


function listarPeriodos(){

        let listaPeriodos = obtenerListaPeriodos();
        console.log('entra a listar periodos');
        imprimirListaPeridodos(listaPeriodos);
};