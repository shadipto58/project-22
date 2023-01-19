

function validation(){
	 var username=document.getElementById('username');
	 var useremail=document.getElementById('useremail');
	 var userpass=document.getElementById('userpass');
	 var repass=document.getElementById('repass');
	 var terms=document.getElementById('terms').checked;

	if( username.value.trim() ==''){
		document.getElementById('user-error').innerHTML='Enter your name';
		return false;
	}
	else{
		document.getElementById('user-error').innerHTML='';
	}


	if( useremail.value.trim() ==''){
		document.getElementById('email-error').innerHTML='Enter your email';
		return false;
	}
	else{
		document.getElementById('email-error').innerHTML='';
	}

	//password
	if( userpass.value.trim() ==''){
		document.getElementById('pass-error').innerHTML='Enter your email';
		return false;
	}
	else{
		document.getElementById('pass-error').innerHTML='';
	} 

	if( userpass.value.trim().length<5){
		document.getElementById('pass-error').innerHTML='password is too short';
		return false;
	}
	else{
		document.getElementById('pass-error').innerHTML='';
	} 
	//re-pass
	if( userpass.value!=repass.value){
		document.getElementById('repass-error').innerHTML='Password does not match';
		return false;
	}
	else{
		document.getElementById('repass-error').innerHTML='';
	} 

	//checkbox
	if (terms==false){
		document.getElementById('agree').style.color ='red';
		return false; 
	}
}