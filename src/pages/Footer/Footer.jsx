import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white p-5  m-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <div className="contact-info">
              <a href="mailto:info@yourcompany.com">
                <FaEnvelope className="mr-2" /> info@yourcompany.com
              </a>
              <a href="tel:+1234567890">
                <FaPhone className="mr-2" /> +1 (234) 567-890
              </a>
              <a href="https://maps.google.com">
                <FaMapMarkerAlt className="mr-2" /> 123 Main St, Anytown USA
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Subscribe</h5>
            <p>Get the latest news and updates from us.</p>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="https://www.linkedin.com/">
                <FaLinkedin className="mr-2" />
              </a>
              <a href="https://twitter.com/">
                <FaTwitterSquare className="mr-2" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagramSquare className="mr-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
