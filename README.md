# Typescript_Calculadora
- Una sencilla calculadora creada en typescript, permite sumar, restar, multiplicar y dividir.
- El proposito de de este codigo es aprender a hacer la transpilación a js para poder utilzarlo en web como veremos en el siguiente apartado-tutorial

## Transpilación
Para poder transpilar el codigo solo hay que seguir estos pasos:
1. Escribir ``npm install -g typescript`` en la consola para instalar typescript
2. Escribir ``tsc nombre_del_archivo`` en este caso: ``tsc calculadora.ts``
3. Veras como se ha creado el fichero ``calculadora.js``
4. Puedes ejecutar con el comando ``node calculadora.js`` el codigo para ver que te devuelve.
5. Puedes crear un script en el package.json para que te haga los dos pasos anteriores simultaneamente asi:
![image](https://user-images.githubusercontent.com/22988550/176773598-9b331245-1e90-44c2-8bcd-6c091795b8b7.png)

## Codigo
`````Typescript
// Creamos la clase calculadora
class Calculadora{
    // Creamos los atributos de la calculadora
    number1: number;
    number2: number;
    operator: string;
    result: number = 0;

    // Ejecutamos el constructor de nuestra clase.
    constructor(number1: number, number2: number, operator: string){
        this.number1 = number1;
        this.number2 = number2;        
        this.operator = operator;
    }

    // Metodo de la clase que nos hace la operación indicada para los dos numeros.
    calcTheNumber(){
        return eval(`${this.number1} ${this.operator} ${this.number2}`);
    }    
}

// Inicializamos la clase
let calculadora = new Calculadora(22,2,"*");
// Llamamos al metodo.
calculadora.result = calculadora.calcTheNumber();
// Dibujamos el resultado por consola
console.log(`Calculo: ${calculadora.number1} ${calculadora.operator} ${calculadora.number2} = ${calculadora.result}`);
`````
## Version
Node: v16.14.2
