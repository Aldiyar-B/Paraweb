import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1 className="text-h1">Dashboard</h1>
      <h4 className="text-h4">Это приватная страница</h4>
      <Link to="/">
        <button className="text-button">Выйти</button>
      </Link>
    </div>
  );
}

export default Dashboard;
