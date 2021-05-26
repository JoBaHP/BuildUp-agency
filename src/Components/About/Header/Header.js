import "./Header.scss";

const AboutHeader = ({ header: { title, body } }) => {
  return (
    <header className="about-header">
      <h2 className="about-title">{title}</h2>
      <p className="about-paragraph">{body}</p>
    </header>
  );
};

export default AboutHeader;
