import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Project';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      

        <Navbar />
        <Home />
        <Skills/>
        <Projects/>
    </div>
  );
}

export default App;
