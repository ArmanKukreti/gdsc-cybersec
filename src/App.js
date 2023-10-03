import './App.css';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Organizers from './components/Organizers/Organizers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Events/>
      <Organizers/>
      <Footer/>
    </div>
  );
}

export default App;
