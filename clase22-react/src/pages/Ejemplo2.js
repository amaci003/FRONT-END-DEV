import { Ejemplo1Estado, Ejemplo2Estado } from "../components/estado/Estado"

import '../styles/estilos.css'
const Ejemplo2 = props =>{
    return (
        <div>
            <h1>Ejemplo de estados</h1>
            <Ejemplo1Estado/>
            <hr/>
            <Ejemplo2Estado/>
            <hr/>
            

        </div>
    )
}

export default Ejemplo2