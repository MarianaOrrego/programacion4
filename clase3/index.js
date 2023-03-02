let gratis = false;

const validarCliente = (time) => {
	let edad = prompt("¿Cual es tu edad?");
	if (edad >= 18){
			if (time >= 2 && time < 5 && !gratis){
				alert("Puedes pasar gratis");
				gratis = true;
			} else {
				alert(`Son las ${time} .Puedes pasar pero debes pagar la entrada`);
			}
	} else {
		alert("Eres menor de edad, no puedes entrar");
	}
}

validarCliente(19);
validarCliente(20);
validarCliente(22);
validarCliente(2);
validarCliente(3);
validarCliente(5);