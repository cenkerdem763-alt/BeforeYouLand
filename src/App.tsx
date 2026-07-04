import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import GuidePage from './pages/GuidePage';
import NotFoundPage from './pages/NotFoundPage';
import { languageCodes, type Language } from './data/i18n';

function LocalizedNotFoundPage() {
  const params = useParams();
  const language = languageCodes.find((code) => code === params.language);

  if (!language) return <Navigate to="/en" replace />;

  return <NotFoundPage language={language as Language} />;
}

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
          <Route path="/:language/*" element={<LocalizedNotFoundPage />} />
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
