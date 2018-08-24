
'use strict';

const botonRegistrar = document.querySelector('#btnRegistrar');
const botonModificar = document.querySelector('#btnModificar');

botonModificar.hidden = true;


mostrarCursos();
const selectCurso = document.querySelector('#sltCursos');
const botonAgregar = document.querySelector('#btnAgregarRegistrosBitacora');

botonAgregar.addEventListener('click',obtenerDatosRegistros);

function obtenerDatosRegistros(){
    let cursoId = selectCurso.value;
    const listaRegistrosBitacora = document.querySelectorAll(input[type=text]);

    for(let i = 0; i = listaRegistrosBitacora.length; i++){
        console.log('${cursoId} : ${listaRegistrosBitacora[i].value}');
        agregar_registros(cursoId, listaRegistrosBitacora[i].value);
    };
}

function mostrarCursos(){
    let cursos = obtenerListaCursos();
    let selectCurso = document.querySelector('#sltCursos');
    for (let i = 0; i < cursos.length; i++){
        let option = new Option(cursos[i]['curso'])
        option.value = cursos[i][_id];

        selectCurso.options.add(opcion);
    }
}


const inputimagenUrl = document.querySelector('#imageUpload');
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
const inputId = document.querySelector('#txtId');

botonRegistrar.addEventListener('click' , obtenerDatosFormulario);
botonModificar.addEventListener('click' , obtenerDatosModificar);

function obtenerDatosFormulario(){
    
    let bError = false;
    let respuesta;

    
    bError = validar();
    if(bError == true){
        swal({
            type: 'warning',
            title: 'No se pudo registrar el usuario',
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
        let sltRol = inputRol.value;
        let sDireccion = inputDireccion.value;
        let sDistrito = inputDistrito.value;
        let sCanton = inputCanton.value;
        let sltProvincia = inputProvincia.value;
        let sTelefono = inputTelefono.value;
        let sCorreo = inputCorreo.value;

        
        respuesta = registrarUsuarios(inputimagenUrl.src, sNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaIngreso, sltRol, 
                          sDireccion, sDistrito, sCanton, sltProvincia, sTelefono, sCorreo);//esta funcion está en el servicio

        if (respuesta.success = true){
            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "Se registró el usuario con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
                }).then((result) => {
                    if(result.value){
    
                        window.location.href = "usuario_listar.html";
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

        limpiarFormulario();
    }
    
};


function obtenerDatosModificar(){
    
    let bError = false;
    let respuesta;

    
    bError = validar();
    if(bError == true){
        swal({
            type: 'warning',
            title: 'No se pudo registrar el usuario',
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
        let sltRol = inputRol.value;
        let sDireccion = inputDireccion.value;
        let sDistrito = inputDistrito.value;
        let sCanton = inputCanton.value;
        let sltProvincia = inputProvincia.value;
        let sTelefono = inputTelefono.value;
        let sCorreo = inputCorreo.value;
        let _id = inputId.value;

        
        respuesta = modificarUsuarios(_id, inputimagenUrl.src, sNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaIngreso, sltRol, 
                          sDireccion, sDistrito, sCanton, sltProvincia, sTelefono, sCorreo);//esta funcion está en el servicio

        if (respuesta.success = true){
            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "El usuario se modificó con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
                }).then((result) => {
                    if(result.value){
    
                        window.location.href = "usuario_listar.html";
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

        limpiarFormulario();
        botonModificar.hidden = true;
        botonRegistrar.hidden = false;
    }
    
};


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
    //Validación del correo
    if(inputCorreo.value == '' || (regexEmail.test(inputCorreo.value) == false)){
        inputCorreo.classList.add('input_error');
        bError = true;
    }else{
        inputCorreo.classList.remove('input_error');
    }

    return bError;
};

function limpiarFormulario(){

    inputimagenUrl.src = '';
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
    inputId.value = '';
};


function cargar_pagina(){
    window.location.replace('usuario_registrar.html');
};

window.onload = function() {
    cargar_datos_modificar();
   };

function cargar_datos_modificar(){
    
    let usuario = [];

    
    usuario = getUsuarioParaModificar();


    if (usuario[0] != undefined){
   
        setProvinciaSeleccionada(usuario[10]);
        optProvincia_Canton();

        inputNombre.value = usuario[0]; 
        inputSegundoNombre.value = usuario[1];
        inputPrimerApellido.value = usuario[2];
        inputSegundoApellido.value = usuario[3];
        inputCedula.value = usuario[4];
        inputFechaIngreso.value = usuario[5];
        inputRol.value = usuario[6];
        inputDireccion.value = usuario[7];
        inputDistrito.value = usuario[8];
        inputCanton.value = usuario[9];
        inputProvincia.value = usuario[10];
        inputTelefono.value = usuario[11];
        inputCorreo.value = usuario[12];
        inputId.value = usuario[13];
        document.querySelector('#imageUpload').src = usuario[14];


        usuario = [];
        localStorage.setItem("usuarioParaModificar", JSON.stringify(usuario));
        botonModificar.hidden = false;
        botonRegistrar.hidden = true;
    }
};

function getUsuarioParaModificar() {
    return JSON.parse(localStorage.getItem("usuarioParaModificar"));
}

function setProvinciaSeleccionada(provincia) {
    
    switch (provincia) {
        case "Alajuela":
            selectProvincia[1].selected = true;
            break;
        case "Cartago":
            selectProvincia[2].selected = true;
            break;
        case "Guanacaste":
            selectProvincia[3].selected = true;
            break;
        case "Heredia":
            selectProvincia[4].selected = true;
            break;
        case "Limón":
            selectProvincia[5].selected = true;
            break;
        case "Puntarenas":
            selectProvincia[6].selected = true;
            break;  
        case "San José":
            selectProvincia[7].selected = true;
            break;            
        default:
            break;
    }
}

    
