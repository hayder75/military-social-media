import React from 'react'
import { Toaster } from 'react-hot-toast';
import { useNavigate ,Link} from "react-router-dom";
import { useFormik } from 'formik';
import { userNameValidate } from '../helper/validate';
import  styles from '../styles/Username.module.css';
export const Username = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues : {
      username : ''
    },
    validate : userNameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      navigate('/password')
    }
  })


  return (
    <div className="container mx-auto">

    <Toaster position='top-right' reverseOrder={false}></Toaster>

    <div className='flex justify-center items-center h-screen'>
      <div className={styles.glass}>

        <div className="title flex flex-col items-center">
          <h4 className='text-5xl font-bold'>Hello Again!</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            Explore More by connecting with us.
          </span>
        </div>

        <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
                <img src="" className={styles.profile_img} alt="avatar" /> 
            </div>

            <div className="textbox flex flex-col items-center gap-6">
                <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
                <button className={styles.btn} type='submit'>Let's Go</button>
            </div>

            <div className="text-center py-4">

              <span className='text-gray-500 py-5'>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
            
            </div>

        </form>

      </div>
    </div>
  </div>
  )
}
