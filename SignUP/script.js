

// validation for Full Name 
var fullname = "";
function validateName() {
  fullname = document.getElementById("fullName").value;
  var beg = /^[A-Z]/;
  var blank = /[\s]$/;
  var multiple_blanks = /[\s]{2,}/;
  var spl_char =
    /[\!\@\#\$\%\£\^\&\*\)\(\+\=\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\-\_\.]/g;
  var num = /[0-9]{4,}/;
  if (
    !fullname.match(beg) ||
    fullname.match(blank) ||
    fullname.match(spl_char) ||
    fullname.match(num) ||
    fullname.match(multiple_blanks)
  ) {
    document.getElementById("showFullNameError").innerHTML =
      "*Enter valid name and First Char Must Capital*";
    document.getElementById("showFullNameError").style.color = "red";
    return false;
  } else {
    document.getElementById("showFullNameError").innerHTML = "";
    return true;
  }
}

// validaction for First Name 
function validateFName() {
  var fname = document.getElementById("firstName").value;
  var beg = /^[A-Z]/;
  var num = /[0-9]{4,}/;
  var space = /\s/;
  var spl_char =
    /[\!\@\#\$\%\£\^\&\*\)\(\+\=\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\-\_\.]/g;
  if (fname != "" || fname != undefined) {
    if (
      fname.match(beg) &&
      !fname.match(space) &&
      !fname.match(spl_char) &&
      !fname.match(num)
    ) {
      document.getElementById("showFirstNameError").innerHTML = "";
      return true;
    } else {
      document.getElementById("showFirstNameError").innerHTML ="Please enter a valid name!";
      document.getElementById("showFirstNameError").style.color = "red";
      return false;
    }
  }
}

// Validaction for email 
function isValidationEmail(email) {
  const re =
    /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;
  const beg_spl =
    /^[0-9\!\@\#\$\%\£\^\&\*\)\(\+\=\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\-\_\.]/;
  if (email === "" || email === "undefined") {
    return false;
  }
  return email.match(re) && !email.match(beg_spl);
}
function isEmailValid() {
  email = document.getElementById("emailID").value.toLowerCase();
  var blank = /\s/;
  if (isValidationEmail(email) && !email.match(blank)) {
    document.getElementById("showEmailError").innerHTML = "";
    return true;
  } else {
    document.getElementById("showEmailError").innerHTML =
      "*Please enter the valid email!";
    document.getElementById("showEmailError").style.color = "red";
    return false;
  }
}
// validaction for password 
var passwordEntered = "";
function passwordError() {
  passwordEntered = document.getElementById("password").value;
  document.getElementById("showPasswordError").style.display = "block";
  confirmPasswordError();
  var upper = /[A-Z]/g;
  var lower = /[a-z]/g;
  var digit = /[0-9]/g;
  var blank_space = /\s/g;
  var spl_char =
    /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\_\-]/g;
  if (passwordEntered != "" || passwordEntered != undefined) {
    if (passwordEntered.match(upper)) {
      document.getElementById("error3").style.color = "red";
    } else {
      document.getElementById("error3").style.color = "red";
    }
    if (passwordEntered.match(lower)) {
      document.getElementById("error4").style.color = "red";
    } else {
      document.getElementById("error4").style.color = "red";
    }
    if (passwordEntered.match(digit)) {
      document.getElementById("error5").style.color = "red";
    } else {
      document.getElementById("error5").style.color = "red";
    }
    if (!passwordEntered.match(blank_space)) {
      document.getElementById("error7").style.color = "red";
    } else {
      document.getElementById("error7").style.color = "red";
    }
    if (passwordEntered.match(spl_char)) {
      document.getElementById("error6").style.color = "red";
    } else {
      document.getElementById("error6").style.color = "red";
    }
    if (passwordEntered.length >= 8) {
      document.getElementById("error1").style.color = "red";
    } else {
      document.getElementById("error1").style.color = "red";
    }
    if (passwordEntered.length <= 16) {
      document.getElementById("error2").style.color = "red";
    } else {
      document.getElementById("error2").style.color = "red";
    }
    if (
      passwordEntered.match(upper) &&
      passwordEntered.match(lower) &&
      passwordEntered.match(digit) &&
      !passwordEntered.match(blank_space) &&
      passwordEntered.match(spl_char) &&
      passwordEntered.length >= 8 &&
      passwordEntered.length <= 16
    ) {
      document.getElementById("showPasswordError").style.display = "none";
      return true;
    } else {
      document.getElementById("showPasswordError").style.display = "block";
      return false;
    }
  } else {
    document.getElementById("showPasswordError").style.display = "block";
    return false;
  }
}

// validaction for confirm Password 
function confirmPasswordError() {
  var confirmPassword = document.getElementById("confirmPassword").value;
  if (confirmPassword == "" || confirmPassword == undefined) {
    document.getElementById("showConfirmPasswordError").innerHTML =
      "*Please Confirm your password";
    document.getElementById("showConfirmPasswordError").style.color = "red";
    return false;
  } else {
    if (passwordEntered == confirmPassword) {
      document.getElementById("showConfirmPasswordError").innerHTML ="";
      return true;
    } else {
      document.getElementById("showConfirmPasswordError").innerHTML =
        "*Password does not match!";
      document.getElementById("showConfirmPasswordError").style.color ="red";
      return false;
    }
  }
}

var countries = [
  "UK",
  "USA",
  "India",
  "	Afghanistan",
  "	Iran",
 
];
var countryCodes = [
  {
    India: 91,
    Afghanistan: 93,
    Algeria: 213,
    Bhutan: 975,
    Brazil: 55,
    Canada: 1,
  },
];
function myCountry() {
  var selectItem = document.getElementById("countryList");
  var options = `<option id="selectYourCountry" value="" selected disabled hidden>Select Country</option>`;
  for (i = 0; i < countries.length; i++) {
    options += `<option>${countries[i]}</option>`;
  }
  selectItem.innerHTML = options;
}
myCountry();

function internationalCountryCodes() {
  console.log(Object.values(countryCodes[0]).length);
  var selectCode = document.getElementById("countryCode");
  var options = `<option id="selectYourCountrycode" value="" selected disabled hidden>-</option>`;
  var codes = Object.values(countryCodes[0]);
  for (i = 0; i < Object.values(countryCodes[0]).length; i++) {
    options += `<option>+${codes[i]}</option>`;
  }
  selectCode.innerHTML = options;
}
internationalCountryCodes();

function isCountrySelected() {
  var selectCountry = document.getElementById("countryList").value;
  for (i = 0; i < countries.length; i++) {
    if (selectCountry == countries[i]) {
      document.getElementById("showCountryError").innerHTML = "";
      return true;
    }
  }
  for (i = 0; i < countries.length; i++) {
    if (selectCountry != countries[i]) {
      document.getElementById("showCountryError").innerHTML =
        "*Please select your country!";
      document.getElementById("showCountryError").style.color = "red";
      return false;
    }
  }
}

function phoneNumberError() {
  number = document.getElementById("mobileNumber").value;
  var reg = /[7-9][0-9]{9}/g;
  if (number.toString().length == 10 && number.match(reg)) {
    document.getElementById("showMobileError").innerHTML = "";
    return true;
  } else {
    document.getElementById("showMobileError").innerHTML =
      "*Enter a valid mobile number!";
    document.getElementById("showMobileError").style.color = "red";
    return false;
  }
}

function isGenderSelected() {
  var genderMale = document.getElementById("radio1").checked;
  var genderFemale = document.getElementById("radio2").checked;
  if (genderFemale || genderMale) {
    document.getElementById("showGenderError").innerHTML = "";
    return true;
  } else {
    document.getElementById("showGenderError").innerHTML =
      "Please select your gender!";
    document.getElementById("showGenderError").style.color = "red";
    return false;
  }
}

function checkBoxValid() {
  var is_checked = document.getElementById("exampleCheck1").checked;
  if (is_checked) {
    document.getElementById("exampleCheck1").innerHTML="";
    return true;
  } else {
    document.getElementById("checkboxerroe").innerHTML="Please Tick the terms and Condaction field";
    document.getElementById("checkboxerroe").style.color = "red";
    return false;
  }
}




function finalValidations() {
  if (
    validateName() &&
    validateFName() &&
    passwordError() &&
    confirmPasswordError() &&
    isCountrySelected() &&
    isEmailValid() &&
    phoneNumberError() &&
    isGenderSelected() &&
    checkBoxValid()
  ) {
    location.href="WelcomePage.html";
  } else {
    validateFName();
    isEmailValid();
    isCountrySelected();
    phoneNumberError();
    passwordError();
    confirmPasswordError();
    isGenderSelected();
    checkBoxValid();

    alert("Enter all Feild")
    return false;
  }
}

function AvoidSpace(event) {
  var k = event ? event.which : window.event.keyCode;
  if (k == 32) return false;
}