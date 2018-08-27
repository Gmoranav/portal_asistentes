'use strict';

let listaPeriodos;
listarPeriodo();

//window.addEventListener('load', listarPeriodo);

const inputFiltroPeriodo = document.querySelector('#txtNombrePeriodo');
const inputFiltroEstado = document.querySelector('#txtEstadoPeriodo');

//estadoBandera es para cuando se envia al controlador_RegistrarPeriodo no active la funcion de modificar (si va en false)
let estadoBandera = false;
setBanderaModificar(estadoBandera);

inputFiltroPeriodo.addEventListener('keyup', function(){
    imprimirListaPeriodo(listaPeriodos, inputFiltroPeriodo.value)
});

inputFiltroEstado.addEventListener('keyup', function(){
    imprimirListaEstado(listaPeriodos, inputFiltroEstado.value)
});

//INICIO FILTRO POR NOMBRE PERIODO
function imprimirListaPeriodo(plistaPeriodos, pFiltro) {

    let tbody = document.querySelector('#tblListarPeriodos');

    if(!pFiltro){
        pFiltro ='';
    }

    tbody.innerHTML = '';

    for (let i = 0; i < listaPeriodos.length; i++) {

        if(listaPeriodos[i]['estado']==1){

        if (plistaPeriodos[i]['nombre_periodo'].toLowerCase().includes(pFiltro.toLowerCase())) {

        let fila = tbody.insertRow();
        let cnombre_periodo = fila.insertCell();
        let cestado_periodo = fila.insertCell();
        let cConfiguracion = fila.insertCell();  // se crea esta variable para asignarle el boton

        cnombre_periodo.innerHTML = plistaPeriodos[i]['nombre_periodo'];
        cestado_periodo.innerHTML = plistaPeriodos[i]['estado_periodo'];

        //a partir de aqui se crean los componentes para modificar:
        let botonModificar = document.createElement('a');  //agrega el link para modficar
        botonModificar.classList.add('fas');  // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('fa-pencil-alt'); // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('tooltip');

        let tooltipModificar = document.createElement('span');
        tooltipModificar.textContent = "Editar";
        tooltipModificar.setAttribute('class', 'tooltiptext');
        botonModificar.appendChild(tooltipModificar);

        botonModificar.dataset._id = plistaPeriodos[i]['_id'];  //para que el lapiz pueda obetner el id de la linea
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
    }//fin ciclo for
    }// fin if - validacion de estado
}; //fin funcion imprimirListaPeriodo
//FIN FILTRO POR NOMBRE PERIODO


//INICIO FILTRO POR ESTADO PERIODO: 
function imprimirListaEstado(plistaPeriodos, pFiltro) {

    let tbody = document.querySelector('#tblListarPeriodos');

    if(!pFiltro){
        pFiltro ='';
    }

    tbody.innerHTML = '';

    for (let i = 0; i < listaPeriodos.length; i++) {

        if(listaPeriodos[i]['estado']==1){

        if (plistaPeriodos[i]['estado_periodo'].toLowerCase().includes(pFiltro.toLowerCase())) {

        let fila = tbody.insertRow();
        let cnombre_periodo = fila.insertCell();
        let cestado_periodo = fila.insertCell();
        let cConfiguracion = fila.insertCell();  // se crea esta variable para asignarle el boton

        cnombre_periodo.innerHTML = plistaPeriodos[i]['nombre_periodo'];
        cestado_periodo.innerHTML = plistaPeriodos[i]['estado_periodo'];

        //a partir de aqui se crean los componentes para modificar:
        let botonModificar = document.createElement('a');  //agrega el link para modficar
        botonModificar.classList.add('fas');  // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('fa-pencil-alt'); // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('tooltip');

        let tooltipModificar = document.createElement('span');
        tooltipModificar.textContent = "Editar";
        tooltipModificar.setAttribute('class', 'tooltiptext');
        botonModificar.appendChild(tooltipModificar);

        botonModificar.dataset._id = plistaPeriodos[i]['_id'];  //para que el lapiz pueda obetner el id de la linea
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
    }//fin ciclo for
    }// fin if - validacion de estado
}; //fin funcion imprimirListaPeriodo
// FIN FILTRO POR ESTADO PERIODO


//muestra la informacion como una lista en el html
function listarPeriodo() {

    listaPeriodos = obtenerListaPeriodos();
    imprimirListaPeriodo(listaPeriodos);
};


function buscar_por_id() {  //funcion que se ejecuta en el servicio controlador_RegistrarPeriodo.js
    //binding -> permite que una funcion quede enlazada al componente que la llama
    let _id = this.dataset._id;
    let periodo = obtener_periodo_por_id(_id);
    let datosPeriodo = [];
    
    estadoBandera = true;

    datosPeriodo[0] = periodo.nombre_periodo;
    datosPeriodo[1] = periodo.estado_periodo;
    datosPeriodo[2] = periodo._id;

    setPeriodoParaModificar(datosPeriodo);
    setBanderaModificar(estadoBandera);

    cargar_pagina();

    function cargar_pagina() {
        window.location.replace('periodo_registrar.html');
    }
};

function setBanderaModificar(estadoBandera){
    localStorage.setItem("estadoBanderaModificar", JSON.stringify(estadoBandera));
    console.log(JSON.parse(localStorage.getItem("estadoBanderaModificar"))); //para verificar el estatus en consola.
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
        confirmButtonText: 'Desactivar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.value) {
            desactivar_periodo(_id, estado);  //funcion en servicio_ListarPeriodo.js
            listarPeriodo();

           // setPeriodoParaModificar(_id);

            swal(
                '¡Eliminado!',
                'El periodo ha sido desactivado con éxito',
                'success'
            )
        }
    });
}