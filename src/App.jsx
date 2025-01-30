import { useState, useEffect } from 'react'
import i18n from './i18n'

import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import MyExperience from './components/MyExperience/MyExperience'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/ProfileSection/Profile'
import ProjectsSection from './components/ProjectsSection/Projects'
import Contact from './components/ContactMe/Contact'

import en from './locales/en.json';
import es from './locales/es.json';

function App() {
  const [language, setLanguage] = useState('es');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const language = i18n.language.split('-')[0]; 
    setLanguage(language)
  }, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleLanguageChange = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es')); 
  };

  const texts = language === 'es' ? es : en;

  return (
    <>
      <NavBar handleShow={handleShow} handleLanguageChange={handleLanguageChange} texts={texts} currentLanguage={language}/>
      <Profile handleShow={handleShow}/>
      <AboutMe texts={texts}/>
      <MyExperience/>
      <ProjectsSection texts={texts}/>
      <Footer handleShow={handleShow} texts={texts}/>

      <Contact show={showModal} handleClose={handleClose} />

    </>
  )
}

export default App
