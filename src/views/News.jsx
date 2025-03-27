import { Link } from 'react-router-dom';
import '../style/main.scss';
import { EventCard } from '../style/components/EventCard/EventCard';
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
function News() {
  return (
    <div style={{ background: '#eeeff2', height: '100vh' }}>
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
    </div>
  );
}

export default News;
