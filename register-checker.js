function validateForm(event) {
    event.preventDefault(); 
  
    var alertMessage = document.getElementById("alert-message");
    var nameInput = document.getElementById("name-input");
    var passwordInput = document.getElementById("password-input");
    var confirmPasswordInput = document.getElementById("confirm-password-input");
    var dateInput = document.getElementById("date-input");
    var genderSelect = document.getElementById("gender-select");
    var agreeCheckbox = document.getElementById("agree-checkbox");


    if (nameInput.value === "") {
      alertMessage.innerText = "Name must be filled in.";
      return false;
    }

    if (passwordInput.value === "") {
      alertMessage.innerText = "Password must be filled in.";
      return false;
    }
    
    if (!/\d/.test(passwordInput.value)) {
      alertMessage.innerText = "Passwords must contain numbers.";
      return false;
    }
    
    if (confirmPasswordInput.value !== passwordInput.value) {
      alertMessage.innerText = "Confirm Password must be the same as Password.";
      return false;
    }
    
    if (dateInput.value === "") {
      alertMessage.innerText = "Date must be filled in.";
      return false;
    }
    
    if (genderSelect.value !== "male" && genderSelect.value !== "female") {
      alertMessage.innerText = "Gender must be selected between Male or Female.";
      return false;
    }
    
    if (!agreeCheckbox.checked) {
      alertMessage.innerText = "You must agree to the Terms of Service & Privacy Policy.";
      return false;
    }
    

    window.location.href = "movies-page.html";
  }
  