import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import GuidePage from './pages/GuidePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main>
        <Routes>
          <Route path="/en" element={<HomePage language="en" />} />
          <Route path="/tr" element={<HomePage language="tr" />} />
          <Route path="/:language/:countrySlug" element={<CountryPage />} />
          <Route path="/:language/:countrySlug/:topicSlug" element={<GuidePage />} />
          <Route path="/en/*" element={<NotFoundPage language="en" />} />
          <Route path="/tr/*" element={<NotFoundPage language="tr" />} />
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
