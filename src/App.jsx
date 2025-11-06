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
import userStore from "./store/userStore";
import { useNavigate } from "react-router";

function App() {
  const { id, updateLikeBook, likeBooks, isLogin, deleteLikeBook } =
    userStore();
  console.log("🚀 ~ App ~ likeBooks:", likeBooks);

  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [bookList, setBookList] = useState([]);
  const { data, isLoading } = useGetBooks();
  const { data: searchData, isLoading: searchLoading } =
    useGetSearch(searchKeyword);

  const navigate = useNavigate();
  const searchDataList = searchData?.docs;

  const bookDataList = data?.works;

  const list =
    searchDataList?.length > 0
      ? [...searchDataList].slice(0, 12)
      : bookDataList;

  if (isLoading || searchLoading)
    return (
      <div className="spinner">
        <Spinner animation="border" role="status" variant="warning">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  const search = () => {
    if (!keyword.trim()) {
      setBookList(bookDataList || []);
      setSearchKeyword("");
      return;
    }
    setSearchKeyword(keyword);
  };

  const addLike = (book) => {
    if (!isLogin) return navigate("login");
    const isLiked = likeBooks.find((item) => item.key === book.key);

    if (isLiked) {
      deleteLikeBook(book);
    } else {
      updateLikeBook(book);
    }
  };

  return (
    <div className="main">
      <section className="banner">
        <div className="bannerInner">
          <div>
            <h3>코딩알려주는 누나 도서관</h3>
            {id ? <h4>{id}님 환영합니다!</h4> : null}
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
        <h2>{searchDataList?.length > 0 ? "검색 도서" : "인기 도서"}</h2>

        <div className="bookSection">
          {list?.map((item, i) => (
            <Book data={item} key={i} addLike={addLike} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
