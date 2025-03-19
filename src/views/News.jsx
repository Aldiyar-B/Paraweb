import { Link } from 'react-router-dom';
import '../style/main.scss';

function News() {
  return (
    <div>
      <h1 className="text-h1">News</h1>
      <h4 className="text-h4">Это публичная страница</h4>
      <nav>
        <Link to="/dashboard">
          <button className="text-button">Перейти в Dashboard</button>
        </Link>
        <br />
        <Link to="/404">
          <button className="text-button">Открыть 404 страницу</button>
        </Link>
        <br />
        <Link to="/test">
          <button className="text-button">Открыть test полигон</button>
        </Link>
      </nav>
    </div>
  );
}

export default News;
