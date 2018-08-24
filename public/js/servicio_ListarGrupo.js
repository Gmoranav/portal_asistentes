function obtenerListaGrupos(){

    //cambiar Examples por lo que se vaya a listar. Debe estar en plural
    let listaGrupos = []; //THIS

    
    let peticion = $.ajax({
        //*cambiar examples en el url por lo que se vaya a registrar, debe estar en plural
        url : 'http://localhost:4000/api/listar_grupos',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
        listaGrupos = response;
      });
    
      peticion.fail(function(response){
        //listaGrupos = console.log('Importación fallida');
      });

      return listaGrupos;
    //cambiar Examples por lo que se vaya a listar. Debe estar en plural
};

function eliminar_grupo(p_id){
  let respuesta = '';
  let peticion = $.ajax({
      url : 'http://localhost:4000/api/eliminar_grupo',
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