function store() {
    var Username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    localStorage.setItem(Username, password);
  }

  function loginM() {
    store();
    var Username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if (Username == "admin" && password == "admin") {
      window.alert("Login Successful");
      console.log(document.getElementById("logout-button").innerHTML);
      document.getElementById("logout-button").innerHTML = "LOGOUT";
      document.getElementById("logout-button").setAttribute("data-toggle", "none");
      document.getElementById("ena").removeAttribute("disabled");

    }
  }
  function logout() {
    var data = document.getElementById("logout-button");

    if (data.innerHTML == "LOGOUT" || data.innerHTML == "LOGIN") {
      data.innerHTML = "LOGIN";
      data.setAttribute("data-toggle", "modal");
      document.getElementById("close").setAttribute("data-dismiss","modal");
      document.getElementById("ena").setAttribute("disabled",true);
      localStorage.clear();
    }
  }

  function pay(){
    var data = document.getElementById("logout-button");

    if (data.innerHTML == "LOGOUT"){

        document.getElementById("ena").removeAttribute("disabled");
        alert("Hi your booking is sucessful");
    }else{

        document.getElementById("ena").setAttribute("disabled",true);
    }
  }  