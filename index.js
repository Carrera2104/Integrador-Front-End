/*------------Variables Globales------------*/
var ticket = 200;
var descuento_estudiante = 0.2;
var descuento_trainee = 0.5;
var descuento_junior = 0.85;
var cantidad_ingresada = document.getElementById("cantidad");
var resumen = document.getElementById("resumen");
var reset = document.getElementById("reset");
var categoria_ingresada = document.getElementById("categoria");
var pago = document.getElementById("pago");

/*------------Función------------*/
function obtener(){
    let cantidad = parseInt(cantidad_ingresada.value);
    let categoria = categoria_ingresada.options[categoria_ingresada.selectedIndex].text;
    let total = cantidad * ticket;
    console.log(total);
    switch (categoria){
        case "Estudiante":
            total = total * descuento_estudiante;
            break;
        case "Trainee":
            total = total * descuento_trainee;
            break;
        case "Junior":
            total = total * descuento_junior;
            break;
    }
    pago.innerHTML = "Total a Pagar: $" + total;
}

/*------------A ejecutar------------*/
resumen.addEventListener("click", obtener);
reset.addEventListener("click", ()=> pago.innerHTML = "Total a Pagar: $");

