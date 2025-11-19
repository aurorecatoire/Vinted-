import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/offers/:id" element={<Offer data={data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
