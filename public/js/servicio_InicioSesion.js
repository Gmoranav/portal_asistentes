
// servicio encargado de autenticar a los usuarios
// debe enlazar este servicio al html que contenga su formulario de login

// esta función la llama el controlador y se encarga de verificar cedula por cedula registrado en el sistema contra el cedula y la contraseña que escribió el usuario
function autenticar_credenciales(cedula, contrasenna) {
    // debe enlazar el servicio de listar usuarios que ya tiene creado en su trabajo anteriormente y aquí debajo,
    // debe colocar la función que traiga toda la lista de usuarios
    let lista_usuarios = obtenerListaUsuarios();
    let valido = [];
    valido [0] = false;
    valido [1] = false;

    for (let i = 0; i < lista_usuarios.length; i++) {
        // debe validar contra los campos de cedula y contraseña en su lista de usuarios
        if (lista_usuarios[i]["cedula"] == cedula && lista_usuarios[i]["contrasenna"] == contrasenna) {
            console.log(lista_usuarios[i]["cedula"]);
            console.log(lista_usuarios[i]["contrasenna"]);
            setUsuarioSessionStorage(lista_usuarios[i]);

            //este ID lo utilizo para modificar el password del usuario
            localStorage.setItem('idUsuario', JSON.stringify(lista_usuarios[i]["_id"]));
            localStorage.setItem('correo', JSON.stringify(lista_usuarios[i]["correo"]));
            localStorage.setItem('nombre', JSON.stringify(lista_usuarios[i]["nombre"]));
        

            valido [0] = true;
            if (lista_usuarios[i]["ingresos"] == 0){
                valido [1] = true;
            }
            return valido;
        }
    }

    return valido;
}


// esta función llena el sessionStorage con el usuario que se encuentra autenticado. El sessionStorage es idéntico al localStorage 
// solo que este es utilizado para guardar usuarios únicamente
function setUsuarioSessionStorage(infoUsuario) {
    console.log("Usuario Autenticado");
    console.log(infoUsuario);
    sessionStorage.setItem("UsuarioAutenticado", JSON.stringify(infoUsuario));
    console.log(JSON.parse(sessionStorage.getItem("UsuarioAutenticado")));
}


// esta función limpia el sessionStorage, es invocada desde el controlador en la función cerrar sesión
function removerCredenciales() {
    sessionStorage.clear();
}

function getUsuarioAutenticado() {
    return JSON.parse(sessionStorage.getItem("UsuarioAutenticado"));
}

function obtener_usuario_por_id(p_id){
    let usuario = '';

    let peticion = $.ajax({
 
        url : 'http://localhost:4000/api/buscar_usuario_id',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{ 
          _id: p_id
        }
      });
    
      peticion.done(function(response){
        usuario = response;
      });
    
      peticion.fail(function(response){
        usuario = response;
      });

    return usuario;
}
