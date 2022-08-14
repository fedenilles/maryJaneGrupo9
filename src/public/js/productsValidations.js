window.onload = function(){
    let formulario = document.querySelector('.products-wrapper');
    let form = document.querySelector(".form-Product")
    let inputName = document.getElementById("name");
    let inputPrice = document.getElementById("price");
    let inputFileProduct = document.getElementById("file");
    let inputDescription = document.getElementById("description");
    let listadoErrores = document.querySelector(".errores");

    const arrayInputs = [inputName, inputPrice, inputFileProduct, inputDescription]


    form.addEventListener("submit", function(e){
        let errores = 0;
            if(inputName.value ===""){
                errores++;
                inputName.nextElementSibling.nextElementSibling.style.color = "red"
                inputName.nextElementSibling.nextElementSibling.innerHTML = "El nombre es obligatorio"
            };
            if(inputName.value.length < 5){
                errores++;
                inputName.nextElementSibling.nextElementSibling.style.color = "orange"
                inputName.nextElementSibling.nextElementSibling.innerHTML = "El nombre debe tener más de 5 caracteres"
            };
            if(inputPrice.value ===""){
                errores++;
                inputName.nextElementSibling.nextElementSibling.style.color = "red"
                inputName.nextElementSibling.nextElementSibling.innerHTML = "El Precio es obligatorio"
            }
            if(inputFileProduct.value ===""){
    
            };
            if(inputDescription.value.length < 20){
                errores++;
                inputName.nextElementSibling.nextElementSibling.style.color = "red"
                inputName.nextElementSibling.nextElementSibling.innerHTML = "El nombre debe tener más de 20 caracteres"
            };
            if(errores > 0){
                e.preventDefault();
            }
    });
    arrayInputs.forEach(function(input) {
        input.addEventListener("blur", function() {
            
            if(input.dataset.nombre == "price" && input.value <= 0){
                input.nextElementSibling.nextElementSibling.style.color = "red"
                input.nextElementSibling.nextElementSibling.innerHTML = "El valor mayor a 0";
    
            }else if(input.dataset.nombre == "description" && input.value.length < 20){
                input.nextElementSibling.nextElementSibling.style.color = "red"
                input.nextElementSibling.nextElementSibling.innerHTML = "La descripción debe ser mayor a 20 caracteres";
            }else if(input.value === ""){
                input.nextElementSibling.nextElementSibling.style.color = "red"
                input.nextElementSibling.nextElementSibling.innerHTML = "El campo " + input.dataset.nombre + " no puede estar vacío";
                
            }
        })
    });
}