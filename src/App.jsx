import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import DGroupPage from './pages/DGroupPage';
import DGroupDetails from './components/DGroupDetails'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dgroups" >
          <Route path="list" element={<DGroupPage />} />
          <Route path=":id" element={<DGroupDetails />}/>
        </ Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
