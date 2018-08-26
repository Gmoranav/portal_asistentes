'use strict';

//Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
window.addEventListener('load', imprimirListaGrupos);

const inputFlitroLaboratorio = document.querySelector('#txtNombreLaboratorio');
const inputFlitroEspacios = document.querySelector('#txtCantidadEstudiantes');
const inputFlitroNombre = document.querySelector('#txtNombre');

inputFlitroLaboratorio.addEventListener('keyup', function (){
    imprimirListaGrupos();
});

inputFlitroEspacios.addEventListener('keyup', function (){
    imprimirListaGruposFiltroEstudiantes();
});

inputFlitroNombre.addEventListener('keyup', function (){
    imprimirListaGruposFiltroNombre();
});



function imprimirListaGrupos(){

    let filtroGrupo = inputFlitroLaboratorio.value;
    
    let listaGrupos = obtenerListaGrupos();
    let tbody = document.querySelector('#tblgrupos');

    if (!filtroGrupo) {
        filtroGrupo = '';
    }

    tbody.innerHTML = '';


    //Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
    for(let i = 0; i < listaGrupos.length; i++){

        if (listaGrupos[i]['laboratorio'].toLowerCase().includes(filtroGrupo.toLowerCase()) ){
            let fila = tbody.insertRow();
            
            let cSede = fila.insertCell();
            let cCarrera = fila.insertCell();
            let cCurso = fila.insertCell();
            let cLaboratorio = fila.insertCell();
            let cEstudiantes = fila.insertCell();
            let cNombre = fila.insertCell();
            let cConfiguracion = fila.insertCell();

            
            cSede.innerHTML = listaGrupos[i]['sedeGrupo'];
            cCarrera.innerHTML = listaGrupos[i]['carreraGrupo'];
            cCurso.innerHTML = listaGrupos[i]['cursoGrupo'];
            cLaboratorio.innerHTML = listaGrupos[i]['laboratorio'];
            cEstudiantes.innerHTML = listaGrupos[i]['cantidad_de_estudiantes'];
            cNombre.innerHTML = listaGrupos[i]['nombre'];

            //se crean los componentes para modificar
            let botonModificar = document.createElement('a');
            botonModificar.classList.add('fas');
            botonModificar.classList.add('fa-pencil-alt');
            botonModificar.classList.add('tooltip');

            let tooltipModificar = document.createElement('span');
            tooltipModificar.textContent = "Editar";
            tooltipModificar.setAttribute('class', 'tooltiptext');
            botonModificar.appendChild(tooltipModificar);

            let botonDesactivar = document.createElement('a');
            botonDesactivar.classList.add('fas');
            botonDesactivar.classList.add('fa-ban');
            botonDesactivar.classList.add('tooltip');

            let tooltipDesactivar = document.createElement('span');
            tooltipDesactivar.textContent = "Desactivar";
            tooltipDesactivar.setAttribute('class', 'tooltiptext');
            botonDesactivar.appendChild(tooltipDesactivar);

            //dataset es una 
            //propiedad que permite definir atributos personalizados
            //para un elemento de html
            botonModificar.dataset._id = listaGrupos[i]['_id'];
            botonDesactivar.dataset._id = listaGrupos[i]['_id'];


            //un eventListener queda enlazado a la función que llama
            botonModificar.addEventListener('click', buscar_por_id);
            botonDesactivar.addEventListener('click', desactivar_grupo);




            cConfiguracion.appendChild(botonModificar);
            cConfiguracion.appendChild(botonDesactivar);
        
        }
    }

};

function imprimirListaGruposFiltroEstudiantes(){

    let filtroGrupo1 = inputFlitroEspacios.value;
    
    let listaGrupos = obtenerListaGrupos();
    let tbody = document.querySelector('#tblgrupos');

    if (!filtroGrupo1) {
        filtroGrupo1 = '';
    }

    tbody.innerHTML = '';


    //Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
    for(let i = 0; i < listaGrupos.length; i++){

        if (listaGrupos[i]['cantidad_de_estudiantes'].includes(filtroGrupo1) ){
            let fila = tbody.insertRow();
            
            let cSede = fila.insertCell();
            let cCarrera = fila.insertCell();
            let cCurso = fila.insertCell();
            let cLaboratorio = fila.insertCell();
            let cEstudiantes = fila.insertCell();
            let cNombre = fila.insertCell();
            let cConfiguracion = fila.insertCell();

            
            cSede.innerHTML = listaGrupos[i]['sedeGrupo'];
            cCarrera.innerHTML = listaGrupos[i]['carreraGrupo'];
            cCurso.innerHTML = listaGrupos[i]['cursoGrupo'];
            cLaboratorio.innerHTML = listaGrupos[i]['laboratorio'];
            cEstudiantes.innerHTML = listaGrupos[i]['cantidad_de_estudiantes'];
            cNombre.innerHTML = listaGrupos[i]['nombre'];

            //se crean los componentes para modificar
            let botonModificar = document.createElement('a');
            botonModificar.classList.add('fas');
            botonModificar.classList.add('fa-pencil-alt');
            botonModificar.classList.add('tooltip');

            let tooltipModificar = document.createElement('span');
            tooltipModificar.textContent = "Editar";
            tooltipModificar.setAttribute('class', 'tooltiptext');
            botonModificar.appendChild(tooltipModificar);

            let botonDesactivar = document.createElement('a');
            botonDesactivar.classList.add('fas');
            botonDesactivar.classList.add('fa-ban');
            botonDesactivar.classList.add('tooltip');

            let tooltipDesactivar = document.createElement('span');
            tooltipDesactivar.textContent = "Desactivar";
            tooltipDesactivar.setAttribute('class', 'tooltiptext');
            botonDesactivar.appendChild(tooltipDesactivar);

            //dataset es una 
            //propiedad que permite definir atributos personalizados
            //para un elemento de html
            botonModificar.dataset._id = listaGrupos[i]['_id'];
            botonDesactivar.dataset._id = listaGrupos[i]['_id'];


            //un eventListener queda enlazado a la función que llama
            botonModificar.addEventListener('click', buscar_por_id);
            botonDesactivar.addEventListener('click', desactivar_grupo);




            cConfiguracion.appendChild(botonModificar);
            cConfiguracion.appendChild(botonDesactivar);
        
        }
    }

};

function imprimirListaGruposFiltroNombre(){

    let filtroGrupo2 = inputFlitroNombre.value;
    
    let listaGrupos = obtenerListaGrupos();
    let tbody = document.querySelector('#tblgrupos');

    if (!filtroGrupo2) {
        filtroGrupo2 = '';
    }

    tbody.innerHTML = '';


    //Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
    for(let i = 0; i < listaGrupos.length; i++){

        if (listaGrupos[i]['nombre'].toLowerCase().includes(filtroGrupo2.toLowerCase()) ){
            let fila = tbody.insertRow();
            
            let cSede = fila.insertCell();
            let cCarrera = fila.insertCell();
            let cCurso = fila.insertCell();
            let cLaboratorio = fila.insertCell();
            let cEstudiantes = fila.insertCell();
            let cNombre = fila.insertCell();
            let cConfiguracion = fila.insertCell();

            
            cSede.innerHTML = listaGrupos[i]['sedeGrupo'];
            cCarrera.innerHTML = listaGrupos[i]['carreraGrupo'];
            cCurso.innerHTML = listaGrupos[i]['cursoGrupo'];
            cLaboratorio.innerHTML = listaGrupos[i]['laboratorio'];
            cEstudiantes.innerHTML = listaGrupos[i]['cantidad_de_estudiantes'];
            cNombre.innerHTML = listaGrupos[i]['nombre'];

            //se crean los componentes para modificar
            let botonModificar = document.createElement('a');
            botonModificar.classList.add('fas');
            botonModificar.classList.add('fa-pencil-alt');
            botonModificar.classList.add('tooltip');

            let tooltipModificar = document.createElement('span');
            tooltipModificar.textContent = "Editar";
            tooltipModificar.setAttribute('class', 'tooltiptext');
            botonModificar.appendChild(tooltipModificar);

            let botonDesactivar = document.createElement('a');
            botonDesactivar.classList.add('fas');
            botonDesactivar.classList.add('fa-ban');
            botonDesactivar.classList.add('tooltip');

            let tooltipDesactivar = document.createElement('span');
            tooltipDesactivar.textContent = "Desactivar";
            tooltipDesactivar.setAttribute('class', 'tooltiptext');
            botonDesactivar.appendChild(tooltipDesactivar);

            //dataset es una 
            //propiedad que permite definir atributos personalizados
            //para un elemento de html
            botonModificar.dataset._id = listaGrupos[i]['_id'];
            botonDesactivar.dataset._id = listaGrupos[i]['_id'];


            //un eventListener queda enlazado a la función que llama
            botonModificar.addEventListener('click', buscar_por_id);
            botonDesactivar.addEventListener('click', desactivar_grupo);




            cConfiguracion.appendChild(botonModificar);
            cConfiguracion.appendChild(botonDesactivar);
        
        }
    }

};

function buscar_por_id () {

    let _id = this.dataset._id;

    let grupo = obtener_grupo_por_id(_id);
    let datosGrupo = [];
    let i = 0;

    console.log(grupo);
    //binding permite enlazar la función con el contexto que la llama
    //en este caso con el boton Modificar


    datosGrupo[0] = grupo['sedeGrupo']; 
    datosGrupo[1] = grupo['carreraGrupo']; 
    datosGrupo[2] = grupo['cursoGrupo']; 
    datosGrupo[3] = grupo['laboratorio']; 
    datosGrupo[4] = grupo['cantidad_de_estudiantes']; 
    datosGrupo[5] = grupo['nombre'];
    datosGrupo[6] = grupo['_id'];
    datosGrupo[7] = grupo['periodoGrupo'];
    datosGrupo[8] = grupo['horario']; 

    setGrupoParaModificar(datosGrupo);
    cargar_pagina_grupo();
}

function setGrupoParaModificar(infoGrupo) {
    localStorage.setItem("grupoParaModificar", JSON.stringify(infoGrupo));
    console.log(JSON.parse(localStorage.getItem("grupoParaModificar")));
};

function desactivar_grupo(){
    let _id = this.dataset._id;
    let estado = 0;
    swal({
        title: '¿Está seguro?',
        text: "El grupo se desactivará",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Desactivar'
      }).then((result) => {
        if (result.value) {
            desactivar_grupo(_id, estado);
            imprimirListaGrupos();
          swal(
            '¡Desactivado!',
            'El grupo ha sido desactivado con éxito',
            'success'
          )
        }
      });
}
