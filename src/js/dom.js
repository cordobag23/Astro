const elementos = document.getElementsByClassName("card");
console.log(elementos);

const elemento = document.getElementById("card1");
console.log(elemento);

const elementoq = document.querySelector("#idinput");
console.log(elementoq);




document.addEventListener("DOMContentLoaded", function () {
    function llenartexto() {
        document.querySelector("#insertarp").textContent = "Soy el párrafo insertado";
    }
    document.querySelector("#btninsertar").addEventListener("click", llenartexto);
});