import { Formik, useFormik } from "formik";
export default function FormikValidation(){
   
   function verifyUserDetails(userDetails)
   {
        const errors ={};
        if(userDetails.UserName==''){
            errors.UserName = 'User Name Req.';
        }else if(userDetails.UserName.length<4){
            errors.UserName = 'Name too short ~ ~ ~ ~ ~';
        }else if(userDetails.UserName.length >10){
            errors.UserName = 'Name is Too Long ~ ~ ~ ~ ';
        }
        if(userDetails.Age==''){
            errors.Age = 'Age req.';
        }else if(isNaN(userDetails.Age)){
            errors.Age = 'Age Must be a Number ~ ~ ~ ~ ';}
        if(userDetails.Email==''){
            errors.Email = 'Email req.';
        }else if(userDetails.Email.indexOf('@')<=2){
            errors.Email = 'Invalid Email ~ ~ ~ ~ ';
        }

        if(userDetails.Mobile==''){
            errors.Mobile = 'Mobile Require';
        }else if(userDetails.Mobile.match(/\+91\d{10}/)){
            errors.Mobile = '';
        }else{
            errors.Mobile = 'Enter Valid Mo. Number ~ ~ ~'
        }



        return errors;
   }
   const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: 0,
            Email: '',
            Mobile: ''
        },
        validate: verifyUserDetails,
        onSubmit: values=>{
            alert(JSON.stringify(values));
        }
   })
    return(
        <div className="p-3 m-4">
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