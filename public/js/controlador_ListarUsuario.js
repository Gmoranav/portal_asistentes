
'use strict';

window.addEventListener('load', listarUsuarios);

//const inputFiltroNombre = document.querySelector('#txtNombre');
const inputFiltroRol = document.querySelector('#txtRol');
/*const inputFiltroIngreso = document.querySelector('#txtIngreso');
const inputFiltroCorreo = document.querySelector('#txtCorreo');*/

inputFiltroRol.addEventListener('keyup', function(){
        imprimirListaUsuarios(listarUsuarios, inputFiltroRol.value)
});

/*inputFiltroRol.addEventListener('keyup', function(){
        imprimirListaUsuarios(listarUsuarios, inputFiltroRol.value)
});

inputFiltroIngreso.addEventListener('keyup', function(){
        imprimirListaUsuarios(listarUsuarios, inputFiltroIngreso.value)
});

inputFiltroCorreo.addEventListener('keyup', function(){
        imprimirListaUsuarios(listarUsuarios, inputFiltroCorreo.value)
});*/


function imprimirListaUsuarios(plistaUsuarios, pFiltro){
    
    
    let tbody = document.querySelector('#tblListarUsuarios');

    if(!pFiltro){
        pFiltro ='';
    }

    tbody.innerHTML = '';

    for(let i = 0; i < plistaUsuarios.length; i++){

        if(plistaUsuarios[i]['rol'].toLowerCase().includes(pFiltro.toLowerCase())){
            let fila = tbody.insertRow();
                        
            let nombre = plistaUsuarios[i]['nombre'];
            let segundo_nombre = plistaUsuarios[i]['segundo_nombre'];
            let primer_apellido = plistaUsuarios[i]['primer_apellido'];
            let segundo_apellido = plistaUsuarios[i]['segundo_apellido'];
            let NombreCompleto;
            let cNombre = fila.insertCell();
            let cRol = fila.insertCell();
            let cFechaIngreso = fila.insertCell();
            let cCorreo = fila.insertCell();
            let cConfiguracion = fila.insertCell();

            /*let imagen = document.createElement('img');
            imagen.src = plistaUsuarios[i]['foto'];
            imagen.classList.add('imageSettings');

            cFoto.appendChild(imagen);*/
            if (segundo_nombre != 'undefined'){
                NombreCompleto = primer_apellido.concat(' ', segundo_apellido, ' ', nombre, ' ', segundo_nombre);
            }else{
                NombreCompleto = primer_apellido.concat(' ', segundo_apellido, ' ', nombre);
            }
            
            cNombre.innerHTML = NombreCompleto;
            cRol.innerHTML = plistaUsuarios[i]['rol'];
            cFechaIngreso.innerHTML = plistaUsuarios[i]['fecha_ingreso'];
            cCorreo.innerHTML = plistaUsuarios[i]['correo'];

            //se crean los componentes para actualizar
            let botonModificar = document.createElement('a');
            botonModificar.classList.add('fas');
            botonModificar.classList.add('fa-pencil-alt');

            let botonEliminar = document.createElement('a');
            botonEliminar.classList.add('fas');
            botonEliminar.classList.add('fa-trash-alt');


            //dataset es una 
            //propiedad que permite definir atributos personalizados
            //para un elemento de html
            botonModificar.dataset._id = plistaUsuarios[i]['_id'];
            botonEliminar.dataset._id = plistaUsuarios[i]['_id'];

            //un eventListener queda enlazado a la función que llama
            botonModificar.addEventListener('click', buscar_por_id);
            botonEliminar.addEventListener('click', remover_usuario);

            cConfiguracion.appendChild(botonModificar);
            cConfiguracion.appendChild(botonEliminar);

        }//fin if
    }//fin for
};


function listarUsuarios(){

        let listaUsuarios = obtenerListaUsuarios();
        imprimirListaUsuarios(listaUsuarios);
};

function buscar_por_id(){
        let _id = this.dataset._id;
        let usuario = obtener_usuario_por_id(_id);
        let datosUsuario = [];
        let i = 0;

        console.log(usuario);
        //binding permite enlazar la función con el contexto que la llama
        //en este caso con el boton Modificar


        datosUsuario[0] = usuario['nombre']; 
        datosUsuario[1] = usuario['segundo_nombre']; 
        datosUsuario[2] = usuario['primer_apellido']; 
        datosUsuario[3] = usuario['segundo_apellido']; 
        datosUsuario[4] = usuario['cedula']; 
        datosUsuario[5] = usuario['fecha_ingreso']; 
        datosUsuario[6] = usuario['rol']; 
        datosUsuario[7] = usuario['direccion']; 
        datosUsuario[8] = usuario['distrito']; 
        datosUsuario[9] = usuario['canton']; 
        datosUsuario[10] = usuario['provincia']; 
        datosUsuario[11] = usuario['telefono']; 
        datosUsuario[12] = usuario['correo']; 
        datosUsuario[13] = usuario['_id'];
        datosUsuario[14]= usuario['foto'];

        setUsuarioParaModificar(datosUsuario);
        cargar_pagina();

};


function setUsuarioParaModificar(infoUsuario) {
        localStorage.setItem("usuarioParaModificar", JSON.stringify(infoUsuario));
        console.log(JSON.parse(localStorage.getItem("usuarioParaModificar")));
};


function remover_usuario(){
        let _id = this.dataset._id; //SE SALVA EL ID DE LO QUE SE DESEA BORRAR
        swal({
            title: '¿Está seguro?',
            text: "El usuario se eliminará permanentemente",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.value) {
                eliminar_usuario(_id); 
                listarUsuarios();
                swal(
                        '¡Eliminado!',
                        'El usuario ha sido eliminado con éxito',
                        'success'
                )
              
            }
        });
};
