// 1️⃣ Obtener el elemento canvas desde el documento HTML por su ID
var canvas = document.getElementById("canvas");

// 2️⃣ Obtener el contexto de dibujo 2D del canvas
// El contexto define el tipo de dibujo que se realizará, en este caso, 2D
var ctx = canvas.getContext("2d");

// 3️⃣ Configurar el color de relleno para las figuras que se dibujarán
// En este caso, el color se establece como verde
ctx.fillStyle = "green";

// 4️⃣ Dibujar un rectángulo relleno en el lienzo
// fillRect(x, y, width, height)
// - x: posición horizontal desde el borde izquierdo del canvas (50 píxeles)
// - y: posición vertical desde el borde superior del canvas (10 píxeles)
// - width: ancho del rectángulo (400 píxeles)
// - height: alto del rectángulo (100 píxeles)
ctx.fillRect(50, 10, 700, 400);
