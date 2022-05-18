import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import NavBar from "./Components/Navigation/NavBar";
import CategoryNav from "./Components/Navigation/CategoryNav";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import Footer from "./Components/Footer";
import CartContextProvider from "./Components/CartContext";
import Cart from "./Components/Cart/Cart";
import Register from "./Components/User/Register";



export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Box className="Appshell">
            <NavBar />
            <CategoryNav />
            <Container maxWidth="lg" className="Appcontent" height="100%">
              <Routes>
                <Route
                  path="/item/:itemId"
                  element={<ItemDetailContainer />}
                />
                <Route
                  path="/category/:itemCategory"
                  element={<ItemListContainer />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/register" element={<Register/>} />
              </Routes>
            </Container>
            <Footer />
          </Box>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}
