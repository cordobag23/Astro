/*let ahora = new Date();
let hora = ahora.getHours();
let minutos = ahora.getMinutes();
let segundos = ahora.getSeconds();

console.log(hora, ":", minutos, ":", segundos); **/

//import { promise } from "astro:schema";

//const arreglo = ["erik", "kenny", "bulbasor", "pikachu", "butters"]

/*arreglo.forEach((nombre, index)=>{
    console.log(`nombre: ${nombre} posicion: ${index}` );

}); 

const miarreglo = arreglo.find((nombre)=>{
    
    if(nombre[0]==="b"){
        return nombre;
    }
    console.log(nombre);

});

//console.log(miarreglo); 

const otroarreglo = arreglo.map((nombre)=> {
    return nombre.toUpperCase();
});

console.log(otroarreglo); 


for (let i = 0; i < arreglo.length; i+=1) {
    console.log(arreglo[i][0]);
}  
class Pokemon {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

}

class PokemonProfesor extends Pokemon{
    constructor(nombre, tipo, profesor){
        super(nombre, tipo);
        this.profesor = profesor;
    }
       
}

const pikachu = new Pokemon("pikachu", "electrico");
const charmander = new PokemonProfesor("charmander", "fuego", "ouck");
console.log(pikachu.nombre);
console.log(charmander.profesor);


const promesa = new Promise((resolve, reject) => {

// lo q quiero q se ejecute
    setTimeout(()=>{
        let respuesta = false;
        if(respuesta){
            resolve("conexion exitosa");
        }else{
            reject("error 404 jooooooooo");
        }
    },3000);

});

promesa.then((mens)=>{
    alert(mens);
});

promesa.catch((mensaje)=>{
    alert(mensaje);
});

const promesax = ()=>{
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
            const post = ["post1", "post2", "post3"]
            const error = false

            if(error){
                reject("lo siento no se cargo la pagina");
            
            }else{
                resolve(`se cargadron los siguientes archivos: ${post}`);
            }

        },3000);
    });
}
promesax().then((mensaje)=>{
    alert(mensaje);

})
.catch((error)=>{
    alert(error);
});
**/


const fetchPost = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const post = ["post1", "post2", "post3"]
            const error = true

            if(error){
                reject("lo sentimos no se pudo conectar")
            }else{
                resolve(`carga con exito ${post}`)
            }

        }, 4000)
    });
}

const fetchp = async()=>{

    
    
    try {
        const fpost = await fetchPost();
        console.log(fpost)
    } catch (error) {
        console.log(error)
    }
    
}

fetchp();