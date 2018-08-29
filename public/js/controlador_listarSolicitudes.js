/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/
'use strict';
//window.addEventListener('load', listarSolicitudes);
let listaSolicitudes;
listarSolicitudes();
/*
function obtenerListaSolicitudes(){
    fetchJson('http://localhost:4000/api/listar_solicitudes').then(function(response){
        imprimirListaSolicitudes(response);
        listaSolicitudes = response;

    }).catch(function(error){
    });
}
*/
/****************************************************************************/
//dejar las palabras "lista" y "listar" y cambiar Examples por lo que se esté listando
// por ejemplo: cursos, carreras, sedes.  Debe estar en plural

function listarSolicitudes(){
        listaSolicitudes = obtenerListaSolicitudes();
        imprimirListaSolicitudes(listaSolicitudes);
};

const inputFiltroGrupo = document.querySelector('#txtGrupo');

/*const inputFiltroIngreso = document.querySelector('#txtIngreso');
const inputFiltroCorreo = document.querySelector('#txtCorreo');*/

inputFiltroGrupo.addEventListener('keyup', function(){
        imprimirListaSolicitudes(listaSolicitudes, inputFiltroGrupo.value)
});
/****************************************************************************/
function imprimirListaSolicitudes(plistaSolicitudes, pFiltro){

   // let plistaSolicitudes = obtenerListaSolicitudes();

    let tbody = document.querySelector('#tblListarSolicitudes')

    if(!pFiltro){
        pFiltro = '';
    }

    tbody.innerHTML = '';

    //Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
    for(let i = 0; i < plistaSolicitudes.length; i++){

        /*los nombres que están entre corchetes y comillas simples
        deben ser los mismos que están en la función registrarExamples del archivo servicio.
        Están en la sección data{}.  NO los que vienen por parámetro sino lo que se declaran en
        la función.  Se deben colocar en el mismo orden*/

      /*  if(!plistaSolicitudes[i]['estado']==0){*/
           if(plistaSolicitudes[i]['grupo'].toLowerCase().includes(pFiltro.toLowerCase())){

        //if(let i = 0; i < plistaSolicitudes.length; i++){
            let fila = tbody.insertRow();

            let sPrimerNombre = plistaSolicitudes[i]['primer_nombre'];
            let sSegundoNombre = plistaSolicitudes[i]['segundo_nombre'];
            let sPrimerApellido = plistaSolicitudes[i]['primer_apellido'];
            let sSegundoApellido = plistaSolicitudes[i]['segundo_apellido'];
            let sNombreCompleto = fila.insertCell();
            let sCurso = fila.insertCell();
            let sGrupo = fila.insertCell();
            let sPeriodo = fila.insertCell();
            let nCantidadAlumnos = fila.insertCell();
            let sEstado = fila.insertCell();
            let cConfiguracion = fila.insertCell();
            /*let shorario = fila.insertCell();*/

            /*snombreCompleto.innerHTML = sPrimerNombre.concat(espacio,
            sSegundoNombre, espacio, sPrimerApellido, espacio, sSegundoApellido);*/

            if (sSegundoNombre != 'undefined'){
                sNombreCompleto.innerHTML = sPrimerApellido.concat(' ', sSegundoApellido, ', ', sPrimerNombre, ' ', sSegundoNombre);
            }else{
                sNombreCompleto.innerHTML = sPrimerApellido.concat(', ', sSegundoApellido, ' ', sPrimerNombre);
            }

            sCurso.innerHTML = plistaSolicitudes[i]['nombre_curso'];
            sGrupo.innerHTML = plistaSolicitudes[i]['grupo'];
            sPeriodo.innerHTML = plistaSolicitudes[i]['periodo'];
            nCantidadAlumnos.innerHTML = plistaSolicitudes[i]['cantidad_alumnos'];
             let pestado;
              switch (plistaSolicitudes[i]['estado']) {
                            case 1:
                                pestado = 'Pendiente'
                                break;
                            case 2:
                                pestado = 'Aprobada'
                                break;
                            case 3:
                                pestado = 'Rechazada'
                                break;
                            default:
                                break;
                        };
            sEstado.innerHTML = pestado;

            let botonDetalleSolicitud = document.createElement('a');
            botonDetalleSolicitud.classList.add('fas');
            botonDetalleSolicitud.classList.add('fa-file-alt');
            botonDetalleSolicitud.classList.add('tooltip');

            var tooltipdetalle = document.createElement('span');
            tooltipdetalle.textContent = "Detalle de Solicitud";
            tooltipdetalle.setAttribute('class', 'tooltiptext');
            botonDetalleSolicitud.appendChild(tooltipdetalle);

            /*se crean los componentes para actualizar*/
            let botonModificar = document.createElement('a');
            botonModificar.classList.add('fas');
            botonModificar.classList.add('fa-pen');
            botonModificar.classList.add('tooltip');

            var tooltipModificar = document.createElement('span');
            tooltipModificar.textContent = "Editar";
            tooltipModificar.setAttribute('class', 'tooltiptext');
            botonModificar.appendChild(tooltipModificar);

            //let botonModificar = library.add(faUserAstronaut);
            /*let botonDetalleSolicitud = document.createElement('a');
            botonDetalleSolicitud.classList.add('fas');
            botonDetalleSolicitud.classList.add('fa-external-link-square-alt');

            botonDetalleSolicitud.dataset._id = plistaSolicitudes[i]['_id'];

            botonDetalleSolicitud.addEventListener('click', buscar_por_id)

            cConfiguracion2.appendChild(botonDetalleSolicitud);*/

            let botonDesactivar = document.createElement('a');
            botonDesactivar.classList.add('fas');
            botonDesactivar.classList.add('fa-ban');
            botonDesactivar.classList.add('tooltip');

            var tooltipDesactivar = document.createElement('span');
            tooltipDesactivar.textContent = "Desactivar";
            tooltipDesactivar.setAttribute('class', 'tooltiptext');
            botonDesactivar.appendChild(tooltipDesactivar);

            botonModificar.dataset._id = plistaSolicitudes[i]['_id'];
            botonDesactivar.dataset._id = plistaSolicitudes[i]['_id'];
            botonDetalleSolicitud.dataset._id = plistaSolicitudes[i]['_id'];

            botonModificar.addEventListener('click', buscarId);
            botonDesactivar.addEventListener('click', desactivarSolicitud);
            botonDetalleSolicitud.addEventListener('click', mostrarDetalleSolicitud);


            cConfiguracion.appendChild(botonModificar);
            cConfiguracion.appendChild(botonDesactivar);
            cConfiguracion.appendChild(botonDetalleSolicitud);
        }
    }/*}*/
};

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
/*
function buscar_id(){
  let _id = this.dataset.id;
  let solicitud = obtenerSolicitudId(_id);
  console.log(solicitud);
};
*/
function buscarId(){
        let _id = this.dataset._id;
        console.log(_id);
        let solicitud = obtenerSolicitudId(_id);
        let datosSolicitud = [];

        console.log(solicitud);
        //binding permite enlazar la función con el contexto que la llama
        //en este caso con el boton Modificar

        //inputimagenUrl.src = usuario['foto'];
        datosSolicitud[0] = solicitud['primer_nombre'];
        datosSolicitud[1] = solicitud['segundo_nombre'];
        datosSolicitud[2] = solicitud['primer_apellido'];
        datosSolicitud[3] = solicitud['segundo_apellido'];
        datosSolicitud[4] = solicitud['cedula_asistente'];
        datosSolicitud[5] = solicitud['nombre_curso'];
        datosSolicitud[6] = solicitud['grupo'];
        datosSolicitud[7] = solicitud['periodo'];
        datosSolicitud[8] = solicitud['cedula_profesor'];
        /*
        datosSolicitud[] = solicitud['carrera'];
        datosSolicitud[] = solicitud['fecha_de_ingreso'];
        datosSolicitud[] = solicitud['telefono'];
        datosSolicitud[] = solicitud['correo_electronico'];
        */
        datosSolicitud[14] = solicitud['_id'];

        setSolicitudParaModificar(datosSolicitud);
        cargarPagina();
};

//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas queda igual
/*function limpiarFormulario(){
    inputPrimerNombre.value = '';
    inputSegundoNombre.value = '';
    inputPrimerApellido.value ='';
    inputSegundoApellido.value = '';
    inputCurso.value = '';
    inputGrupo.value = '';
    inputPeriodo.value = '';
    inputCantidadAlumnos.value = 0;
    inputHorario.value = '';
};*/

function desactivarSolicitud(){
  let _id = this.dataset._id; //SE SALVA EL ID DE LO QUE SE DESEA BORRAR
  swal({
      title: '¿Seguro que desea desactivar esta solicitud?',
      text: "Esta acción no puede deshacerse.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Desactivar'
    }).then((result) => {
      if (result.value) {
          desactivar_solicitud(_id); //FUNCION EN EL SERVIDOR PARA BORRAR, PARAMETRO ES EL ID DE LO QUE SE QUIERE BORRAR
          imprimirListaSolicitudes(); //CARGAR LA LISTA, YA AQUÍ LO DEMÁS SE HA EJECUTADO Y NO APARECE LO QUE SE BORRÓ
        swal(
          '¡Solicitud Desactivada!',
          'El proceso ha sido concluido con éxito',
          'success'
        )
      }
    });
};

function mostrarDetalleSolicitud(){

      let _id = this.dataset._id;
      let solicitud = obtenerSolicitudId(_id);
      let mostrarDetalleSolicitud = [];

      mostrarDetalleSolicitud[0] = solicitud['primer_nombre'];
      mostrarDetalleSolicitud[1] = solicitud['segundo_nombre'];
      mostrarDetalleSolicitud[2] = solicitud['primer_apellido'];
      mostrarDetalleSolicitud[3] = solicitud['segundo_apellido'];
      mostrarDetalleSolicitud[4] = solicitud['cedula_asistente'];
      mostrarDetalleSolicitud[5] = solicitud['nombre_curso'];
      mostrarDetalleSolicitud[6] = solicitud['grupo'];
      mostrarDetalleSolicitud[7] = solicitud['periodo'];
      //mostrarDetalleSolicitud[0] = solicitud['cantidad_alumnos'];
      //mostrarDetalleSolicitud[0] = solicitud['horario'];
      mostrarDetalleSolicitud[8] = solicitud['cedula_profesor'];
      mostrarDetalleSolicitud[9] = solicitud['estado'];

      let sPrimerNombre = mostrarDetalleSolicitud[0] ;
      let sSegundoNombre = mostrarDetalleSolicitud[1] ;
      let sPrimerApellido = mostrarDetalleSolicitud[2] ;
      let sSegundoApellido = mostrarDetalleSolicitud[3] ;
      let nCedula = mostrarDetalleSolicitud[4] ;

      let tbody = document.querySelector('#tblDetalleSolicitud');
      tbody.innerHTML = '';

      let filaNombreEstudiante = tbody.insertRow();
      let filaCurso  = tbody.insertRow();
      let filaGrupo  = tbody.insertRow();
      let filaPeriodo  = tbody.insertRow();
      let filaCantidadDeAlumnos  = tbody.insertRow();
      let filaHorario  = tbody.insertRow();
      let filaEstado  = tbody.insertRow();
      let filaCedulaProfesor =  tbody.insertRow();

      filaNombreEstudiante.insertCell().innerHTML = 'Postulante';
      filaCurso.insertCell().innerHTML = 'Curso';
      filaGrupo.insertCell().innerHTML = 'Grupo';
      filaPeriodo.insertCell().innerHTML = 'Periodo';
      filaCantidadDeAlumnos.insertCell().innerHTML = 'Cantidad de Alumnos';
      filaHorario.insertCell().innerHTML = 'Horario';
      filaEstado.insertCell().innerHTML = 'Estado';
      filaCedulaProfesor.insertCell().innerHTML = 'Cedula Profesor';
      //filaCursosLlevados.insertCell().innerHTML = 'Cursos Llevados';

/**************************************
      let sProfesor = filaEstado.insertCell();
      sProfesor.innerHTML = mostrarDetalleSolicitud[8];
************************/
/***************************/
      let sNombreAlumno = filaNombreEstudiante.insertCell();
      //sNombre.innerHTML = mostrarDetalleSolicitud[0];
      if (sSegundoNombre != 'undefined'){
          sNombreAlumno.innerHTML = sPrimerApellido.concat(' ', sSegundoApellido, ', ', sPrimerNombre, ' ', sSegundoNombre);
      }else{
          sNombreAlumno.innerHTML = sPrimerApellido.concat(' ', sSegundoApellido, ', ', sPrimerNombre);
      }
/***************************/
      let sCurso = filaCurso.insertCell();
      sCurso.innerHTML = mostrarDetalleSolicitud[5];

      let sGrupo = filaGrupo.insertCell();
      sGrupo.innerHTML = mostrarDetalleSolicitud[6];

      let sPeriodo = filaPeriodo.insertCell();
      sPeriodo.innerHTML = mostrarDetalleSolicitud[7];
/*
      let sCurso = filaCurso.insertCell();
      sCurso.innerHTML = mostrarDetalleSolicitud[4];
*/
      let sCedulaProfesor = filaCedulaProfesor.insertCell();
      sCurso.innerHTML = mostrarDetalleSolicitud[8];

      let sEstado = filaEstado.insertCell();
      sEstado.innerHTML = mostrarDetalleSolicitud[9];

      levantarModal();

      setIdSolicitud(_id);
}

function mostrarDetalleSolicitudRectoria(){

      levantarModal();
}

function setIdSolicitud(_id_solicitud) {
    localStorage.setItem("IdSolicitud", JSON.stringify(_id_solicitud));
    console.log(JSON.parse(localStorage.getItem("IdSolicitud")));
}

function getIdSolicitud() {
    return JSON.parse(localStorage.getItem("IdSolicitud"));
}

function setSolicitudParaModificar(infoSolicitud) {
        localStorage.setItem("solicitudParaModificar", JSON.stringify(infoSolicitud));
        console.log(JSON.parse(localStorage.getItem("solicitudParaModificar")));
}

function levantarModal(){
  let modal = document.getElementById('modal');
  modal.className = "modal";
}
function cerrarModal(){
  let modal = document.getElementById('modal');
  modal.className = "modal modal-hidden";
}

function redireccionSolicitudAsistenteRegistrar() {
  window.location = "solicitud-asistente_registrar.html";
  limpiarFormulario();
}
