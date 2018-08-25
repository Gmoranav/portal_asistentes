'use strict';

//Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
window.addEventListener('load', imprimirListaGrupos);

function imprimirListaGrupos(){
    
    let listaGrupos = obtenerListaGrupos();
    let tbody = document.querySelector('#tblgrupos');//Cambiar Examples por lo que se vaya a listar, usar nombre en plural
                                                            //(ejemplo: cursos, sedes...)
    /*if(!pFiltro){
        pFiltro = '';
    }*/
    tbody.innerHTML = '';


    //Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
    for(let i = 0; i < listaGrupos.length; i++){

        /*los nombres que están entre corchetes y comillas simples
        deben ser los mismos que están en la función registrarExamples del archivo servicio.
        Están en la sección data{}.  NO los que vienen por parámetro sino lo que se declaran en
        la función.  Se deben colocar en el mismo orden*/
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
        botonModificar.dataset._id = listaLaboratorios[i]['_id'];
        botonDesactivar.dataset._id = listaLaboratorios[i]['_id'];


        //un eventListener queda enlazado a la función que llama
        botonModificar.addEventListener('click', buscar_por_id);
        botonDesactivar.addEventListener('click', desactivar_grupo);




        cConfiguracion.appendChild(botonModificar);
        cConfiguracion.appendChild(botonEliminar);
        
        
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

    setGrupoParaModificar(datosGrupo);
    cargar_pagina_grupo();
}

function setGrupoParaModificar(infoGrupo) {
    localStorage.setItem("grupoParaModificar", JSON.stringify(infoGrupo));
    console.log(JSON.parse(localStorage.getItem("grupoParaModificar")));
};

function desactivar_grupo(){
    let _id = this.dataset._id;
    swal({
        title: '¿Está seguro?',
        text: "El grupo se eliminará permanentemente",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.value) {
            eliminar_grupo(_id);
            imprimirListaGrupos();
          swal(
            '¡Eliminado!',
            'El grupo ha sido eliminado con éxito',
            'success'
          )
        }
      });
}
