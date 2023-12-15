import { Formik, useFormik } from "formik";
import * as yup from 'yup';
export default function YupValidation(){
   
    const formik = useFormik({
        initialValues: {
            UserName: '',
            PassWord: '',
            Email: ''
        },
        validationSchema: yup.object({
            UserName: yup.string()
                         .required('User name Req')
                         .min(4,'Name is too short....')
                         .max(10,'Name is too long....'),
            PassWord: yup.string()
                         .required('PassWord is req.')
                         .min(4,'PassWord is Poor')
                         .max(10,'Enter only 8 Digit PassWord'),
            Email: yup.string()
                      .required('Email is Req....')
                      .email('Invalid Email Entered')  
        }),
        onSubmit: values =>{
            alert(JSON.stringify(values));
        }

    })
   
    return(
        <div className="p-5 m-5">
            <h2>Register User</h2>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt className="text-[15px] underline text-blue-400">UserName</dt>
                        <dd className="border w-52"><input {...formik.getFieldProps("UserName")} type="text" /></dd>
                        <dd className="text-red-400">{formik.errors.UserName}</dd>

                        <dt className="text-[15px] underline text-blue-400">Password</dt> 
                        <dd className="border w-52"><input {...formik.getFieldProps("PassWord")}  type="text"/></dd>
                        <dd className="text-red-400">{formik.errors.PassWord}</dd>

                        <dt className="text-[15px] underline text-blue-400">Email</dt>
                        <dd className="border w-52"><input {...formik.getFieldProps("Email")}  type="email"/></dd>
                        <dd className="text-red-400">{formik.errors.Email}</dd>
                    
                        <button type="submit">Register</button>
                    </dl>    
                </form>
            </div>
    )
}


