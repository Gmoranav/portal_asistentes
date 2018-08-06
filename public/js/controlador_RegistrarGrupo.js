'use strict';




//dejar este nombre del botón igual a como está aquí y dejarlo igual en el HTML: btnRegistrar
const botonRegistrar = document.querySelector('#btnRegistrar');
const botonRegistrarProfesor = document.querySelector('#ProfeButton');

//estos nombres cambiarlos por lo que corresponda en el html
//manejarlos en singular
const inputSede = document.querySelector('#txtSedeGrupo');
const inputCarrera = document.querySelector('#txtCarreraGrupo');
const inputCurso = document.querySelector('#txtCursoGrupo');
const inputPeriodo = document.querySelector('#txtPeriodoGrupo');
const inputNombre = document.querySelector('#txtNombre');
const inputProfesor = document.querySelector('#selectProfesores')
const inputLaboratorio = document.querySelector('#txtLaboratorio');
const inputCantidadEstu = document.querySelector('#txtCantEstudiantes');
const inputHorario = document.querySelector('#txtHorario');

let arregloProfesores = [];
//const inputFiltro = document.querySelector('#txtFiltro'); esto lo vemos con el profe el miercoles


/*esto lo vemos el miercoles con el profe
inputFiltro.addEventListener('keyup' , function(){
    imprimirListaPersonas(inputFiltro.value)
});*/
botonRegistrarProfesor.addEventListener('click', guardarProfesores)
botonRegistrar.addEventListener('click' , obtenerDatosFormulario);


function guardarProfesores() {

    let sProfesores = inputProfesor.value;

    arregloProfesores.push(sProfesores)

}


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
    let sProfesor = arregloProfesores.join(', ');
    let sCantidadEstu = Number(inputCantidadEstu.value);
    let sHorario = inputHorario.value;

    
    
    bError = validar();

    let respuesta;
    

    if(bError == true){
        swal({
            type : 'Warning',
            title : 'No se pudo registrar el grupo', //cambiar example según lo que se esté registrando
            text: 'Por favor revise los campos resaltados', //
            confirmButtonText : 'Listo'
        });
       
    }else{
        //cambiar Example y parámetros de la función por lo que se esté registrando, pornerlo en singular
        respuesta = registrarGrupo(sSede, sCarrera, sCurso, sPeriodo, sNombre, sLaboratorio, sProfesor, sCantidadEstu, sHorario);//esta funcion está en el servicio
        
        if (respuesta.success == true){

            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "El grupo se registró con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
                }).then((result) => {
                    if(result.value){
    
                        window.location.href = "grupo_listar.html";
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

        //este nombre queda igual
        
    }

    limpiarFormulario();
    
};

/*
FUNCION PARA POPULAR UN SELECT

function llenarSelectProfesores() {
    // se llaman los datos de los proyectos 
    let lista_profesores = obtenerListaGrupos();
    
    // ciclo for que recorre la lista de proyectos
    for (let i = 0; i < lista_profesores.length; i++) {

        // creación de elemento html
        let option = document.createElement("option");
        // opciones que se van a mostrar en el select
        option.text = lista_profesores[i]['profesores']
        option.value = lista_profesores[i]['profesores'];
        // id del elemento html donde se van a crear las opciones
        let select = document.querySelector("#selectProfesores");
        // se añade la opción al DOM (al html)
        select.add(option);
    }  
}*/



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
    inputSede.value = '';
    inputCarrera.value = '';
    inputCurso.value = '';
    inputPeriodo.value = '';
    inputNombre.value = '';    
    inputLaboratorio.value = '';
    inputProfesor.value = '';
    inputCantidadEstu.value = 0;
    inputHorario.value = '';
}

