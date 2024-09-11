const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href="#">Salustiano Robles Teran</a> {/* Aumentar el tamaño de la marca */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fs-5 me-4 py-3" aria-current="page" href="#">Sobre Mi</a> {/* Aumentar tamaño y espaciado */}
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 me-4 py-3" href="#">Mi Experiencia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 me-4 py-3" href="#">Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 py-3" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default NavBar;
  