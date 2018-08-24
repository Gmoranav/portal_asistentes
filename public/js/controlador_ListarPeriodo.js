/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';

window.addEventListener('load', listarPeriodo);

function imprimirListaPeriodo(plistaPeriodos) {

    let tbody = document.querySelector('#tblListarPeriodos');

    tbody.innerHTML = '';

    for (let i = 0; i < plistaPeriodos.length; i++) {

        let fila = tbody.insertRow();
        let cnombre_periodo = fila.insertCell();
        let cestado_periodo = fila.insertCell();

        let cConfiguracion = fila.insertCell();  // se crea esta variable para asignarle el boton

        cnombre_periodo.innerHTML = plistaPeriodos[i]['nombre_periodo'];
        cestado_periodo.innerHTML = plistaPeriodos[i]['estado_periodo'];

        //se crean los componentes para actualizar:

        let botonModificar = document.createElement('a');  //agrega el link para modficar
        botonModificar.classList.add('fas');  // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('fa-pencil-alt'); // clase de fontawsome para agregar el lapiz

        botonModificar.dataset._id = plistaPeriodos[i]['_id'];  //para que el lapiz pueda obetner el id de la linea
        botonModificar.addEventListener('click', buscar_por_id); //esta funcion se llama en el evento click del lapiz (se encuentra mas abajo en este controlador)
        cConfiguracion.appendChild(botonModificar); // agrega el lapiz al html


        let botonEliminar = document.createElement('a'); //agrega el link para eliminar
        botonEliminar.classList.add('fas'); // clase de fontawsome para agregar el basurero
        botonEliminar.classList.add('fa-trash-alt'); // clase de fontawsome para agregar el basurero

        botonEliminar.dataset._id = plistaPeriodos[i]['_id']; //para que el basurero pueda obetner el id de la linea
        botonEliminar.addEventListener('click', remover_periodo); //esta funcion se llama en el evento click del basurero (se encuentra mas abajo en este controlador)

        cConfiguracion.appendChild(botonModificar); // agregamos al html el lapiz
        cConfiguracion.appendChild(botonEliminar);  // agregamos al html el basurero
    }
};

//muestra la informacion como una lista en el html
function listarPeriodo() {

    let listaPeriodos = obtenerListaPeriodos();
    console.log('entra a listar periodos');
    imprimirListaPeriodo(listaPeriodos);
};


function buscar_por_id() {  //funcion que se ejecuta en el servicio
    //binding -> permite que una funcion quede enlazada al componente que la llama
    let _id = this.dataset._id;
    let periodo = obtener_periodo_por_id(_id);
    let datosPeriodo = [];
    let i = 0;

    datosPeriodo[0] = periodo['nombre_periodo'];
    datosPeriodo[1] = periodo['estado_periodo'];

    console.log(periodo);

    setPeriodoParaModificar(datosPeriodo);

    cargar_pagina();

    function cargar_pagina() {
        window.location.replace('periodo_registrar.html');
    }
};

function setPeriodoParaModificar(infoPeriodo) {
    localStorage.setItem("periodoParaModificar", JSON.stringify(infoPeriodo));
    console.log(JSON.parse(localStorage.getItem("periodoParaModificar")));
};

//funcion para eliminar de la base de datos  (Va al servicio_ListarPeriodo.js)
function remover_periodo() {
    let _id = this.dataset._id;
    swal({
        title: '¿Está seguro?',
        text: "El periodo se eliminará permanentemente",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.value) {
            eliminar_periodo(_id);
            listarPeriodo();
            swal(
                '¡Eliminado!',
                'El periodo ha sido eliminado con éxito',
                'success'
            )
        }
    });
}