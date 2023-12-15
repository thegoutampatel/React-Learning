import { useState } from "react";

export default function IncAndDec(){

    const [value , setValue] = useState(0);

    function increaseValue(){
        if(value<20){
            setValue(value + 1)
        }
        else{return}
        
    }
    function decreaseValue(){
        if(value>0){
            setValue(value - 1);
        } 
        else{
            return
        }
    }

    return(
        <div className="flex flex-col items-center w-[100vw] h-[100vh] bg-slate-300">
            <h1 className="mt-52 text-[40px] font-bold">Increase And Decrease</h1>
            <p className="text-[30px] m-10">{value}</p>
            <div className="flex gap-28">
                <button  className="text-[28px] bg-red-400 px-10 rounded-sm text-white " onClick={decreaseValue}>-</button>
                <button className="text-[28px] bg-red-400 px-10 rounded-sm text-white" onClick={increaseValue}>+</button>
            </div>
        </div>
    )

}