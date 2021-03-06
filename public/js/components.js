//validacion_rol_dashboard();
validacion_rol_nav();

var button_collapse = document.getElementById("button-nav-collapse");
document.getElementById('hamburguer').className = "fas fa-times";

button_collapse.addEventListener("click", function () {
    /*this.classList.toggle("active");*/

    let panel_menu = document.getElementById('panel-menu');

    let icon_menu = document.getElementById('hamburguer');

    if (panel_menu.className === "panel-menu panel-menu--hide") {
        panel_menu.className = "panel-menu";
    } else {
        panel_menu.className = "panel-menu panel-menu--hide";
    }


    if (icon_menu.className === "fas fa-times") {
        icon_menu.className = "fas fa-bars";
    } else {
        icon_menu.className = "fas fa-times";
    }

});

let button_dropdown = document.getElementById("toggle-profile-dropdown");

button_dropdown.addEventListener("click", function () {
    /*this.classList.toggle("active");*/

    let panel_profile = document.getElementById('profile-info-dropdown');


    if (panel_profile.className === "profile-info profile-info--hide") {
        panel_profile.className = "profile-info";
    } else {
        panel_profile.className = "profile-info profile-info--hide";
    }

});

let boton_salirPortal = document.querySelector('#boton_salir');
boton_salirPortal.addEventListener('click', salir);

function salir() {
    window.location.href = "inicioSesion.html";
}

function redireccionListarAsistentes() {
    window.location = "solicitud-asistente_listar.html";
}
function redireccionBitacoraListar() {
    window.location = "bitacora_listar.html";
}
function redireccionBitacoraRegistrar() {
    window.location = "bitacora_registrar.html";
}
function redireccionSedes() {
    window.location = "sede_listar.html";
}
function redireccionPerfil() {
    window.location = "usuario_perfil.html";
}
function redireccionCarreraListar() {
    window.location = "carrera_listar.html";
}
function redireccionCarreraRegistrar() {
    window.location = "carrera_registrar.html";
}
function redireccionCursoListar() {
    window.location = "curso_listar.html";
}
function redireccionCursoRegistrar() {
    window.location = "curso_registrar.html";
}
function redireccionaDashboard() {
    window.location = "dashboard.html";
}
function redireccionGrupoListar() {
    window.location = "grupo_listar.html";
}
function redireccionGrupoRegistrar() {
    window.location = "grupo_registrar.html";
}
function redireccionLaboratorioListar() {
    window.location = "laboratorio_listar.html";
}
function redireccionLaboratorioRegistrar() {
    window.location = "laboratorio_registrar.html";
}
function redireccionPeriodoListar() {
    window.location = "periodo_listar.html";
}
function redireccionPeriodoRegistrar() {
    window.location = "periodo_registrar.html";
}
function redireccionSedeListar() {
    window.location = "sede_listar.html";
}
function redireccionSedeRegistrar() {
    window.location = "sede_registrar.html";
}
function redireccionSolicitudAsistenteListar() {
    window.location = "solicitud-asistente_listar.html";
}
function redireccionSolicitudAsistenteRegistrar() {
    window.location = "solicitud-asistente_registrar.html";
}
function redireccionUsuarioListar() {
    window.location = "usuario_listar.html";
}
function redireccionUsuarioRegistrar() {
    window.location = "usuario_registrar.html";
}

function validacion_rol_nav() {

    let tipoDeAcceso = JSON.parse(localStorage.getItem('tipoDeRol'));

    console.log(tipoDeAcceso);

    let menu_option_usuario = document.getElementById('hide-usuario');
    let menu_option_solicitud = document.getElementById('hide-solicitud');
    let menu_option_sede = document.getElementById('hide-sede');
    let menu_option_carrera = document.getElementById('hide-carrera');
    let menu_option_curso = document.getElementById('hide-curso');
    let menu_option_periodo = document.getElementById('hide-periodo');
    let menu_option_grupo = document.getElementById('hide-grupo');
    let menu_option_laboratorio = document.getElementById('hide-laboratorio');
    let menu_option_info_academica = document.getElementById('hide-info-academica');

    let button_usuario = document.getElementById('button-usuario');
    let button_solicitud = document.getElementById('button-solicitud');
    let button_sede = document.getElementById('button-sede');
    let button_carrera = document.getElementById('button-carrera');
    let button_curso = document.getElementById('button-curso');
    let button_periodo = document.getElementById('button-periodo');
    let button_grupo = document.getElementById('button-grupo');
    let button_laboratorio = document.getElementById('button-laboratorio');

    let link_usuario = document.getElementById('link-usuario');
    let link_solicitud = document.getElementById('link-solicitud');
    let link_sede = document.getElementById('link-sede');
    let link_carrera = document.getElementById('link-carrera');
    let link_curso = document.getElementById('link-curso');
    let link_periodo = document.getElementById('link-periodo');
    let link_grupo = document.getElementById('link-grupo');
    let link_laboratorio = document.getElementById('link-laboratorio');

    if (tipoDeAcceso === 'Administrador') {

        getDatosUsuario();
    }

    if (tipoDeAcceso === 'Rectoría' || tipoDeAcceso === 'Decanatura') {
        menu_option_usuario.className = "hidden";

        button_usuario.className = "hidden";
        link_usuario.className = "hidden";

        getDatosUsuario();
    }

    if (tipoDeAcceso === 'AsistenteDecanatura') {
        menu_option_usuario.className = "hidden";

        button_usuario.className = "hidden";
        link_usuario.className = "hidden";

        getDatosUsuario();
    }

    if (tipoDeAcceso === 'Profesor') {
        menu_option_usuario.className = "hidden";
        menu_option_sede.className = "hidden";
        menu_option_carrera.className = "hidden";
        menu_option_curso.className = "hidden";
        menu_option_periodo.className = "hidden";
        menu_option_grupo.className = "hidden";
        menu_option_laboratorio.className = "hidden";
        menu_option_info_academica.className = "hidden";

        button_usuario.className = "hidden";
        link_usuario.className = "hidden";
        button_sede.className = "hidden";
        link_sede.className = "hidden";
        button_carrera.className = "hidden";
        link_carrera.className = "hidden";
        button_curso.className = "hidden";
        link_curso.className = "hidden";
        button_periodo.className = "hidden";
        link_periodo.className = "hidden";
        button_grupo.className = "hidden";
        link_grupo.className = "hidden";
        button_laboratorio.className = "hidden";
        link_laboratorio.className = "hidden";

        getDatosUsuario();
    }

    if (tipoDeAcceso === 'AsistenteProfesor') {
        menu_option_usuario.className = "hidden";
        menu_option_sede.className = "hidden";
        menu_option_carrera.className = "hidden";
        menu_option_curso.className = "hidden";
        menu_option_periodo.className = "hidden";
        menu_option_grupo.className = "hidden";
        menu_option_laboratorio.className = "hidden";
        menu_option_solicitud.className = "hidden"
        menu_option_info_academica.className = "hidden";

        button_usuario.className = "hidden";
        link_usuario.className = "hidden";
        button_solicitud.className = "hidden";
        link_solicitud.className = "hidden";
        button_sede.className = "hidden";
        link_sede.className = "hidden";
        button_carrera.className = "hidden";
        link_carrera.className = "hidden";
        button_curso.className = "hidden";
        link_curso.className = "hidden";
        button_periodo.className = "hidden";
        link_periodo.className = "hidden";
        button_grupo.className = "hidden";
        link_grupo.className = "hidden";
        button_laboratorio.className = "hidden";
        link_laboratorio.className = "hidden";

        getDatosUsuario();
    }
};

function getCedulaUsuario() {
    return JSON.parse(localStorage.getItem("cedulaUsuario"));
};

function getDatosUsuario(){

    let nUsuario = JSON.parse(localStorage.getItem('nombre'));
    let cUsuario = JSON.parse(localStorage.getItem('correo'));
    let rUsuario = JSON.parse(localStorage.getItem('tipoDeRol'));

    document.getElementById('nombreUsuarioRegistrado').innerHTML = nUsuario;
    document.getElementById('correoUsuarioRegistrado').innerHTML = cUsuario;
    document.getElementById('rolUsuarioRegistrado').innerHTML = rUsuario;

    document.getElementById('nombreUsuarioRegistrado2').innerHTML = nUsuario;
    document.getElementById('correoUsuarioRegistrado2').innerHTML = cUsuario;
    document.getElementById('rolUsuarioRegistrado2').innerHTML = rUsuario;
}


