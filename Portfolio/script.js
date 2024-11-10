let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las skills
function efectoskills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let skills = document.getElementsByClassName("progreso");
        skills[0].classList.add("javascript");
        skills[1].classList.add("htmlcss");
        skills[2].classList.add("photoshop");
        skills[3].classList.add("Csharp");
        skills[4].classList.add("SQL");
        skills[5].classList.add("comunicacion");
        skills[6].classList.add("trabajo");
        skills[7].classList.add("creatividad");
        skills[8].classList.add("dedicacion");
        skills[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de skills
window.onscroll = function(){
    efectoskills();
} 