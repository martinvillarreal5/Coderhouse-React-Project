import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          
          <Route
             path="/item/:productId" element={<ItemDetailContainer/>}
          />
          <Route
            path="/" element={<ItemListContainer greeting={"Welcome!"} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
