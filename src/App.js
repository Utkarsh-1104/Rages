import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
    </div>
  );
}

export default App;
