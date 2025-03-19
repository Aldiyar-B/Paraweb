import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../components/DropDown/DropDown';
import Tab from '../components/Tab/Tab';

function Test() {
  const [activeTab, setActiveTab] = useState('Tab 1');

  return (
    <div style={{ textAlign: 'left', marginTop: '50px' }}>
      <h1 className="text-h1">Testовый полигон </h1>
      <Link to="/">
        <button className="text-button">Выйти</button>
      </Link>
      <>
        <div className="dropdown">
          <h3 className="text-h3">DropDown</h3>
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

      <>
        <br />
        <br />
        <br />
        <h3 className="text-h3">Tab</h3>
        <Tab
          label="Tab 1"
          count={99}
          isActive={activeTab === 'Tab 1'}
          onClick={() => setActiveTab('Tab 1')}
        />
        <Tab
          label="Tab 2"
          count={150}
          isActive={activeTab === 'Tab 2'}
          onClick={() => setActiveTab('Tab 2')}
        />
      </>
    </div>
  );
}

export default Test;
