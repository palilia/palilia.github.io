function LogIn () {
	var email = document.getElementById("email"),
	password = document.getElementById("password"),
    ok = document.querySelectorAll(".login"),
    error = document.querySelectorAll(".error");

  var valid = true;

  // debugger; для отладки

  if (email.value == '') {
    error[0].style.display = "block";
    valid = false;
  } else {
    ok[0].style.display = "inline";
  }

  if (password.value == '') {
    error[1].style.display = "block";
    valid = false;
  } else {
    ok[1].style.display = "inline";
  }

  var em = email.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
  if ((email.value == '') || (!em)) {
    error[2].style.display = "block";
    valid = false;
  } else {
    ok[2].style.display = "inline";
  }

  if (!valid) {
    e.preventDefault();
  }
}