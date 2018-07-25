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