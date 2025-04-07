import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';
import NotFound from './views/NotFound';
import Dashboard from './views/DashBoard';
import News from './views/News';
import Test from './views/Test';
import TextContentsArea from './views/TextContentsArea';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<News />} />
        </Route>
        <Route path="/test" element={<PublicLayout />}>
          <Route index element={<Test />} />
        </Route>
        <Route path="/textContentArea" element={<PublicLayout />}>
          <Route index element={<TextContentsArea />} />
        </Route>
        <Route path="/dashboard" element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
