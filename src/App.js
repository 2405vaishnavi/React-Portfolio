import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Experience from './components/MyExperience/Experience';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Project/>
      <Experience />
      <Contact/>
      <Footer />
    </Router>
  );
}

export default App;
