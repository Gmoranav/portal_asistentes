var button_collapse = document.getElementById("button-nav-collapse");

button_collapse.addEventListener("click", function () {
    /*this.classList.toggle("active");*/

    let panel_menu = document.getElementById('panel-menu');

    let icon_menu = document.getElementById('hamburguer');

    if (panel_menu.className === "panel-menu panel-menu--hide") {
        panel_menu.className = "panel-menu";
    } else {
        panel_menu.className = "panel-menu panel-menu--hide";
    }

    if (icon_menu.className === "fas fa-bars") {
        icon_menu.className = "fas fa-times";
    } else {
        icon_menu.className = "fas fa-bars";
    }

});

function openDev(evt, devName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(devName).style.display = "flex";
    evt.currentTarget.className += " active";
}
