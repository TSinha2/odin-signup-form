const password = document.querySelector('#password');
password.addEventListener('change', (e) => {
  const isValid = e.target.reportValidity();
  if (isValid)
  {
    password.classList.remove("error")
  }
  else
  {
    password.classList.add("error")
  }
});


const confirmation = document.querySelector('#confirm');
confirmation.addEventListener('change', (e) => {
    const isValid = e.target.reportValidity();
    if ( !(password.classList.contains('error')) && password.value === confirmation.value)
    {
        confirmation.classList.remove("error")
    }
    else
    {
        confirmation.setCustomValidity('Passwords do not match');
        confirmation.classList.add("error")
    }
});



const phone_no = document.querySelector('#phone');
phone_no.addEventListener('change', (e) => {
  const isValid = e.target.reportValidity();
  console.log(isValid);
});


const email = document.querySelector('#email');
email.addEventListener('change', (e) => {
  const isValid = e.target.reportValidity();
  console.log(isValid);
});