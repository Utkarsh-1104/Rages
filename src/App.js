import './App.css';
import Counter from './components/Counter';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Counter />
    </div>
  );
}

export default App;
