import Brand from "@/src/components/ui/Brand";
import NewsletterForm from "@/src/components/layout/NewsletterForm";

const linkGroups = [
  [
    ["Featured Courses", "#courses"],
    ["Featured Categories", "#learning-paths"],
    ["Business", "#courses"],
    ["IT", "#learning-paths"],
    ["Design", "#learning-paths"],
  ],
  [
    ["Development", "#learning-paths"],
    ["Marketing", "#learning-paths"],
    ["Photography", "#learning-paths"],
    ["Finance", "#learning-paths"],
    ["Sport", "#learning-paths"],
  ],
  [
    ["Become a Creator", "#creator-cta"],
    ["Affiliate Program", "#creator-cta"],
    ["Contact", "#contact"],
    ["Help", "#help"],
    ["About", "#professional-growth"],
  ],
];

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="creators">
      <div className="footer-main">
        <div className="footer-about">
          <Brand />
          <p>Stay Up to date with our latest features and releases by joining our newsletter.</p>
          <NewsletterForm />
          <small>
            By subscribing, you agree to our <a href="#privacy">Privacy Policy</a> and consent to receive updates from our company.
          </small>
        </div>
        {linkGroups.map((links, index) => (
          <nav className="footer-column" key={index} aria-label={`Footer links ${index + 1}`}>
            {links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          </nav>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2023 ByteSpace. All rights reserved.</span>
        <nav aria-label="Legal links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookies Settings</a>
        </nav>
      </div>
    </footer>
  );
}
