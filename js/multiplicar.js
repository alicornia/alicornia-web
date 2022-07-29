var numero1 = 5, numero2 = 1;
var puntuacion = 0;

window.onload = init;  
function comprobarResultado() {
    if(document.getElementById("resultado").value == numero1*numero2) {
        mostrarMensaje("¡Muy bien!", "success");
        document.getElementById("resultado").value="";
        nuevosNumeros();
       actualizarPuntuacion(puntuacion+1);
    } else {
        mostrarMensaje("A la próxima te saldrá", "danger");
        actualizarPuntuacion(puntuacion-1);
    }
}

function mostrarMensaje(mensaje, cssClass) {
    document.getElementById("mensaje").textContent = mensaje;
    document.getElementById("mensaje").classList.remove("alert-success");
    document.getElementById("mensaje").classList.remove("alert-danger");
    document.getElementById("mensaje").classList.add("alert-" + cssClass);
    document.getElementById("mensaje").style.display="block";
    setTimeout(function(){
        document.getElementById('mensaje').style.display = "none";
        },5000);

}

function muestraValores() {
    document.getElementById("numero1").innerText = numero1;
    document.getElementById("numero2").innerText = numero2; 
}

function actualizarPuntuacion(valor) {
    puntuacion = valor;
    document.getElementById("puntuacion").innerText = puntuacion;
}

function nuevosNumeros() {
   numero1 = Math.floor(Math.random() * 10 + 1);
   numero2 = Math.floor(Math.random() * 10 + 1);
   muestraValores();
   reiniciar();
}

function init(){
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
    muestraValores();
    cronometrar();
}         
function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
}
function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    /*if (m>59){h++;m=0;}
    if (h>24){h=0;}*/
    if(s > 20) {
        mostrarMensaje("Se acabó el tiempo", "danger");
        actualizarPuntuacion(puntuacion-1);
        nuevosNumeros();
    }

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function reiniciar(){
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00:00";
    h=0;m=0;s=0;
    cronometrar();
}