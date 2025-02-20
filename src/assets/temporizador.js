//settimeout .... cambia tiempo salid

document.querySelector(".tiempo").addEventListener("click", 
    async function(){
         console.log("inicio");

                    //que quiero q haga, en cuanto tiempo
         setTimeout(()=>{
            console.log("despues de 3 segunds se ejecuta")
         }, 3000

         );
         console.log("Fin");
    }
    
);

//cambia el intervalo

document.querySelector(".intervalo").addEventListener("click",
    async function (){

        let inicio = 60;
        let intervalo = setInterval(
        ()=>{
            inicio--;
            console.log("inicio ", inicio);

                if(inicio===0){
                    clearInterval(intervalo);
                }
    }
    
    , 500
);
    }
);


