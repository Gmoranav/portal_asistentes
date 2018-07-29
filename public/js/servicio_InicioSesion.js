
// servicio encargado de autenticar a los usuarios
// debe enlazar este servicio al html que contenga su formulario de login

// esta función la llama el controlador y se encarga de verificar cedula por cedula registrado en el sistema contra el cedula y la contraseña que escribió el usuario
function autenticar_credenciales(cedula, contrasenna) {
    // debe enlazar el servicio de listar usuarios que ya tiene creado en su trabajo anteriormente y aquí debajo,
    // debe colocar la función que traiga toda la lista de usuarios
    let lista_usuarios = obtenerListaUsuarios();
    let valido = false;

    for (let i = 0; i < lista_usuarios.length; i++) {
        // debe validar contra los campos de cedula y contraseña en su lista de usuarios
        if (lista_usuarios[i]["cedula"] == cedula && lista_usuarios[i]["contrasenna"] == contrasenna) {
            setUsuarioSessionStorage(lista_usuarios[i]);
            valido = true;
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

