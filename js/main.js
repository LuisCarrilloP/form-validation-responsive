let id = (id) => document.getElementById(id)
let classes = (className) => document.getElementsByClassName(className)

let username = id('username'),
   email = id('email'),
   password = id('password'),
   form = id('form'),
   errorMsg = classes('error'),
   successIcon = classes('success-icon'),
   failureIcon = classes('failure-icon');

form.addEventListener('submit', (e) => {
   e.preventDefault()

   validateData(username, 0, "Username is required")
   validateData(email, 1, "Email is required")
   validateData(password, 2, "Password is required")
})

let validateData = (id, serial, message) => {
   if(id.value.trim() === ""){
      errorMsg[serial].innerHTML = message
      id.style.border = "2px solid red"

      //show icon failure
      failureIcon[serial].style.opacity = "1"
      successIcon[serial].style.opacity = "0"
   }else{
      errorMsg[serial].innerHTML = ""
      id.style.border = "2px solid green"

      //show success icon
      failureIcon[serial].style.opacity = "0"
      successIcon[serial].style.opacity = "1"
   }
}

