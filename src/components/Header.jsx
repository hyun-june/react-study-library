import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">코딩알려주는 누나 도서관</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
