

/* FORMA NO TAN OPTIMA DE REALIZAR PETICIONES
document.querySelector(".btnpeticion").addEventListener("click", 
    function(){
        // realzo peticion a la api ublica
    fetch("https://pokeapi.co/api/v2/growth-rate/")
    .then(response => response.json()) //se convierte en json
    .then(datab => console.log(datab)) //muestra en consola los datos
    .catch(error =>console.error) //muestra el error

    }
);
**/
document.querySelector(".btnpeticion").addEventListener("click", 
    async function pokemons() {
    try{
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        let data = await response.json();
      //  let mostrar = JSON.parse(data);
        //RECORREMOS EL OBJETO, recordar q se recorren por ej con el forEach
        data.results.forEach(nombres => console.log("Pokemon: ", nombres.name, "url: ", nombres.url));
    }catch(error){
        console.log("el error es el siguiente: ", error);
    }

    //localstorage
    localStorage.setItem("nombre", "gal gadot"); //se guardan los valores hasta cerrar el navegador
    sessionStorage.setItem("poder", "amazonia"); // se guardan valores hasta cerrar la pestaña

    let nombre = localStorage.getItem("nombre");
    let poder = sessionStorage.getItem("poder");
    
    console.log("nombre: ", nombre,"poder: ", poder);
    
}
);

