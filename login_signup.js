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
  if (user_name_signup.value == "") {
    user_name_signup_err.style.display = "block";
  } else {
    user_name_signup_err.style.display = "none";
  }
  if (pass_signup.value == "") {
    pass_signup_err.style.display = "block";
  } else {
    pass_signup_err.style.display = "none";
  }
  if (re_pass_signup.value == pass_signup.value) {
    re_pass_signup_err.style.display = "none";
  } else {
    re_pass_signup_err.style.display = "block";
  }

  if (
    user_name_signup.value != "" &&
    pass_signup.value != "" &&
    re_pass_signup.value == pass_signup.value
  ) {
    success.style.display = "block";
    user_name_signup.value = "";
    pass_signup.value = "";
    re_pass_signup.value = "";
    reload();
  }
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
