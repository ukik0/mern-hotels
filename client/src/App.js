import {Route, Routes} from 'react-router-dom'
import {HomePage} from "./Pages/Home/HomePage";
import {HotelPage} from "./Pages/Hotel/HotelPage";
import {HotelOrevwiew} from "./Pages/HotelOverwiew/HotelOrevwiew";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/hotels'} element={<HotelPage/>}/>
                <Route path={'/hotel/:id'} element={<HotelOrevwiew/>}/>
            </Routes>
        </div>
    );
}

export default App;
