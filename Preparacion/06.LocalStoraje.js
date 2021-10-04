let puntos=45;
let puntuacion=puntos

//guardamos información
localStorage.setItem('puntuacion',puntuacion)

//cogemos informacion 
let cogerPuntuacion=localStorage.getItem('puntuacion')

//parseamos datos a JSON  para poder manipularlos 
let numeroParseado=JSON.parse(cogerPuntuacion)

//pasamos a string 
let personas=[

    {
        nombre:"manuel",
        apellidos:"Gomez",
        edad:35

    }
]

let parseoString=localStorage.setItem('listaPersonas',JSON.stringify(personas))
console.log(parseoString)

//con remove items eliminamos datos de la base de datos 
let lista=localStorage.removeItem('listaPersonas')

console.log(lista)                   

