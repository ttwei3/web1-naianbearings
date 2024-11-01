/*

    Project 4
    Name: Tingting Wei
    Date: 2023-08-01
    Description: Project 4 Website Development & Deployment


*/

function validate(e) {
	hideErrors();

	
	if (formHasErrors()) {

		e.preventDefault();

		return false;
	}
	return true;
}

function resetForm(e) {

    if (confirm('Clear information?')) {
    
        hideErrors();

        document.getElementById("type_error").focus();

        return true;
    }

    e.preventDefault();


    return false;
}

function formHasErrors() {

	let errorFlag = false;
	
    let type = document.getElementById("type");
    if(!formFieldHasInput(type)){
		if(!errorFlag){
			type.focus();
			type.select();
		}
        document.getElementById("type_error").style.display = "block";
        errorFlag = true;
    }

    let fname = document.getElementById("fname");
    if(!formFieldHasInput(fname)){
		if(!errorFlag){
			fname.focus();
			fname.select();
		}
        document.getElementById("fname_error").style.display = "block";
        errorFlag = true;
    }
    
    let lname = document.getElementById("lname");
    if(!formFieldHasInput(lname)){
		if(!errorFlag){
			lname.focus();
			lname.select();
		}
        document.getElementById("lname_error").style.display = "block";
        errorFlag = true;
    }

    let address = document.getElementById("address");
    if(!formFieldHasInput(address)){
		if(!errorFlag){
			address.focus();
			address.select();
		}
        document.getElementById("address_error").style.display = "block";
        errorFlag = true;
    }


    let emailRequired = document.getElementById("email");
    if(!formFieldHasInput(emailRequired)){
		if(!errorFlag){
			type.focus();
			type.select();
		}
        document.getElementById("email_error").style.display = "block";
        errorFlag = true;
        
    }

    let emailregex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    let email = document.getElementById("email");
    if(!emailregex.test(email.value)){
		if(!errorFlag){
			email.focus();
			email.select();
		}
        document.getElementById("emailformat_error").style.display = "block";
        errorFlag = true;
    }

    let postalRequired = document.getElementById("postal");
    if(!formFieldHasInput(postalRequired)){
		if(!errorFlag){
			postalRequired.focus();
			postalRequired.select();
		}
        document.getElementById("postal_error").style.display = "block";
        errorFlag = true;
    }

    let postalregex = new RegExp(/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/);
    let postal = document.getElementById("postal");
    if(!postalregex.test(postal.value)){
		if(!errorFlag){
			postal.focus();
			postal.select();
		}
        document.getElementById("postalformat_error").style.display = "block";
        errorFlag = true;
    };

    let phoneRequired = document.getElementById("phone");
    if(!formFieldHasInput(phoneRequired)){
		if(!errorFlag){
			phoneRequired.focus();
			phoneRequired.select();
		}
        document.getElementById("phone_error").style.display = "block";
        errorFlag = true;
    }

    let phoneregex = new RegExp(/^\d{10}$/);
    let phone = document.getElementById("phone");
    if(!phoneregex.test(phone.value)){
		if(!errorFlag){
			phone.focus();
			phone.select();
		}
        document.getElementById("phoneformat_error").style.display = "block";
        errorFlag = true;
    };

	return errorFlag;
}

function formFieldHasInput(fieldElement) {

    if (fieldElement.value == null || fieldElement.value.trim() == "") {
     
        return false;
    }


    return true;
}

function hideErrors() {

	let error = document.getElementsByClassName("error");

	
	for (let i = 0; i < error.length; i++) {

		error[i].style.display = "none";
	}
}

function load() {
	
	hideErrors();

	document.getElementById("contactform").reset();
	document.getElementById("contactform").addEventListener("reset", resetForm);


	document.getElementById("contactform").addEventListener("submit", validate);


}


document.addEventListener("DOMContentLoaded", load);


