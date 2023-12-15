import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShoppingWithClass from "./ShoppingWithClass";

 export default function SPAComponent(){
    return(
        <div className="m-5">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/html">HTML</Link></li>
                        <li><Link to="/css">Css</Link></li>
                        <li><Link to="/js">JavaScript</Link></li>
                        <li><Link to="/shopping">Shopping</Link></li>
                    </ul>
                </nav>
                <hr/>
                <hr/>
                <Routes>  
                    <Route path="html" element={
                    <main>
                        <h1>HTML</h1>
                        <p>It is a markup language</p>
                    </main>
                    }/>

                    <Route path="css" element={
                    <main>
                        <h1>CSS</h1>
                        <p>It defines Styles.</p>
                    </main>
                    }/>

                    <Route path="js" element={
                    <main>
                        <h1>JavaScript</h1>
                        <p>It is a Language.</p>
                    </main>
                    }/>
                    <Route path="Shopping" element={
                        <ShoppingWithClass/>
                    }/>

                    <Route path="/" element={
                    <main>
                        <h1>Home</h1>
                        <p>Home Tutorials</p>
                    </main>
                    }/>

                    <Route path="*" element={
                    <main className="text-red-800">
                        <h1>Not Found</h1>
                        <code>Try another page.</code>
                    </main>
                    }/>
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
} 