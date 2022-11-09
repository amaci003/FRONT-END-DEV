import alumnos from '../data/alumnos.json'

const Ejemplo4 = props => {
    return (
        <>
            <h1>Hola soy la pag del Ej 4 Json</h1>
            <ul>
                {alumnos.map(alumno => (
                    <li>{alumno.nombre} {alumno.apellido} - edad: ({alumno.edad})</li>
                    /* El <br/> hace q los elementos bajen tiene q ir adelante del q quiero bajar*/
                )

                )}

            </ul>
        </>
    )
}


export default Ejemplo4