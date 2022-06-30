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