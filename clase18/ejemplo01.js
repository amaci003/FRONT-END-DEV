const datosUsuarios = [
    {
        nombre: 'Abril',
        password: 'abcd123'
    },
    {
        nombre: 'Augusto',
        password: '1235abc'

    },
    {
        nombre: 'Ana',
        password: '458lala'
    },
    {
        nombre: 'Lorena',
        password: 'juld444'

    },
    {
        nombre: 'Daniel',
        password: 'zzz57'
    }
]

const soloPassword = datosUsuarios.map(function(p){
    return p.password
})

console.log(soloPassword)