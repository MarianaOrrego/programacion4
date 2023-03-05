# Fundamentos JavaScript
## Tabla de contenido
***
1. [Arrays](#arrays)
2. [Arrays asociativos](#arrays-asociativos)
3. [Bucles e Iteración](#bucles-e-iteración)
4. [Ejercicios](#ejercicios)

## **Arrays**
Son objetos similares en una lista, la longitud y el tipo de elementos de un array son variables

```javascript
    document.write('FRUTAS' + '<br>')
    let frutas = ["banano", "manzana", "uva"];
```

Las posiciones del array inician desde cero, por ende, se debe tener en cuenta para mostrar el elemento.

```javascript
    document.write(frutas[1] + '<br><br>')
```

## **Arrays asociativos**

Se tiene una lista de objetos que van asociados a una variable la variable servirá para llamar a dicho objeto declarado en este tipo de array no se muestra el objeto a partir de su posición sino de su variable

```javascript
    document.write('COMPUTADOR' + '<br>')

    let computador = {
        nombre: "Portatil",
        procesador: "Intel core i9",
        ram: "16GB",
        espacio: "1TB"
    }

    let nombre = computador['nombre']
    let procesador = computador['procesador']
    let ram = computador['ram']
    let espacio = computador['espacio']

    let frase = `el nombre de mi PC es: ${nombre} <br>
                    el procesador es: ${procesador} <br>
                    la memoria ram es: ${ram} <br>
                    el espacio de disco es de: ${espacio}`

    document.write(frase + '<br><br>')
```

## **Bucles e Iteración**

Los bucles ofrecen una forma rapida y sencilla de hacer algo repetidamente

**while**

Una declaración WHILE ejecuta sus instrucciones siempre que una condición especifica sea `TRUE`

```javascript
    document.write('WHILE' + '<br>')

    let numero  = 0

    if (numero < 10){
        document.write(numero  + '<br>')
    }

    while(numero < 10){
        document.write(numero + '<br>')
        numero++;
    }
```
**do while**

La instrucción do... while se repite hasta que una condición especificada se evalue como `FALSE`

```javascript
    document.write('<br>' + 'DO ... WHILE' + '<br>')

    do {
        document.write(numero + '<br>')
        numero++;
    } while(numero < 10)
```

Primero se ejecuta el DO y luego pregunta la condición del WHILE

**break**

Se emplea la etiqueta BREAK en un bucle para indicar que el programa debe parar

```javascript
    document.write('<br>' + 'BREAK' + '<br>')

    while(numero < 1000){
        document.write(numero + '<br>')
        numero++;
        if ( numero == 20){
            break;
        }
    }
```

**for**

Un ciclo FOR se repite hasta que la condición especificada sea `FALSE`

```javascript
    document.write('<br>' + 'FOR' + '<br>')

    for( let i = 0; i < 6; i++){
        if(i==3){
            continue;
        }
        document.write(i + '<br>')
    }
```

`CONTINUE` es una etiqueta que se emplea para omitir un dato

**for ... in**

El `FOR ... IN` itera una variable especificada sobre todas las propiedades enumerables de un objeto

```javascript
    document.write('<br>' + 'FOR ... IN' + '<br>')

    let animales = ["gato", "perro", "loro"]

    for (let animal in animales){
        document.write(animal + '<br>')
    }
```

**for ... of**

El `FOR ... OF` crea un bucle que se repide sobre **OBJETOS ITERABLES**, invocando un bucle de iteración personalizado que se ejecuta para el valor de cada propiedad

```javascript
    document.write('<br>' + 'FOR ... OF' + '<br>')

    for (let animal of animales){
        document.write(animal + '<br>')
    }
```

La diferencia entre un bucle `FOR ... IN` y un `FOR .. OF` es que el `FOR ... IN` itera sobre las posiciones de propiedad, FOR ... OF itera sobre los valores de la propiedad

**label**

Asigna un nombre al ciclo, de esta manera es mas facil controlar si continua o termina con ciertas condiciones

```javascript
    document.write('<br>' + 'LABEL' + '<br>')

    //let animales = ["gato", "perro", "loro"]
    let array2 = ["banano", "pera", animales, "uva"]

    forAnimales:
    for (let objetos in array2){
        if (objetos == 2){
            for(let objetos of animales){
                document.write( objetos + '<br>')
                break forAnimales;
            }
        } else {
            document.write( array2[objetos] + '<br>')
        }
    }
```

## **Ejercicios**

1. Se va a realizar una fiesta, se tiene una maquina la cual solo deja pasar a los mayores de edad. 

    Luego de las 2 am, el primero que entre no paga

2. Se daña el sistema de una universidad, se debe crear un mini sistema mientras arreglan el principal para registar las ausencias, si el estudiante esta presente, se pone una **P**, si el estudiante no fue, se pone una **A**. 
    Pasados 30 días debe mostrar la situación del alumno
    Solo se permite el 10% de ausencias (maximo)

3. Crear una calculadora (Trabajo para parcial)