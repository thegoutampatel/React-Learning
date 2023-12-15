import { useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData"

export default function CustomHookEx(){

    const [data] = useFetchData("https://fakestoreapi.com/products/1"); 


    return(
        <div className="m-10">
            <h2>product</h2>
            <ol>
                {
                    data.map(product=>{
                        <li>{product.title}</li>
                    })
                }
            </ol>
        </div>
    )
}