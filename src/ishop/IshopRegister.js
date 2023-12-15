import {useNavigate} from "react-router-dom";
import { useFormik } from "formik";
// import axios from "axios";


export default function IshopRegister(){

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: 0,
            Email: '',
            Mobile: ''
        }
    })
    return(
        <div>
            <h2>New User Register</h2>
            <form onSubmit={formik.handleSubmit}>
                <h1>Register User</h1>
                <dl>
                    <dt>UserName</dt>
                    <dd><input className="border" name="UserName" onChange={formik.handleChange} type="text"/></dd>
                    <dd className="text-red-300">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input className="border" name="Age" onChange={formik.handleChange} type="text"/></dd>
                    <dd className="text-red-300">{formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd><input className="border" name="Email" onChange={formik.handleChange} type="email"/></dd> 
                    <dd className="text-red-300">{formik.errors.Email}</dd>  
                    <dt>Mobile Number</dt>
                    <dd><input className="border" type="text" name="Mobile" onChange={formik.handleChange}/></dd>
                    <dd className="text-red-300">{formik.errors.Mobile}</dd>
                </dl>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}