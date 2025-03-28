import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../components/DropDown/DropDown';
import Tab from '../components/Tab/Tab';
import Tag from '../components/Tag/Tag';
import ToggleInput from '../components/ToggleInput/ToggleInput';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Switcher from '../components/Switcher/Switcher';
import Toggle from '../components/Toggle/Toggle';
import Pagination from '../components/Pagination/Pagination';
import LinkComponent from '../components/Link/LinkComponent';
import Alert from '../components/Alert/Alert';
import ImagePlaceholder from '../components/ImagePlaceholder/ImagePlaceholder';
import imageSrc from '../assets/images/image.png';
import Button from '../components/Button/Button';
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
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const closeAlert = () => {
    setIsAlertVisible(false);
  };
  const openAlert = () => {
    setIsAlertVisible(true);
  };
  return (
    <div
      style={{ marginTop: '50px', height: '100vh', marginBottom: '500px' }}
      className="container"
    >
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
          <Dropdown text="Copy link" socials="share-button" />
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

      {/* Switcher */}
      <div style={{ display: 'flex ', justifyContent: 'space-evenly' }}>
        <h3 className="text-h3">Switcher</h3>
        {/* <h3>Текущий статус: {isActive ? 'Включено' : 'Выключено'}</h3> */}
        <Switcher
          checked={isActive}
          onChange={setIsActive}
          leftIcon="raiting"
          rightIcon="quote"
        />
      </div>

      {/* Toggle */}
      <div style={{ display: 'flex ', justifyContent: 'space-evenly' }}>
        <br />
        <br />
        <br />
        <h3 className="text-h3">Toggle</h3>
        <Toggle
          initialState={false}
          onChange={(state) => console.log('Toggle:', state)}
        />
        <br />
        <Toggle
          initialState={false}
          onChange={(state) => console.log('Toggle 1:', state)}
          disabled // Этот переключатель заблокирован
        />
        <br />
        <Toggle
          initialState={true}
          onChange={(state) => console.log('Toggle 2:', state)}
          disabled
          // Этот переключатель активен и может быть изменен
        />
      </div>
      {/* Paggination */}
      <div style={{ display: 'flex ', justifyContent: 'space-evenly' }}>
        <br />
        <h3 className="text-h3">Paggination</h3>
        <Pagination
          totalPages={12}
          onPageChange={setCurrentPage}
          leftIcon="chevron-left"
          rightIcon="chevron-right"
        />
        <Pagination
          totalPages={12}
          onPageChange={setCurrentPage}
          leftIcon="chevron-left"
          rightIcon="chevron-right"
          disabled
        />
      </div>
      {/* Link */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}
      >
        <LinkComponent size="small" type="text" href="#">
          Small Text Link
        </LinkComponent>
        <LinkComponent size="large" type="text" href="#">
          Large Text Link
        </LinkComponent>

        <LinkComponent size="small" type="icon" icon="link" href="#">
          Hello World{' '}
        </LinkComponent>
        <LinkComponent size="large" type="icon" icon="link" href="#">
          Link
        </LinkComponent>

        <LinkComponent size="small" type="social" icon="social-vk" href="#">
          Hello World{' '}
        </LinkComponent>
        <LinkComponent size="large" type="social" icon="social-vk" href="#">
          Hello World
        </LinkComponent>
      </div>
      {/* Alert */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {/* Кнопка для вызова алерта */}
        <button onClick={openAlert} className="text-button">
          Показать Alert
        </button>

        {/* Отображаем Alert только если alertVisible === true */}
        {isAlertVisible && (
          <Alert
            type="error"
            title="Успешно"
            message="Вы участвуете в мероприятии"
            onClose={closeAlert}
          />
        )}
      </div>
      {/* ImagePlaceholder */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <h2>IMAGE-PLACEHOLDER</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <ImagePlaceholder src={imageSrc} size="rating-card" />
          <ImagePlaceholder src={imageSrc} size="profile" />
          <ImagePlaceholder src={imageSrc} size="menu" />
          <ImagePlaceholder src={imageSrc} size="rating-list" />
        </div>
      </div>
      {/* Button */}
      <div style={{}}>
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
          <Button
            iconLeft="user"
            showIconLeft="true"
            name="user"
            size="small"
          />
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
    </div>
  );
}

export default Test;
