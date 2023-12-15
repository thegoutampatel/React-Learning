import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import IshopHome from "./IshopHome";
import IshopLogin from "./IshopLogin";
import IshopRegister from "./IshopRegister";
import IshopDashboard from "./IshopDeshboard";

export default function IshopIndex(){
    return(
        <div>   
            <header className=" bg-green-700 p-6 text-center mb-6">
                <h1 className=" text-white text-[35px] font-semibold">IShop-Online Store</h1>
            </header>

            <BrowserRouter>
                <section>
                    <nav className="flex items-center justify-center">
                        <button className="bg-green-700 text-white px-3 py-4 rounded w-[200px] text-center ml-4">
                            <Link  to="/home">Home</Link>
                        </button>
                        <button className="bg-green-700 text-white px-3 py-4 rounded w-[200px] text-center ml-4">
                            <Link to="/register">Register</Link>
                        </button>
                        <button className="bg-green-700 text-white px-3 py-4 rounded w-[200px] text-center ml-4">
                            <Link to="/login">Login</Link>
                        </button>
                        <button className="bg-green-700 text-white px-3 py-4 rounded w-[200px] text-center ml-4">
                            <Link to="/dashboard">Dashboard</Link>
                        </button>
                    </nav>

                    <main>
                        <Routes>
                            <Route path="/" element={<IshopHome/>}/>
                            <Route path="home" element={<IshopHome/>}/>
                            <Route path="login" element={<IshopLogin/>}/>
                            <Route path="register" element={<IshopRegister/>}/>
                            <Route path="dashboard" element={<IshopDashboard/>}/>
                        </Routes>
                    </main>
                </section>
            </BrowserRouter>
        </div>
    )
}