
let ubicacionPrincipal = window.pageYOffset;
  AOS.init();

window.addEventListener("scroll",function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top ="0px";
    }else
    {
        document.getElementsByTagName("nav")[0].style.top ="-100px";

    }
    ubicacionPrincipal = desplazamientoActual;
});

//menu
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let bandera = true;
document.querySelectorAll(".bars")[0].addEventListener("click",function(){
    if(bandera){
        document.querySelectorAll(".bars")[0].style.color = "#fff";
        bandera = false;
    }else{
        document.querySelectorAll(".bars")[0].style.color = "#000";
        bandera = true;
    }
    enlacesHeader.classList.toggle("menudos");
});