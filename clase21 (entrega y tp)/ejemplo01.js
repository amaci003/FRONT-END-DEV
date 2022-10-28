
const edad = parseInt(prompt('ingrese su edad', ''))



if (Number.isNaN(edad)) {
    document.write('la edad ingresada no es valida, hay que usar numeros')
}else if( edad >= 18){
    document.write(`podes manejar con ${edad}`)
}else{
    document.write(`no podes manejar con ${edad}`)
}

console.log(edad)


