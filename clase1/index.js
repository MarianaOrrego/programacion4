// *VAR VS LET VS CONST*

// var sobre escribe los valores, mostrando solo el ultimo asignado
var edad1 = 10
var edad1 = 20 //el ultimo valor

// let permite declarar una unica vez la variable, 
// no permite que se sobre escriba con la misma declaracion
// Si permite cambio de valor solo empleando su variable
let edad = 10
edad = 20

// *IF CON VAR Y LET*

//var no respeta el if y siempre tomara el ultimo valor asignado
var edad1 = 20 //el ultimo valor
if (true) {
    var edad1 = 30
    //console.log(edad1)
}
//console.log(edad1)

// let respeta las condicionales, funciones, etc. No sobre escribe valores
// no muestra errores
let a = 20
if (true) {
    let a = 30
    //console.log(a)
}
//console.log(a)

//CONST
// NO permite sobre escribir valores como let
// const también vive dentro del if de manera independiente como el let

const edad2 = 10
//edad2 = 20

if (true) {
    const edad2 = 20
    //console.log(edad2)
}
//console.log(edad2)

// AGREGAR VARIABLE A UN ARRAY

// VAR
0
var edades = [10, 20, 30]
var edades = [10, 20, 30, 40]

//console.log(edades)


// LET

let edades1 = [10, 20, 30]
edades1 = [10, 20, 30, 40]

//console.log(edades1)


// CONST

const edades3 = [15, 25, 35]
// para agregar un dato se emplea el metodo llamado 'push'
edades3.push(45)
//console.log(edades3)

// OBJETOS

// CONST: tanto en array como en objeto puede modificar, 
// agregar o retirar variables

const persona = {
    nombre: 'Pepito',
    edad: 20
}

persona.edad = 30
persona.pais = 'Colombia'

//console.log(persona)

// TIPOS MUTABLES E INMUTABLES

// STRING NO ES MUTABLE
const firstName = 'Rafael'

// Para generar una cambio debo crear una nueva variable y 
// efectuar el cambio en esta variable
const firstNameWithUpper = firstName.toUpperCase() //Mayuscula
//console.log(firstName, firstNameWithUpper)

// LIST ES MUTABLE

const list = []
// Permite agregar datos empleando sus metodos
list.push(1)

//console.log(list)

// FUNCION DE FLECHA

// Comparación entre función normal y función de flecha

// FUNCION NORMAL
function sumar(num1, num2) {
    //console.log(num1 + num2)
}

sumar(15, 30)

// FUNCION DE FLECHA

const sumar2 = (num1, num2) => {
    //console.log(num1 + num2)
}

sumar2(10, 50)

// Si tengo una sola variable no debo usar parentesis
const sumar3 = num1 => {
    //console.log(num1)
}
sumar3(70)

// Para retornar un valor se hace de la siguiente manera
const sumar4 = num1 => {
    return num1
}
//console.log(sumar4(80)) 

// Reducción de codigo
const sumar5 = num1 => num1
//console.log(sumar5(90))

// Retornar mensaje
const mensaje = nombre => ('Hola yo soy' + nombre)
const resultado = mensaje(' Mariana')
//console.log(resultado)

// Sumar parametros y retornar un mensaje
const sumatoria = (num1 = 60) => (
    'la suma es: ' + (num1 + 30)
)

let resultado2 = sumatoria()
//console.log(resultado2)

// RECORDATORIO: siempre se debe mandar el parametro en la función de flecha
// o en su defecto, dejar un valor definido

// TEMPLATE STRING

const numero = (num) => {
    return `el numero es: ${num}`
}
const result = numero(10)
//console.log(result)

// sumatoria

const numero1 = (num1, num2) => `el numero es: ${num1 + num2}`

const result1 = numero1(10, 800)
//console.log(result1)

// OBJETOS
// Se hace un objet de la siguiente manera

const mascota = {
    nombre: 'Tom',
    edad10: 5,
    tipo: 'Perro',
    razas: ['pincher', 'pitbull']
}
console.log(mascota)

// Para agregar una nueva propiedad, hacemos lo siguiente:
mascota.peso = 10
mascota.razas.push('dalmata') // agregar nuevos datos
//console.log(mascota)
//console.log(mascota.peso)

// Destructuring Objects
const nombreMascota = mascota.nombre 
//console.log(nombreMascota)

// desestructuración de los datos a partir de mi objeto
const { peso, razas, edad10} = mascota
//console.log("el peso es:", peso, "las razas son:", razas, "su edad es:", edad10)


// ARRAY DE OBJETOS
// Podemos tener un objeto dentro de otro y se van a comportar 
// de igual manera

const web = {
    nombre: 'twitter',
    link :{
        url: 'twitter.com'
    },
    redesSociales : {
        instagram :{
            enlace: 'instagram.com',
            nombre: 'Mariana'
        },
        facebook :{
            enlace: 'facebook.com',
            nombre: 'Mariana de fb'
        }
    }
}

// Para imprimir un objeto interno se hace de la siguiente forma, 
// siguiento la estructura de nuestro objeto

const nombreInsta = web.redesSociales.instagram.nombre
//console.log(nombreInsta)

// desestructuracion
const { nombre } = web.redesSociales.facebook
//console.log(nombre)

// FETCH
// Nos proporciona una interfaz JavaScript para acceder y manipular
// partes del canal HTTP, tales como peticiones y respuestas

fetch('https://pokeapi.co/api/v2/pokemon')
// Promesa
    .then(res => res.json()) // Promesa en formato JSON, espera leer los datos
    // Para ver los datos, se hace lo siguiente:
    .then( data => {
        // el results lo visualizamos en la pagina de la API
        // es el que contiene el listado de pokemones
        //console.log(data.results) 

        // para recorrer un array emplearemos el metodo forEach
        data.results.forEach(element => {
            //console.log(element.name)
        })
    })

// ASYNC & AWAIT
// Async es una promesa en la cual se obtiene una funcion asincrona,
// la función NO detiene la compilación del codigo
// NOTA: Async solo funciona dentro de una funcion asincrona

const obtenerPokemons = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon') // esperar la petición GET
        const data = await res.json()
        //console.log(data.results)
    
    } catch (error) {
        //console.log(error)
    }
}

obtenerPokemons()

// METODO map()
// Crea un array nuevo cuando se llama la función indicada

const obtenerPokemons1 = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon') // esperar la petición GET
        const data = await res.json()

        const arrayNombres = data.results.map( poke => `<li>${poke.name}</li>`)

        const HTMLResponse = document.getElementById('pokemon')
        HTMLResponse.innerHTML = `<ul>${arrayNombres}</ul>`
    
    } catch (error) {
        console.log(error)
    }
}

obtenerPokemons1()

// METODO filter()

const obtenerPokemons2 = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon') // esperar la petición GET
        const data = await res.json()

        const filter = data.results.filter( poke => poke.name === 'charizard')
        console.log(filter)
    
    } catch (error) {
        console.log(error)
    }
}

obtenerPokemons2()