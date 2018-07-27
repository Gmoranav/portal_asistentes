'use strict';
//la siguiente constante hace referencia al archivo de periodos.model
const periodos_model = require ('./periodos.model');

//se va a exportar REGISTRAR (funcion) - debe recibir la peticion y la respuesta
module.exports.registrar = function (req, res){
    let nuevo_periodo = new periodos_model({
        // estas propiedades vienen del periodos.model.js 
        nombre_periodo : req.body.nombre_periodo, 
        estado_periodo : req.body.estado_periodo,
    });

    nuevo_periodo.save(function(error){

        if(error){
            res.json({
                success : false,
                msj : 'El periodo no se registró : ' + error
          });
        }else{
            res.json({
                success : true,
                msj : 'El periodo se registró éxitosamente'
        });
        }
    });
};


//FUNCION PARA LISTAR LOS DATOS: 
module.exports.listar_periodos = function(req, res){
    //la palabra 'find()' nos permite devolver toda la informacion de la base de datos
    //el .sort lo que hace es que devuelve los valores de manera ordenada: por titulo de modo ascendente 'asc'
    libroModel.find().sort({titulo : 'asc'}).then(
          // despues de buscar todos los periodos va a ejecutar la siguente funcion (guarda los resultados d la busqueda en una variable) : 
          function(periodos){
             res.send(periodos);
          }
    );
};
