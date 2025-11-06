import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import userStore from "../store/userStore";
import { useNavigate } from "react-router";

const Header = () => {
  const { isLogin, logout } = userStore();
  const navigation = useNavigate();

  const handleLogout = () => {
    logout();
    navigation("/");
  };

  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand
          onClick={() => navigation("/")}
          style={{ cursor: "pointer" }}
        >
          코딩알려주는 누나 도서관
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav_items">
          <Nav className="nav_link">
            <Nav.Link
              onClick={() => navigation("/")}
              style={{ cursor: "pointer" }}
            >
              메인
            </Nav.Link>
            <Nav.Link
              onClick={() => navigation(`${isLogin ? "/mybooks" : "/login"}`)}
              style={{ cursor: "pointer" }}
            >
              나의 책
            </Nav.Link>
            {isLogin ? (
              <Nav.Link onClick={handleLogout} className="loginText">
                로그아웃
              </Nav.Link>
            ) : (
              <Nav.Link href="/login" className="loginText">
                로그인
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
