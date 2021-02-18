import './App.scss';
import 'bootstrap/scss/bootstrap.scss'
import Particles from 'react-particles-js'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Services from './components/Services'

function App() {
  return (
  <>
    <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900,
            }
          },
          shape: {
            type: 'square',
            stroke: {
              width: 6,
              color: '#709DA5'
            }
          }
        }
      }}
    />
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Services/>
  </>  
  );
}

export default App;
