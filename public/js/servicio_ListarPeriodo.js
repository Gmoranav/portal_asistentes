/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';

function obtenerListaPeriodos() {
  let listaPeriodos = [];
  let peticion = $.ajax({

    url: 'http://localhost:4000/api/listar_periodos',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType: 'json',
    async: false,
    data: {

    }
  });

  peticion.done(function (response) {
    listaPeriodos = response;
  });

  peticion.fail(function (response) {
    listaPeriodos = response;
  });

  return listaPeriodos;
}


function obtener_periodo_por_id(p_id) { //funcion viene del controlador
  let periodo = '';
  let peticion = $.ajax({

    url: 'http://localhost:4000/api/buscar_periodo_id',  //ruta viene del periodo.api
    type: 'post',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType: 'json',
    async: false,
    data: {
      _id: p_id
    }
  });

  peticion.done(function (response) {
    periodo = response;
  });

  peticion.fail(function (response) {

  });

  return periodo;
};