import { useState } from "react"
import { useCaptcha } from "../hooks/useCaptcha";

export default function LoginComponent(){
    const [theme, setTheme] = useState({});
    const code = useCaptcha();

    function handleThemeChange(e){
            if(e.target.checked)
            {
                setTheme({
                    backgroundColor: 'black',
                    color: 'black'
                })
            }
            else{
                setTheme({
                    backgroundColor: 'white',
                    color: 'black'
                })
            }
    }
    
    return(
        <div className=" h-[100vh] bg-cyan-400" style={theme}>
        <div className="flex items-center flex-col">
            <h1 className="text-[40px] text-red-400">User_Login</h1>
            <div>
                <input type="checkbox" onChange={handleThemeChange} className="p-5 text-red-400" />
            </div>
            <dl>
                <dt className="text-[15px] underline text-red-400">UserName</dt>
                <dd className="border"><input type="text" /></dd>
                <dt className="text-[15px] underline text-red-400">Password</dt>
                <dd className="border"><input type="text"/></dd>
                <button className="border bg-black text-white m-3" >Generate New Code</button>
                <dt>Verify Code: </dt>
                <dd>{code.code}</dd>
            </dl>

            <button className="text-red-400 p-2 rounded-sm bg-green-300 mt-5">Login</button>
        </div>
        </div>
    )
}