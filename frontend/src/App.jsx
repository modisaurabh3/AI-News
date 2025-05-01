import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  const filtered = articles.filter((a) =>
    a.state.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "1rem" }}>Higher Ed News</h1>
      <input
        type="text"
        placeholder="Filter by state (e.g., NY, CA)"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "300px" }}
      />
      <div>
        {filtered.map((article, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <a href={article.url} target="_blank" rel="noreferrer">
              <h2>{article.title}</h2>
            </a>
            <p>{article.summary}</p>
            <p style={{ fontSize: "0.8rem", color: "#666" }}>
              State: {article.state} | Date: {article.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;