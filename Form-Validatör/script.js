const form= document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const repassword=document.getElementById('repassword');
var isValid=false;

function error(input,message)
{
    input.className='form-control is-invalid';
    const div=input.nextElementSibling;
    div.innerText=message;
    div.className='invalid-feedback';
}
function success(input)
{
    input.className='form-control is-valid';
}

function checkEmail(input){
   const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
      success(input);
    }
    else{
      error(input,'Email is invalid!');
    }


  };

  function checkRequired(inputs)
  {
    inputs.forEach(function(input) {
      if(input.value===''){
        error(input,`${input.id} is required!`);
      }
      else{
        success(input);
      }
      
    });
    
  };

  function checkLength(input,min,max){
    if(input.value.length<min){
      error(input,`${input.id} must be grater than ${min}`);
    }
    else if(input.value.length>max){
      error(input,`${input.id} must be smaller than ${max}`);
    }
    else{
      success(input);
      isValid=true;
    }

  };

  function checkPasswordMatch(){
    if(password.value===repassword.value&(isValid)) {
      success(password);
      success(repassword);
      const div=repassword.nextElementSibling;
      div.innerText='Password matched!';
      div.className='valid-feedback';
     
    }
    else{
      error(repassword,'Password could not match!');
    }
  };

  function checkPhone(){
    var exp= /^\d{10}$/;
    if(!exp.test(phone.value))
    error(phone,'Phone number must be at least 10 character!');
    else
    success(phone);
  };
  function  isPasswordEmpty(){
    if(password.value===''){
    checkLength(password,7,12);
    checkLength(repassword,7,12);
    }
    else
    checkPasswordMatch();
  }

form.addEventListener('submit',function(e){
e.preventDefault();
  checkRequired([username,email,phone,password,repassword]);
  checkEmail(email);
  checkLength(username,7,15);
  checkLength(password,7,12);
  isPasswordEmpty();
  checkPhone();
});