function obtener_laboratorio_por_id (p_id) {

    //cambiar Examples por lo que se vaya a listar. Debe estar en plural
    let listaLaboratorios = []; //THIS

    
    let peticion = $.ajax({
        //*cambiar examples en el url por lo que se vaya a registrar, debe estar en plural
        url : 'http://localhost:4000/api/buscar_laboratorio_por_id',
        type : 'post',
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

}

function eliminar_laboratorio(p_id){
  let respuesta = '';
  let peticion = $.ajax({
      url : 'http://localhost:4000/api/eliminar_laboratorio',
      type : 'post',
      contentType : 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async : false,
      data:{
          _id: p_id
      }
    });
  
    peticion.done(function(response){
     respuesta = response;
    });
  
    peticion.fail(function(response){
     
    });

    return respuesta;
};
