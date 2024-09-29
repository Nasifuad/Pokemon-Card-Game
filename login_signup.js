const user_name_signup = document.getElementById("username-signup");
const pass_signup = document.getElementById("signup-pass");
const re_pass_signup = document.getElementById("re-signup-pass");
const btn_signup = document.getElementById("submit-btn");
const btn_login = document.getElementById("submit-btn-login");
const user_name_login = document.getElementById("username-login");
const pass_login = document.getElementById("pass-login");
const user_name_signup_err = document.getElementById("username-signup-err");
const pass_signup_err = document.getElementById("signup-pass-err");
const re_pass_signup_err = document.getElementById("re-signup-pass-err");
const user_name_login_err = document.getElementById("username-login-err");
const pass_login_err = document.getElementById("pass-login-err");
const success = document.getElementById("success");
//Here is the part where the username and password check happens if condition doesnot match error pops

btn_signup.addEventListener("click", () => {
  // Username validation
  if (user_name_signup.value == "") {
    user_name_signup_err.style.display = "block";
  } else {
    user_name_signup_err.style.display = "none";
  }

  // Password validation
  if (pass_signup.value == "") {
    pass_signup_err.style.display = "block";
  } else {
    pass_signup_err.style.display = "none";
  }

  // Re-enter password validation
  if (re_pass_signup.value == pass_signup.value) {
    re_pass_signup_err.style.display = "none";
  } else {
    re_pass_signup_err.style.display = "block";
  }

  // If all validations pass
  if (
    user_name_signup.value != "" &&
    pass_signup.value != "" &&
    re_pass_signup.value == pass_signup.value
  ) {
    const username = user_name_signup.value;
    const password = pass_signup.value; // Assuming you want to store password as well

    // Call the method that pushes both username and password
    user.CustomPushUserPass(username, password);

    // Store both in localStorage if needed (this requires adjusting your data structure for localStorage)
    localStorage.setItem("user.userName", JSON.stringify(user.userName));
    localStorage.setItem(
      "user.userPassword",
      JSON.stringify(user.userPassword)
    );

    // Debug output
    console.log(user);
    console.log(user.userName);
    console.log(user.userPassword);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 7000); // Delay of 2 seconds before reloading
  }
  success.style.display = "block";
  user_name_signup.value = "";
  pass_signup.value = "";
  re_pass_signup.value = "";
});

btn_login.addEventListener("click", () => {
  if (user_name_login.value == "") {
    user_name_login_err.style.display = "block";
  } else {
    user_name_login_err.style.display = "none";
  }
  if (pass_login.value == "") {
    pass_login_err.style.display = "block";
  } else {
    pass_login_err.style.display = "none";
  }
});
document.getElementById("notsee").addEventListener("click", () => {
  document.getElementById("notsee").style.display = "none";
  document.getElementById("see").style.display = "block";
  pass_signup.type = "text";
});
document.getElementById("see").addEventListener("click", () => {
  document.getElementById("see").style.display = "none";
  document.getElementById("notsee").style.display = "block";
  pass_signup.type = "password";
});
document.getElementById("notsee1").addEventListener("click", () => {
  document.getElementById("notsee1").style.display = "none";
  document.getElementById("see1").style.display = "block";
  re_pass_signup.type = "text";
});
document.getElementById("see1").addEventListener("click", () => {
  document.getElementById("see1").style.display = "none";
  document.getElementById("notsee1").style.display = "block";
  re_pass_signup.type = "password";
});
document.getElementById("notsee11").addEventListener("click", () => {
  document.getElementById("notsee11").style.display = "none";
  document.getElementById("see11").style.display = "block";
  pass_login.type = "text";
});
document.getElementById("see11").addEventListener("click", () => {
  document.getElementById("see11").style.display = "none";
  document.getElementById("notsee11").style.display = "block";
  pass_login.type = "password";
});

//save signup information in local storage

class UserInformation {
  constructor() {
    this.length = 0;
    this.userName = {};
    this.userPassword = {};
    this.container = {};
  }

  // Push both username and password at the same index
  CustomPushUserPass(username, password) {
    this.userName[this.length] = username;
    this.userPassword[this.length] = password;
    this.container = {
      userName: this.userName,
      userPassword: this.userPassword,
    };
    // Increment length after setting both username and password
    this.length++;
  }
}

const user = new UserInformation();

const userval = localStorage.getItem("user.userName");
const passval = localStorage.getItem("user.userPassword");
console.log(userval);
const us = JSON.parse(userval);
console.log(us[0]);
console.log(user);
