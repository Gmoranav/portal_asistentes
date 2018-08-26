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


function obtener_laboratorio_por_id (p_id) {

    //cambiar Examples por lo que se vaya a listar. Debe estar en plural
    let laboratorio_por_ID = []; //THIS

    
    let peticion = $.ajax({
        //*cambiar examples en el url por lo que se vaya a registrar, debe estar en plural
        url : 'http://localhost:4000/api/buscar_laboratorio_por_id',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
          _id : p_id
        }
      });
    
      peticion.done(function(response){
        laboratorio_por_ID = response;
      });
    
      peticion.fail(function(response){
        //laboratorio_por_ID = console.log('Importación fallida');
      });

      return laboratorio_por_ID;
    //cambiar Examples por lo que se vaya a listar. Debe estar en plural

}

function desactivar_laboratorio(p_id, pestado){
  let respuesta = '';
  let peticion = $.ajax({
      url : 'http://localhost:4000/api/desactivar_laboratorio',
      type : 'post',
      contentType : 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async : false,
      data:{
          _id: p_id,
          estado : pestado
      }
    });
  
    peticion.done(function(response){
     respuesta = response;
    });
  
    peticion.fail(function(response){
     
    });

    return respuesta;
};
