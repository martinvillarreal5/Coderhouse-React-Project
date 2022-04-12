import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryNav from "./Components/CategoryNav";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CategoryNav/>
        <Routes>
          <Route
             path="/item/:productId" element={<ItemDetailContainer/>}
          />
          <Route
            path="/category/:productCategory" element={<ItemListContainer/>}
          />
          <Route
            path="/" element={<ItemListContainer/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
