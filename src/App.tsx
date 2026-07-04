import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import GuidePage from './pages/GuidePage';
import NotFoundPage from './pages/NotFoundPage';
import { languageCodes } from './data/i18n';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main>
        <Routes>
          {languageCodes.map((language) => (
            <Route key={language} path={`/${language}`} element={<HomePage language={language} />} />
          ))}
          <Route path="/:language/:countrySlug" element={<CountryPage />} />
          <Route path="/:language/:countrySlug/:topicSlug" element={<GuidePage />} />
          {languageCodes.map((language) => (
            <Route key={`${language}-not-found`} path={`/${language}/*`} element={<NotFoundPage language={language} />} />
          ))}
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
