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

        let botonModificar = document.createElement('a');
        botonModificar.classList.add('fas');
        botonModificar.classList.add('fa-pencil-alt');

        botonModificar.dataset._id = listaGrupos[i]['_id'];

        botonModificar.addEventListener('click', buscar_por_id);

        let botonEliminar = document.createElement('a');
        botonEliminar.classList.add('fas');
        botonEliminar.classList.add('fa-trash-alt');

        botonEliminar.dataset._id = listaGrupos[i]['_id'];

        botonEliminar.addEventListener('click', remover_grupo);





        cConfiguracion.appendChild(botonModificar);
        cConfiguracion.appendChild(botonEliminar);
        
        
    }

};

function buscar_por_id () {

    let _id = this.dataset._id;

    let laboratorio = obtener_laboratorio_por_id(_id);

    /*inputNombreLaboratorio.value = laboratorio['sede_laboratorio'];    
    inputCantidadEspacios.value = laboratorio['nombre_laboratorio'];
    inputSede.value= laboratorio['nombre_laboratorio'];*/
}

function remover_grupo(){
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
