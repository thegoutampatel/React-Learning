import React from "react"
export default class CardComponent extends React.Component
{
    constructor(props){
        super(props)
    }
    render()
    {
        return(
            <div className="flex flex-col h-[300px] w-[200px] p-2 m-2 items-center justify-center border overflow-hidden">
            <img src={this.props.product.image} height='80' width='80'/>
            <p>{this.props.product.title}</p>
            <p className="underline">${this.props.product.price}</p>
            {/* <p className="text-ellipsis  overflow-hidden">{product.description}</p> */}
            <button className="mt-2 bg-red-400 rounded-sm p-[2px]">Add to Cart</button>
        </div>
        )
    }
}