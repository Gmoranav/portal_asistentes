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

window.addEventListener('load', listarUsuarios);

function imprimirListaUsuarios(/*pFiltro*/plistaUsuarios){
    
    
    let tbody = document.querySelector('#tblListarUsuarios');
    /*if(!pFiltro){
        pFiltro = '';
    }*/
    tbody.innerHTML = '';


    
    for(let i = 0; i < plistaUsuarios.length; i++){

       
        //if(plistaUsuarios[i]['nombre_completo'].toLowerCase().includes(pFiltro.toLowerCase())){
            let fila = tbody.insertRow();
                        
            let nombre = plistaUsuarios[i]['nombre'];
            let primer_apellido = plistaUsuarios[i]['primer_apellido'];
            let segundo_apellido = plistaUsuarios[i]['segundo_apellido'];
            let NombreCompleto;
            let espacio = ' ';
            let cNombre = fila.insertCell();
            let cRol = fila.insertCell();
            let cFechaIngreso = fila.insertCell();
            let cCorreo = fila.insertCell();

            NombreCompleto = primer_apellido.concat(espacio, segundo_apellido, espacio, nombre);
            cNombre.innerHTML = NombreCompleto;
            cRol.innerHTML = plistaUsuarios[i]['rol'];
            cFechaIngreso.innerHTML = plistaUsuarios[i]['fecha_ingreso'];
            cCorreo.innerHTML = plistaUsuarios[i]['correo'];
        //} 
    }
};


function listarUsuarios(){

        let listaUsuarios = obtenerListaUsuarios();
        imprimirListaUsuarios(listaUsuarios);
};