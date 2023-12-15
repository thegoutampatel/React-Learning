import { useState } from "react"

export default function FormComponent(){

    const [users] = useState([
        {userId:'Hagimaru'},
        {userId:'Pankaj'},
        {userId:'Hagimaru_1'},
        {userId:'Manish'},
        {userId:'Ankit'},
        {userId:'Dipak'},
        {userId:'Hariom'}
    ]);

    const [userMsg, setUserMsg] = useState('');
    const [isUserValid, setUserValid] = useState(false);
    const [pwdMsg, setPwdMsg] = useState('');
    const [capsStatus, setCapsStatus] = useState(false);
    const [errCity , setErrCity] = useState('');

    function verifyUserId(e){
        for(var user of users){
            if(e.target.value==''){
                setUserMsg('User Id Required');
                break;
            }else{
                if(user.userId == e.target.value){
                    setUserMsg('User ID taken - Try Another');
                    setUserValid(false);
                    break;
                }
                else {
                    setUserMsg('UserId Available');
                    setUserValid(true);
                }
            }
        }
    }
    function hideVerify(){
            setUserMsg('');
    }
    function verifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/))
        {
            setPwdMsg('Strong Password');
        }else{
            if(e.target.value.length<4){
                setPwdMsg('Poor Password');
            }else{
                setPwdMsg('Weack Password')
            }
        }
    }
    function handleVerify(){
        setPwdMsg('');
        setCapsStatus(false);
    }
    function VerifyCaps(e){
        console.log(e.which);
        if(e.keyCode>=65 && e.keyCode<=90 || e.which>=65 && e.which<=90){
            setCapsStatus(true);
        }else{
            setCapsStatus(false);
        }
    }
    function handleCity(e){
        if(e.target.value=='nocity'){
            // alert("Please Select City")
            setErrCity('Please Select a your city');
        }else{
            setErrCity('');
        }
    }

    return(
        <div className="p-2">
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" className="border" onBlur={hideVerify} onKeyUp={verifyUserId}/></dd>
                <dd className={(isUserValid==true)?'text-green-500':'text-red-800'}>{userMsg}</dd>
                <dt>Password</dt>
                <dd><input type="password" className="border" onBlur={handleVerify} onKeyPress={VerifyCaps} onKeyUp={verifyPassword}/></dd>
                <dd>{pwdMsg}</dd>
                <dd className={(capsStatus==true)?'block':'hidden'}>
                   <span className="text-red-500"> <span className="text-green-400">Caps ON</span></span>
                </dd>
                <dt>Your City</dt>
                <dd>
                    <select onChange={handleCity}>
                        <option value='nocity'>Select Your City</option>
                        <option>Indore</option>
                        <option>sanawad</option>
                        <option>Bedia</option>
                        <option>Ujjain</option>
                    </select>
                </dd>
                <dd className="text-red-300">{errCity}</dd>
                <button className="bg-red-400 rounded-sm m-2 p-2">Register</button>
            </dl>
        </div>
    ) 
}