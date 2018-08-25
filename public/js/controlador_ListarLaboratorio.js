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

            //se crean los componentes para modificar
            let botonModificar = document.createElement('a');
            botonModificar.classList.add('fas');
            botonModificar.classList.add('fa-pencil-alt');
            botonModificar.classList.add('tooltip');

            let tooltipModificar = document.createElement('span');
            tooltipModificar.textContent = "Editar";
            tooltipModificar.setAttribute('class', 'tooltiptext');
            botonModificar.appendChild(tooltipModificar);

            //se crean los componentes para desactivar
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
            botonDesactivar.addEventListener('click', desactivar_laboratorio);

            cConfiguracion.appendChild(botonModificar);
            cConfiguracion.appendChild(botonDesactivar);

        }

    }

};


function buscar_por_id () {

    let _id = this.dataset._id;

    let laboratorio = obtener_laboratorio_por_id(_id);
    let datosLaboratorio = [];
    let i = 0;

    console.log(laboratorio);
    //binding permite enlazar la función con el contexto que la llama
    //en este caso con el boton Modificar


    datosLaboratorio[0] = laboratorio['sede_laboratorio']; 
    datosLaboratorio[1] = laboratorio['nombre_laboratorio']; 
    datosLaboratorio[2] = laboratorio['cantidad_espacios']; 

    setLaboratorioParaModificar(datosLaboratorio);
    cargar_pagina_laboratorio();
}

function setLaboratorioParaModificar(infoLaboratorio) {
    localStorage.setItem("laboratorioParaModificar", JSON.stringify(infoLaboratorio));
    console.log(JSON.parse(localStorage.getItem("laboratorioParaModificar")));
};

function desactivar_laboratorio(){
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
