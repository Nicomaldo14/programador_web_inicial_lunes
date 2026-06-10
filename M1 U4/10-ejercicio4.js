const numeros=[235,50,3,14,155,67,89,90,100,200]    
let mayor = numeros[0]
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }
}
console.log(`El número mayor es: ${mayor}`)