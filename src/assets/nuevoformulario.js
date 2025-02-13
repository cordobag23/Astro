document.addEventListener("cargar documento", function (){
    const nformulario = document.querySelector("nformulario");
    
    nformulario?.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    const formData = new FormData(nformulario);
      const nombre = formData.get("nombre");
      const telefono = formData.get("telefono");
      const correo = formData.get("correo");
      const nota = formData.get("nota");

      console.log("Nombre:", nombre);
      console.log("telefono:", telefono);
      console.log("Correo:", correo);
      console.log("nota:", nota);


      alert("Formulario enviado con éxito!");

    });
});


document.addEventListener("otro documento", function (){
  const otroformulario = document.querySelector("otroformulario");
  
  otroformulario?.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(otroformulario);
    const textoaparte = formData.get("textoaparte");
    const parrafoaparte = formData.get("parrafoaparte");

    console.log("textoaparte:", textoaparte);
    console.log("parrafoaparte:", parrafoaparte);


    alert("otro Formulario enviado con éxito!");

  });
});


