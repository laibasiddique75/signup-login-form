document.getElementById("sign-up").addEventListener("click",function(){


   
        var name = document.getElementById("name")
        var email = document.getElementById("email")
        var password = document.getElementById("password")
    
        console.log(name.value,password.value,email.value);
    
    
        var users=[];
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
        
    })



