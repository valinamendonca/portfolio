import Main from './Pages/Main'
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route path='/about' Component={<About/>}/>
          <Route path='/projects' Component={<Projects/>}/>
          <Route path='/contact' Component={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
