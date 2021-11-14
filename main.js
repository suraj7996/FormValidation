function validate(){
    var text;

    if(document.myForm.name.value == ""){
        text = "Name cannot be empty";
        document.getElementById("basic").innerHTML = text;
        document.myForm.name.focus();
        return false;
    }

    if(document.myForm.email.value == ""){
        text = "Email cannot be empty";
        document.getElementById("basic").innerHTML = text;
        document.myForm.name.focus();
        return false;
    }

    var emailID = document.myForm.email.value;
    atposn = emailID.indexOf("@");
    dotposn = emailID.lastIndexOf(".");
    if(atposn < 1 || (dotposn - atposn < 2)){
        text = "Please enter valid email ID";
        document.getElementById("basic").innerHTML = text;
        document.myForm.name.focus();
        return false;
    }

    if(document.myForm.phone.value == "" || isNaN(document.myForm.phone.value) || 
    document.myForm.phone.value.length != 10){
        text = "Please enter a valid 10-digit phone Number";
        document.getElementById("basic").innerHTML = text;
        document.myForm.name.focus();
        return false;
    }

    return(true);
}