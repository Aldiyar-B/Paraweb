import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';

function Dashboard() {
  return (
    <div>
      <h1 className="text-h1">Dashboard</h1>
      <h4 className="text-h4">Это приватная страница</h4>
      <Link to="/">
        <Button
          text="Выйти"
          iconLeft="pencil"
          iconRight="plus"
          showIconLeft="true"
          showIconRight="true"
          name="primary"
        />
      </Link>
    </div>
  );
}

export default Dashboard;
