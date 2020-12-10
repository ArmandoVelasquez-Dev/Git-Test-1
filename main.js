document.write("Hi, from Javascript")
document.write("<br> <br>")

//Función con parámetro para saludar
// let nombre = prompt(" Ingrese su nombre  ");
// function saludar(name){
//     let frase = `¡Hola ${name}!, ¿cómo estás?`;
//     document.write(frase);
// }
// saludar(nombre);

//Función flecha
let nombre = prompt(" Ingrese su nombre  ");
const saludar = (name)=>{
    let frase = `¡Hola ${name}!, ¿cómo estás?`;
    document.write(frase);
}
saludar(nombre);
