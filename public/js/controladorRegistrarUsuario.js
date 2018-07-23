/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';



const botonRegistrar = document.querySelector('#btnRegistrar');




//const inputimagenUrl = document.querySelector('#imageUpload');
const inputNombre = document.querySelector('#txtNombre');
const inputSegundoNombre = document.querySelector('#txtSegundoNombre');
const inputPrimerApellido= document.querySelector('#txtPrimerApellido');
const inputSegundoApellido = document.querySelector('#txtSegundoApellido');
const inputCedula = document.querySelector('#txtCedula');
const inputFechaIngreso = document.querySelector('#txtFechaIngreso');
const inputRol = document.querySelector('#txtRol');
const inputDireccion = document.querySelector('#txtDireccion');
const inputDistrito = document.querySelector('#txtDistrito');
const inputCanton = document.querySelector('#txtCanton');
const inputProvincia = document.querySelector('#txtProvincia');
const inputTelefono = document.querySelector('#txtTelefono');
const inputCorreo = document.querySelector('#txtCorreo');
/*const inputUsuario = document.querySelector('#txtCedula');
const inputContrasenna = document.querySelector('#txtCedula');*/
//const inputFiltro = document.querySelector('#txtFiltro'); esto lo vemos con el profe el miercoles

botonRegistrar.addEventListener('click' , obtenerDatosFormulario);

/*esto lo vemos el miercoles con el profe
inputFiltro.addEventListener('keyup' , function(){
    imprimirListaPersonas(inputFiltro.value)
});*/


function obtenerDatosFormulario(){
    
    let bError = false;
    let respuesta;

    
    bError = validar();
    if(bError == true){
        swal({
            type : 'Warning',
            title : 'No se pudo registrar el usuario', 
            text: 'Por favor revise los campos resaltados', 
            confirmButtonText : 'Listo'
        });
    }else{

        let imagenUrl = "urlImagen";
        let sNombre = inputNombre.value; 
        let sSegundoNombre = inputSegundoNombre.value;
        let sPrimerApellido = inputPrimerApellido.value;
        let sSegundoApellido = inputSegundoApellido.value;
        let sCedula = inputCedula.value;
        let dFechaIngreso = inputFechaIngreso.value;
        let sltRol = inputRol.value;
        let sDireccion = inputDireccion.value;
        let sDistrito = inputDistrito.value;
        let sCanton = inputCanton.value;
        let sltProvincia = inputProvincia.value;
        let sTelefono = inputTelefono.value;
        let sCorreo = inputCorreo.value;

        
        respuesta = registrarUsuarios(imagenUrl, sNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaIngreso, sltRol, 
                          sDireccion, sDistrito, sCanton, sltProvincia, sTelefono, sCorreo);//esta funcion está en el servicio

        if (respuesta.success = true){
            swal({
                type : 'Success',
                title : 'Transacción procesada',
                text: 'El usuario se registró adecuadamente', 
                confirmButtonText : 'Listo'
            });
        }else{
            swal({
                type : 'Warning',
                title : 'Transacción fallida', 
                text: 'No se pudo registrar el usuario', 
                confirmButtonText : 'Listo'
            });
        }

        limpiarFormulario();
    }
    
};



function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    //let regexSoloNumerosGuiones = /^[0-9][-]+$/;
    let regexEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;


    //Validación del nombre
    if(inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value)==false) ){
        inputNombre.classList.add('error_input');
        bError = true;
    }else{
        inputNombre.classList.remove('error_input');
    }
    //Validación del segundo nombre
    if(inputSegundoNombre.value == (regexSoloLetras.test(inputSegundoNombre.value)==false)){
        inputSegundoNombre.classList.add('error_input');
        bError = true;
    }else{
        inputSegundoNombre.classList.remove('error_input');
    }
    //Validación del primer apellido
    if(inputPrimerApellido.value == '' || (regexSoloLetras.test(inputPrimerApellido.value)==false)){
        inputPrimerApellido.classList.add('error_input');
        bError = true;
    }else{
        inputPrimerApellido.classList.remove('error_input');
    }
    //Validación del segungo apellido
    if(inputSegundoApellido.value == '' || (regexSoloLetras.test(inputSegundoApellido.value)==false)){
        inputSegundoApellido.classList.add('error_input');
        bError = true;
    }else{
        inputSegundoApellido.classList.remove('error_input');
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
    //Validación del Rol
    if(inputRol.value == ''){
        inputRol.classList.add('input_error');
        bError = true;
    }else{
        inputRol.classList.remove('input_error');
    }
    //Validación de la dirección
    if(inputDireccion.value == ''){
        inputDireccion.classList.add('input_error');
        bError = true;
    }else{
        inputDireccion.classList.remove('input_error');
    }
    //Validacion del distrito
    if(inputDistrito.value == '' || (regexSoloLetras.test(inputDistrito.value) == false)){
        inputDistrito.classList.add('input_error');
        bError = true;
    }else{
        inputDistrito.classList.remove('input_error');
    }
    //Validacion del cantón
    if(inputCanton.value == '' || (regexSoloLetras.test(inputCanton.value) == false)){
        inputCanton.classList.add('input_error');
        bError = true;
    }else{
        inputCanton.classList.remove('input_error');
    }
    //Validación de la provincia
    if(inputProvincia.value == ''){
        inputProvincia.classList.add('input_error');
        bError = true;
    }else{
        inputProvincia.classList.remove('input_error');
    }
    //Validación del teléfono
    if(inputTelefono.value == '' /*|| (regexSoloNumerosGuiones.test(inputTelefono.value) == false)*/){
        inputTelefono.classList.add('error_input');
        bError = true;
    }else{
        inputTelefono.classList.remove('error_input');
    }
    //Validación del correo
    if(inputCorreo.value == '' || (regexEmail.test(inputCorreo.value) == false)){
        inputCorreo.classList.add('error_input');
        bError = true;
    }else{
        inputCorreo.classList.remove('error_input');
    }

    return bError;
};

function leerURL(pinputimagenUrl) {
    if (pinputimagenUrl.files && pinputimagenUrl.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(pinputimagenUrl.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});

/*
function validarImagen(fileName){
  let extensiones_permitidas = new Array("png","jpg","jpeg");
  var extension_Archivo = nombre_Archivo.split('.').pop();
  for(var i = 0; i <= extensiones_permitidas.length; i++)
  {
      if(extensiones_permitidas[i]==extension_Archivo)
      {
		return true; // valid file extension
      }
  }
  alert("not a csv file");
  //I get the input element via Id and set value='';
  document.getElementById('imageUpload').value='';
  return false;
}*/

function limpiarFormulario(){

    //inputimagenUrl.value = '';
    inputNombre.value = ''; 
    inputSegundoNombre.value = '';
    inputPrimerApellido.value = '';
    inputSegundoApellido.value = '';
    inputCedula.value = '';
    inputFechaIngreso.value = '';
    inputRol.value = '';
    inputDireccion.value = '';
    inputDistrito.value = '';
    inputCanton.value = '';
    inputProvincia.value = '';
    inputTelefono.value = '';
    inputCorreo.value = '';
}

