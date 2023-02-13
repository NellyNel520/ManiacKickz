import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Products from './pages/Products'
import Home from './pages/Home'
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={ <Products />} />
      </Routes>
      </main>
      {/* footer add later */}
    </div>
  );
}

export default App
