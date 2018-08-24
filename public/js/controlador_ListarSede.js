/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/
'use strict';

window.addEventListener('load', llenar_tabla);

function llenar_tabla() {
    let llenar_sedes = obtener_sedes();
    let tbody = document.querySelector('#tbodyListar');
    tbody.innerHTML = '';

    for (let i = 0; i < llenar_sedes.length; i++) {
        let fila = tbody.insertRow();

        let celda_nombre_sede = fila.insertCell();
        let celda_provincia_sede = fila.insertCell();
        let celda_canton_sede = fila.insertCell();
        let celda_distrito_sede = fila.insertCell();
        let celda_ubicacion_sede = fila.insertCell();

        let cConfiguracion = fila.insertCell();  // se crea esta variable para asignarle el boton del lapiz

        celda_nombre_sede.innerHTML = llenar_sedes[i]['nombre_sede'];
        celda_provincia_sede.innerHTML = llenar_sedes[i]['provincia_sede'];
        celda_canton_sede.innerHTML = llenar_sedes[i]['canton_sede'];
        celda_distrito_sede.innerHTML = llenar_sedes[i]['distrito_sede'];
        celda_ubicacion_sede.innerHTML = llenar_sedes[i]['ubicacion_sede'];

        //se crean los componentes para actualizar/eliminar:

        let botonModificar = document.createElement('a');  //agrega el link para modficar
        botonModificar.classList.add('fas');  // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('fa-pencil-alt'); // clase de fontawsome para agregar el lapiz

        botonModificar.dataset._id = llenar_sedes[i]['_id'];  //para que el lapiz pueda obetner el id de la linea
        botonModificar.addEventListener('click', buscar_por_id); // funcion declarada mas abajo del controlador 


        let botonEliminar = document.createElement('a'); //agrega el link para eliminar
        botonEliminar.classList.add('fas'); // clase de fontawsome para agregar el basurero
        botonEliminar.classList.add('fa-trash-alt'); // clase de fontawsome para agregar el basurero

        botonEliminar.dataset._id = llenar_sedes[i]['_id']; //para que el basurero pueda obetner el id de la linea
        botonEliminar.addEventListener('click', remover_sede); //esta funcion se llama en el evento click del basurero (se encuentra mas abajo en este controlador)

        cConfiguracion.appendChild(botonModificar); // agregamos al html el lapiz
        cConfiguracion.appendChild(botonEliminar);  // agregamos al html el basurero

    }
};

function listarSede() {

    let listaSede = obtenerListaSede();
    console.log('entra a listar sedes');
    imprimirListaSede(listaSede);
};

function buscar_por_id() {  //funcion que se ejecuta en el servicio
    //binding -> permite que una funcion quede enlazada al componente que la llama
    let _id = this.dataset._id;
    let sede = obtener_sede_por_id(_id);
    let datosSede = [];
    let i = 0;

    datosSede[0] = sede['nombre_sede'];
    datosSede[1] = sede['provincia_sede'];
    datosSede[2] = sede['canton_sede'];
    datosSede[3] = sede['distrito_sede'];
    datosSede[4] = sede['ubicacion_sede'];

    console.log(sede);

    setSedeParaModificar(datosSede);

    cargar_pagina();
    function cargar_pagina() {
        window.location.replace('sede_registrar.html');
    }

};

function setSedeParaModificar(infoSede) {
    localStorage.setItem("sedeParaModificar", JSON.stringify(infoSede));
    console.log(JSON.parse(localStorage.getItem("sedeParaModificar")));
};


//funcion para eliminar de la base de datos  (Va al servicio_ListarSede.js)
function remover_sede() {
    let _id = this.dataset._id;
    swal({
        title: '¿Está seguro?',
        text: "La sede se eliminará permanentemente",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.value) {
            eliminar_sede(_id);
            llenar_tabla();
            swal(
                '¡Eliminado!',
                'La sede ha sido eliminada con éxito',
                'success'
            )
        }
    });
}