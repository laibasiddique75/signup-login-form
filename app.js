
var users=[];

var signUpBtn = document.getElementById("sign-up")
 signUpBtn && signUpBtn.addEventListener("click",function(){


   
        var name = document.getElementById("name")
        var email = document.getElementById("email")
        var password = document.getElementById("password")
    
        console.log(name.value,password.value,email.value);
    
    
       
        var userObj = {
        name: name.value,
        email:email.value,
        password:password.value
        }
    
    
        users.push(userObj)
        console.log(userObj);
        
    
        name.value =''
        email.value =''
        password.value =''
       

        localStorage.setItem("userData",JSON.stringify(users))

        var fetchingData = JSON.parse(localStorage.getItem("userData"));
         fetchingData.push(userObj)


     
        })







         var loginBtn = document.getElementById("login-btn")


         loginBtn && loginBtn.addEventListener("click",function(){
       
         
             var loginEmail = document.getElementById("login-email")
             var loginPass = document.getElementById("login-password")
 
 
             console.log(loginEmail.value,loginPass.value);

             var users = JSON.parse(localStorage.getItem("userData"));
 
         
             
 
       
     for (var user of users) {
         if (user.email == loginEmail.value) {
 
             if (user.password == loginPass.value) {
            
                Swal.fire({
                  title:"Welcome!",
                    text: "You have logged in successfully",
                    icon: "success"
                  });


 
             }
             else {
         
                    Swal.fire({
                        text: "email is ok but password is wrong",
                        icon: "error"
                      });
 
             }
 
         }
         else {
           if(loginPass.value == user.password){
         
            Swal.fire({
                text: "password is ok but email is wrong",
                icon: "error"
              });
             
           }
 
         }
 
     }
 
       
     loginEmail.value =''
     loginPass.value =''
 
             
         })


   



     
                     

      