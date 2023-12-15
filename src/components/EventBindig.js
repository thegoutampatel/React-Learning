import { useState, useEffect } from "react";
import './EventBinding.css';
export default function EventBinding(){

    const [product, setproduct] = useState({Name:'', Price: '', City:'', Stock:false});
    
    function handleName(e){
        setproduct(
            {
                Name: e.target.value,
                Price: product.Price,
                City: product.City,
                Stock: product.Stock
            }
        )
    }
    function handlePrice(e){
        setproduct(
            {
                Name: product.Name,
                Price: e.target.value,
                City: product.City,
                Stock: product.Stock
            }
        )
    }
    function handleCity(e){
        setproduct(
            {
                Name: product.Name,
                Price: product.Price,
                City: e.target.value,
                Stock: product.Stock
            }
        )
    }
    function handleStock(e){
        setproduct(
            {
                Name: product.Name,
                Price: product.Price,
                City: product.City,
                Stock: e.target.checked
            }
        )
    }





    return(
        <div className=" flex flex-col">
            <div className="flex flex-col items-center justify-center">
                <h2>Register product</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>
                        <input type="text" onChange={handleName} />
                    </dd>
                    
                    <dt>Price</dt>
                    <dd>
                        <input type="text" onChange={handlePrice} />
                    </dd>
                    
                    <dt>Select Your Area</dt>
                    <dd>
                    <select className="border" onChange={handleCity}>
                        <option>Bholaram</option>
                        <option>khandwanaka</option>
                        <option>Navlakha</option>
                    </select>
                    </dd>
                    <dt>Room for rent</dt>
                    <dd>
                    <input type="checkbox" onChange={handleStock} /> available
                    </dd>
                    <button className="bg-red-700 text-white rounded-lg w-32 mt-5">Register</button>
                </dl>
            </div>
            <div className="flex items-center justify-center mt-7">
                <h2>Product Details</h2>
                <dl className="flex flex-col">
                    <dt>Name</dt>
                    <dd>{product.Name}</dd>
                    <dt>Price</dt>
                    <dd>{product.Price}</dd>
                    <dt>City</dt>
                    <dd>{product.City}</dd>
                    <dt>Stock</dt>
                    <dd>{(product.Stock == true)?"Available":"Out of Stock"}</dd>
                </dl>

            </div>
        </div>
    )
}