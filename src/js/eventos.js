document.querySelector(".contenedorbtn").addEventListener("click",
    function (event){
        if(event.target.tagName==="BUTTON"){
            event.target.style.color="blue";
            console.log(event.target.textContent);

        }
    }
);