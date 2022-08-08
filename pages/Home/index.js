const ListDropDwon = document.querySelector("#listHeader");
function dropDownList() {
  if (ListDropDwon.style.display === "none") {
    ListDropDwon.style.display = "block";
  } else {
    ListDropDwon.style.display = "none";
  }
}

function stopdropDownList() {
  if (ListDropDwon.style.display === "block") {
    ListDropDwon.style.display = "none";
  } else {
  }
}


function signUp( ) {
   
  let userName = document.querySelector("#userName");
  let email = document.querySelector("#email_signUp");
  let password = document.querySelector("#ps_signUp");
  let re_password = document.querySelector("#re_ps_signUp");

  const user = {
    userName: userName.value,
    email: email.value,
    password: password.value,
    re_password: re_password.value,
  };

  localStorage.setItem("user");
  localStorage.clear()
  console.log("dfdffd");

}
signUp();