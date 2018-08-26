/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/
'use strict';

let listaSedes;
listarSede();

//window.addEventListener('load', listarSede);

const inputFiltroSede = document.querySelector('#txtNombreSede');
const inputFiltroProvincia = document.querySelector('#txtProvinciaS');
const inputFiltroCanton = document.querySelector('#txtCantonS');
const inputFiltroDistrito = document.querySelector('#txtDistritoS');
const inputFiltroUbicacion = document.querySelector('#txtUbicacionS');

//estadoBandera es para cuando se envia al controlador_RegistrarPeriodo no active la funcion de modificar (si va en false)
let estadoBandera = false;
setBanderaModificar(estadoBandera);

//(1)
inputFiltroSede.addEventListener('keyup', function(){
    imprimirListaSede(listaSedes, inputFiltroSede.value)
});
//(2)
inputFiltroProvincia.addEventListener('keyup', function(){
    imprimirListaProvincia(listaSedes, inputFiltroProvincia.value)
});
//(3)
inputFiltroCanton.addEventListener('keyup', function(){
    imprimirListaCanton(listaSedes, inputFiltroCanton.value)
});
//(4)
inputFiltroDistrito.addEventListener('keyup', function(){
    imprimirListaDistrito(listaSedes, inputFiltroDistrito.value)
});
//(5)
inputFiltroUbicacion.addEventListener('keyup', function(){
    imprimirListaUbicacion(listaSedes, inputFiltroUbicacion.value)
});

//INICIO FILTRO POR NOMBRE SEDE (1)
function imprimirListaSede(plistaSedes, pFiltro) {

    let tbody = document.querySelector('#tblListarSedes');

    if(!pFiltro){
        pFiltro ='';
    }

    tbody.innerHTML = '';

    for (let i = 0; i < listaSedes.length; i++) {

        if(listaSedes[i]['estado']==1){

        if (plistaSedes[i]['nombre_sede'].toLowerCase().includes(pFiltro.toLowerCase())) {

        let fila = tbody.insertRow();
        let cnombre_sede = fila.insertCell();
        let cprovincia_sede = fila.insertCell();
        let canton_sede = fila.insertCell();
        let cdistrito_sede = fila.insertCell();
        let cubicacion_sede = fila.insertCell();
        let cConfiguracion = fila.insertCell();  // se crea esta variable para asignarle el boton

        cnombre_sede.innerHTML = plistaSedes[i]['nombre_sede'];
        cprovincia_sede.innerHTML = plistaSedes[i]['provincia_sede'];
        canton_sede.innerHTML = plistaSedes[i]['canton_sede'];
        cdistrito_sede.innerHTML = plistaSedes[i]['distrito_sede'];
        cubicacion_sede.innerHTML = plistaSedes[i]['ubicacion_sede'];

        //a partir de aqui se crean los componentes para modificar:
        let botonModificar = document.createElement('a');  //agrega el link para modficar
        botonModificar.classList.add('fas');  // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('fa-pencil-alt'); // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('tooltip');

        let tooltipModificar = document.createElement('span');
        tooltipModificar.textContent = "Editar";
        tooltipModificar.setAttribute('class', 'tooltiptext');
        botonModificar.appendChild(tooltipModificar);

        botonModificar.dataset._id = plistaSedes[i]['_id'];  //para que el lapiz pueda obetner el id de la linea
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
        
        botonDesactivar.dataset._id = listaSedes[i]['_id']; //para que el basurero pueda obetner el id de la linea
        botonDesactivar.addEventListener('click', remover_sede); //esta funcion se llama en el evento click del basurero (se encuentra mas abajo en este controlador)

        cConfiguracion.appendChild(botonDesactivar);  // agregamos al html el basurero
       
    }//fin if
    }//fin ciclo for
    }// fin if - validacion de estado
}; //fin funcion imprimirListaPeriodo
//FIN FILTRO POR NOMBRE SEDE (1)



//INICIO FILTRO POR NOMBRE PROVINCIA (2)
function imprimirListaProvincia(plistaSedes, pFiltro) {

    let tbody = document.querySelector('#tblListarSedes');

    if(!pFiltro){
        pFiltro ='';
    }

    tbody.innerHTML = '';

    for (let i = 0; i < listaSedes.length; i++) {

        if(listaSedes[i]['estado']==1){

        if (plistaSedes[i]['provincia_sede'].toLowerCase().includes(pFiltro.toLowerCase())) {

        let fila = tbody.insertRow();
        let cnombre_sede = fila.insertCell();
        let cprovincia_sede = fila.insertCell();
        let canton_sede = fila.insertCell();
        let cdistrito_sede = fila.insertCell();
        let cubicacion_sede = fila.insertCell();
        let cConfiguracion = fila.insertCell();  // se crea esta variable para asignarle el boton

        cnombre_sede.innerHTML = plistaSedes[i]['nombre_sede'];
        cprovincia_sede.innerHTML = plistaSedes[i]['provincia_sede'];
        canton_sede.innerHTML = plistaSedes[i]['canton_sede'];
        cdistrito_sede.innerHTML = plistaSedes[i]['distrito_sede'];
        cubicacion_sede.innerHTML = plistaSedes[i]['ubicacion_sede'];

        //a partir de aqui se crean los componentes para modificar:
        let botonModificar = document.createElement('a');  //agrega el link para modficar
        botonModificar.classList.add('fas');  // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('fa-pencil-alt'); // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('tooltip');

        let tooltipModificar = document.createElement('span');
        tooltipModificar.textContent = "Editar";
        tooltipModificar.setAttribute('class', 'tooltiptext');
        botonModificar.appendChild(tooltipModificar);

        botonModificar.dataset._id = plistaSedes[i]['_id'];  //para que el lapiz pueda obetner el id de la linea
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
        
        botonDesactivar.dataset._id = listaSedes[i]['_id']; //para que el basurero pueda obetner el id de la linea
        botonDesactivar.addEventListener('click', remover_sede); //esta funcion se llama en el evento click del basurero (se encuentra mas abajo en este controlador)

        cConfiguracion.appendChild(botonDesactivar);  // agregamos al html el basurero
       
    }//fin if
    }//fin ciclo for
    }// fin if - validacion de estado
}; //fin funcion imprimirListaPeriodo
// *******  FIN FILTRO POR NOMBRE PROVINCIA (2) *******  



//INICIO FILTRO POR NOMBRE CANTON (3)
function imprimirListaCanton(plistaSedes, pFiltro) {

    let tbody = document.querySelector('#tblListarSedes');

    if(!pFiltro){
        pFiltro ='';
    }

    tbody.innerHTML = '';

    for (let i = 0; i < listaSedes.length; i++) {

        if(listaSedes[i]['estado']==1){

        if (plistaSedes[i]['canton_sede'].toLowerCase().includes(pFiltro.toLowerCase())) {

        let fila = tbody.insertRow();
        let cnombre_sede = fila.insertCell();
        let cprovincia_sede = fila.insertCell();
        let canton_sede = fila.insertCell();
        let cdistrito_sede = fila.insertCell();
        let cubicacion_sede = fila.insertCell();
        let cConfiguracion = fila.insertCell();  // se crea esta variable para asignarle el boton

        cnombre_sede.innerHTML = plistaSedes[i]['nombre_sede'];
        cprovincia_sede.innerHTML = plistaSedes[i]['provincia_sede'];
        canton_sede.innerHTML = plistaSedes[i]['canton_sede'];
        cdistrito_sede.innerHTML = plistaSedes[i]['distrito_sede'];
        cubicacion_sede.innerHTML = plistaSedes[i]['ubicacion_sede'];

        //a partir de aqui se crean los componentes para modificar:
        let botonModificar = document.createElement('a');  //agrega el link para modficar
        botonModificar.classList.add('fas');  // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('fa-pencil-alt'); // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('tooltip');

        let tooltipModificar = document.createElement('span');
        tooltipModificar.textContent = "Editar";
        tooltipModificar.setAttribute('class', 'tooltiptext');
        botonModificar.appendChild(tooltipModificar);

        botonModificar.dataset._id = plistaSedes[i]['_id'];  //para que el lapiz pueda obetner el id de la linea
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
        
        botonDesactivar.dataset._id = listaSedes[i]['_id']; //para que el basurero pueda obetner el id de la linea
        botonDesactivar.addEventListener('click', remover_sede); //esta funcion se llama en el evento click del basurero (se encuentra mas abajo en este controlador)

        cConfiguracion.appendChild(botonDesactivar);  // agregamos al html el basurero
       
    }//fin if
    }//fin ciclo for
    }// fin if - validacion de estado
}; //fin funcion imprimirListaPeriodo
//*******  FIN FILTRO POR NOMBRE CANTON (3) *******  



//INICIO FILTRO POR NOMBRE DISTRITO (4)
function imprimirListaDistrito(plistaSedes, pFiltro) {

    let tbody = document.querySelector('#tblListarSedes');

    if(!pFiltro){
        pFiltro ='';
    }

    tbody.innerHTML = '';

    for (let i = 0; i < listaSedes.length; i++) {

        if(listaSedes[i]['estado']==1){

        if (plistaSedes[i]['distrito_sede'].toLowerCase().includes(pFiltro.toLowerCase())) {

        let fila = tbody.insertRow();
        let cnombre_sede = fila.insertCell();
        let cprovincia_sede = fila.insertCell();
        let canton_sede = fila.insertCell();
        let cdistrito_sede = fila.insertCell();
        let cubicacion_sede = fila.insertCell();
        let cConfiguracion = fila.insertCell();  // se crea esta variable para asignarle el boton

        cnombre_sede.innerHTML = plistaSedes[i]['nombre_sede'];
        cprovincia_sede.innerHTML = plistaSedes[i]['provincia_sede'];
        canton_sede.innerHTML = plistaSedes[i]['canton_sede'];
        cdistrito_sede.innerHTML = plistaSedes[i]['distrito_sede'];
        cubicacion_sede.innerHTML = plistaSedes[i]['ubicacion_sede'];

        //a partir de aqui se crean los componentes para modificar:
        let botonModificar = document.createElement('a');  //agrega el link para modficar
        botonModificar.classList.add('fas');  // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('fa-pencil-alt'); // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('tooltip');

        let tooltipModificar = document.createElement('span');
        tooltipModificar.textContent = "Editar";
        tooltipModificar.setAttribute('class', 'tooltiptext');
        botonModificar.appendChild(tooltipModificar);

        botonModificar.dataset._id = plistaSedes[i]['_id'];  //para que el lapiz pueda obetner el id de la linea
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
        
        botonDesactivar.dataset._id = listaSedes[i]['_id']; //para que el basurero pueda obetner el id de la linea
        botonDesactivar.addEventListener('click', remover_sede); //esta funcion se llama en el evento click del basurero (se encuentra mas abajo en este controlador)

        cConfiguracion.appendChild(botonDesactivar);  // agregamos al html el basurero
       
    }//fin if
    }//fin ciclo for
    }// fin if - validacion de estado
}; //fin funcion imprimirListaPeriodo
//*******  FIN FILTRO POR NOMBRE DISTRITO (4) *******  



//INICIO FILTRO POR NOMBRE UBICACION (5)
function imprimirListaUbicacion(plistaSedes, pFiltro) {

    let tbody = document.querySelector('#tblListarSedes');

    if(!pFiltro){
        pFiltro ='';
    }

    tbody.innerHTML = '';

    for (let i = 0; i < listaSedes.length; i++) {

        if(listaSedes[i]['estado']==1){

        if (plistaSedes[i]['ubicacion_sede'].toLowerCase().includes(pFiltro.toLowerCase())) {

        let fila = tbody.insertRow();
        let cnombre_sede = fila.insertCell();
        let cprovincia_sede = fila.insertCell();
        let canton_sede = fila.insertCell();
        let cdistrito_sede = fila.insertCell();
        let cubicacion_sede = fila.insertCell();
        let cConfiguracion = fila.insertCell();  // se crea esta variable para asignarle el boton

        cnombre_sede.innerHTML = plistaSedes[i]['nombre_sede'];
        cprovincia_sede.innerHTML = plistaSedes[i]['provincia_sede'];
        canton_sede.innerHTML = plistaSedes[i]['canton_sede'];
        cdistrito_sede.innerHTML = plistaSedes[i]['distrito_sede'];
        cubicacion_sede.innerHTML = plistaSedes[i]['ubicacion_sede'];

        //a partir de aqui se crean los componentes para modificar:
        let botonModificar = document.createElement('a');  //agrega el link para modficar
        botonModificar.classList.add('fas');  // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('fa-pencil-alt'); // clase de fontawsome para agregar el lapiz
        botonModificar.classList.add('tooltip');

        let tooltipModificar = document.createElement('span');
        tooltipModificar.textContent = "Editar";
        tooltipModificar.setAttribute('class', 'tooltiptext');
        botonModificar.appendChild(tooltipModificar);

        botonModificar.dataset._id = plistaSedes[i]['_id'];  //para que el lapiz pueda obetner el id de la linea
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
        
        botonDesactivar.dataset._id = listaSedes[i]['_id']; //para que el basurero pueda obetner el id de la linea
        botonDesactivar.addEventListener('click', remover_sede); //esta funcion se llama en el evento click del basurero (se encuentra mas abajo en este controlador)

        cConfiguracion.appendChild(botonDesactivar);  // agregamos al html el basurero
       
    }//fin if
    }//fin ciclo for
    }// fin if - validacion de estado
}; //fin funcion imprimirListaPeriodo


//*******  FIN FILTRO POR NOMBRE UBICACION (5) *******  



//muestra la informacion como una lista en el html
function listarSede() {

    listaSedes = obtenerListaSedes();
    imprimirListaSede(listaSedes);
};

function buscar_por_id() {  //funcion que se ejecuta en el servicio
    //binding -> permite que una funcion quede enlazada al componente que la llama
    let _id = this.dataset._id;
    let sede = obtener_sede_por_id(_id);
    let datosSede = [];

    estadoBandera = true;

    datosSede[0] = sede.nombre_sede; 
    datosSede[1] = sede.provincia_sede; 
    datosSede[2] = sede.canton_sede; 
    datosSede[3] = sede.distrito_sede; 
    datosSede[4] = sede.ubicacion_sede; 
    datosSede[5] = sede._id;

    setSedeParaModificar(datosSede);
    setBanderaModificar(estadoBandera);

    cargar_pagina();
    function cargar_pagina() {
        window.location.replace('sede_registrar.html');
    }

};

function setBanderaModificar(estadoBandera){
    localStorage.setItem("estadoBanderaModificar", JSON.stringify(estadoBandera));
    console.log(JSON.parse(localStorage.getItem("estadoBanderaModificar"))); //para verificar el estatus en consola.
};

function setSedeParaModificar(infoSede) {
    localStorage.setItem("sedeParaModificar", JSON.stringify(infoSede));
    console.log(JSON.parse(localStorage.getItem("sedeParaModificar")));
};

//funcion para eliminar de la base de datos  (Va al servicio_ListarSede.js)
function remover_sede() {
    let _id = this.dataset._id;
    let estado = 0;

    swal({
        title: '¿Está seguro?',
        text: "La sede se desactivará",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Desactivar'
    }).then((result) => {
        if (result.value) {
            desactivar_sede(_id, estado);
            listarSede();
            swal(
                '¡Eliminado!',
                'La sede ha sido desactivada con éxito',
                'success'
            )
        }
    });
}