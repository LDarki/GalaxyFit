const Footer = () => {
  return (
    <footer>
      <div className="newsletter">
        <div className="newsletter-info">
          <h2 className="newsletter-title">Subscribe To Our News letter</h2>
          <p className="newsletter-description">
            Sign up today! Writing copy is time-consuming and difficult.
            Headlines without intelligence can take your thoughts.
          </p>
        </div>
        <div className="newsletter-input-group">
          <input
            type="email"
            placeholder="Enter email address"
            className="newsletter-input"
          />
          <button className="newsletter-button">Get Listed</button>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-brand-title">GalaxyFit</h2>
            <p className="footer-brand-description">
              No need to worry, we'll help you make sense of it all.
            </p>
            <div className="footer-brand-input-group">
              <input
                type="email"
                placeholder="Your email"
                className="footer-brand-input"
              />
              <button className="footer-brand-button">
                <span className="arrow-right">→</span>
              </button>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-links-title">About</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#" className="footer-link">
                  What We Offer
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Leadership
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-links-title">Solutions</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#" className="footer-link">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Management
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Workflow
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Finance
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-links-title">Personal</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#" className="footer-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Accounts
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-links-title">Social</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#" className="footer-link">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
