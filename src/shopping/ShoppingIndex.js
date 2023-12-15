
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Electronics from './Electronics';
import Fasion from './Fashion';
import Footware from './Footwear';



export default function ShoppingIndex(){
    return(
        
        <div className='container m-5'>
           <Router>
                <ol>
                    <li> <Link to="/electronics">Electronics</Link></li>
                    <li> <Link to="/fasion">Fasion</Link></li>
                    <li> <Link to="/footware">Footware</Link></li>
                </ol>
                <Routes>
                    <Route path='/electronics' element={<Electronics/>}></Route>
                    <Route path='/fasion' element={<Fasion/>}></Route>
                    <Route path='/footware' element={<Footware/>}></Route>

                </Routes>
           </Router>
        </div>
    )
}