var texto1 = document.getElementById("supe_izq");
var texto2 = document.getElementById("supe_der");
var texto3 = document.getElementById("infe_izq");
var texto4 = document.getElementById("infe_der");

var textoc1 =document.getElementById("centro_izq");
var textoc2 =document.getElementById("centro_der");
var textocm1 =document.getElementById("centro_mediosup");
var textocm2 =document.getElementById("centro_medioinf");

var color1=document.getElementById("todos_colores");

var boton = document.getElementById("botoncito");
var botonborrartodo= document.getElementById("boton_borrar");

botonborrartodo.addEventListener("click", borrarporclick);
boton.addEventListener("click", dibujoPorClick1);
boton.addEventListener("click", dibujoPorClick2);
boton.addEventListener("click", dibujoPorClick3);
boton.addEventListener("click", dibujoPorClick4);

boton.addEventListener("click", dibujoPorClickc1);
boton.addEventListener("click", dibujoPorClickc2);
boton.addEventListener("click",dibujoPorClickcm1);
boton.addEventListener("click",dibujoPorClickcm2);

var g = document.getElementById("imagen_grande");
var anchog = g.width;
var altog =g.height;
var hoja = g.getContext("2d");

function dibujarLineag(color, xinicial, yinicial, xfinal, yfinal,)
{
  hoja.beginPath();
  hoja.strokeStyle = color;
  hoja.moveTo(xinicial, yinicial);
  hoja.lineTo(xfinal, yfinal);
  hoja.stroke();
  hoja.closePath();
}

function borrarporclick()
{
texto1.value="";
texto2.value="";
texto3.value="";
texto4.value="";
textoc1.value="";
textoc2.value="";
textocm1.value="";
textocm2.value="";
hoja.clearRect(0,0,anchog,altog);
}

function colores()
{
  if (color1.value == 1)
  {
    color="yellow";
  }
  else if (color1.value == 2)
  {
    color="blue";
  }
  else if (color1.value == 3)
  {
    color="red";
  }
  else if (color1.value == 4)
  {
    color="purple";
  }
  else if (color1.value == 5)
  {
    color="aquamarine";
  }
  else if (color1.value == 6)
  {
    color="violet";
  }
  else if (color1.value == 7)
  {
    color="orange";
  }
  else
    {
      color="fuchsia";
    }
}

function dibujoPorClick1()
{
  var lineas = parseInt(texto1.value);
  var espacio = anchog/lineas;
  var xi,yf
  colores(color1);
  var colorcito= color;

for (l=0; l<lineas; l++)
{
  xi= anchog-(espacio * l);
  yf= espacio * (l+1);
  dibujarLineag(colorcito,xi,0,0,yf);
  console.log("linea " + 1);
  dibujarLineag(colorcito,1,anchog-1,1,1);
  dibujarLineag(colorcito,1,1,anchog-1,1);
  texto1.value="";
}
}

function dibujoPorClick2()
{
  var lineas = parseInt(texto2.value);
  var espacio = anchog/lineas;
  var anchito = anchog-espacio;
  var xi,yf
  colores(color1);
  var colorcito =color;

for (l=0; l<lineas; l++)
{
  xi= anchito-(espacio * l);
  yf= anchog-(espacio * l);
  dibujarLineag(colorcito,xi,0,anchog,yf);
  console.log("linea " + 1);
  dibujarLineag(colorcito,1,1,anchog-1,1);
  dibujarLineag(colorcito,anchog-1,1,anchog-1,anchog-1);
  texto2.value="";
}
}

function dibujoPorClick3()
{
  var lineas = parseInt(texto3.value);
  var espacio = anchog/lineas;
  var yi,xf
  colores(color1);
  var colorcito =color;

for (l=0; l<lineas; l++)
{
  yi= espacio * l;
  xf= espacio * (l+1);
  dibujarLineag(colorcito,0,yi,xf,anchog);
  console.log("linea " + 1);
  dibujarLineag(colorcito,1,1,1,anchog-1);
  dibujarLineag(colorcito,1,anchog-1,anchog-1,anchog-1);
  texto3.value="";
}
}

function dibujoPorClick4()
{
  var lineas = parseInt(texto4.value);
  var espacio = anchog/lineas;
  var anchito = anchog-espacio;
  var xi,yf
  colores(color1);
  var colorcito =color;

for (l=0; l<lineas; l++)
{
  xi= espacio * l;
  yf= anchito-(espacio * l);
  dibujarLineag(colorcito,xi,anchog,anchog,yf);
  console.log("linea " + 1);
  dibujarLineag(colorcito,1,anchog-1,anchog-1,anchog-1);
  dibujarLineag(colorcito,anchog-1,anchog-1,anchog-1,1);
  texto4.value="";
}
}

function dibujoPorClickc1()
{
  var lineas = parseInt(textoc1.value);
  var mitadancho = anchog/2;
  var mitadalto= altog/2;
  var espacioancho = mitadancho/lineas;
  var xf,yf;
  colores(color1);
  var colorcito =color;

for (l=0; l<lineas; l++)
{
  xf= mitadancho;
  yf= 125+(espacioancho*l);
  dibujarLineag(colorcito,125,mitadalto,xf,yf);
  console.log("linea " + 1);
  dibujarLineag(colorcito,mitadancho,125,125,mitadalto-1);
  dibujarLineag(colorcito,125,mitadalto-1,mitadancho-1,altog-125);
  textoc1.value="";
}
}

function dibujoPorClickc2()
{
  var lineas = parseInt(textoc2.value);
  var mitadancho = anchog/2;
  var mitadalto= altog/2;
  var espacioancho = mitadancho/lineas;
  var xf,yf
  colores(color1);
  var colorcito =color;

for (l=0; l<lineas; l++)
{
  xf= mitadancho;
  yf= 125+(espacioancho*l);
  dibujarLineag(colorcito,375,mitadalto,xf,yf);
  console.log("linea " + 1);
  dibujarLineag(colorcito,mitadancho,125,375,mitadalto-1);
  dibujarLineag(colorcito,375,mitadalto-1,mitadancho-1,altog-125);
  textoc2.value="";
}
}

function dibujoPorClickcm1()
{
var lineas = parseInt(textocm1.value);
var espacio = anchog/lineas;
var mitadancho = anchog/2;
var xf,yf
colores(color1);
var colorcito =color;

for (l=0; l<lineas; l++)
{
  xf=espacio* l;
  yf= altog;
  dibujarLineag(colorcito,mitadancho,0,xf,yf);
  console.log("linea " + 1);
  dibujarLineag(colorcito,1,anchog-1,anchog-1,anchog-1);
  textocm1.value="";
}
}

function dibujoPorClickcm2()
{
var lineas = parseInt(textocm2.value);
var espacio = anchog/lineas;
var mitadancho = anchog/2;
var xf,yf
colores(color1);
var colorcito =color;

for (l=0; l<lineas; l++)
{
  xf=espacio* l;
  yf= 0;
  dibujarLineag(colorcito,mitadancho,altog,xf,yf);
  console.log("linea " + 1);
  dibujarLineag(colorcito,1,1,anchog-1,1);
  textocm2.value="";
}
}
