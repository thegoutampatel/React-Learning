import { useFormik, Formik, Field, ErrorMessage, Form } from "formik";
import  * as yup from 'yup';

export default function YupValidationComponent(){
    return(
        <div className="flex flex-col items-center"> 
            <h2>Register userDetails</h2>
            <Formik initialValues={
                {
                    UserName: '',
                    Age: '',
                    Email: '',
                    City: ''
                }} validationSchema={
                    yup.object({
                        UserName: yup.string().required('Name Required').min(4,'Name is too short').max(12, 'Name is too Long'),
                        Email: yup.string().email('Invalid Email').required('Email Required'),
                        Age: yup.number().required('Age Required'),
                        City: yup.string().required('city is Required')
                    })
                } 
                onSubmit={
                    values=>{
                        alert(JSON.stringify(values));
                    }
                }>
               {
                    fields => 
                    <Form>
                    {
                       <div>
                            <dl>
                                <dt>User Name</dt>
                                <dd className="border"><Field name="UserName" type="text"></Field></dd>
                                <dd><ErrorMessage name="UserName" className="text-red-400"></ErrorMessage></dd>
                                <dt>Age</dt>
                                <dd className="border"><Field name="Age" type="string"></Field></dd>
                                <dd><ErrorMessage name="Age" className="text-red-400"></ErrorMessage></dd>
                                <dt>Email</dt>
                                <dd className="border"><Field name="Email" type="email"></Field></dd>
                                <dd><ErrorMessage name="Email" className="text-red-400"></ErrorMessage></dd>
                                <dt>City</dt>
                                <dd className="border"><Field name="City" as='select'>
                                    <option>Bholaram</option>
                                    <option>KhandwaNaka</option>
                                </Field></dd>
                                <dd><ErrorMessage name="City" className="text-red-400"></ErrorMessage></dd>
                            </dl>
                            <button disabled={(fields.isValid)?false:true} className="bg-blue-500 rounded-sm p-2 m-2">Register</button>
                       </div>
                    }
                </Form>
                    
               }
            </Formik>
        </div>
    )
}