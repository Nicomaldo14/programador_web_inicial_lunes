function calcularDescuento(precio, descuento) {
    const des= (precio * descuento) / 100;
    
    const preciocondescuento= precio - des;
    return preciocondescuento;
}
const precioprenda= 10500

const descuentohoy= 35

const preciofinal= calcularDescuento(precioprenda, descuentohoy);

console.log(preciofinal);
console.log(`El precio final de la prenda  es: ${preciofinal}`);
console.log(`El precio final de la prenda  es: ${precioprenda} pesos y vamos a aplicar el descuento 
    ${descuentohoy}%`);


