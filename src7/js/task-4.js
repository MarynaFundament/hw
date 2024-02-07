const form = document.querySelector(".login-form")

form.addEventListener("submit", handleSubmitForm)

function handleSubmitForm(e){
    e.preventDefault()

    console.log(form)

  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();

  console.log()

  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  
  if(emailValue && passwordValue){

    const object = 
    {email:emailValue,
     password:passwordValue }

     console.log(object)

  }
  
  console.log("Email:", emailValue);
  console.log("Password:", passwordValue);

  form.reset()
}


////1.form.elements.
////2.!emailValue