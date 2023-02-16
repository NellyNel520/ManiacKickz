import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Products from './pages/Products';
import Home from './pages/Home';
import SneakerDetails from './components/SneakerDetails';
import AddSneakerForm from './components/AddSneakerForm';
import UpdateSneakerForm from './components/UpdateSneaker';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './global'
import SneakersByBrand from './components/SneakersByBrand';

// import Footer from './components/Footer';

function App() {
  const [sneakers, setSneakers] = useState([])

  const getAllSneakers = async () => {
    try {
      let response = await axios.get(`${BASE_URL}sneakers`)
      setSneakers(response.data.sneakers)
    } catch (err) {
      console.log(err)
    }
    // console.log(response.data)
  }

  useEffect(() => {
    getAllSneakers()
  }, [])




  return (
    <div className="App">
      <Nav />
      <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="sneakers" element={ <Products />} />
        <Route path="addSneaker" element={ <AddSneakerForm getAllSneakers={getAllSneakers}/>} />
        <Route exact path='sneakers/update/:id' element={ <UpdateSneakerForm sneakers={sneakers}/>}/>
        <Route path="sneakers/:id" element={<SneakerDetails />} />
        <Route path="brand/:id" element={<SneakersByBrand sneakers={sneakers}/>} />
        
      </Routes>
      </main>
        <Footer />
    </div>
  );
}

export default App
