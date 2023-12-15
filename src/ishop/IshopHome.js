import { Link } from "react-router-dom";


export default function IshopHome(){
    return(
        <div className="">
            <h2 className="text-[30px]">Shopping Home</h2>
            <Link className="underline text-blue-500" to="/register">New Register</Link>
            <span> | </span>
            <Link className="underline text-blue-500" to="/login">Existing</Link>
        </div>
    )
}