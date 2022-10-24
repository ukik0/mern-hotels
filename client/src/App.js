import {Route, Routes} from 'react-router-dom'
import {HomePage} from "./Pages/Home/HomePage";
import {HotelPage} from "./Pages/Hotel/HotelPage";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/hotel/:id'} element={<HotelPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
