import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';

function Dashboard() {
  return (
    <div>
      <h1 className="text-h1">Dashboard</h1>
      <h4 className="text-h4">Это приватная страница</h4>
      <Link to="/">
        {/* <button className="text-button">Выйти</button> */}
        <Button
          text="Выйти"
          iconLeft="pencil"
          iconRight="plus"
          showIconLeft="true"
          showIconRight="true"
          name="primary"
        />
        <br />
        <Button
          text="Выйти"
          iconLeft="pencil"
          iconRight="plus"
          showIconLeft="true"
          showIconRight="true"
          name="secondary"
        />
        <br />
        <Button
          text="Выйти"
          iconLeft="pencil"
          iconRight="plus"
          showIconLeft="true"
          showIconRight="true"
          name="text"
        />
        <br />
        <Button
          text="Выйти"
          iconLeft="pencil"
          iconRight="plus"
          showIconLeft="true"
          showIconRight="true"
          name="text"
          size="small"
        />
        <br />
        <Button
          iconLeft="pencil"
          showIconLeft="true"
          name="icon-fill"
          size="small"
        />
        <br />
        <Button
          iconLeft="pencil"
          showIconLeft="true"
          name="icon"
          size="small"
        />
        <br />

        <Button
          iconLeft="pencil"
          showIconLeft="true"
          name="icon"
          size="large"
        />
        <br />
        <Button iconLeft="user" showIconLeft="true" name="user" size="small" />
        <br />
      </Link>
      <div>
        <h3>disabled кнопки </h3>
        <br />
        <Button
          text="Выйти"
          disabled
          iconLeft="pencil"
          iconRight="plus"
          showIconLeft="true"
          showIconRight="true"
          name="primary"
        />
        <br />
        <Button
          text="Выйти"
          disabled
          iconLeft="pencil"
          iconRight="plus"
          showIconLeft="true"
          showIconRight="true"
          name="secondary"
        />
        <br />
        <Button
          text="Выйти"
          disabled
          iconLeft="pencil"
          iconRight="plus"
          showIconLeft="true"
          showIconRight="true"
          name="text"
        />
        <br />
        <Button
          text="Выйти"
          disabled
          iconLeft="pencil"
          iconRight="plus"
          showIconLeft="true"
          showIconRight="true"
          name="text"
          size="small"
        />
        <br />
        <Button
          iconLeft="pencil"
          showIconLeft="true"
          name="icon-fill"
          size="small"
          disabled
        />
        <br />
        <Button
          iconLeft="pencil"
          showIconLeft="true"
          name="icon"
          size="small"
          disabled
        />
        <br />
        <Button
          iconLeft="pencil"
          showIconLeft="true"
          name="icon"
          size="large"
          disabled
        />
      </div>
    </div>
  );
}

export default Dashboard;
