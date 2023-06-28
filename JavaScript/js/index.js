function mostrarCuotas() {
    console.log('Todos nuestros coches se pueden abonar en cuotas')
    for (let i = 1; i <=12; i++) {
        console.log(i + ' cuota(s)sin interés')
    }
}

function mostrarPrecio(codigo) {
    switch (codigo) {
        case "1":
            console.log('El precio por día es de: $250us')
            break;
        case "2":
            console.log('El precio por día es de: $200us')
            break;
        case "3":
            console.log('El precio por día es de: $150us')
            break;  
        case "4":
            console.log('El precio por día es de: $300us')
            break; 
        default:
            console.warn('No entendimos tu selección')    
    }
}

function consultarAutos() {
    let respuesta = confirm ('¿Desea saber el precio de alguno de los coches?')
    if (respuesta === true) {
        let codigo = prompt('Ingresa el código numérico del coche deseado')
        mostrarPrecio(codigo)
        mostrarCuotas()
    } else {
        console.warn('No hay problema. Gracias por tu visita!')
    }
  }