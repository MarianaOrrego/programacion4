// # OPERADORES DE ASIGNACIÓN
// Un operador de asignación asigna un valor
// al operando de la izquierda basado en el valor 
// del operando de la derecha

// Asignación de adición 
let numero = 10 
numero += 5 // Le voy a sumar 5 a mi variable numero
// numero  = numero + 5
//document.write(numero)


// Asignación de sustracción
numero -= 8
// numero = numero - 8
// document.write(numero)

// Asignación de multiplicación 
numero *= 10
// numero = numero * 10
// document.write(numero)

// Asignación de división
numero /= 7
// numero = numero * 10
// document.write(numero)

// Asignación de residuo
numero %= 8
// document.write(numero)

// Asignación de exponenciación
numero **= 3
// document.write(numero)


// OPERADORES ARITMETICOS
// Los operadores aritmeticos toman valores numericos 
// ya sean literales o variables, sus operandos retornan
// un valor numerico unico. 

// Incremento y decremento 
// Agregar o quitar uno (1) a su operando. 
// Se utiliza como prefijo (++x) o (--x)
let numero1 = 10
// document.write(++numero1)

// Se utiliza como sufijo (x++) o (x--)
//numero1--
//resultado  = numero1--
// document.write(resultado)

// Negacion unaria
// Devuelve la negación de su operando
// document.write(-numero1)

// Positivo unario
// Intenta convertir el operando en un numero si aun no lo es

let numero3 = "300"
// document.write(+numero3)


// CONCATENACION
// Para sumar un string se hace de la siguiente manera

saludo = "Bienvenido, "
pregunta = "¿Cómo estás?"

frase = saludo + pregunta 
// document.write(frase)


// Forzar un string
num1 = 8
num2 = 10

frase2 = "" + num1 + num2
// document.write(frase2)
//NOTA: cuando en una operación se agrega un string vacio
// se fuerza a toda la operación a convertirse en una 
// cadena de texto

// concat
// Debe contener al menos un string para que muestre 
// la información a modo de cadena de texto
// frase3 = num1.concat(num2)
// document.write(frase3)

// Template string
nombre = "Pepito"
edad = 15

informacion = `${nombre} tiene ${edad}  años` 
// document.write(informacion)

// OPERADORES DE COMPARACIÓN
// Un operador de comparación, compara dos expresiones
// y devuelve un valor boolean, este valor va a representar
// la relación de sus valores

// Igual
// Devuelve 'true' si los operandos son iguales

let valor1 = 13
let valor2 = 23

//document.write(valor1 == valor2)

// No es igual
// Devuelve 'true' si los operadores no son iguales

// document.write(valor1 != valor2)

// Estrictamente
// Devuelve 'true' si los operandos son iguales y 
// del mismo tipo

// document.write(valor1 === valor2)

// Desigualdad estricta
// Devuelve 'true' si los operandos SON DEL MISMO TIPO pero
// NO SON IGUALES o SON DE DIFERENTE TIPO
// document.write(valor1 !== valor2)

// Mayor que
//document.write(valor1 > valor2)

// Mayor o igual que 
//document.write(valor1 >= valor2)

// Menor que
// document.write(valor1 < valor2)

// Menor o igual que 
// document.write(valor1 <= valor2)

// OPERADORES LOGICOS
// Los operadores logicos nos devuelven un resultado
// a partir de que se cumpla (o no) una condición,
// su resultado es booleano y sus operandos son valores
// logicos

// AND logico
// Devuelve 'true' si ambos operandos son 'true', de
// lo contrario devuelve 'false'

let gato = false
let perro = true

let animales = gato && perro
// document.write(animales)

// OR logico
// Si ambos son true, retorna true
// Si uno de los dos es true, retorna true
// Si ambos son false, retorna flase
let animales2 = gato || perro
// document.write(animales2)

// NOT logico
// Devuelve un false si su operando existe (true) y devuelve un true
// si su operando no existe (false)

let animales3 = !gato
// document.write(animales3)

// CAMEL CASE
// Se establece que la primera letra de la palabra es 
// minuscula y la segunda palabra tendrá mayuscula

nombreCompleto = 'Mariana Orrego'

// CONDICIONALES

// if 
// La condición solo se ejecuta cuando sea 'true'

// if (30 < 20){
//     document.write("Se cumple")
// }

// // else if 
// else if (30 === 20){
//     document.write("Se cumple")
// }

// // else
// else {
//     document.write("No se cumple")

// }

//EJERCICIO
// Tres chicos entran a una heladeria a comprar helado
// pero hay un problema, los precios no estan alineados
// a los helados, ellos quieren comprar el helado mas caro
// que puedan con su presupuesto personal. 
// Casa uno tiene distintas cantidades de dinero y se tendrá
// una tabla de valores para los precios de los helados

// Presupuesto
// Roberto cuenta con 15000
// Pepe tiene 25000
// Sara tiene  30000

// Precio de los helados
// Helado de agua a 6000
// Helado de crema a 10000
// Galleta de helado a 16000
// Postre de helado y brownie a 16000
// Caja de helado pequeña a 22000
// Caja de helado grande a 30000

// Crear soluciones
// 1. Se debe pedir el ingreso del presupuesto de cada uno, mostrar 
// el helado mas caro dentro de ese presupuesto (promp())
// 2. Si hay dos o mas helados que entren en el presupuesto, se debe
// motrar la información
// 3. Se debe indicar cuanto es la devuelta (en el caso de que sobre)


// SOLUCIÓN

dineroRoberto = prompt("¿Cuánto dinero tienes, Roberto?")
dineroRoberto = parseInt(dineroRoberto)

if( dineroRoberto >= 6000 && dineroRoberto < 10000){
    document.write("Compra un helado de agua")   
    alert("Te sobra " + dineroRoberto - 6000)
} else if ( dineroRoberto >= 10000 && dineroRoberto < 16000){
    document.write("Compra un helado de agua o de crema")  
    alert("Te sobra " + dineroRoberto - 10000)

} else {
    document.write("No te alcanza para nada")   
}

// DEVUELTA 
// TIENEN QUE usar el parseInt()