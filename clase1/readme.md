# Fundamentos JavaScript
## Tabla de contenido
***
1. [var vs let vs const](#var-vs-let-vs-const)
2. [Tipos mutables e inmutables](#tipos-mutables-e-inmutables)
3. [Funcion de flecha](#funcion-de-flecha)
4. [Template string](#template-string)
5. [Objetos](#objetos)
6. [Destructuring Objects](#destructuring-objects)
7. [Array de objetos](#array-de-objetos)
8. [Fetch](#fetch)
9. [Async y Await](#async-y-await)
10. [map](#map)
11. [filter](#filter)


## **var vs let vs const**

### **VAR**
**Var** sobre escribe los valores, mostrando solo el ultimo valor asignado a la variable.

```javascript
    var edad1 = 10
    var edad1 = 20 
```

En el ejemplo anterior, si se agrega un `console.log` se podrá evidenciar que el valor mostraro sera el de `20`.

### **LET**
**let** permite declarar una unica vez la variable, no permite que se sobre escriba el valor empleand la misma declaración. **Si** perite un cambio de valor solo empleando la variable anteriormente declarada.

```javascript
    let edad = 10
    edad = 20 
```
### ** if con var y let**

**var** no respeta el **if**, siempre tomara el ultimo valor asignado, para corrovorar esto, ejecutar el siguiente codigo:

```javascript
    var edad1 = 20 
    if (true) {
        var edad1 = 30
        console.log(edad1)
    }
    console.log(edad1)
```

**let** respeta las condicionales, funciones, etc. No sobre escribe valores

```javascript
    let a = 20
    if (true) {
        let a = 30
        console.log(a)
    }
    console.log(a)
```

### **CONST**
**NO** permite sobre escribir valores como **let**, **const** también vive dentro del **if** de manera independiente

```javascript
    const edad2 = 10
    edad2 = 20

    if (true) {
        const edad2 = 20
        console.log(edad2)
    }
    console.log(edad2)
```

### **Agregar variables a un array**

**VAR**

```javascript
    var edades = [10, 20, 30]
    var edades = [10, 20, 30, 40]

    console.log(edades)
```

**LET** 
```javascript
    let edades1 = [10, 20, 30]
    edades1 = [10, 20, 30, 40]

    console.log(edades1)
```

**CONST**
Para agregar un dato, se emplea el metodo llamado `push`

```javascript
    const edades3 = [15, 25, 35]
    edades3.push(45)
    console.log(edades3)
```

**OBJETOS**
**const** tanto en array como en objeto puede modificar, agregar o retirar variables

```javascript
    const persona = {
        nombre: 'Pepito',
        edad: 20
    }

    persona.edad = 30
    persona.pais = 'Colombia'

    console.log(persona)
```

## **Tipos mutables e inmutables**

**string** no es mutable
```javascript
    const firstName = 'Rafael'
```

Para generar un cambio, se debe crear una nueva variable y efectura el cambio en esta variable, por ejemplo, hacer que Rafael este compuesto solo de letras mayusculas empleando el metodo `toUpperCase()`

```javascript
    const firstNameWithUpper = firstName.toUpperCase()
    console.log(firstName, firstNameWithUpper)   
```

**list** es mutable
```javascript
    const list = []
```

Permite agregar datos empleando sus metodos, en este caso, `push()`
```javascript
    list.push(1)
    console.log(list)
```

## **Funcion de flecha**

Comparación entre función normal y función de fleca

**Función normal** 
```javascript
    function sumar(num1, num2) {
        console.log(num1 + num2)
    }

    sumar(15, 30)
```

**Función de flecha** 
```javascript
    const sumar2 = (num1, num2) => {
        console.log(num1 + num2)
    }

    sumar2(10, 50)
```

Si tengo una soal variable puedo prescindir de los parentesis
```javascript
    const sumar3 = num1 => {
        console.log(num1)
    }
    sumar3(70)
```

Para retornar un valor se hace de la siguiente forma:
```javascript
    const sumar4 = num1 => {
        return num1
    }
    console.log(sumar4(80)) 
```

Se reduce el codigo
```javascript
    const sumar5 = num1 => num1
    console.log(sumar5(90))
```

También se puede retornar mensajes
```javascript
    const mensaje = nombre => ('Hola yo soy' + nombre)
    const resultado = mensaje(' Mariana')
    console.log(resultado)
```

Sumar parametros y retornar un mensaje
```javascript
    const sumatoria = (num1 = 60) => (
        'la suma es: ' + (num1 + 30)
    )

    let resultado2 = sumatoria()
    console.log(resultado2)
```

**RECORDATORIO:** siempre se debe mandar el parametro en la función de fleca o en su defecto, dejar un valor definido

## Template String

Permite retornar texto y variables al mismo tiempo
```javascript
    const numero = (num) => {
        return `el numero es: ${num}`
    }
    const result = numero(10)
    console.log(result)
```

Sumar

```javascript
    const numero1 = (num1, num2) => `el numero es: ${num1 + num2}`

    const result1 = numero1(10, 800)
    console.log(result1)
```

## **Objetos**
 Para crear un `object`, se hace de la siguiente manera
 ```javascript
    const mascota = {
        nombre: 'Tom',
        edad10: 5,
        tipo: 'Perro',
        razas: ['pincher', 'pitbull']
    }
    console.log(mascota)
```
Para agregar una nueva propiedad, se hace lo siguiente:
 ```javascript
    mascota.peso = 10
    mascota.razas.push('dalmata')   
```

## Destructuring Objects
Sirve para extraer un dato de un `object` de manera rapida
 ```javascript
    const nombreMascota = mascota.nombre 
    console.log(nombreMascota)
```

Desestructuración de los datos a partir de un objeto
 ```javascript
    const { peso, razas, edad10} = mascota
    console.log("el peso es:", peso, "las razas son:", razas, "su edad es:", edad10)
```

## Array de objetos
Se pude tener un objeto dentro de otro y se va a comportar de igual manera

 ```javascript
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
```

Para imprimir un objeto interno, se hace de la siguiente manera, siguiendo la estructura del objeto dado
 ```javascript
    const nombreInsta = web.redesSociales.instagram.nombre
    console.log(nombreInsta)
```
Aplicando la desestructuración
 ```javascript
    const { nombre } = web.redesSociales.facebook
    console.log(nombre)
```

## **Fetch**

Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como perticiones y respuestas

 ```javascript
    fetch('https://pokeapi.co/api/v2/pokemon')
    // Promesa
    .then(res => res.json()) // Promesa en formato JSON, espera leer los datos
    // Para ver los datos, se hace lo siguiente:
    .then( data => {
        // el results lo visualizamos en la pagina de la API, es el que contiene el listado de pokemones
        console.log(data.results) 

        // para recorrer un array emplearemos el metodo forEach
        data.results.forEach(element => {
            console.log(element.name)
        })
    })
```

## **Async y Await**

**Async** es una promeda en la cual se obtiene una función asincrona, la función **NO** detiene la compilación del código.

**NOTA:** Async solo funciona dentro de una función asincrona

 ```javascript
    const obtenerPokemons = async () => {
        try {
            // esperar la petición GET
            const res = await fetch('https://pokeapi.co/api/v2/pokemon') 
            const data = await res.json()
            console.log(data.results)
        
        } catch (error) {
            console.log(error)
        }
    }

    obtenerPokemons()
```

## **map**

Metodo **map()**, crea un array nuevo cuando se llama la función indicada, se prepara el `html` para mostrar una lista de pokemones obtenida

```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fundamentos de JavaScript</title>
    </head>

    <body>
        <h1>JavaScript</h1>
        <hr>
        <h2>Lista de pokemones</h2>
        <div id="pokemon"></div>
    </body>
    <script src="index.js"></script>

    </html>
```
Luego se realiza el `JavaScript` 
 ```javascript
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
```

## **filter**

Solo va a mostrar la información especificada
 ```javascript
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
```