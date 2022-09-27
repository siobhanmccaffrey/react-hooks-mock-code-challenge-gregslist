import { React, useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
// 
//   const [listings, setListings] = useState([]);
// 
//   useEffect(() => {
//     fetch('http://localhost:6001')
//     .then((res) => res.json())
//     .then((listings) => {setListings(listings)
//     });
//   }, [])


  return (
    <div className="app">
      <Header />
      <ListingsContainer  />
    </div>
  );
}

export default App;
