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

        let cConfiguracion = fila.insertCell();  // se crea esta variable para asignarle el boton

        celda_nombre_sede.innerHTML = llenar_sedes[i]['nombre_sede'];
        celda_provincia_sede.innerHTML = llenar_sedes[i]['provincia_sede'];
        celda_canton_sede.innerHTML = llenar_sedes[i]['canton_sede'];
        celda_distrito_sede.innerHTML = llenar_sedes[i]['distrito_sede'];
        celda_ubicacion_sede.innerHTML = llenar_sedes[i]['ubicacion_sede'];

        //se crean los componentes para actualizar:

        let botonModificar = document.createElement('a');  //agrega el link para modficar
        botonModificar.classList.add('fas');  // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('fa-pencil-alt'); // clase de fontawsome para agregar el lapiz

        botonModificar.dataset._id = llenar_sedes[i]['_id'];  //para que el lapiz pueda obetner el id de la linea

        botonModificar.addEventListener('click', buscar_por_id); // funcion declarada mas abajo del controlador 

        cConfiguracion.appendChild(botonModificar); // agrega el lapiz al html

    }
};


function buscar_por_id(){  //funcion que se ejecuta en el servicio
    //binding -> permite que una funcion quede enlazada al componente que la llama
    let _id = this.dataset._id;
    let sede = obtener_sede_por_id(_id);

  /*  input_NombreP.value = periodo['input_NombreP'];
    input_EstadoP.value = periodo['estado_periodo'];   */
 
    
    console.log(sede);



};

