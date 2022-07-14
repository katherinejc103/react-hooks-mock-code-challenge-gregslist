import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [everythingDisplayed, setEverythingDisplayed] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => setEverythingDisplayed(data))
  },[])

  return (
    <div className="app">
      <Header />
      <ListingsContainer everythingDisplayed={everythingDisplayed}/>
    </div>
  );
}

export default App;
