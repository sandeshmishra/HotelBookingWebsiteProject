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
    }
  }
  function logout() {
    var data = document.getElementById("logout-button");
    if (data.innerHTML == "LOGOUT") {
      data.innerHTML = "LOGIN";
      data.setAttribute("data-toggle", "modal");
      document.getElementById("close").setAttribute("data-dismiss","modal");
      localStorage.clear();
    }
  }
  function header() {
    let headerTemplate = `
      <div class="header">
          <!--Header div-->
          <img src="assests/images/logo.png" alt="logo" id="logo"  />
          <!--login to open in new page-->
          
          <span class="loginStyle">
            <button  type="button" class="btn btn-light btn-sm"  onclick="logout()" data-toggle="modal" data-target="#login" id="logout-button" style="padding: -0.625rem .75rem;">LOGIN</button>
        </span><br/>
        </div>
      `;
    document.getElementById("header").innerHTML = headerTemplate;
  }
  header();
  function footer() {
    let footerTemplate = `   
      <!--Footer div-->
      <!--first section of Footer div-->
      <span class="contactStyle"><button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#example-modal-signup" id="sign-up-button" >Contact Us</button>
      </span>
      <!--second section of Footer div-->
      <div id="social">
      <a href="https://www.facebook.com" target="_blank"><img class="social-icons" src="assests/images/facebook.png" alt="facebook" /></a>
      <a href="https://www.instagram.com" target="_blank"><img class="social-icons" src="assests/images/instagram.png" alt="instagram" /></a>
      <a href="https://twitter.com" target="_blank" ><img class="social-icons" src="assests/images/twitter.png" alt="twitter" /></a>
    </div>
      <br />
      <!--third section of Footer div-->
      <p class="copyRight">&COPY; 2020 ROOM SEARCH PVT. LTD.</p>
      `;
    document.getElementById("footer").innerHTML += footerTemplate;
  }
  footer();
  function loginAndContact() {
    let template = `
     
      <!--login-->
      <div class="modal fade" tabindex="-1" role="dialog" id="login">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modal-header">Please Login</h5>
              <button type="button" id="close1" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" style=" display: flex;flex-direction: column; margin-left: 7%;  margin-right: 7%;">
              <div style="display: flex; flex-direction: row; justify-content: space-evenly;align-items: center; padding: 2%;">
                  <label style="margin-right: 25%;" for="name">Username:</label><br/>
                  <input type="text" id="name" placeholder="Enter Username" required/>
              </div>
              <div style="display: flex; flex-direction: row;justify-content: space-evenly;align-items: center; padding: 2%;">
                  <label style="margin-right: 25%;" for="example-input-password">Password:</label><br/>
                  <input type="password" id="password" placeholder="Enter Password" required autocomplete="off"/>
              </div>
             
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary btn-sm" onclick="loginM()" id="login-button" data-dismiss="modal" style="display: flex; margin: auto;">Login</button>
             
            </div>
          </div>
        </div>
      </div>
     <!--contact modal-->
     <div class="modal fade" tabindex="-1" role="dialog" id="example-modal-signup">
       <div class="modal-dialog" role="document">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="modal-header">Get in touch</h5>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
           <div class="modal-body">
               <form>
                   <p>Thank you for reaching out!!!<br/>
                   Please enter you email and we will get back to you</p>
                 <p style="display: flex; float: left;">
                     <label for="email">Email:</label><br/>
                     <input type="email" id="email" placeholder="Enter your email id" required style="margin-left:5px;"/>
                 </p>
                
               </form>
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-primary btn-sm">Submit</button>
           </div>
         </div>
       </div>
     </div>
      `;
    document.getElementById("loginAndContact").innerHTML = template;
  }
  loginAndContact();  