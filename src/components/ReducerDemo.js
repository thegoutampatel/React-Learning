import { useEffect, useReducer, useState } from "react"
import { useFetchData } from "../hooks/useFetchData";

var initialState = {Likes: 0, dislikes: 0};

function reducer(state, action){
    switch(action.type){
        case 'like':
        return {likes: parseInt(state.likes) + 1, dislikes: state.dislikes};
        case 'dislike':
        return {dislikes: parseInt(state.dislikes) + 1, likes: state.likes};
    }
} 

export default function ReducerDemo(){

    const [state, dispatch] = useReducer(reducer, initialState);
    // const [product, setProduct] = useState({});
    const [data] = useFetchData("https://fakestoreapi.com/products/1");


    // useEffect(()=>{
    //     fetch("https://fakestoreapi.com/products/1")
    //     .then(res => res.json())
    //     .then(data=>{setProduct(data);})
    // })

    function handlelike(){
        dispatch({type: 'like'});
    }
    function handledislike(){
        dispatch({type: 'dislike'});
    }

    return(
        <div className="m-5 p-5">
            <h2 className="text-red-500">product Details</h2> 
            <div className="w-[200px]">
                <img src={data.image} className="h-[160px]"/>
                <div>
                    <p>{data.title}</p>
                </div>
                <div>
                   [{state.likes}] <button onClick={handlelike} className="m-5">Like</button>  
                  [{state.dislikes}]<button onClick={handledislike} >Disklike</button>
                </div>
            </div>
        </div>
    )
}