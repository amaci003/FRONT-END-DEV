const numeros = [100, 56, 1254, 3, 89, 9]
var mayor = 0 /* valor inicial. mayor a  */

for(var i = 0; i<numeros.length; i++){
    if(numeros [i]>mayor ){
        mayor = numeros [i]
    }
}

console.log(`El mayor de ${numeros} es ${mayor}`)

