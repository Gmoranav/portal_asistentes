/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';

window.addEventListener('load', listarSolicitudes)

function imprimirListaSolicitudes(/*pFiltro*/plistaSolicitudes){

   // let plistaSolicitudes = obtenerListaSolicitudes();

    let tbody = document.querySelector('#tblListarSolicitudes')//Cambiar Examples por lo que se vaya a listar, usar nombre en plural
                                                            //(ejemplo: cursos, sedes...)

    /*if(!plistaSolicitudes){
        plistaSolicitudes = '';
    }*/

    tbody.innerHTML = '';

    //Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
    for(let i = 0; i < plistaSolicitudes.length; i++){

        /*los nombres que están entre corchetes y comillas simples
        deben ser los mismos que están en la función registrarExamples del archivo servicio.
        Están en la sección data{}.  NO los que vienen por parámetro sino lo que se declaran en
        la función.  Se deben colocar en el mismo orden*/




        //if(let i = 0; i < plistaSolicitudes.length; i++){
            let fila = tbody.insertRow();

            let sPrimerNombre = plistaSolicitudes[i]['primer_nombre'];
            let sSegundoNombre = plistaSolicitudes[i]['segundo_nombre'];
            let sPrimerApellido = plistaSolicitudes[i]['primer_apellido'];
            let sSegundoApellido = plistaSolicitudes[i]['segundo_apellido'];

            let espacio = ' ';

            let snombreCompleto = fila.insertCell();
            let sCurso = fila.insertCell();
            let sPeriodo = fila.insertCell();
            let sGrupo = fila.insertCell();
            let nCantidadAlumnos = fila.insertCell();
            let cConfiguracion = fila.insertCell();
            let cConfiguracion2 = fila.insertCell();
            /*let shorario = fila.insertCell();*/

            snombreCompleto.innerHTML = sPrimerNombre.concat(espacio,
                sSegundoNombre, espacio, sPrimerApellido, espacio, sSegundoApellido);

            sCurso.innerHTML = plistaSolicitudes[i]['curso'];
            sPeriodo.innerHTML = plistaSolicitudes[i]['periodo'];
            sGrupo.innerHTML = plistaSolicitudes[i]['grupo'];
            nCantidadAlumnos.innerHTML = plistaSolicitudes[i]['cantidad_alumnos'];
            /*shorario.innerHTML = plistaSolicitudes[i]['horario'];*/

            /*se crean los componentes para actualizar*/
            let botonModificar = document.createElement('a');
            botonModificar.classList.add('fas');
            botonModificar.classList.add('fa-pen');

            botonModificar.dataset._id = plistaSolicitudes[i]['_id'];

            botonModificar.addEventListener('click', buscarId);

            cConfiguracion.appendChild(botonModificar);
            //let botonModificar = library.add(faUserAstronaut);
            /*let botonDetalleSolicitud = document.createElement('a');
            botonDetalleSolicitud.classList.add('fas');
            botonDetalleSolicitud.classList.add('fa-external-link-square-alt');

            botonDetalleSolicitud.dataset._id = plistaSolicitudes[i]['_id'];

            botonDetalleSolicitud.addEventListener('click', buscar_por_id)

            cConfiguracion2.appendChild(botonDetalleSolicitud);*/
        //}

    }

};

//dejar las palabras "lista" y "listar" y cambiar Examples por lo que se esté listando
// por ejemplo: cursos, carreras, sedes.  Debe estar en plural


function listarSolicitudes(){

        let listaSolicitudes = obtenerListaSolicitudes();
        imprimirListaSolicitudes(listaSolicitudes);
}




//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas queda igual
function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;





    //Validación del nombre completo
    if(inputPrimerNombre.value == '' || (regexSoloLetras.test(inputPrimerNombre.value)==false) ){
        inputPrimerNombre.classList.add('input_error');
        bError = true;
    }else{
        inputPrimerNombre.classList.remove('input_error');
    }
    //Validación del correo
    if(inputPrimerApellido.value == ''){
        inputPrimerApellido.classList.add('input_error');
        bError = true;
    }else{
        inputPrimerApellido.classList.remove('input_error');
    }

    if(inputSegundoApellido.value == ''){
        inputSegundoApellido.classList.add('input_error');
        bError = true;
    }else{
        inputSegundoApellido.classList.remove('input_error');
    }

    //Validación de la edad
    if(inputCantidadAlumnos.value == '' || (regexSoloNumeros.test(inputCantidadAlumnos.value) == false) || Number(inputCantidadAlumnos.value) < Number(inputCantidadAlumnos.min)  || Number(inputCantidadAlumnos.value) > Number(inputCantidadAlumnos.max)){
        inputCantidadAlumnos.classList.add('input_error');
        bError = true;
    }else{
        inputCantidadAlumnos.classList.remove('input_error');
    }

    return bError;
};

function buscarId(){
  let _id = this.dataset._id;
  let solicitud = obtenerSolicitudId(_id);
  console.log(solicitud);
};

//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas queda igual
function limpiarFormulario(){
    inputPrimerNombre.value = '';
    inputSegundoNombre.value = '';
    inputPrimerApellido.value ='';
    inputSegundoApellido.value = '';
    inputCurso.value = '';
    inputGrupo.value = '';
    inputPeriodo.value = '';
    inputCantidadAlumnos.value = 0;
    inputHorario.value = '';
}
