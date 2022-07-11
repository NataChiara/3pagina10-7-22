import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import More from "../pages/More";
import NotFound from "../pages/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/More' element={<More/>}/>
                <Route path='/' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;