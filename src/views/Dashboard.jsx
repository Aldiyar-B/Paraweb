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
        <Button name="share" text="Поделиться" iconLeft="share-button" />
        <br />
      </Link>
      <div style={{ marginTop: '20px', background: '#4132dc' }}>
        <br />
        <Button
          name="primary"
          bg="contrast"
          text="Выйти"
          iconLeft="pencil"
          iconRight="plus"
          showIconLeft="true"
          showIconRight="true"
        />
        <br />
        <Button
          iconLeft="pencil"
          showIconLeft="true"
          name="icon"
          size="large"
          bg="contrast"
        />
        <br />
        <Button
          iconLeft="pencil"
          showIconLeft="true"
          name="bookmark"
          bg="contrast"
        />
        <br />
      </div>
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
        <br />
        <Button
          iconLeft="user"
          showIconLeft="true"
          name="user"
          size="large"
          disabled
        />
        <br />
        <Button name="share" text="Поделиться" iconLeft="share" disabled />
        <br />
        <Button
          name="share"
          text="Поделиться"
          iconLeft="share-button"
          disabled
        />
        <div style={{ marginTop: '20px', background: '#4132dc' }}>
          <br />
          <Button
            name="primary"
            bg="contrast"
            text="Выйти"
            iconLeft="pencil"
            iconRight="plus"
            showIconLeft="true"
            showIconRight="true"
            disabled
          />
          <br />
          <Button
            iconLeft="pencil"
            showIconLeft="true"
            name="icon"
            size="large"
            bg="contrast"
            disabled
          />
          <br />
          <Button
            iconLeft="pencil"
            showIconLeft="true"
            name="bookmark"
            bg="contrast"
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
