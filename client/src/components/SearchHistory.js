function SearchHistory({ history }) {
  if (!history || history.length === 0) return null;

  return (
    <div className="card">
      <h3>🕘 Recent Searches</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item.city}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;
