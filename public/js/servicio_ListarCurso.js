'use strict';

function obtenerCursos(){

    let llenarCursos = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_cursos',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    }); 


    peticion.done(function (response) {
        llenarCursos = response;
        console.log("envio exitoso");
    });

    peticion.fail(function (response) {
        console.log("envío no exitoso");
        console.log(response);
    });

    return llenarCursos;


};

function obtener_curso_por_id(p_id){

    let llenarCursos = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/buscar_curso_id',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

            _id: p_id
        }
    }); 


    peticion.done(function (response) {
        llenarCursos = response;
        console.log("envio exitoso");
    });

    peticion.fail(function (response) {
        console.log("envío no exitoso");
        console.log(response);
    });

    return llenarCursos;





}