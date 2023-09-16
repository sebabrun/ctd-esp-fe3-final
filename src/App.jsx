import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import { useContextGlobal } from "./Components/utils/global.context";


function App() {
  const { state } = useContextGlobal()

  return (
      <div className={state.theme + " App"}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/dentist/:id' element={<Detail/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='*' element={<h1>Page not found</h1>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;