import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4 text-center">
        <h1>Welcome to MyShop</h1>
        <p className="lead">Happy shopping!</p>
      </div>
    </>
  );
}

export default App;