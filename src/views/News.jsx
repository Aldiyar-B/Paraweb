import { Link } from "react-router-dom";

function News() {
  return (
    <div>
      <h1>News</h1>
      <p>Это публичная страница</p>
      <nav>
        <Link to="/dashboard">
          <button>Перейти в Dashboard</button>
        </Link>
        <Link to="/404">
          <button>Открыть 404 страницу</button>
        </Link>
      </nav>
    </div>
  );
}

export default News;
