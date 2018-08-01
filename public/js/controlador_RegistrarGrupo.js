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
const inputSede = document.querySelector('#txtSedeGrupo');
const inputCarrera = document.querySelector('#txtCarreraGrupo');
const inputCurso = document.querySelector('#txtCursoGrupo');
const inputPeriodo = document.querySelector('#txtPeriodoGrupo');
const inputNombre = document.querySelector('#txtNombre');
const inputLaboratorio = document.querySelector('#txtLaboratorio');
const inputProfesor = document.querySelector('#txtProfesor');
const inputProfesor2 = document.querySelector('#txtProfesor2');
const inputProfesor3 = document.querySelector('#txtProfesor3');
const inputCantidadEstu = document.querySelector('#txtCantEstudiantes');
const inputHorario = document.querySelector('#txtHorario');
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
    let sSede = inputSede.value;
    let sCarrera = inputCarrera.value;
    let sCurso = inputCurso.value;
    let sPeriodo = inputPeriodo.value;
    let sNombre = inputNombre.value;
    let sLaboratorio = inputLaboratorio.value;
    let sProfesor = inputProfesor.value;
    let sProfesor2 = inputProfesor2.value;
    let sProfesor3 = inputProfesor3.value;
    let sCantidadEstu = Number(inputCantidadEstu.value);
    let sHorario = inputHorario.value;

    
    
    bError = validar();

    if(bError == true){
        swal({
            type : 'Warning',
            title : 'No se pudo registrar el grupo', //cambiar example según lo que se esté registrando
            text: 'Por favor revise los campos resaltados', //
            confirmButtonText : 'Listo'
        });
       
    }else{
        //cambiar Example y parámetros de la función por lo que se esté registrando, pornerlo en singular
        registrarGrupo(sSede, sCarrera, sCurso, sPeriodo, sNombre, sLaboratorio, sProfesor, sProfesor2,
        sProfesor3, sCantidadEstu, sHorario);//esta funcion está en el servicio
        swal({
            type : 'Success',
            title : 'Transacción procesada',
            text: 'El grupo se registró adecuadamente', //cambiar example por lo que se esté registrando
            confirmButtonText : 'Listo'
        });

        //este nombre queda igual
        limpiarFormulario();
    }
    
};

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
    if(inputSede.value == ''){
        inputSede.classList.add('input_error');
        bError = true;
    }else{
        inputSede.classList.remove('input_error');
    }

    if(inputCarrera.value == ''){
        inputCarrera.classList.add('input_error');
        bError = true;
    }else{
        inputCarrera.classList.remove('input_error');
    }

    if(inputCurso.value == ''){
        inputCurso.classList.add('input_error');
        bError = true;
    }else{
        inputCurso.classList.remove('input_error');
    }

    if(inputPeriodo.value == ''){
        inputPeriodo.classList.add('input_error');
        bError = true;
    }else{
        inputPeriodo.classList.remove('input_error');
    }

    if(inputNombre.value == ''){
        inputNombre.classList.add('input_error');
        bError = true;
    }else{
        inputNombre.classList.remove('input_error');
    }
    //Validación del laboratorio
    if(inputLaboratorio.value == '' ){
        inputLaboratorio.classList.add('input_error');
        bError = true;
    }else{
        inputLaboratorio.classList.remove('input_error');
    }
    //Validación del profesor
    if(inputProfesor.value == '' || (regexSoloLetras.test(inputProfesor.value)==false)){
        inputProfesor.classList.add('input_error');
        bError = true;
    }else{
        inputProfesor.classList.remove('input_error');
    }
    //Validación de la cantidad de estudiantes
    if(inputCantidadEstu.value == '' || (regexSoloNumeros.test(inputCantidadEstu.value) == false)){
        inputCantidadEstu.classList.add('input_error');
        bError = true;
    }else{
        inputCantidadEstu.classList.remove('input_error');
    }

    //Validación del horario

    if(inputHorario.value == ''){
        inputHorario.classList.add('input_error');
        bError = true;
    }else{
        inputHorario.classList.remove('input_error');
    }

    return bError;
};

//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas queda igual
function limpiarFormulario(){
    inputCarrera.value = '';
    inputCurso.value = '';
    inputPeriodo.value = '';
    inputNombre.value = '';    
    inputLaboratorio.value = '';
    inputProfesor.value = '';
    inputProfesor2.value = '';
    inputProfesor3.value = '';
    inputCantidadEstu.value = 0;
    inputHorario.value = '';
}
