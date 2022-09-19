const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces =document.querySelectorAll('.navegacion a');
const fecha= document.querySelector('.fecha');

console.log(hamburguesa);
document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
    fechaActual();
});


function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');
        
        //hace lo mismo
        /*if(navegacion.classList.contains('ocultar')){
            navegacion.classList.remove('ocultar');
        }else{
            navegacion.classList.add('ocultar');
        }*/
    });
}

function cerrarMenu(){
    enlaces.forEach(enlace=>{
        enlace.addEventListener('click',(e)=>{
            e.preventDefault();
            const seccion=document.querySelector(e.target.attributes.href.value);
            cambioSeccion(seccion);
            if(e.target.tagMame==='A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}
function fechaActual(){
    let fechaHoy= new Date().getFullYear();
    fecha.textContent=fechaHoy;
}

function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })
}