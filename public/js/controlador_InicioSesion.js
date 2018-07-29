// Debe enlazar este script en su documento html
// Debe crear en html un botón  que tenga el id indicado aquí para llamar una función con él
let boton_inicio = document.querySelector("#btnRegistrar");
boton_inicio.addEventListener('click', obtener_credenciales_usuario);

// función que toma los datos del formulario inicio sesión
function obtener_credenciales_usuario() {

    let bError = false;
    let cedula = document.querySelector("#txtCedula").value;
    let contrasenna = document.querySelector("#txtContrasenna").value;


    bError = validar();

    if (bError == true) {
        swal({
            type: 'warning',
            title: 'Campos incompletos',
            text: 'Falta información, verifique los campos resaltados',
            confirmButtonText: 'Listo'
        });
    } else {
        let valido = validar_credenciales(cedula, contrasenna);

        if (valido) {
            console.log("Acceso permitido");
            redireccionarUsuario();
        }
        else {
            console.log("Accesso denegado");
            swal({
                type: 'warning',
                title: 'Acceso denegado',
                text: 'El usuario no se encuentra registrado',
                confirmButtonText: 'Listo'
            });
        }
    }

    function validar() {
        let bError = false;
        let input_cedula = document.querySelector("#txtCedula");
        let input_contrasenna = document.querySelector("#txtContrasenna");

        //Validacion de cedula
        //if (cedula.value == "") {
        if (document.querySelector("#txtCedula").value == "") {
            input_cedula.classList.add('input_error');
            bError = true;
        } else {
            input_cedula.classList.remove('input_error');
        }

        //Validación de contrasena
        if (document.querySelector("#txtContrasenna").value == '') {
            input_contrasenna.classList.add('input_error');
            bError = true;
        } else {
            input_contrasenna.classList.remove('input_error');
        }
        return bError;

    };

    /*
        let valido = validar_credenciales(cedula, contrasenna);
    
        if (valido) {
            console.log("Acceso permitido");
            redireccionarUsuario();
        } else {
            console.log("Acceso denegado");
        } */
}

// funcion encargada de enviar los datos al servicio de autenticación para ver si existen entre los usuarios registrados
function validar_credenciales(cedula, contrasenna) {
    let valido = autenticar_credenciales(cedula, contrasenna);
    return valido;

}


// debe crear un botón y asociarle un llamado a esta función para cerrar sesión
function cerrarSesión() {
    removerCredenciales();
    window.location = "";
}

// aquí se colocan las rutas a donde quiera guiar cada tipo de usuario en cada case con windows.location = "rutaDeHtml"
function redireccionarUsuario() {
    let usuarioAutenticado = getUsuarioAutenticado();

    window.location = "carrera_listar.html";

    switch (usuarioAutenticado.rol) {
        case 'Administrador':
            //admin
            console.log("admin autenticado");
            var tipoDeRol = "Administrador";
            localStorage.setItem('tipoDeRol', JSON.stringify(tipoDeRol));

            break;
        case 'Rectoría':
            // acciones de rectoria
            console.log("rectoria autenticado");
            var tipoDeRol = "Rectoría";
            localStorage.setItem('tipoDeRol', JSON.stringify(tipoDeRol));

            break;
        case 'Decanatura':
            // acciones de decanatura
            console.log("decanatura autenticado");
            var tipoDeRol = "Decanatura";
            localStorage.setItem('tipoDeRol', JSON.stringify(tipoDeRol));

            break;
        case 'AsistenteDecanatura':
            // acciones de asistente de decanatura
            console.log("asistente decanatura autenticado");
            var tipoDeRol = "AsistenteDecanatura";
            localStorage.setItem('tipoDeRol', JSON.stringify(tipoDeRol));

            break;

        case 'Profesor':
            // acciones de profesor
            console.log("profesor autenticado");
            var tipoDeRol = "Profesor";
            localStorage.setItem('tipoDeRol', JSON.stringify(tipoDeRol));

            break;

        case 'AsistenteProfesor':
            // acciones de asistente de profesor
            console.log("AsistenteProfesor");

            break;
        default:
            break;
    }
}
