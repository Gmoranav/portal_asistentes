
// para generar password random. 
function generateRandomPassword() {
    let pw = Math.random().toString(36).substring(2, 10);
    return pw;
}

//funcion del controlador (paso1-> controlador, paso2-> servicio, paso3-> route, paso4-> api, paso5 -> model)
function recuperarContrasenna(pcedula){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/recuperar_contrasenna',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            cedula  : pcedula,
            contrasenna : generateRandomPassword()
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
       console.log("Usuario encontrado");
      });
    
      peticion.fail(function(response){
          respuesta = "Usuario no encontrado";
          console.log("Usuario NO encontrado");      
      });

      return respuesta;
}