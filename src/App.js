import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Welcome to Ecommerce"}/>
    </>
  );
}




export default App;
