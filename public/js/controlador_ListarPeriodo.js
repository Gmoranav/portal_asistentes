
'use strict';
//quitar el load
window.addEventListener('load', listarPeriodo);

const inputFiltroPeriodo = document.querySelector('#txtNombrePeriodo');

inputFiltroPeriodo.addEventListener('keyup', function(){
    imprimirListaPeriodo(listarPeriodo, inputFiltroPeriodo.value)
});

function imprimirListaPeriodo(listaPeriodos, pFiltro) {

    let tbody = document.querySelector('#tblListarPeriodos');

    if(!pFiltro){
        pFiltro ='';
    }

    tbody.innerHTML = '';

    for (let i = 0; i < listaPeriodos.length; i++) {
        if(listaPeriodos[i]['estado']==1){
            if(listaPeriodos[i]['nombre_periodo'].toLowerCase().includes(pFiltro.toLowerCase())){
 
        let fila = tbody.insertRow();
        let cnombre_periodo = fila.insertCell();
        let cestado_periodo = fila.insertCell();
        let cConfiguracion = fila.insertCell();  // se crea esta variable para asignarle el boton

        cnombre_periodo.innerHTML = listaPeriodos[i]['nombre_periodo'];
        cestado_periodo.innerHTML = listaPeriodos[i]['estado_periodo'];

        //a partir de aqui se crean los componentes para modificar:
        let botonModificar = document.createElement('a');  //agrega el link para modficar
        botonModificar.classList.add('fas');  // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('fa-pencil-alt'); // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('tooltip');

        let tooltipModificar = document.createElement('span');
        tooltipModificar.textContent = "Editar";
        tooltipModificar.setAttribute('class', 'tooltiptext');
        botonModificar.appendChild(tooltipModificar);

        botonModificar.dataset._id = listaPeriodos[i]['_id'];  //para que el lapiz pueda obetner el id de la linea
        botonModificar.addEventListener('click', buscar_por_id); //esta funcion se llama en el evento click del lapiz (se encuentra mas abajo en este controlador)
      
        cConfiguracion.appendChild(botonModificar); // agrega el lapiz al html
        botonModificar.appendChild(tooltipModificar);

        cConfiguracion.appendChild(botonModificar); // agregamos al html el lapiz


        //a partir de aqui se crean los componentes para desactivar:
        let botonDesactivar = document.createElement('a'); //agrega el link para eliminar
        botonDesactivar.classList.add('fas');// clase de fontawsome para agregar el basurero
        botonDesactivar.classList.add('fa-ban'); // clase de fontawsome para agregar el basurero
        botonDesactivar.classList.add('tooltip');

        let tooltipDesactivar = document.createElement('span');
        tooltipDesactivar.textContent = "Desactivar";
        tooltipDesactivar.setAttribute('class', 'tooltiptext');
        botonDesactivar.appendChild(tooltipDesactivar);
        
        botonDesactivar.dataset._id = listaPeriodos[i]['_id']; //para que el basurero pueda obetner el id de la linea
        botonDesactivar.addEventListener('click', remover_periodo); //esta funcion se llama en el evento click del basurero (se encuentra mas abajo en este controlador)

        cConfiguracion.appendChild(botonDesactivar);  // agregamos al html el basurero
       
    }//fin if
    }//fin if
    }//fin ciclo for
}; //fin funcion imprimirListaPeriodo

//muestra la informacion como una lista en el html
function listarPeriodo() {

    let listaPeriodos = obtenerListaPeriodos();
    imprimirListaPeriodo(listaPeriodos);
};


function buscar_por_id() {  //funcion que se ejecuta en el servicio
    //binding -> permite que una funcion quede enlazada al componente que la llama
    let _id = this.dataset._id;
    let periodo = obtener_periodo_por_id(_id);
    let datosPeriodo = [];

    datosPeriodo[0] = periodo.nombre_periodo;
    datosPeriodo[1] = periodo.estado_periodo;
    datosPeriodo[2] = periodo._id;

    //console.log(periodo);
    console.log(datosPeriodo);
    
    setPeriodoParaModificar(datosPeriodo);

    cargar_pagina();

    function cargar_pagina() {
        window.location.replace('periodo_registrar.html');
    }
};

function setPeriodoParaModificar(p_datosPeriodo) {
    localStorage.setItem("periodoParaModificar", JSON.stringify(p_datosPeriodo));
    console.log(JSON.parse(localStorage.getItem("periodoParaModificar")));
};

//funcion para eliminar de la base de datos  (Va al servicio_ListarPeriodo.js)
function remover_periodo() {
    let _id = this.dataset._id;
    let estado = 0;

    swal({
        title: '¿Está seguro?',
        text: "El periodo se desactivará",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.value) {
            desactivar_periodo(_id, estado);  //funcion en servicio_ListarPeriodo.js
            listarPeriodo();

           // setPeriodoParaModificar(_id);

            swal(
                '¡Eliminado!',
                'El periodo ha sido eliminado con éxito',
                'success'
            )
        }
    });
}