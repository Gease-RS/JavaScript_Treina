



function validar(formulario){
	
	var validaNome = document.getElementById("nome").value;
	
	if(validaNome == "" || validaNome == Nul){
		
		alert("Este é outro tipo de validação do campo nome get Element By id");
		
	}
	
	if(formulario.nome.value == null || formulario.nome.value == ""){
		
		alert("Favor preencher o campo Nome");
		return false;
		
	}else if(formulario.senha.value == null || formulario.senha.value == ""){
		
		alert("Favor preencher o campo Senha");
		return false;
		
	}else if(formulario.email.value == null || formulario.email.value == ""){
		
		alert("Favor preencher o campo Email");
		return false;
		
	}else if(formulario.data.value == null || formulario.data.value == ""){
		
		alert("Favor preencher o campo Data");
		return false;
		
	}else if(formulario.telefone.value == null || formulario.telefone.value == ""){
		
		alert("Favor preencher o campo Telefone");
		return false;
		
	}
	return true;
}	