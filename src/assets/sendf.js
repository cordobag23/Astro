document.querySelector("form").addEventListener("submit", function(event){

    event.preventDefault();
    console.log("formulario blowqueado"); //bloquea el formulario

    const miFormData = new FormData(event.target); //toma datos del formulairo
    let nombref = miFormData.get("nombref") //optiene vlos campo nombre

    if(nombref.length >4){
        console.log("nombre ingresado", nombref);
    }else{
        console.log("ingrese mas de 4 caracteres");
    }
    
    

})