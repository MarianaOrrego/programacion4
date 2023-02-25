# Fundamentos JavaScript
## Tabla de contenido
***
1. [Operadores de asignación](#operadores-de-asignación)
2. [Operadores aritmeticos](#operadores-aritmeticos)
3. [Concatenación](#concatenación)
4. [Operadores de comparación](#operadores-de-comparación)
5. [Operadores lógicos](#operadores-lógicos)
6. [Camel Case](#camel-case)
7. [Condicionales](#condicionales)

## **Operadores de asignación**
Un operador de asignación asigna un valor al operando de la izquierda basado en el valor del operando de la derecha

**Asignación de adición**

```javascript
    let numero = 10 
    numero += 5 // Le voy a sumar 5 a mi variable numero
    // es equivalente a decir 'numero  = numero + 5?
    document.write(numero)
```

**Asignación de sustracción**

```javascript
    numero -= 8
    //equivalencia a numero = numero - 8
    document.write(numero)
```

**Asignación de multiplicación**

```javascript
    numero *= 10
    // equivalencia, numero = numero * 10
    document.write(numero)
```

**Asignación de división**

```javascript
    numero /= 7
    // equivalencia, numero = numero * 10
    document.write(numero)
```

**Asignación de residuo**

```javascript
    numero %= 8
    document.write(numero)
```

**Asignación de exponenciación**

```javascript
    numero **= 3
    document.write(numero)
```

## **Operadores aritmeticos**
Los operadores aritmeticos toman valores numericos, ya sean literales o variables, sus operandos retornan un valor numerico unico

**Incremento y decremento**
Agrefa o quita una unidad a su operando 

Se utiliza como prefijo `(++x)` o `(--x)`

```javascript
    let numero1 = 10
    document.write(++numero1)
```
Se utiliza como sufijo `(x++)` o `(x--)`

```javascript
    numero1--
    resultado  = numero1--
    document.write(resultado)
```

**Negación unaria** 
Devuelve la negación de su operando

```javascript
    document.write(-numero1)
```

**Positivo unario**
Intenta convertir el operando en un numero si aun no lo es

```javascript
    let numero3 = "300"
    document.write(+numero3)
```

## **Concatenación**
Para sumar dos `string` se hace de la siguiente manera

```javascript
    saludo = "Bienvenido, "
    pregunta = "¿Cómo estás?"

    frase = saludo + pregunta 
    document.write(frase)
```

**Forzar un string**
```javascript
    num1 = 8
    num2 = 10

    frase2 = "" + num1 + num2
    document.write(frase2)
```
**Nota:** cuando en una operación se agrega un string vacio se fuerza a toda la operacion a convertirse en una cadena de texto

**concat**
Debe contener al menos un `string` para que muestre la información a modo de cadena de texto

```javascript
    frase3 = num1.concat(num2)
    document.write(frase3)
```

**Template string**
```javascript
    nombre = "Pepito"
    edad = 15
    informacion = `${nombre} tiene ${edad}  años` 
    document.write(informacion)
```

## **Operadores de comparación**
Un operador de comparación, compara dos expresiones y devuelve un valor `boolean`, este valor va a representar la relación de sus valores

**Igual**
Devuelve `true` si los operandos son iguales
```javascript
    let valor1 = 13
    let valor2 = 23
    document.write(valor1 == valor2)
```

**No es igual**
Devuelve `true` si los operandos no son iguales
```javascript
    document.write(valor1 != valor2)
```

**Estrictamente**
Devuelve `true` si los operandos son iguales y del mismo tipo
```javascript
    document.write(valor1 === valor2)
```

**Desigualdad estricta**
Devuelve `true` si los operandos **SON DEL MISMO TIPO** pero **NO SON IGUALES** o **SON DE DIFERENTE TIPO**
```javascript
    document.write(valor1 !== valor2)
```

**Mayor que**
```javascript
    document.write(valor1 > valor2)
```

**Mayor o igual que**
```javascript
    document.write(valor1 >= valor2)
```

**Menor que**
```javascript
    document.write(valor1 < valor2)
```

**Menor o igual que**
```javascript
    document.write(valor1 <= valor2)
```
## **Operadores lógicos**
Los operadores logicos nos devuelven un resultador a partir de que se cumpla (o no) una condición, su resultado es booleando y sus operandos son valores logicos

** AND logico**
Devuelve 'true' si ambos operandos son 'true', de lo contrario devuelve 'false'
```javascript
    let gato = false
    let perro = true

    let animales = gato && perro
    document.write(animales)
```

** OR logico**
Si ambos son true, retorna true

Si uno de los dos es true, retorna true

Si ambos son false, retorna flase

```javascript
    let animales2 = gato || perro
    document.write(animales2)
```

** NOT logico**
Devuelve un false si su operando existe (true) y devuelve un true si su operando no existe (false)

```javascript
    let animales3 = !gato
    document.write(animales3)
```

## **Camel Case**
Se estavlece que la primera letra de la palabra es minuscula y la segunda palaba tendra mayuscula

```javascript
    nombreCompleto = 'Mariana Orrego'
```

## **Condicionales**

**if** 
La condición solo se ejecuta cuando sea 'true'

```javascript
    if (30 < 20){
        document.write("Se cumple")
    }
```

**else if**
```javascript
    else if (30 === 20){
        document.write("Se cumple")
    }
```

**else**
```javascript
    else {
        document.write("No se cumple")

    }
```

**Ejercicio**

Tres chicos entran a una heladeria a comprar helado pero hay un problema, los precios no estan alineados a los helados, ellos quieren comprar el helado mas caro  que puedan con su presupuesto personal.  Cada uno tiene distintas cantidades de dinero y se tendrá una tabla de valores para los precios de los helados

*Personas*
|Nombre | Dinero |
|------ | ------ |
|Roberto| 15000  |
|Pepe   | 25000  |
|Sara   | 30000  |

*Helados*
|Nombre                    | Precio |
|------------------------- | ------ |
|Helado de agua            | 6000   |
|Helado de crema           | 10000  |
|Galleta de helado         | 16000  |
|Postre de helado y brownie| 16000  |
|Caja de helado pequeña    | 22000  |
|Caja de helado grande     | 30000  |

**Reto**
1. Se debe pedir el ingreso del presupuesto de cada uno, mostrar el helado mas caro dentro de ese presupuesto (promp())
2. Si hay dos o mas helados que entren en el presupuesto, se debe motrar la información
3. Se debe indicar cuanto es la devuelta (en el caso de que sobre)

*Solución*
```javascript
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
```