import React from "react";
import CardComponent from "./CardComponent";

export default class ShoppingWithClass extends React.Component
{
    constructor(props){
        super(props);
        this.state ={
            categories : [],
            products : []
        }
        this.handleCategorychange = this.handleCategorychange.bind(this);
    }

    GetCategories(){
        fetch('https://fakestoreapi.com/products/categories')
        .then(response=> response.json())
        .then(data=> {
            this.setState({
                categories: data
            })
        })
    }

    GetProducts(url){
        fetch(url)
        .then(response => response.json())
        .then(data=>{
            this.setState({
                products: data
            })
        })
    }
    handleCategorychange(e){
        this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
    }
    
    
    componentDidMount(){
        this.GetCategories();
        this.GetProducts('https://fakestoreapi.com/products');
    }

    render(){
        return(<div className="w-[100vw] h-[100vh]">
           <header className="flex items-center justify-center p-2 bg-red-500">
            <span className="text-white text-[30px]">Shopping Cart</span>
           </header>

           <nav>
            <h2>Select Category</h2>
            <select onChange={this.handleCategorychange} className="border w-28">
                {
                    this.state.categories.map(category=>
                        <option  key={category}>{category}</option>
                    )
                }
            </select>
           </nav>

           <main className="flex">
            <div className="flex flex-wrap w-[80%]">
            {
                this.state.products.map(product=>
                <CardComponent product={product} key={product.id}/>
                
                )
            }
            
            </div>
            <div className="w-[20%] ">
            <h2 className="text-red-500 underline text-[20px]">Your Cart Items</h2>
                
            </div>
           </main>
        </div>
    )}
}