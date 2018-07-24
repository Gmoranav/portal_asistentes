/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';

//cambiar el nombre Example por lo que se esté registrando, debe estar en singular
//cambiar los parametros manteniendo una s al principio cuando es texto y n cuando es numero
function registrarLaboratorio(psNombreLaboratorio, psCantidadEspacios){
    let respuesta = '';
    let peticion = $.ajax({

        //*cambiar example en el url por lo que se vaya a registrar, debe estar en singular
        url : 'http://localhost:4000/api/registrar_laboratorio',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            //cambiar los nombres por lo que se requiera
            //las variables son las que hay que usan en el archivo controlador
            //en la función imprimirListaExamples
            nombre_laboratorio : psNombreLaboratorio,
            cantidad_espacios : psCantidadEspacios
        }
    });
    
    peticion.done(function(response){
        respuesta = response;
    });

    peticion.fail(function(response){
        respuesta = response
    });

    return respuesta;
}

//cambiar Examples por lo que se vaya a listar. Debe estar en plural
function obtenerListaLaboratorios(){

    //cambiar Examples por lo que se vaya a listar. Debe estar en plural
    let listaLaboratorios = []; //THIS

    
    let peticion = $.ajax({
        //*cambiar examples en el url por lo que se vaya a registrar, debe estar en plural
        url : 'http://localhost:4000/api/listar_laboratorio',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
        listaLaboratorios = response;
      });
    
      peticion.fail(function(response){
        //listaLaboratorios = console.log('Importación fallida');
      });

      return listaLaboratorios;
    //cambiar Examples por lo que se vaya a listar. Debe estar en plural
};