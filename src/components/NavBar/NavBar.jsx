import { Dropdown } from 'react-bootstrap';
import { FaGlobe } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const NavBar = ({ handleShow, handleLanguageChange, currentLanguage, texts }) => {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fs-4" href="#">
          Salustiano Robles Terán
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link fs-5 me-4 py-3"
                aria-current="page"
                onClick={(e) => handleScroll(e, 'about-me')}
                href="#"
              >
                {texts.navbar.aboutMe}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fs-5 me-4 py-3"
                onClick={(e) => handleScroll(e, 'projects')}
                href="#"
              >
                {texts.navbar.projects}
              </a>
            </li>
            <li className="nav-item py-2">
              <button
                className="btn btn-dark fs-5 py-2"
                onClick={handleShow}
              >
                {texts.navbar.contact}
              </button>
            </li>
            <li className="nav-item py-2 ms-3">
            <Dropdown>
              <Dropdown.Toggle
                as="button"
                variant="outline-dark"
                className="d-flex align-items-center gap-2 fs-5 rounded-pill px-3 py-2 shadow-sm"
                id="dropdown-language"
                style={{
                  borderColor: '#000',
                  color: '#000',
                  fontWeight: 'bold',
                  backgroundColor: '#fff',
                  transition: 'all 0.3s ease',
                  padding: '4px 8px', 
                  fontSize: '8px', 
                }}
              >
                <FaGlobe size={20} />
                <span className="d-none d-sm-inline">Idioma</span>
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  borderRadius: '8px',
                  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#fff',
                  padding: '2px 0',
                  minWidth: '150px',
                  fontSize: '14px', 
                }}
              >
                <Dropdown.Item
                  onClick={() => handleLanguageChange('es')}
                  active={currentLanguage === 'es'}
                  style={{
                    transition: 'background-color 0.3s ease',
                  }}
                  className="py-2 hover-bg-dark"
                >
                  Español (ES)
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleLanguageChange('en')}
                  active={currentLanguage === 'en'}
                  style={{
                    transition: 'background-color 0.3s ease',
                  }}
                  className="py-2 hover-bg-dark"
                >
                  English (EN)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>


          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
