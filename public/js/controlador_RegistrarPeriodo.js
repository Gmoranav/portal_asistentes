/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';
const boton_registrar = document.querySelector('#btnRegistrar');

boton_registrar.addEventListener('click', obtener_datos);

const input_nombre_cuatri = document.querySelector('#txtNombreCuatrimestre');
const input_estado_cuatri = document.querySelector('#txtEstadoCuatrimestre');
const input_id = document.querySelector('#txtID');

function obtener_datos() {

    let bError = false;

    let sNombreCuatri = input_nombre_cuatri.value;
    let sEstadoCuatri = input_estado_cuatri.value;

    bError = validar();
    let respuesta;

    if (bError == true) {

        swal({
            type: 'warning',
            title: 'No se pudo registrar el periodo',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });

    } else {

        respuesta = registrar_periodo(sNombreCuatri, sEstadoCuatri);

       if(respuesta.success == true){

        swal({
            type: 'success',
            title: 'Transacción Procesada',
            text: "Se registró el periodo con éxito!",
            showCancelButton: true,
            reverseButtons: true,
            confirmButtonText: 'Volver a la lista',
            cancelButtonText: 'Continuar Aqui',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#556566',
            }).then((result) => {
                if(result.value){

                    window.location.href = "periodo_listar.html";
                }

            });

       }else{

        swal({
            type: 'error',
            title: 'Problemas de conexión',
            text: 'Por favor contactar al administrador',
            confirmButtonText: 'Aceptar'
        });

       }

        limpiar_formulario();
    }
};

function validar() {
    let bError = false;


    if (input_nombre_cuatri.value == '') {

        input_nombre_cuatri.classList.add('input_error');
        bError = true;
    } else {
        input_nombre_cuatri.classList.remove('input_error');
    }

    if (input_estado_cuatri.value == '') {
        input_estado_cuatri.classList.add('input_error');
        bError = true;
    } else {
        input_estado_cuatri.classList.remove('input_error');
    }

    return bError;
};

function limpiar_formulario() {
    input_nombre_cuatri.value = '';
    input_estado_cuatri.value = '';
}



// ***  inicio: para enviar la informacion para modificar al formulario.  (del controlador_ListarPeriodo.js) *** 
window.onload = function() {
    cargar_datos_modificar();
   };

   function cargar_datos_modificar(){
    
    let periodo = [];
    
    periodo = getSedeParaModificar();
    if (periodo[0]!= undefined){

        input_nombre_cuatri.value = periodo[0]; 
        input_estado_cuatri.value = periodo[1];  
        

        periodo = [];
        localStorage.setItem("periodoParaModificar", JSON.stringify(periodo));
        botonModificar.hidden = false;
        botonRegistrar.hidden = true;
    }
};

function getSedeParaModificar() {
    return JSON.parse(localStorage.getItem("periodoParaModificar"));
}
// fin: enviar info del listar al form 
