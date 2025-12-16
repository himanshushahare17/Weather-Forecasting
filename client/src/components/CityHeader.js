function CityHeader({ weather }) {
  if (!weather) return null;

  return (
    <div className="card">
      <h2>
        📍 {weather.city.name}, {weather.city.country}
      </h2>
    </div>
  );
}

export default CityHeader;
