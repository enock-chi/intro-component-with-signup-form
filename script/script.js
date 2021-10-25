
function errorHandling() {
  let name = document.getElementById("input-name").value;
  let surname = document.getElementById("input-surname").value;
  let email = document.getElementById("input-email").value;
  let password = document.getElementById("input-password").value;
  
  console.log(name)
  console.log(surname)
  console.log(email)
  console.log(password)

  if (name === " " || name == null){
    errorDisplay("error-name-img");
    errorDisplay("error-name-p");
    
  }
  if (surname === " " || surname == null) {
    errorDisplay("error-surname-img");
    errorDisplay("error-surname-p");
    
  }
  if (email === " " || email == null) {
    errorDisplay("error-email-img");
    errorDisplay("error-email-p");
  } 
  if ((password === " " || password == null) || (password.length > 8)) {
    errorDisplay("error-password-img");
    errorDisplay("error-password-p");
    
  }
  
}

function errorDisplay(element) {
  let name = document.getElementById(element);
  name.style.display = "block";
}

document.querySelector("#submit").onclick = function() {
  errorHandling()
  console.log("hero")
  
}