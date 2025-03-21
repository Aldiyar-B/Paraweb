import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../components/DropDown/DropDown';
import Tab from '../components/Tab/Tab';
import Tag from '../components/Tag/Tag';
import ToggleInput from '../components/ToggleInput/ToggleInput';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

const breadcrumbItems = [
  { label: 'Главная', path: '/', disabled: false },
  { label: 'Категории', path: '/categories', disabled: true },
  { label: 'Электроника', path: '/categories/electronics', disabled: false },
  {
    label: 'Смартфоны',
    path: '/categories/electronics/smartphones',
    disabled: false,
  },
];

function Test() {
  const [activeTab, setActiveTab] = useState('Tab 1');

  return (
    <div style={{ marginTop: '50px' }}>
      <h1 className="text-h1">Testовый полигон </h1>
      <Link to="/">
        <button className="text-button">Выйти</button>
      </Link>

      {/* DropDown */}
      <div style={{ display: 'flex ', justifyContent: 'space-evenly' }}>
        <h3 className="text-h3">DropDown</h3>
        <div>
          <h2>Только текст</h2>
          <Dropdown text="Drop down" />
        </div>
        <div>
          <h2>С галочкой</h2>
          <Dropdown text="Вариант 1" checkbox={true} />
          <Dropdown text="Вариант 2" checkbox={true} />
          <Dropdown text="Вариант 3" checkbox={true} />
          <Dropdown text="Вариант 4" checkbox={true} />
          <Dropdown text="Вариант 5" checkbox={true} />
        </div>
        <div>
          <h2>С иконкой</h2>
          <Dropdown text="VK" socials="social-vk" />
          <Dropdown text="Telegram" socials="social-tg" />
          <Dropdown text="Copy link" socials="share" />
        </div>
      </div>

      {/* Tab */}
      <div style={{ display: 'flex ', justifyContent: 'left' }}>
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
      </div>
      <br />

      {/* TAG */}
      <div style={{ display: 'flex ', justifyContent: 'space-evenly' }}>
        <h3 className="text-h3">Tag</h3>
        <Tag label="Литература" />
        <Tag label="" color="cyan" />
        <Tag label="Физическая культура" color="purple" />
        <Tag label="Биология" color="green" />
        <Tag label="Английский C2" color="red" />
        <Tag label="Английский" color="purple" />
        {/* <Tag label="Английский" subtitle="B1" color="purple" /> */}
        <Tag label="Математика" color="blue" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Breadcrumbs */}
      <div style={{ display: 'flex ', justifyContent: 'space-evenly' }}>
        <h3 className="text-h3">Breadcrumbs</h3>
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* ToggleInput */}
      <div style={{ display: 'flex ', justifyContent: 'space-evenly' }}>
        <h3 className="text-h3">ToggleInput</h3>
        <ToggleInput type="checkbox" defaultChecked={true} />
        <ToggleInput type="checkbox" defaultChecked={true} />
        <ToggleInput type="radiobutton" name="group1" defaultChecked={true} />
        <ToggleInput type="radiobutton" name="group1" defaultChecked={true} />
        <ToggleInput type="checkbox" defaultChecked={true} disabled />
        <ToggleInput
          type="radiobutton"
          name="group1"
          defaultChecked={true}
          disabled
        />
        <ToggleInput
          type="radiobutton"
          name="group1"
          defaultChecked={false}
          disabled
        />
      </div>
    </div>
  );
}

export default Test;
