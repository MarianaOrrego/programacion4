# JavaScript

## Tabla de contenido
1. [Tecnologias a emplear](#tecnologias-a-emplear)
2. [¿Qué es JavaScript?](#¿qué-es-javascript)
3. [Lenguajes tipados](#lenguajes-tipados)
4. [Lenguaje dinamicamente tipado](#lenguaje-dinámicamente-tipado)
5. [Just in time vs Ahead of time](#just-in-time-vs-ahead-of-time)

## Tecnologias a emplear
***
* [JavaScript documentation](https://developer.mozilla.org/es/docs/conflicting/Web/JavaScript)
* [Git](https://git-scm.com/)
* [GitHub](https://docs.github.com/es)
* [node.js](https://nodejs.org/es/about/)
* [npm](https://docs.npmjs.com/)
* [React](https://es.reactjs.org/docs/getting-started.html)
* [React Docs](https://beta.es.reactjs.org/learn)
* [Visual Studio Code](https://code.visualstudio.com/docs)

## ¿Qué es JavaScript?
***
Es un **lenguaje ligero e interpretado**, empleado como el lenguaje de **programación para paginas web**, pero también se puede encontrar en muchos entornos que no son de navegador.

Es ejecutado del lado del cliente y se puede utilizar para estilizar/programar cómo se comportan las paginas web cuando ocurre un evento.

JavaScript es un lenguaje por turnos, sus lineas de codigo se ejecutan de manera secuencial. Se tienen **funciones asincronas** (ya se profundizará sobre eso), son aquellas que duran un tiempo.

**Ejemplo**

```
    setTimeout(() => {
        console.log('hola!');
    }, 1000);

    console.log('yo voy primero');
```

## Lenguajes tipados
***
En los lenguajes tipados se tienen dos clasificaciones

1. Tipado débil: se usa para indicar el tipo de variable a la hora de declararla. Por ejemplo, permite asignarle un valor entero a una variable que con anterioridad tenía un string.

    ```
        var a = 7
    ```

    *Desventajas*
    
    * Favorece la aparición de errores
    * Presenta errores de ejecución (se pierde al comparar números mezclando tipados como *string*, no son detectables)
    * Es necesario testear de manera periodica el programa para conseguir el resltado esperado

2. Tipado fuerte: es utilizado para que el código incluya el tipo de dato al declarar la variable.

    ```
        int a = 7
    ```

    *Desventajas*
    
    * Es mucho mas estricto, por ende, se necesitan mas líneas de código
    * Se debe seguir normas concretas de asignación de variables, argumentos de funciones o valores de retorno

## Lenguaje dinámicamente tipado
***
JavaScript es un lenguaje dinamicamente tipado (se cataloga como tipado debil de igual manera). No es necesario especificar lo que se escribe pero esto *genera un estrés en el compilador*, puesto que no sabe lo que va a suceder, compila sin tener ningún tipo de información.

## Just in time vs Ahead of time
***
**Ahead of time**

Primero se compila el codigo, genera un ejecutable y luego se procede a la ejecución. Un ejemplo de *Ahead of time* es **C++**, es un lenguaje fuertemente tipado, por lo tanto, el codigo mismo es el que le dice al compilador que va a suceder.

**Just in time**

En este caso, compila y ejecuta al mismo tiempo (proceso instantaneo), lo que hace que sea mucho mas rápido, pero para poder que haya una comprensión del codigo, en cada ejecución el compilador va a ir aprendiendo que propiedades tiene el programa, por ende, es necesario tener una fase de re-compilación para así obetener la información.

De esta manera es como se comporta JavaScript.