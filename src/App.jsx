import Header from "./components/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Book from "./components/Book";
import { Container } from "react-bootstrap";
import { useGetBooks } from "./hooks/useGetSubjects";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import { useGetSearch } from "./hooks/useGetSearch";

function App() {
  const { data, isLoading } = useGetBooks();
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const { data: searchData, isLoading: searchLoading } =
    useGetSearch(searchKeyword);

  const bookData = data?.works;

  if (isLoading)
    return (
      <div className="spinner">
        <Spinner animation="border" role="status" variant="warning">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  const search = () => {
    if (!keyword.trim()) return;
    setSearchKeyword(keyword);
  };

  return (
    <div className="main">
      <Header />

      <section className="banner">
        <div className="bannerInner">
          <div>
            <h3>코딩알려주는 누나 도서관</h3>
            <h4>id님 환영합니다!</h4>
          </div>

          <InputGroup className="mb-3 inputGroup">
            <Form.Control
              placeholder="책 제목이나 작가를 검색하세요"
              aria-describedby="basic-addon2"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button id="button-addon2" onClick={search}>
              검색
            </Button>
          </InputGroup>
        </div>
      </section>
      <Container>
        <h2>인기 도서</h2>
        {/* <Book data={bookData} /> */}
        <div className="bookSection">
          {bookData.map((item, i) => (
            <Book data={item} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
