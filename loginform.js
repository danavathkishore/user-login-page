let users = [
    { username: 'peter', password: '12345678' },
    { username: 'stark', password: '123456789' },
    { username: 'kevin', password: '12345678910' },
  
];

function verifyname(){
     var Name=document.getElementById("name").value
     var errormsg= document.getElementById("error-msg");
     document.getElementById("name").value  = Name.toUpperCase();
     if (Name>65||Name<91 )
        { 
         errormsg.innerHTML="numbers not allowed".fontcolor("red");
     }
      else if(Name.length<5){
           errormsg.innerHTML="name should be atleast 5 characters ".fontcolor("red");
          } 
 
             else {
                     errormsg.innerHTML=  "name is valid".fontcolor("green");
         }  
}
   
function verifypassword(){
        var pass=document.getElementById("password").value
        var Passwordmsg= document.getElementById("passwordmsg");
        if(pass.length<8){
           Passwordmsg.innerHTML= "the password should be 8 characters long".fontcolor("red");
          } 
             else{
                 Passwordmsg.innerHTML=" valid password".fontcolor("green");
      }     
}

function signin() {
        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        var buttonerror = document.getElementById("button-msg");
    
        if (name === "" || password === "") {
            buttonerror.innerHTML = "Please fill the required fields".fontcolor("red");
        } else {
            var userFound = false;
            for (var i = 0; i < users.length; i++) {
                if (name === users[i].username) {
                    if (password === users[i].password) {
                        userFound = true;
                        buttonerror.innerHTML = "Login successful".fontcolor("green");
                        break;
                    } else {
                        buttonerror.innerHTML = "Incorrect password. Please try again.".fontcolor("red");
                        userFound = true; 
                        break;
                    }
                }
            }
            
            if (!userFound) {
                buttonerror.innerHTML = "User not found. Please sign up for registration.".fontcolor("red");
                document.getElementById("signupcontainer").style.display = "block";
            }
    }
}
     
function signup(){
    document.getElementById("name").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.getElementById("button-msg").style.display = "none";
    document.getElementById("error-msg").style.display="none";
    document.getElementById("passwordmsg").style.display="none";
    document.getElementById("signin").style.display="none";
    document.getElementById("button-msg").style.display="none";
    document.getElementById("user").style.display="none";
    document.getElementById("pass").style.display="none";
    document.getElementById("signup").style.display="none";
    document.getElementById("link").style.display="none";
     
    var Fieldset=document.getElementById("fieldset");
        Fieldset.innerHTML=
    `username:<input type="text" id="username"name=username" onkeyup="Verifyusername()"  >
     <span id="usermsg"> </span>
     <br>
     <br> 
     password:<input type= "password"  id="Password" onkeyup="Verifypassword() " > 
     <span id="password-msg"> </span>
     <button onclick="verifysubmit()" id="submit" style="display: block; margin-left:100px; margin-top:13px;">signup</button>
     <span id="button-msg"> </span>`
   
 }

function Verifyusername(){
    var Username=document.getElementById("username").value;
    var Errormsg= document.getElementById("usermsg");

     if(Username.length<5){
   Errormsg.innerHTML="name should be atleast 5 characters ".fontcolor("red");
   } 
       else if (Username<57||Username>47){
                Errormsg.innerHTML="numbers not allowed".fontcolor("red");
                 } 
            else if(Username=""){
                    Errormsg.innerHTML=  "name cant be empty".fontcolor("red");
                 }
                 else {
                      Errormsg.innerHTML=  "name is valid".fontcolor("green");
          } 
   }

function Verifypassword(){
    var Pass=document.getElementById("Password").value
     var passwordmsg= document.getElementById("password-msg");
        if(Pass.length<8){
           passwordmsg.innerHTML= "the password should be 8 characters long".fontcolor("red");
             }else if(Pass=""){
                      passwordmsg.innerHTML=  "password cant be empty".fontcolor("red");
        }      
                  else{
                       passwordmsg.innerHTML=" valid password".fontcolor("green");
    }  
}
function verifysubmit(){
        var Username=document.getElementById("username").value;
        var Pass=document.getElementById("Password").value;
        buttonmsg=document.getElementById("button-msg");
        if ( Username===""||Pass===""){
             buttonmsg.innerHTML = "please fill the required feilds".fontcolor("red");
        }
               else{
                     if(Username!=users[0].username||Pass!=users[1].password){
                        users.push({username:Username,password:Pass});
                        buttonmsg.innerHTML = `Registration was successful<br> <button onclick="submitlog()"style="margin-left: 130px;"> login</button>`.fontcolor("green");
                        console.log(users)    
            }
        }       
}

function submitlog(){
    confirm("refresh the page and signin");
    }

function displayRegisteredUsers() {   
    var message="";
    for(i=0 ;i<users.length;i++ )
    message +=users[i].username + " " + users[i].password + "\n";
    alert(message)
    }