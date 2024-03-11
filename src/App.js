import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/products/:id" element={<ProductDetail/>} />
            </Routes>
            <Footer/>
		</BrowserRouter>
	);
}

export default App;
