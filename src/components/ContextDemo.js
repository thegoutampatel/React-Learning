import React, {useState, useContext} from "react";

var userDetailsContext = React.createContext(null);

export default function ContextDemo(){
    
    const [userDetails, setUserDetails] = useState({
        UserName: '',
        Email: ''
    })
    function HandleUser(e){
        setUserDetails({
            UserName: e.target.value,
            Email: userDetails.Email
        })
    
    }
    function HandleEmail(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Email: e.target.value
        })
    
    }
    function setData(){
        setUserDetails({
            UserName: userDetails.UserName,
            Email:userDetails.Email
        })
    }
    return( 
        
        <userDetailsContext.Provider value={userDetails}>
            <div><h1 className="text-[20px]">Site Index - {userDetails.UserName}</h1> 
            <dl>
                <dt>UserName</dt>
                <dd><input type="text"  className="border" onChange={HandleUser} /></dd>
                <dt>Email</dt>
                <dd><input type="email" className="border"  onChange={HandleEmail} /></dd>
            </dl>
            <button onClick={setData}>Setdata</button>    

                <HeaderComponent/>
            </div>            
        </userDetailsContext.Provider>
        
    )
}


function HeaderComponent(){
    var userdetails = useContext(userDetailsContext);
    return(
        <div className=" bg-blue-300 p-9 m-3">
            <h1 className="text-[30px] m-3 ">Home - {userdetails.UserName}</h1>
            <NavbarComponent/>
        </div>
    )
} 

function NavbarComponent(){
    var userdetails = useContext(userDetailsContext);
    return(
        <div className="bg-black flex justify-between m-6 ">
            <button className="text-white  text-center p-1 m-1">Amazon</button>
            <button className="text-white  text-center p-1 m-1">{userdetails.Email}</button>
        </div>
    )
}