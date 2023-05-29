//EJERCICIOS INTRO JS

//EJERCICIO # 1:

/*let miNombre = "Jose";

// EJERCICIO # 2:

let miApellido = "Valdez";

//EJERCICIO # 3:

let miEdad = 29;

//EJERCICIO # 4:

let miMascota = "Teo";

//EJERCICIO # 5:
let edadMascota = 2;

//EJERCICIO # 6:

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota)

//EJERCICIO # 7:

let nombreCompleto = miNombre + " " + miApellido;
console.log(nombreCompleto);


//EJERCICIO #8:

let textoPresentación = (`Mi nombre es ${miNombre} ${miApellido}, tengo ${miEdad} años de edad y una mascota llamada ${miMascota} que tiene ${edadMascota} años`);

console.log(textoPresentación);

//EJERCICIO # 9:

let sumaEdades = miEdad + edadMascota;
console.log(sumaEdades);

let restaEdades = miEdad - edadMascota;
console.log(restaEdades);

let productoEdades = miEdad * edadMascota;
console.log(productoEdades);

let divisionEdades = miEdad / edadMascota;
console.log(divisionEdades)

//EJERCICIO # 10:

let textoPresentación2 = (`Mi nombre es ${miNombre} ${miApellido}, tengo ${miEdad} años de edad y una mascota llamada ${miMascota} que tiene ${edadMascota} años. Si sumanos la edad mía y la de mi perro, da como resultado ${sumaEdades}. Si restamos nuestras edades, da como resultado ${restaEdades}. Asimismo, si multiplicamos nuestras edades, tenemos un valor de ${productoEdades} y de igual manera, si las dividimos, tenemos ${divisionEdades}`);

console.log(textoPresentación2);

//EJERCICIO # 11:

let student = {
    name: 'Carlos',
    lastname: 'Fernández',
    gender: 'masculino',
    age: '15 años',
    finalScore: '100 puntos'
}

console.table(student);

//EJERCICIO # 12:

let pet = {
    name: 'Teo',
    breed: 'Terrier',
    gender: 'varón',
    age: '2 años',
    hairColor: 'blanco'
}

console.table(pet);
console.log(pet.name);
console.log(pet.breed);
console.log(pet.gender);
console.log(pet.age);
console.log(pet.hairColor);

//EJERCICIO # 13:

let fruits = ["naranja", "manzana", "pera", "durazno", "kiwi"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

//EJERCICIO # 14:

let parNumbers = ["2", "4", "6", "8", "10"];

console.log(parNumbers);
console.log(parNumbers[0]);
console.log(parNumbers[1]);
console.log(parNumbers[2]);
console.log(parNumbers[3]);
console.log(parNumbers[4]);

//EJERCICIO # 15:

let family = ["mamá", "papá", "hermano", "hermana", "abuela"];

console.log(family);
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);
console.log(family[4]);


//EJERCICIO # 16: papa, 8 y kiwi

let textoAleatorio = (`Mi ${family[1]} compró ayer ${parNumbers[3]} kgs de ${fruits[4]}`);
console.log(textoAleatorio);

//EJERCICIO # 17:

let suEdad = prompt("Ingrese su edad");
let edadCompañero = prompt("Ingrese la edad de su compañero");
let edadesIguales = "false";
let soyMayor ="false";
let soyMenor ="false";

if(suEdad == edadCompañero){
    let edadesIguales = true;
    console.log(`Mi edad es igual a la de mi compañero: ${edadesIguales}`);
    console.log(`Mi edad es mayor a la de mi compañero: ${soyMayor}`);
    console.log(`Mi edad es menor a la de mi compañero: ${soyMenor}`);

}else if(suEdad > edadCompañero){
    let soyMayor = true;
    console.log(`Mi edad es igual a la de mi compañero: ${edadesIguales}`);
    console.log(`Mi edad es mayor a la de mi compañero: ${soyMayor}`);
    console.log(`Mi edad es menor a la de mi compañero: ${soyMenor}`);
}else{
    let soyMenor = true;
    console.log(`Mi edad es igual a la de mi compañero: ${edadesIguales}`);
    console.log(`Mi edad es mayor a la de mi compañero: ${soyMayor}`);
    console.log(`Mi edad es menor a la de mi compañero: ${soyMenor}`);
}

//EJERCIO # 18:

let soyMayorDeEdad = "";

let varEdad = prompt("Ingrese su edad actual");
if(varEdad >= 18){
    soyMayorDeEdad = varEdad;
    console.log(`Usted tiene ${soyMayorDeEdad} años y por lo tanto es mayor de edad.`);
}else{
    console.log("Usted no es mayor de edad");
}

//EJERCICIO # 19:

let userAge = prompt("Ingrese la edad del cliente");
let userHeight = prompt("Ingrese la altura del cliente");
let puedeSubir = "Puede subir a la atracción";
let noPuedeSubir = "No puede subir a la atracción";

if((userAge > 6) && (userHeight >= 120)){
    console.log(puedeSubir);
}else{
    console.log(noPuedeSubir);
}*/

//EJERCICIO # 20:

let ticket = prompt("Ingrese su tipo de ticket (VIP / NORMAL / LIMITADO / NO TIENE)");
let cashAvailable = prompt("¿Cuánto es su dinero disponible");

if((ticket == "VIP") || (ticket == "NORMAL") || (ticket == "LIMITADO") || (cashAvailable >= 1000)){
    console.log(`Usted tiene ticket ${ticket} o tiene ${cashAvailable}, por lo tanto puede Pasar`);
}else{
    console.log("Usted no puede pasar");
}






