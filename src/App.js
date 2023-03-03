
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Header from './Components/Pages/Shared/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
