function FiveDayForecast({ weather }) {
  if (!weather) return null;

  return (
    <div className="card">
      <h3>📅 5-Day Forecast (3-Hour Blocks)</h3>

      <div className="forecast-list">
        {weather.list.map((item, index) => (
          <div key={index} className="forecast-item">
            <p><strong>🕒 {item.dt_txt}</strong></p>
            <p>🌡 Temp: {item.main.temp} °C</p>
            <p>💧 Humidity: {item.main.humidity}%</p>
            <p>🌬 Wind: {(item.wind.speed * 3.6).toFixed(1)} km/h</p>
            <p>🌧 Rain: {((item.pop || 0) * 100).toFixed(0)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FiveDayForecast;
