import React, { use, useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const cities = [
    { name: "New York", country: "USA", population: 8419600 },
    { name: "Tokyo", country: "Japan", population: 13929286 },
    { name: "London", country: "UK", population: 8982000 },
    { name: "Paris", country: "France", population: 2148000 },
    { name: "Sydney", country: "Australia", population: 5312163 },
    { name: "Mumbai", country: "India", population: 20667600 },
    { name: "Berlin", country: "Germany", population: 3769000 },
    { name: "São Paulo", country: "Brazil", population: 12325232 },
    { name: "Dubai", country: "UAE", population: 3331420 },
    { name: "Toronto", country: "Canada", population: 2731571 },
  ];
  const [city, setCity] = useState(cities);
  const [vlv, setVlv] = useState("");

  useEffect(() => {
    if (vlv) {
      setCity(
        city.filter((item) =>
          item.name.toLowerCase().includes(vlv.toLowerCase())
        )
      );
    } else {
      setCity(cities);
    }
  }, [vlv]);

  return (
    <div>
      <h2>Search cities of India : </h2>
      <input type="text" value={vlv} onChange={(e) => setVlv(e.target.value)} />
      <ul>
        {vlv
          ? city.map((item) => (
              <li key={item.population} onClick={() => setVlv(item.name)}>
                {item.name}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default App;
