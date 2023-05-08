import toast from 'react-hot-toast'

/** validate login page username */

export async function userNameValidate(values){
    const errors = userNameVerify({},values);

     if(values.userName){

        const { status } = await authenticate(values.username);
        
        if(status !==200){
            
        errors.exit = toast.error('User does not exist...!')

     }
    }
      return errors;
}

/** validate password */
export async function passwordValidate(values){
   const errors = passwordVerify({}, values);

   return errors;
}


/** validate ID */
export async function idValidation(values){
   const errors = idVerify({}, values);

   return errors;
}

/** validate reset password */
export async function resetPasswordValidation(values){
   const errors = passwordVerify({}, values);

   if(values.password !== values.confirm_pwd){
       errors.exist = toast.error("Password not match...!");
   }

   return errors;
}


/** validate register form */
export async function registerValidation(values){
   const errors = userNameVerify({}, values);
   passwordVerify(errors, values);
   emailVerify(errors, values);
   idVerify(errors,values)

   return errors;
}

/** validate profile page */
export async function profileValidation(values){
   const errors = emailVerify({}, values);
   return errors;
}



/*************************************************** */


/** validate username */
function userNameVerify(errors = {}, values){
   if(!values.username){
       errors.username = toast.error('Username Required...!');
   }else if(values.username.includes(" ")){
       errors.username = toast.error('Invalid Username...!')
   }

   return errors;
}


/** validate password */
function passwordVerify(errors = {}, values){
   const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

   if(!values.password){
       errors.password = toast.error("Password Required...!");
   } else if(values.password.includes(" ")){
       errors.password = toast.error("Wrong Password...!");
   }else if(values.password.length < 6){
       errors.password = toast.error("Password must be more than 6 characters long");
   }else if(!specialChars.test(values.password)){
       errors.password = toast.error("Password must have special character");
   }

   return errors;
}


/* id validation*/

function idVerify (errors={},values){
   if(!values.id){
      errors.id= toast.error("Id required");
   }
   else if(values.id.includes(" ")){
      errors.id = toast.error("Wrong Id....!");
   }else if(values.id.length !== 8){
      errors.id = toast.error("Id Number must be 8")
   }

}

/** validate email */
function emailVerify(errors ={}, values){
   if(!values.email){
       errors.email = toast.error("Email Required...!");
   }else if(values.email.includes(" ")){
       errors.email = toast.error("Wrong Email...!")
   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
       errors.email = toast.error("Invalid email address...!")
   }

   return errors;
}
