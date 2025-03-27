import { Link } from 'react-router-dom';
import '../style/main.scss';
import { EventCard } from '../style/components/EventCard/EventCard';
import CommunitiesCard from '../style/components/СommunitiesСard/СommunitiesСard';
import personAvatar from '../assets/images/person.png';
import DocumentCard from '../style/components/DocumentCard/DocumentCard';
import LevelCard from '../style/components/LevelCard/LevelCard';

const event = {
  date: '30',
  month: 'ноя',
  days: '14',
  title: 'Название мероприятия',
  time: '12:00 - 17:00',
  location: 'ГУАП, Ленсовета 14, актовый зал',
  attendees: 500,
  rating: 100,
};

const сommunities = {
  date: '30',
  month: 'ноя',
  title: 'Название мероприятия',
  name: 'Константинопольский Константин Константинович',
  role: 'Ответственный',
  avatar: personAvatar,
};
function News() {
  return (
    <div style={{ background: '#eeeff2', height: '100%' }}>
      <h1 className="text-h1">News</h1>
      <h4 className="text-h4">Это публичная страница</h4>
      <nav>
        <Link to="/dashboard">
          <button className="text-button">Перейти в Dashboard</button>
        </Link>
        <br />
        <Link to="/404">
          <button className="text-button">Открыть 404 страницу</button>
        </Link>
        <br />
        <Link to="/test">
          <button className="text-button">Открыть test полигон</button>
        </Link>
      </nav>
      <EventCard {...event} />
      <br />
      <br />
      <br />
      <CommunitiesCard {...сommunities} />
      <br />
      <br />
      <br />
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <DocumentCard title="Headline" fileSize="99.9 KB" fileType="PDF" />
        <DocumentCard title="Report 2024" fileSize="1.2 MB" fileType="DOCX" />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
        }}
      >
        <LevelCard
          image="../src/assets/images/robot.png"
          title="Наименование уровня"
          description=""
          isIcon={true}
          icon="check"
        />
        <LevelCard
          image="../src/assets/images/robot-disabled.png"
          title="Наименование уровня"
          description="100"
          isIcon={true}
          icon="coin-icon"
          disabled
        />
      </div>
    </div>
  );
}

export default News;
