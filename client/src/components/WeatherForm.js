import { useState } from "react";

function WeatherForm({ onSearch }) {
  const [city, setCity] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={submitHandler} className="card">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
