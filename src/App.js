import { useEffect, useState } from 'react';
import './App.css';
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';

function App() {
  const [catagories , setCatagories] = useState([]);
  const [products , setProduct] = useState([]);
  const [cartItem , setCartItem] = useState([]);
  const [itemsCount , setItemCount] = useState(0);


  function GetCartItemsCount(){
    setItemCount(cartItem.length);
  }

  function loadCatagories(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(data => {
      data.unshift("all");
      setCatagories(data)
    })
  }
  
  function loadProducts(url){
    fetch(url)
    .then(res => res.json())
    .then(data => setProduct(data))
  }

  useEffect(()=>{
      loadCatagories();
      loadProducts('https://fakestoreapi.com/products');
  },[cartItem.length])

  function handleCatagoryChange(e){
    if(e.target.value == 'all'){
      loadProducts('https://fakestoreapi.com/products');
    } else{
    alert(`${e.target.value}`);
    loadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
    }
  }

  function handleAddToCart(e){
    alert("Item Added to Cart");
    fetch(`https://fakestoreapi.com/products/${e.target.id}`)
    .then(res => res.json())
    .then(data => {
      cartItem.push(data);
      GetCartItemsCount();
    })
   
  }

  return (
    <div className='w-[100%] h-[100%]'>
        <header className='w-[100%] h-16 bg-green-700 flex items-center justify-center gap-5'>
          <h1 className='text-[40px] text-white'>Shopping Home</h1>
          <i className='text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </i>
        </header>

        <div className='flex justify-around m-2 items-center'>
          <div>
            <h3>Select catagory</h3>
            <select className='border-[2px] w-36' onChange={handleCatagoryChange}>
              {
                catagories.map(catagory=>
                <option value={catagory} key={catagory} >{catagory.toUpperCase()}</option>
                )
              }
            </select>
          </div>

          
        </div>
        <div className='flex'>
            <div>
              <button className='bg-red-400  rounded-lg w-40'>[{itemsCount}]Your Card Items</button>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Preview</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItem.map((item)=>
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>
                          <img src={item.image} alt='images' width='50' height='50'/>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>

            </div>

            <div className='flex flex-wrap justify-center'>
            {
              products.map(item =>
                <div key={item.id} className='m-2 p-3 w-52 flex flex-col border-[1px] items-center justify-center'>
                    <img src={item.image} className='w-[150px]' />
                    <p className='text-ellipsis'>{item.title}</p>
                    <p className="font-semibold underline text-base">${item.price}</p>

                    <button id={item.id} onClick={handleAddToCart} className='m-3 bg-red-400 rounded-sm'>
                      <span className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        Add to Cart
                      </span>
                    </button>
                </div>
              )
            }
            </div>
        </div>
    </div>
  );
}

export default App;
