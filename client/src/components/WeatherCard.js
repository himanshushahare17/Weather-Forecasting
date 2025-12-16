function WeatherCard({ weather }) {
  if (!weather) return null;

  const current = weather.list[0];

  return (
    <div className="card">
      <h3>🌤 Current Weather</h3>
      <p>🌡 Temperature: {current.main.temp} °C</p>
      <p>💧 Humidity: {current.main.humidity}%</p>
      <p>🌬 Wind Speed: {(current.wind.speed * 3.6).toFixed(1)} km/h</p>
      <p>🌧 Rain Probability: {(current.pop * 100).toFixed(0)}%</p>
    </div>
  );
}

export default WeatherCard;
