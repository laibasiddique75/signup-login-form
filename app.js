
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
        localStorage.clear()

        localStorage.setItem("userData",JSON.stringify(users))






        var loginBtn = document.getElementById("login")


        loginBtn.addEventListener("click",function(){
        
        
            var loginEmail = document.getElementById("login-email")
            var loginPass = document.getElementById("login-password")
        
            console.log(loginEmail.value,loginPass.value);



            var userObject = {
               
                email:loginEmail.value,
                password:loginPass.value
                }
                console.log(userObject);





    loginEmail.value =''
    loginPass.value =''
    
    

            
        })






        
    })



     
                     