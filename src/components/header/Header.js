import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import "./header.css";
function Header() {
  return (
    <>
      <Container>
        <header id="header">
          <h2>
            <i>
              Instagram <sub>^</sub>
            </i>
          </h2>
          <p className="social-icon">
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </p>
        </header>
      </Container>
    </>
  );
}
export default Header;
