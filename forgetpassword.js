let users = [
    { username: 'peter', password: '12345678' },
    { username: 'stark', password: '123456789' },
    { username: 'kevin', password: '12345678910' },
    
];

     function verifyname(){
    var Name=document.getElementById("name").value
    var errormsg= document.getElementById("error-msg");
     if(Name.length<5){
    errormsg.innerHTML="name should be atleast 5 characters ".fontcolor("red");
   } 
       else  if (Name<57||Name>47){
       errormsg.innerHTML="numbers not allowed".fontcolor("red");
   } 
     else {
       errormsg.innerHTML=  "name is valid".fontcolor("green");
   } 
   }
   function newpassword(){
    var pass=document.getElementById("password").value
    var Passwordmsg= document.getElementById("passwordmsg");
    if(pass.length<8){
        Passwordmsg.innerHTML= "the password should be 8 characters long".fontcolor("red");
}   
    else{
        Passwordmsg.innerHTML=" valid password".fontcolor("green");
}   
}
   function confirmpassword(){
    var Confrim=document.getElementById("confirmpass").value
   var  passwordmsg=document.getElementById( "password-msg")
    if(Confrim.length<8){
        passwordmsg.innerHTML= "the password should be 8 characters long".fontcolor("red");
} 
    else{
        passwordmsg.innerHTML=" valid password".fontcolor("green");
}
   } 
   function signin(){
   
    var buttonerror = document.getElementById("button-msg");
    var Name=document.getElementById("name").value;
    var pass=document.getElementById("password").value;
    var Confrim=document.getElementById("confirmpass").value;

         if(pass !== Confrim){
            buttonerror.innerHTML= "password doesn't match".fontcolor("red");
         }
         else{
         var userExists = false;
         for (var i = 0; i < users.length; i++) {
             if (Name === users[i].username && pass === users[i].password) {
                 userExists = true;
                 break;
             }
         }
         if (userExists) {
             buttonerror.innerHTML = "User already exists go back to the sign in page ".fontcolor("red");
         } else {
             users.push({ username: Name, password: pass });
             console.log(users)
             buttonerror.innerHTML = "Password was successfully changed".fontcolor("green");
         }
        }
   }


 
