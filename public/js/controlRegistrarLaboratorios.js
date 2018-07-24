/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';


//dejar este nombre del botón igual a como está aquí y dejarlo igual en el HTML: btnRegistrar
const botonRegistrar = document.querySelector('#btnRegistrar');




//estos nombres cambiarlos por lo que corresponda en el html
//manejarlos en singular
const inputNombreLaboratorio = document.querySelector('#txtNombreLaboratorio');
const inputCantidadEspacios = document.querySelector('#numCantEspacios');
//const inputFiltro = document.querySelector('#txtFiltro'); esto lo vemos con el profe el miercoles


/*esto lo vemos el miercoles con el profe
inputFiltro.addEventListener('keyup' , function(){
    imprimirListaPersonas(inputFiltro.value)
});*/

botonRegistrar.addEventListener('click' , obtenerDatosFormulario);

//el nombre de esta función se mantiene
function obtenerDatosFormulario(){
    
    let bError = false;

    //nombrar estas variables con el mismo nombre de las "const" de arriba
    let sNombreLaboratorio = inputNombreLaboratorio.value;
    let sCantidadEspacios = inputCantidadEspacios.value;

    
    
    bError = validar();

    if(bError == true){
        swal({
            type : 'Aviso',
            title : 'No se pudo registrar el grupo', //cambiar example según lo que se esté registrando
            text: 'Por favor revise los campos resaltados', //
            confirmButtonText : 'Listo'
        });
       
    }else{
        //cambiar Example y parámetros de la función por lo que se esté registrando, pornerlo en singular
        registrarLaboratorio(sNombreLaboratorio, sCantidadEspacios);//esta funcion está en el servicio
        swal({
            type : 'Éxito',
            title : 'Transacción procesada',
            text: 'El grupo se registró adecuadamente', //cambiar example por lo que se esté registrando
            confirmButtonText : 'Listo'
        });

        //este nombre queda igual
        limpiarFormulario();
    }
    
};

//Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)

//dejar las palabras "lista" y "listar" y cambiar Examples por lo que se esté listando
// por ejemplo: cursos, carreras, sedes.  Debe estar en plural
/*function listarExamples(){

        let listaExamples = obtenerListaExamples();
        imprimirListaExamples();
}*/

//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas queda igual
function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del nombre del grupo
    if(inputNombreLaboratorio.value == ''){
        inputNombreLaboratorio.classList.add('input_error');
        bError = true;
    }else{
        inputNombreLaboratorio.classList.remove('input_error');
    }
    //Validación del laboratorio
    if(inputCantidadEspacios.value == '' || (regexSoloNumeros.test(inputCantidadEspacios.value) == false)){
        inputCantidadEspacios.classList.add('input_error');
        bError = true;
    }else{
        inputCantidadEspacios.classList.remove('input_error');
    }

    return bError;
};

//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas queda igual
function limpiarFormulario(){
    inputNombreLaboratorio.value = '';    
    inputCantidadEspacios.value = '';
}