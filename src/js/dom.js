const elementos = document.getElementsByClassName("card");
console.log(elementos);

//const elemento = document.getElementById("card1");
//console.log(elemento);

const elementoq = document.querySelector("#idinput");
console.log(elementoq);




document.addEventListener("DOMContentLoaded", function () {
    function llenartexto() {
        document.querySelector("#insertarp").textContent = "Soy el párrafo insertado";
    }
    document.querySelector("#btninsertar").addEventListener("click", llenartexto);
});


//cards

const card3 = document.querySelector(".card-3");
console.log(card3.classList);
card3.classList.add("ananida"); //añado una clase a mi elemento card-3 guardado en mi variable card3
            // .remove   elimina una clase
            // .toogle si tiene la clase q le enviamos, la elimina
            // SINO la tiene la crea y asi por cada click
            //.replace("la q tengo". "por la q voy a cambiar")

card3.addEventListener(
    "click", ()=>{card3.classList.toggle("red")}
);
