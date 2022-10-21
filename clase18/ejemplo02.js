const alumnos = [
    {
        nombre: 'Abril',
        edad: 10
    },
    {
        nombre: 'pedro',
        edad: 3
    },
    {
        nombre: 'julian',
        edad: 5
    },
    {
        nombre: 'uriel',
        edad: 2
    },
    {
        nombre: 'carlos',
        edad: 4
    },
    {
        nombre: 'miriam',
        edad: 3
    }
]

const chicos = alumnos.filter(
    alumno => alumno.edad<=4
)

console.log(chicos)

for(let i=0; i<chicos.length; i++){
    document.write(`<p>nino: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}. </p>`)
}

