const Footer = () => {

    return(
        <footer className="bg-dark text-light pt-5 mt-5">
      <div className="container">

        <div className="row">

          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="fw-bold mb-3">MyApp</h4>
            <p>
              We create modern, scalable web applications using the latest
              technologies like React, Bootstrap, and Node.js.
            </p>

            {/* Social Icons */}
            <div className="mt-3">
              <a href="#" className="btn btn-outline-light btn-sm me-2">Facebook</a>
              <a href="#" className="btn btn-outline-light btn-sm me-2">Twitter</a>
              <a href="#" className="btn btn-outline-light btn-sm me-2">LinkedIn</a>
              <a href="#" className="btn btn-outline-light btn-sm">Instagram</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none d-block mb-2">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none d-block mb-2">About</a></li>
              <li><a href="/services" className="text-light text-decoration-none d-block mb-2">Services</a></li>
              <li><a href="/contact" className="text-light text-decoration-none d-block mb-2">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Web Development</li>
              <li className="mb-2">Mobile App Development</li>
              <li className="mb-2">UI/UX Design</li>
              <li className="mb-2">Cloud Solutions</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p>Subscribe to get latest updates.</p>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <hr className="border-light" />

        {/* Bottom Footer */}
        <div className="row pb-3">
          <div className="col-md-6 text-center text-md-start">
            © {new Date().getFullYear()} MyApp. All Rights Reserved.
          </div>

          <div className="col-md-6 text-center text-md-end">
            Privacy Policy | Terms & Conditions
          </div>
        </div>

      </div>
    </footer>


    )

}

export default Footer;