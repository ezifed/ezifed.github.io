function validateForm(){
  var x = document.forms['myForm']["fname"].value;
  if (x==""){
    alert ("Please enter your first name");
    return false;
  }

  var y = document.forms['myForm']["lname"].value;
  if (y==""){
    alert ("Please enter your last name");
    return false;
  }
  
  var z = document.forms['myForm']["email"].value;
  if (z==""){
    alert ("Please enter your email address");
    return false;
  }

}