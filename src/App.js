import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Counter from './components/Counter';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Counter />
      <Products />
      <Blog />
      <About />
    </div>
  );
}

export default App;
