import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage';
import DGroup from './pages/DGroupPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dgroups" element={<DGroup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
