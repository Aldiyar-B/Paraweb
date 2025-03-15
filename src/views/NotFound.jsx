import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="text-h1">404 - Страница не найдена</h1>
      <h4 className="text-h4">К сожалению, такой страницы не существует.</h4>
      <Link to="/">
        <button className="text-button">Выйти</button>
      </Link>
    </div>
  );
}

export default NotFound;
