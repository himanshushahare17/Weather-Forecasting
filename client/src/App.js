import { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";
import AdvisoryBox from "./components/AdvisoryBox";
import WeatherChart from "./components/WeatherChart";
import FiveDayForecast from "./components/FiveDayForecast";
import CityHeader from "./components/CityHeader";
import { fetchWeather } from "./services/api";
import DownloadPDF from "./components/DownloadPDF";

function App() {
  const [weather, setWeather] = useState(null);
  const [advisories, setAdvisories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetchWeather(city);
      setWeather(res.data.weather);
      setAdvisories(res.data.advisories);
    } catch (err) {
      setError("❌ Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>🌾 GramiQ Weather Advisory</h1>

      <WeatherForm onSearch={handleSearch} />

      {loading && <p>⏳ Loading...</p>}
      {error && <p className="error">{error}</p>}

      <CityHeader weather={weather} />
      <WeatherCard weather={weather} />
      <AdvisoryBox advisories={advisories} />
      <DownloadPDF weather={weather} advisories={advisories} />
      <WeatherChart weather={weather} />
      <FiveDayForecast weather={weather} />
    </div>
  );
}

export default App;
