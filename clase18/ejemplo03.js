const empleados = [
    {
        nombre: 'Abru',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'pablo',
        trabajo: 'abogado'
    },
    {
        nombre: 'lucas',
        trabajo: 'maestro'
    },
    {
        nombre: 'maria',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'cata',
        trabajo: 'jardinera'
    },
    {
        nombre: 'martin',
        trabajo: 'desarrollador'
    }
]

const desarrollador = empleados.filter(
    empleado => empleado.trabajo == 'desarrollador'
)



const noDesarrollador = empleados.filter(
    empleado => empleado.trabajo !== 'desarrollador'
)


console.log(desarrollador)
console.log(noDesarrollador)

