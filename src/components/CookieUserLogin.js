import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function CookieUserLogin(){
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [userDetails, setUserDetails] = useState({UserName:'', PassWord:''});

    function handleUserName(e){
        setUserDetails({
            UserName: e.target.value,
            PassWord: userDetails.PassWord
        })
    }

    function handlePassWord(e){
           setUserDetails({
            UserName: userDetails.UserName,
            PassWord: e.target.value
           })
    }
    function handleLogin(){
            setCookie("username", userDetails.UserName,{path:"/", expires:new Date("2023-12-12 20:22")});
            alert("Login Success........");
    }
    function handleCookie(){
        removeCookie("username");
        alert("Sighned Out Sucess......!")
    }
    useEffect(()=>{
            if(cookies.username==undefined){
                 alert("Please Login....!")
            }
    },[])
    return(
        <div className="flex justify-evenly m-3 p-3">
            <div>   
                <h1 className="text-lg">User Login!</h1>
                <dl>
                    <dt>UserName</dt>
                    <dd className="border"><input onChange={handleUserName} type="text"/></dd>

                    <dt>PassWord</dt>
                    <dd className="border"><input onChange={handlePassWord} type="text"/></dd>
                </dl>
                <button onClick={handleLogin}>Login</button>
            </div>
               
            <div>
             <h2>Home <button onClick={handleCookie} className="underline text-blue-300 ">Signout</button></h2>
             Hello ! {cookies.username}
            </div>
        </div>
    )
}