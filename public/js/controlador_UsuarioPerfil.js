'use strict';

window.addEventListener('load', buscar_por_id);


const botonModificar = document.querySelector('#btnModificar');
botonModificar.addEventListener('click' , modificarDatos);

const inputimagenUrl = document.querySelector('#imageUpload2');
const inputNombre = document.querySelector('#txtNombre2');
const inputSegundoNombre = document.querySelector('#txtSegundoNombre2');
const inputPrimerApellido = document.querySelector('#txtPrimerApellido2');
const inputSegundoApellido = document.querySelector('#txtSegundoApellido2');
const inputCedula = document.querySelector('#txtCedula2');
const inputFechaIngreso = document.querySelector('#txtFechaIngreso2');
//const inputRol = document.querySelector('#txtRol2');
const inputDireccion = document.querySelector('#txtDireccion2');
const inputDistrito = document.querySelector('#txtDistrito2');
const inputCanton = document.querySelector('#txtCanton2');
const inputProvincia = document.querySelector('#txtProvincia2');
const inputTelefono = document.querySelector('#txtTelefono2');
//const inputCorreo = document.querySelector('#txtCorreo2');
const inputId = document.querySelector('#txtId2');

let _id = JSON.parse(localStorage.getItem('idUsuario'));

function buscar_por_id() {
    
    let usuario = obtener_usuario_por_id(_id);  //funcion en el servicio
    let datosUsuario = [];

    datosUsuario[0] = usuario['nombre'];
    datosUsuario[1] = usuario['segundo_nombre'];
    datosUsuario[2] = usuario['primer_apellido'];
    datosUsuario[3] = usuario['segundo_apellido'];
    datosUsuario[4] = usuario['cedula'];
    datosUsuario[5] = usuario['fecha_ingreso'];
    //datosUsuario[6] = usuario['rol'];
    datosUsuario[7] = usuario['direccion'];
    datosUsuario[8] = usuario['distrito'];
    datosUsuario[9] = usuario['canton'];
    datosUsuario[10] = usuario['provincia'];
    datosUsuario[11] = usuario['telefono'];
    //datosUsuario[12] = usuario['correo'];
    datosUsuario[13] = usuario['_id'];
    datosUsuario[14] = usuario['foto'];

    inputNombre.value = datosUsuario[0];        
    inputSegundoNombre.value = datosUsuario[1];
    inputPrimerApellido.value = datosUsuario[2];
    inputSegundoApellido.value = datosUsuario[3];
    inputCedula.value = datosUsuario[4];
    inputFechaIngreso.value = datosUsuario[5];
    //inputRol.value = datosUsuario[6];
    inputDireccion.value = datosUsuario[7];
    inputDistrito.value = datosUsuario[8];
    inputCanton.value = datosUsuario[9];
    inputProvincia.value = datosUsuario[10];
    inputTelefono.value = datosUsuario[11];
    //inputCorreo.value = datosUsuario[12];
    inputId.value = datosUsuario[13];
    inputimagenUrl.value = datosUsuario[14];   

};

function modificarDatos(){

let bError = false;
let respuesta;


bError = validar();
if(bError == true){
    swal({
        type: 'warning',
        title: 'No se pudo modificar el usuario',
        text: 'Por favor revise los campos resaltados',
        confirmButtonText: 'Aceptar'
    });
    
}else{

    let sNombre = inputNombre.value; 
    let sSegundoNombre = inputSegundoNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sSegundoApellido = inputSegundoApellido.value;
    let sCedula = inputCedula.value;
    let dFechaIngreso = inputFechaIngreso.value;
    //let sltRol = inputRol.value;
    let sDireccion = inputDireccion.value;
    let sDistrito = inputDistrito.value;
    let sCanton = inputCanton.value;
    let sltProvincia = inputProvincia.value;
    let sTelefono = inputTelefono.value;
    //let sCorreo = inputCorreo.value;
    
    respuesta = modificarUsuarios(_id, inputimagenUrl.src, sNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaIngreso, 
                      sDireccion, sDistrito, sCanton, sltProvincia, sTelefono);

    if (respuesta.success = true){
        swal({
            type: 'success',
            title: 'Transacción Procesada',
            text: "El usuario se modificó con éxito!",
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#3085d6',
            }).then((result) => {
                if(result.value){

                }

            });
    }else{
        swal({
            type : 'error',
            title : 'Problemas de conexión', 
            text: 'Por favor contactar al administrador', 
            confirmButtonText : 'Aceptar'
        });
    }

}



function validar(){
let bError = false;

let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
//let regexSoloNumerosGuiones = /^[0-9][-]+$/;
let regexEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;


//Validación del nombre
if(inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value)==false) ){
    inputNombre.classList.add('input_error');
    bError = true;
}else{
    inputNombre.classList.remove('input_error');
}
//Validación del segundo nombre
if(inputSegundoNombre.value == (regexSoloLetras.test(inputSegundoNombre.value)==false)){
    inputSegundoNombre.classList.add('input_error');
    bError = true;
}else{
    inputSegundoNombre.classList.remove('input_error');
}
//Validación del primer apellido
if(inputPrimerApellido.value == '' || (regexSoloLetras.test(inputPrimerApellido.value)==false)){
    inputPrimerApellido.classList.add('input_error');
    bError = true;
}else{
    inputPrimerApellido.classList.remove('input_error');
}
//Validación del segungo apellido
if(inputSegundoApellido.value == '' || (regexSoloLetras.test(inputSegundoApellido.value)==false)){
    inputSegundoApellido.classList.add('input_error');
    bError = true;
}else{
    inputSegundoApellido.classList.remove('input_error');
}
//Validacion de la cédula
if(inputCedula.value == '' /*|| (regexSoloNumerosGuiones.test(inputCedula.value)==false)*/){
    inputCedula.classList.add('input_error');
    bError = true;
}else{
    inputCedula.classList.remove('input_error');
}
//Validacion de la fecha de ingreso
if(inputFechaIngreso.value == ''){
    inputFechaIngreso.classList.add('input_error');
    bError = true;
}else{
    inputFechaIngreso.classList.remove('input_error');
}
/* //Validación del Rol
if(inputRol.value == ''){
    inputRol.classList.add('input_error');
    bError = true;
}else{
    inputRol.classList.remove('input_error');
} */
//Validación de la dirección
if(inputDireccion.value == ''){
    inputDireccion.classList.add('input_error');
    bError = true;
}else{
    inputDireccion.classList.remove('input_error');
}
//Validación de la provincia
if(inputProvincia.value == ''){
    inputProvincia.classList.add('input_error');
    bError = true;
}else{
    inputProvincia.classList.remove('input_error');
}
//Validacion del cantón
if(inputCanton.value == '' || (regexSoloLetras.test(inputCanton.value) == false)){
    inputCanton.classList.add('input_error');
    bError = true;
}else{
    inputCanton.classList.remove('input_error');
}  
//Validacion del distrito
/*if(inputDistrito.value == '' || (regexSoloLetras.test(inputDistrito.value) == false)){
    inputDistrito.classList.add('input_error');
    bError = true;
}else{
    inputDistrito.classList.remove('input_error');
}*/
//Validación del teléfono
if(inputTelefono.value == '' /*|| (regexSoloNumerosGuiones.test(inputTelefono.value) == false)*/){
    inputTelefono.classList.add('input_error');
    bError = true;
}else{
    inputTelefono.classList.remove('input_error');
}
/* //Validación del correo
if(inputCorreo.value == '' || (regexEmail.test(inputCorreo.value) == false)){
    inputCorreo.classList.add('input_error');
    bError = true;
}else{
    inputCorreo.classList.remove('input_error');
}  */

return bError;
};
 };
