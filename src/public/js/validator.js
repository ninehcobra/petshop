


function Validator(options)
{


function validate(inputElement,rule)
{
   var errorElement= inputElement.parentElement.querySelector(options.errorSelector)
   var errorMessage= rule.test(inputElement.value)


   if(errorMessage){
      errorElement.innerText=errorMessage;
      inputElement.parentElement.classList.add('invalid')
   }
   else{
      errorElement.innerText='';
      inputElement.parentElement.classList.remove('invalid')
   }
   return !errorMessage
}

 var formElement =document.querySelector(options.form)

 if(formElement)
 {
    formElement.onsubmit=function(e){
      e.preventDefault();

      var isFormValid=true;

      options.rules.forEach(function(rule){
         var inputElement=formElement.querySelector(rule.selector)
         var isValid =validate(inputElement,rule);
         if(!isValid)
         {
            isFormValid=false
         }
      })

      //
      if(isFormValid)
      {
         if(typeof options.onSubmit==='function'){
            var enableInputs = formElement.querySelectorAll('[name]')
            var formValues=Array.from(enableInputs).reduce(function(values,input){
               return (values[input.name]=input.value)&&values;
            },{})
         }
         options.onSubmit(formValues)

      }
      else{


      }
    }

   options.rules.forEach(function(rule){
      var inputElement=formElement.querySelector(rule.selector)
      
      if(inputElement)
      {
         inputElement.onblur=function()
         {
            validate(inputElement,rule)
         }

         inputElement.oninput=function(){
            var errorElement= inputElement.parentElement.querySelector(options.errorSelector)
            errorElement.innerText=''
            inputElement.parentElement.classList.remove('invalid')

         }
      }
   })
 }
}

Validator.isRequired = function(selector)
{
   return{
      selector: selector,
      test: function(value){
         return value.trim() ? undefined:'Vui lòng nhập thông tin này'

      }
   }

}

Validator.isEmail = function(selector)
{
   return{
      selector: selector,
      test: function(value){
         var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         return regex.test(value) ? undefined : "Đây không phải là email hợp lệ"
      }
   }
}

Validator.minLength = function(selector,min)
{
   return{
      selector: selector,
      test: function(value){
         
         return value.length>=min ? undefined : ('Vui lòng nhập tối thiểu '+ min + ' ký tự')
      }
   }
}

Validator.isPhonenumber = function(selector)
{
   return{
      selector: selector,
      test: function(value){
         var regex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
         return regex.test(value) ? undefined : "Vui lòng nhập số điện thoại đúng"
      }
   }
}

Validator.isConfirmed=function(selector,getConfirmvalue){
   return{
      selector: selector,
      test:function(value){
         return value===getConfirmvalue()?undefined:"Mật khẩu nhập lại không trùng khớp"
      }
   }
}

