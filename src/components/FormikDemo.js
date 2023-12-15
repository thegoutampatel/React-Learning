import { Formik, useFormik } from "formik"

export default function FormikDemo()
{
    const formik = useFormik({
        initialValues : {
            UserName: '',
            Password: '',
            City: ''
        },
        onSubmit: values=>{
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="flex justify-evenly">
            <div>
                <h2>Register User</h2>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt className="text-[15px] underline text-red-400">UserName</dt>
                        <dd className="border w-52"><input onChange={formik.handleChange} value={formik.values.UserName} name="UserName" type="text" /></dd>
                        <dt className="text-[15px] underline text-red-400">Password</dt>
                        <dd className="border w-52"><input onChange={formik.handleChange} value={formik.values.Password} name="Password" type="text"/></dd>
                        <dt>Your City</dt>
                        <dd>
                            <select className="border" onChange={formik.handleChange} value={formik.values.City} name="City">
                                <option value='nocity'>Select Your City</option>
                                <option>Indore</option>
                                <option>sanawad</option>
                                <option>Bedia</option>
                                <option>Ujjain</option>
                            </select>
                        </dd>
                        <button type="submit">Register</button>
                    </dl>
                </form>
            </div>
            {/* <div>
                <h2>User Details</h2>
                {formik.values.UserName}
            </div> */}
        </div>
    )
}