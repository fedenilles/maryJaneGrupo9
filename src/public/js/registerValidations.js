
const form = document.getElementById('login-form');
const inputs = document.querySelectorAll('#login-form input');

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    /* file: /“([^ \\ s] + (\\. (? i) (jpe? g | png | gif)) $)”/, */ //Extension de las imagenes
}

const campos = {
    password: false,
    email: false,
    apellido: false,
    name: false,
    file: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            validarCampo(expresiones.name, e.target, 'name');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarRepassword();
        break;
        case "repassword":
			validarRepassword();
		break;
/*         case "file":
            validarCampo(expresiones.file, e.target, 'file');
        break; */
    }
}
const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}
const validarRepassword = () => {
	const inputPassword1 = document.getElementById('password');
	const inputRepassword = document.getElementById('repassword');

	if(inputPassword1.value !== inputRepassword.value){
		document.getElementById(`grupo__repassword`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__repassword`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__repassword i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__repassword i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__repassword .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__repassword`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__repassword`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__repassword i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__repassword i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__repassword .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

function fileValidation(){
    var fileInput = document.getElementById('imagenPerfil');
    var filePath = fileInput.value;
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        fileInput.value = '';
        return false;
    }else{
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'"/>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if(campos.email && campos.password){
        /* form.reset(); */

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
        form.submit();
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});
