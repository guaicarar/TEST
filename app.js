const form = document.querySelector("#formulario");
const info = document.querySelector('#info');
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = [
	nombre = false,
	username = false,
	password = false,
	password2 = false,
	email = false,
	tlf = false
]

const enviarForm = (e) => {
	e.preventDefault();
	const {name, username, password, password2, email, tlf} = e.target;
	if (expresiones.nombre.test(name.value)) {
		campos.nombre = true;
	} else {
		name.nextElementSibling.innerHTML = `<span class="invalid">Campo invalido</span>`
	}
	if (expresiones.usuario.test(username.value)) {
		campos.username = true;
	} else {
		username.nextElementSibling.innerHTML = `<span class="invalid">Campo invalido</span>`
	}
	if (expresiones.password.test(password.value)) {
		campos.password = true;
	} else {
		password.nextElementSibling.innerHTML = `<span class="invalid">Campo invalido</span>`
	}
	if (expresiones.correo.test(email.value)) {
		campos.email = true;
	} else {
		email.nextElementSibling.innerHTML = `<span class="invalid">Campo invalido</span>`
	}
	if (password2.value === password.value && expresiones.password.test(password.value)) {
		campos.password2 = true;
	} else {
		password2.nextElementSibling.innerHTML = `<span class="invalid">Campo invalido</span>`
	}
	if (expresiones.telefono.test(tlf.value)) {
		campos.tlf = true;
	} else {
		tlf.nextElementSibling.innerHTML = `<span class="invalid">Campo invalido</span>`
	}

	if (campos.nombre && campos.username && campos.password && campos.tlf && campos.email && campos.password2 === true) {
		info.innerText = "Datos enviados"
		
	}else {
		info.innerText = "Datos no enviados"
		
	}
}
form.addEventListener("submit", enviarForm);
return true;
	}