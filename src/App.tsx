import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LinkPage from './pages/LinkPage';
import Action from './pages/Action';
import AnotherAction from './pages/AnotherAction';
import SomethingElse from './pages/SomethingElse';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/link" element={<LinkPage />} />
            <Route path="/action" element={<Action />} />
            <Route path="/another-action" element={<AnotherAction />} />
            <Route path="/something-else" element={<SomethingElse />} />
          </Routes>
        </main>

        <footer className="py-3 my-4 border-top">
          <p className="text-center text-muted">© 2026 MyShop, Inc</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;