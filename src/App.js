import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Qualifications from './components/Qualifications/Qualifications';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Home/>
     <About/>
     <Projects/>
     <Skills/>
     <Qualifications/>
     <Contacts/>
    </div>
  );
}

export default App;
