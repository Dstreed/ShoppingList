import React from "react";
import ShoppingApp from "./components/ShoppingApp";

function App() {
  return (
    <div className="container my-3">
      <header className="App-header">
        <h1>Ma liste de course</h1>
        <p>On va faire une shopping list</p>
        <ShoppingApp />
      </header>
    </div>
  );
}

export default App;
