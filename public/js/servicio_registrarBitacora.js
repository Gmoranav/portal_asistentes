'use strict';

function agregar_registros(bitacoraId, sFecha, sHoraInicio, sHoraFin, sDescripcion){
    let respuesta = '';
    let peticion = $.ajax({


        
        url : 'http://localhost:4000/api/agregar_registros',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            _id : bitacoraId,
            fecha  : sFecha,
            hora_inicio : sHoraInicio,
            hora_fin : sHoraFin,
            descripcion : sDescripcion,
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
        respuesta = response;
      });

      return respuesta;
}

function modificar_bitacoras(_id, sFecha, sHoraInicio, sHoraFin, sDescripcion, pestado){

        let respuesta = '';
        let peticion = $.ajax({


        
        url : 'http://localhost:4000/api/modificar_bitacora',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            _id : _id,
            sFecha  : sFecha,
            hora_inicio : sHoraInicio,
            hora_fin : sHoraFin,
            descripcion : sDescripcion,
            estado : pestado,
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
        respuesta = response;
      });

      return respuesta;
}


function obtenerListaBitacoras(){

    let listaBitacoras = [];

    let peticion = $.ajax({
 
        url : 'http://localhost:4000/api/listar_bitacoras',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{ 
        }
      });
    
      peticion.done(function(response){
        listaBitacoras = response;
      });
    
      peticion.fail(function(response){
        listaBitacoras = response;
      });

    return listaBitacoras;
}