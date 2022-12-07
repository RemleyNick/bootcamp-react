import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import './App.css';
import { frameLoop } from '@react-spring/shared';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
