import { useState } from 'react'

import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import MyExperience from './components/MyExperience/MyExperience'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/ProfileSection/Profile'
import Projects from './components/Projects/Projects'
import Contact from './components/ContactMe/Contact'

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <NavBar handleShow={handleShow}/>
      <Profile handleShow={handleShow}/>
      <AboutMe/>
      <MyExperience/>
      <Projects/>
      <Footer handleShow={handleShow}/>
      {/* Modal */}
      <Contact show={showModal} handleClose={handleClose} />

    </>
  )
}

export default App
