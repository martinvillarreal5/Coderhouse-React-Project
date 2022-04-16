import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import NavBar from "./Components/NavBar";
import CategoryNav from "./Components/CategoryNav";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import Footer from "./Components/Footer";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Box className="Appshell">
          <NavBar />
          <CategoryNav />
          <Container maxWidth="lg" className="Appcontent">
            <Routes>
              <Route
                path="/item/:productId" element={<ItemDetailContainer />}
              />
              <Route
                path="/category/:productCategory" element={<ItemListContainer />}
              />
              <Route
                path="/" element={<ItemListContainer />}
              />
            </Routes>
          </Container>
          <Footer/>
        </Box>
      </BrowserRouter>
    </>
  );
}

