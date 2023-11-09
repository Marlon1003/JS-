
//1) Crea un Objeto que contenga información sobre libros, donde cada propiedad es el titulo de un libro y su valor es un objeto con detalles adicionales (autor,año de publicación u otra cosa). Utilizar un bucle "FOR IN" para imprimir el titulo y el autor.

let libros = {
    Blancanieves:{
        autor: 'Jacob Grim',
        año: 1812,
        reseña: 'Buena'
    },
    SuperMan:{
        autor: 'Jerry Siegel',
        año: 1938,
        reseña: 'Muy Buena'
    },
    Batman:{
        autor: 'Bob Kane',
        año: 1939,
        reseña: 'Exelente'

    }
}

for(let i in libros){
    console.log(i);
    console.log(libros[i]) 
}



//2) Crea un array de objetos que presenten personas, donde cada objeto tenga propiedades como (nombre,edad y ciudad). Utilizar un bucle "FOR OF" para imprimir el nombre y la ciudad de cada persona.

let personas = [
    {
        nombre: "Martha",
        edad: 21,
        ciudad: "Caracas"
    },
    {
        nombre: "Alfonzo",
        edad: 25,
        ciudad: "Merida"
    },
    {
        nombre: "Violeta",
        edad: 28,
        ciudad: "Barquisimeto"
    },
]

for (obj of personas){
    console.log(obj.nombre)
    console.log(obj.ciudad)
}


//3) Crea un programa que elija una palabra al azar de una lista predefinida y le pida al usuario que adivine la palabra letra por letra. Utilizar bucle "DO WHILE", para continuar solicitando letras hasta que el usuario adivine la palabra o haya cometido un numero máximo de intentos. (Investigar Math.random).

let palabrasS = ['laravel','javascript','phyton','tailwind'];
let palabraAleatoria = palabrasS[Math.floor(Math.random() * palabrasS.length)];
let letrasPalabra = palabraAleatoria.split('');
let maxIntentos = 8;
let intentos = 0;
let palabraAdivinada = [];

do{
    let letra = prompt(`Adivina una letra de la palabra: ${palabraAdivinada}`)
    if(letrasPalabra.includes(letra)){
        for(let i = 0; i < letrasPalabra.length; i++){
            if(letrasPalabra[i] === letra){
                palabraAdivinada[i] = letra;
            }
        }
    }else{
        intentos++;
    }
}while(intentos < maxIntentos && palabraAdivinada.join('') !== palabraAleatoria);

if(palabraAdivinada.join('') === palabraAleatoria){
    console.log('Ganaste!')

}else{
    console.log('Perdiste!')
}


//4) Crea una clase llamada "Persona" que tenga un constructor que reciba dos parámetros (nombre y edad). La clase debe tener un método "saludar" y que imprima un mensaje de saludo con el nombre y la edad de la persona.

class Persona{
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad
    }
    saludar(){
        return `Hola soy ${this._nombre} y tengo ${this._edad} años`;
    }
}

let persona = new Persona('Mike', 'veinte');
console.log(persona); 

console.log(persona.saludar()); 


//5) Crea una clase llamada "Estudiante" que herede de la clase "Persona" del ejercicio anterior. La clase "Estudiante" debe tener un constructor adicional que reciba un parámetro (curso). Agregar un método "presentar" a la clase "Estudiante" que incluya la información del nombre,edad y curso. 


class Estudiante extends Persona{
    constructor(nombre,edad,curso){
        super(nombre,edad);
        this._curso = curso;
    }
    presentar(){
        return `Hola soy ${this._nombre} tengo ${this._edad} años y soy estudiante de ${this._curso}`;
    }
}

let estudiante1 = new Estudiante('Matias','quince','Programacion');
console.log(estudiante1);
console.log(estudiante1.presentar()); 


//6) Crea una función que tome una cadena de texto y dos palabras como argumentos (parámetros), y reemplace todas las ocurrencias de la primera palabra con la segunda palabra.

let texto = 'Hoy saque al perro'
console.log(texto);

function reemplazar (palabra1, palabra2){
    console.log(texto.replace(palabra1,palabra2))
}
reemplazar('perro','gato')


//7) Escribe una función que tome un array de objetos, donde cada objeto tiene una propiedad "edad" y filtre los objetos que tienen una edad mayor o igual a 18.

function personajes(person1){
    return person1.filter(function(objeto){
        return objeto.edad >= 18
    })
}

let person = [
    {
        nombre:'Sophia',
        edad:16
    },
    {
        nombre:'Alfonzo',
        edad:25
    },
    {
        nombre:'Violeta',
        edad:28
    }
];

console.log(personajes(person));


//8) Dado el siguiente array [{nombre: "Luis", edad: 33, hobbies: ["videojuegos, "musica, "cine"]}, {nombre: "Juanito", edad: 30}, {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]}]. Recorre e imprime cada uno de los valores de cada uno de los elementos.

let array = [{nombre: "Luis", edad: 33, hobbies: ["videojuegos", "musica", "cine"]}, {nombre: "Juanito", edad: 30}, {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]}]

for (let dato of array){
    console.log(dato)
}


//9) Agrega un ultimo elemento al array anterior con el nombre de "Maria" y la edad de 25 años

array.push({nombre:'Maria', edad:25});
console.log(array);


//10) Encuentra el elemento con el nombre de "Pedro" y elimina el elemento hobbies.


let elementoPedro = array.find(item => item.nombre === "Pedro");
if (elementoPedro) {
    delete elementoPedro.hobbies;
  }
  
console.log(array);


//11) Encuentra el elemento con el nombre de "Juanito" y agrega un elemento hobbies con el valor de "diseñar".


// Encuentra el objeto con nombre "maria" en el array

let array1 = [
    { nombre: "Luis", edad: 33, hobbies: ['videojuegos', 'musica', 'cine'] },
    { nombre: 'Juanito', edad: 30 },
    { nombre: "Pedro", edad: 20, hobbies: ['deportes', 'leer'] },
    { nombre: "Maria", edad: 20, hobbies: [] }
  ];
  

  let maria = array1.find(item => item.nombre === "Maria");
  
  if (maria) {
    maria.hobbies.push('diseñar');
  }
  
  console.log(array1);

//12) Crear una clase llamada "Inventario" que se encargará de gestionar un inventario de productos:

class Inventario {

// La clase "Inventario" debe tener un constructor que inicialice un arreglo vacío llamado productos.
    constructor() {
      this.productos = [];
    }
  
// Debe haber un método llamado agregarProducto que acepte tres parámetros (nombre, precio, y cantidad). Este método deberá agregar un objeto producto al arreglo productos con los datos proporcionados.

    agregarProducto(nombre, precio, cantidad) {
      // Creamos un objeto producto con los datos proporcionados
      const producto = { nombre, precio, cantidad };
      // Agregamos el producto al arreglo productos
      this.productos.push(producto);
    }
  
// Debe existir un método llamado calcularValorTotal que calcule y devuelva el valor total del inventario multiplicando el precio por la  cantidad para cada producto en el arreglo y sumándolos.

    calcularValorTotal() {
      let valorTotal = 0;

// Debe haber un método llamado listarProductos que recorra el arreglo productos y muestre en la consola los detalles de cada  producto (nombre, precio y cantidad).

    for (const producto of this.productos) {
        valorTotal += producto.precio * producto.cantidad;
    }
      return valorTotal;
    }

    listarProductos() {
    
      for (const producto of this.productos) {
        console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
      }
    }
  }
  
//Crea una instancia de la clase "Inventario" llamada miInventario.

const miInventario = new Inventario();
  
//Agrega al menos tres productos a miInventario utilizando el método agregarProducto.

miInventario.agregarProducto("Papas", 10, 5);
miInventario.agregarProducto("Tomates", 15, 3);
miInventario.agregarProducto("Cebollas", 20, 2);
  
//Llama al método listarProductos en miInventario para mostrar la lista de productos en la consola.

  miInventario.listarProductos();
  
//Llama al método calcularValorTotal en miInventario y muestra el valor total del inventario en la consola.

const valorTotal = miInventario.calcularValorTotal();
console.log(`Valor Total del Inventario: $${valorTotal}`);