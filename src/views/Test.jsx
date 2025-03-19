import { Link } from 'react-router-dom';
import Dropdown from '../components/DropDown/DropDown';

function Test() {
  return (
    <div style={{ textAlign: 'left', marginTop: '50px' }}>
      <h2 className="text-h2">Testовый полигон </h2>
      <Link to="/">
        <button className="text-button">Выйти</button>
      </Link>
      <>
        <div className="dropdown">
          <h1 className="text-h1">DropDown</h1>
          <br />
          <h2>Только текст</h2>
          <Dropdown text="Drop down" />

          <br />
          <h2>С галочкой</h2>
          <Dropdown text="Вариант 1" checkbox={true} />
          <Dropdown text="Вариант 2" checkbox={true} />
          <Dropdown text="Вариант 3" checkbox={true} />
          <Dropdown text="Вариант 4" checkbox={true} />
          <Dropdown text="Вариант 5" checkbox={true} />
          <br />
          <h2>С иконкой</h2>
          <Dropdown text="VK" socials="social-vk" />
          <Dropdown text="Telegram" socials="social-tg" />
          <Dropdown text="Copy link" socials="share" />
        </div>
      </>
    </div>
  );
}

export default Test;
