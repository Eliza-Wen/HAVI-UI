import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Legal from './pages/Legal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-root">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
