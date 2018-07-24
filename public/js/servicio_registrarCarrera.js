'use strict';
/**
 * let lista_carrera =[];
 */

function registrar_carrera(psCodigoCarrera, psNombreCarrera, pnCreditosTotales, psFechaCreacion, psltSede , psAcreditacion){

    let respuesta = '';
    let peticion = $.ajax({

        url : 'http://localhost:4000/api/registrar_carrera',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            codigo_carrera : psCodigoCarrera,
            nombre_carrera : psNombreCarrera,
            creditos_totales : pnCreditosTotales,
            fecha_creacion : psFechaCreacion,
            slt_sede : psltSede,
            acreditacion : psAcreditacion

        }

    });

    peticion.done(function(response){
        respuesta = response;
        console.log('envio exitoso');
       });
     
       peticion.fail(function(response){
         respuesta = response;
         console.log('envio no exitoso');
       });
 
       return respuesta;


};

/***
 * let nuevaCarrera = [];
    nuevaCarrera.push(psCodigoCarrera, psNombreCarrera, pnCreditosTotales, psFechaCreacion, sltSede);

    lista_carrera.push(nuevaCarrera);
 */
