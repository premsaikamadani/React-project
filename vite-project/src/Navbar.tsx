function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-bold" href="/">
          <img
            src="https://www.digitaledify.ai/images/dl-logo.webp"
            alt="Logo"
            className="img-fluid"
            style={{ height: "40px" }}
          />
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/settings">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/logout">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
