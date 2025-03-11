import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Это приватная страница</p>
      <Link to="/">
        <button>Выйти</button>
      </Link>
    </div>
  );
}

export default Dashboard;
