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
const inputNombre = document.querySelector('#txtNombre');
const inputLaboratorio = document.querySelector('#txtLaboratorio');
const inputProfesor = document.querySelector('#txtProfesor');
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
    let sNombre = inputNombre.value;
    let sLaboratorio = inputLaboratorio.value;
    let sProfesor = inputProfesor.value;
    let sCantidadEstu = Number(inputCantidadEstu.value);
    let sHorario = inputHorario.value;

    
    
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
        registrarGrupo(sNombre, sLaboratorio, sProfesor, sCantidadEstu, sHorario);//esta funcion está en el servicio
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

/*Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
function imprimirListaGrupos(){
    
    let listaGrupos = obtenerListaGrupos();
    let tbody = document.querySelector('#box-container table-list tbody');//Cambiar Examples por lo que se vaya a listar, usar nombre en plural
                                                            //(ejemplo: cursos, sedes...)
    /*if(!pFiltro){
        pFiltro = '';
    }*/
/*    tbody.innerHTML = '';


    //Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
    for(let i = 0; i < listaGrupos.length; i++){

        /*los nombres que están entre corchetes y comillas simples
        deben ser los mismos que están en la función registrarExamples del archivo servicio.
        Están en la sección data{}.  NO los que vienen por parámetro sino lo que se declaran en
        la función.  Se deben colocar en el mismo orden*/
/*        let fila = tbody.insertRow();
                    
        let cNombre = fila.insertCell();
        let cLaboratorio = fila.insertCell();
        let cProfesor = fila.insertCell();
        let cEstudiantes = fila.insertCell();
        let cHorario = fila.insertCell();
        
        
        cNombre.innerHTML = listaGrupos[i]['nombre'];
        cLaboratorio.innerHTML = listaGrupos[i]['laboratorio'];
        cProfesor.innerHTML = listaGrupos[i]['profesor'];
        cEstudiantes.innerHTML = listaGrupos[i]['cantidad_de_estudiantes'];
        cHorario.innerHTML = listaGrupos[i]['horario'];
        
        
    }

};*/

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
    inputNombre.value = '';    
    inputLaboratorio.value = '';
    inputProfesor.value ='';
    inputCantidadEstu.value = 0;
    inputHorario.value = '';
}