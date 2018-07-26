
'use strict';

window.addEventListener('load', listarUsuarios);

function imprimirListaUsuarios(/*pFiltro*/plistaUsuarios){
    
    
    let tbody = document.querySelector('#tblListarUsuarios');

    tbody.innerHTML = '';

    for(let i = 0; i < plistaUsuarios.length; i++){

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
    }
};


function listarUsuarios(){

        let listaUsuarios = obtenerListaUsuarios();
        imprimirListaUsuarios(listaUsuarios);
};
