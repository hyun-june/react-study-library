import { Container } from "react-bootstrap";
import userStore from "../store/userStore";
import Book from "../components/Book";

const Mybooks = () => {
  const { likeBooks, deleteLikeBook } = userStore();

  const addLike = (book) => {
    deleteLikeBook(book);
  };
  return (
    <Container style={{ marginTop: "2em" }}>
      <h2>나의 책 리스트</h2>
      {likeBooks.length > 0 ? (
        <div className="bookSection">
          {likeBooks?.map((item, i) => (
            <Book data={item} key={i} addLike={addLike} />
          ))}
        </div>
      ) : (
        "아직 좋아요를 누른 책이 없습니다"
      )}
    </Container>
  );
};

export default Mybooks;
