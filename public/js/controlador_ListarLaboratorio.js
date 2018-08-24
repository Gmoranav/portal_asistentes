'use strict';

window.addEventListener('load', imprimirListaLaboratorios);

const inputFlitroLaboratorio = document.querySelector('#txtNombreLaboratorio');
const inputFlitroEspacios = document.querySelector('#txtCantidadEspacios');


inputFlitroLaboratorio.addEventListener('keyup', function (){
    imprimirListaLaboratorios();
});

function imprimirListaLaboratorios() {

    let filtroLab = inputFlitroLaboratorio.value;
    let filtroCant = inputFlitroEspacios.value;

    let listaLaboratorios = obtenerListaLaboratorios();
    let tbody = document.querySelector('#tblLaboratorio');

    if (!filtroLab) {
        filtroLab = '';
    }
    if (!filtroCant) {
        filtroCant = '';
    }
    tbody.innerHTML = '';


    //Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
    for (let i = 0; i < listaLaboratorios.length; i++) {

        if (listaLaboratorios[i]['nombre_laboratorio'].toLowerCase().includes(filtroLab.toLowerCase()) ){

            let fila = tbody.insertRow();

            let cSede = fila.insertCell();
            let cNombreLaboratorio = fila.insertCell();
            let cCantEspacios = fila.insertCell();
            let cConfiguracion = fila.insertCell();  // se crea esta variable para asignarle el boton


            cSede.innerHTML = listaLaboratorios[i]['sede_laboratorio'];
            cNombreLaboratorio.innerHTML = listaLaboratorios[i]['nombre_laboratorio'];
            cCantEspacios.innerHTML = listaLaboratorios[i]['cantidad_espacios'];

            let botonModificar = document.createElement('a');
            botonModificar.classList.add('fas');
            botonModificar.classList.add('fa-pencil-alt');

            botonModificar.dataset._id = listaLaboratorios[i]['_id'];

            botonModificar.addEventListener('click', buscar_por_id);

            let botonEliminar = document.createElement('a');
            botonEliminar.classList.add('fas');
            botonEliminar.classList.add('fa-trash-alt');

            botonEliminar.dataset._id = listaLaboratorios[i]['_id'];

            botonEliminar.addEventListener('click', remover_laboratorio);





            cConfiguracion.appendChild(botonModificar);
            cConfiguracion.appendChild(botonEliminar);
        }

    }

};


function buscar_por_id () {

    let _id = this.dataset._id;

    let laboratorio = obtener_laboratorio_por_id(_id);

    /*inputNombreLaboratorio.value = laboratorio['sede_laboratorio'];    
    inputCantidadEspacios.value = laboratorio['nombre_laboratorio'];
    inputSede.value= laboratorio['nombre_laboratorio'];*/
}

function remover_laboratorio(){
    let _id = this.dataset._id;
    let estado = 0;
    swal({
        title: '¿Está seguro?',
        text: "El laboratorio se eliminará permanentemente",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.value) {
            eliminar_laboratorio(_id, estado);
            imprimirListaLaboratorios();
          swal(
            '¡Eliminado!',
            'El laboratorio ha sido eliminado con éxito',
            'success'
          )
        }
      });
}
