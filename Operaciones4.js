$(document).ready(function(){
  $("#botonenviar").click(function(){
    validaForm();
  });
});

function validaForm() {
		if($("#nombre").val() == "") {
		alert("El campo Nombre no puede estar vacío.");
		$("#nombre").focus();
		return false;
	}
		if($("#apellidos").val() == "") {
		alert("El campo Apellido no puede estar vacío.");
		$("#apellidos").focus();
		return false;
	}
		if($("#direccion").val() == "") {
		alert("El campo Direccion no puede estar vacío.");
		$("#direccion").focus();
		return false;
	}
		if(!$("#mayor").is(":checked")) {
		alert("Es necesario saber si eres mayor de edad o no.");
		return false;
	}
	return true;
}



