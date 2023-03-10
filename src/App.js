import './App.css';
import Navbar from './components/Header/Navbar';
import ItemListContainer from './components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Main/Cart';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import CustomProvider from "./components/Context/CustomProvider"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Nosotros from './components/Main/Nosotros';
const App = () => {
    return (
        <CustomProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <ItemListContainer titulo="Tienda de Hongos Gourmet y Medicinales "  />
                    }
                />
                <Route
                    path="/categoria/:categoryName"
                    element={
                        <ItemListContainer titulo="Tienda de Hongos Gourmet y Medicinales " />
                    }
                />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
        </BrowserRouter>
        <ToastContainer autoClose={1000} />
        </CustomProvider>
    );
};

export default App;

