function hablar() {
  document.getElementById("voz").play();
}

function moverBoca() {
  let id = setInterval(frame, 250);
  let pos = 0;
  let index = 0;

  function frame() {
    if (pos == 4) {
      clearInterval(id);
    } else {
      /* code to change the element style */
      pos++;
      if (index == 0) {
        document.getElementById("imagen").style.visibility = "hidden";
        document.getElementById("imagen-abierta").style.visibility = "visible";
      } else {
        document.getElementById("imagen").style.visibility = "visible";
        document.getElementById("imagen-abierta").style.visibility = "hidden";
      }
      index = (index + 1) % 2;
    }
  }

}