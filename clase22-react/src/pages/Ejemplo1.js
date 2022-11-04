import { Ejemplo1Props, Ejemplo2Props, Ejemplo3Props, Ejemplo4Props, Ejemplo5Props } from "../components/layout/props/Props"
const nombre2= 'Pablo'
const lista = ['manzana', 'banana','pera','frutillas']
const mostrarValor = valor =>{
    console.log(valor)
}

const Ejemplo1 = props => {
    return (
        <div>
            <h1>hola soy la pagina ejemplo01</h1>
            <Ejemplo1Props nombre = 'Abril'/>
            <Ejemplo1Props nombre = {nombre2}/>
            <hr/>
            <Ejemplo2Props elementos = {lista}/>
            <hr/>
            <Ejemplo3Props titulo= "La Noticia" subtitulo= "Soy el subtitulo de la noticia" cuerpo= "Soy el cuerpo"/>
            <hr/>
            <Ejemplo4Props cambiarValor={mostrarValor}/>
            <hr/>
            <Ejemplo5Props eventoClick={mostrarValor}/>


        </div>
    )
}



export default Ejemplo1
