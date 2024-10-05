import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const API_KEY = `c294b8e85ede454898b9eefc36d10484`;

  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=apple&from=2024-09-29&to=2024-09-29&sortBy=popularity&apiKey=${API_KEY}`
      );
      const data = response.json();
      console.log(data);
      const articles = data.articles;
    } catch (error) {
      console.log(error.message);
    }
  };

  getData();

  return (
    <>
      <Card />
    </>
  );
}

export default App;
