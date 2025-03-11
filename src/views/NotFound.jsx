import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Страница не найдена</h1>
      <p>К сожалению, такой страницы не существует.</p>
      <Link to="/">
        <button>Выйти</button>
      </Link>
    </div>
  );
}

export default NotFound;
