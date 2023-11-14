# TC3002B570


La aplicación se trata de una herramienta de detección de plagio en códigos de programación, diseñada para ofrecer una solución eficiente y precisa a los desafíos que enfrentan principalmente el sector academico al garantizar la originalidad en el código fuente. Utilizando métodos cuantitativos, compiladores y técnicas de inteligencia artificial, la aplicación permite identificar similitudes sustanciales entre diferentes fragmentos de código, facilitando la detección de posibles plagios.

La aplicación no solo se limita a la comparación directa de cadenas de texto, sino que aprovecha la tokenización de códigos fuente para un análisis más profundo. A través de la tokenización, convertimos las partes relevantes de los códigos de entrada en representaciones estructuradas, lo que posibilita una comparación más precisa y contextual. Esta característica, combinada con algoritmos avanzados de inteligencia artificial, garantiza la identificación efectiva de similitudes incluso en situaciones donde las modificaciones superficiales podrían engañar a métodos convencionales.

## Transformación y análisis de código de entrada

La tokenización es un paso esencial en nuestro proceso de detección de plagio, ya que transforma los códigos fuente en secuencias de tokens significativos. Los tokens son unidades discretas que representan elementos fundamentales del código, como palabras clave, operadores, identificadores y otros componentes sintácticos y semánticos.

Este proceso de tokenización nos permite capturar la estructura y la lógica subyacente de los códigos, independientemente de la variabilidad en el estilo de escritura o la reorganización superficial. Los tokens proporcionan una representación estandarizada que facilita la comparación directa y el análisis detallado mediante nuestro modelo de inteligencia artificial.

Al convertir los códigos fuente en secuencias de tokens, creamos una base uniforme para la evaluación de similitudes, permitiendo a nuestro modelo identificar patrones, estructuras y fragmentos comunes entre diferentes códigos. Esta abstracción mejora significativamente la capacidad de detección de plagio, ya que se centra en la esencia del código en lugar de depender únicamente de coincidencias de texto exactas.

El ejemplo de esta tokenización es el siguiente:

Dado un código de C:

```c
#include <stdio.h>

int main() {
    int num1 = 5;
    int num2 = 10;
    int sum = num1 + num2;

    printf("The sum of %d and %d is: %d\n", num1, num2, sum);

    return 0;
}
```

La tokenización esperada:

```
Special identifier Relational identifier Special identifier Relational 

keyword identifier Special Special Special 
keyword identifier Assignment Float ;
keyword identifier Assignment Float ;
keyword identifier Assignment identifier Arithmetic identifier ;

identifier Special "identifier identifier identifier Arithmetic identifier identifier Arithmetic identifier identifier :Arithmetic identifier \identifier "Special identifier Special identifier Special identifier Special ;

keyword Float ;
Special 

```

## Calcular Similitud Semántica unsando Transformadores

Este método se basa en la transformación de docuemntos, en este caso de código fuente, a través de un modelo de transformadores (transformers), que genera representaciones vectoriales llamadas incorporaciones (embeddings). Estas incorporaciones capturan la estructura semántica y las relaciones contextuales del texto. La similitud de coseno evalúa la proximidad angular entre estos vectores en un espacio multidimensional, proporcionando una medida cuantitativa de la similitud semántica entre los documentos analizados.
