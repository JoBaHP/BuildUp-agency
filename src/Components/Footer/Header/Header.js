import { useState } from "react";
import "./Header.scss";

// Footer Header Component
const FooterHeader = ({ header: { title } }) => {
  const [email, setEmail] = useState("");

  return (
    <header className="footer-header">
      <h2 className="footer-title">{title}</h2>

      <form className="newsletter-form">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="submit" value="JOIN" />
      </form>
    </header>
  );
};

export default FooterHeader;
