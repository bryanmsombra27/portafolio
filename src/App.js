import logo from './logo.svg';
import './App.css';

//components
import Header from './components/shared/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Skills from './components/skills/Skills';
import Proyects from './components/Proyects';
import Footer from './components/shared/footer';


//dinamic info
import Habilidades from "./data/skills.json";
import RecentProyects from "./data/recentProyects.json";
import PersonalProyects from "./data/personalProyects.json";

import {  ShadowProvider } from './context/shadowContext';


function App() {


  return (
    <>
    <ShadowProvider>

    <Header />
    <Hero  />
    <Welcome/>

    <Skills habilidades={ Habilidades }/>
    <Proyects proyects={RecentProyects} />
    <Proyects proyects={PersonalProyects}  title="Proyectos Personales" isRecent={false}/>
    <Footer/>
    </ShadowProvider>
    </>
  );
}

export default App;
