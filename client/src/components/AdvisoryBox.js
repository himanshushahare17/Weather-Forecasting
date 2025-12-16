function AdvisoryBox({ advisories }) {
  if (!advisories || advisories.length === 0) return null;

  return (
    <div className="card advisory">
      <h3>🌾 Farmer Advisory</h3>
      <ul>
        {advisories.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdvisoryBox;
