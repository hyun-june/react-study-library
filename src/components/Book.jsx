import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import userStore from "../store/userStore";

const Book = ({ data, addLike }) => {
  const { likeBooks } = userStore();

  const name = data?.authors?.[0]?.name || data?.author_name;

  const isLiked = likeBooks.some((b) => b.key === data.key);

  const src =
    data?.cover_id || data?.cover_i
      ? `https://covers.openlibrary.org/b/id/${
          data.cover_id || data.cover_i
        }-L.jpg`
      : "https://react-my-library-exam.vercel.app/assets/no_cover-XcuboDks.jpg";

  return (
    <Card style={{ width: "14rem" }} className="book_card">
      <Card.Img variant="top" src={src} className="book_img" />
      <Card.Body>
        <Card.Title>{data?.title}</Card.Title>
        <Card.Text>{name}</Card.Text>
        <Button
          className={` book_like_btn ${isLiked ? " like" : ""}`}
          //   className="book_like_btn btn-warning"
          onClick={() => addLike(data)}
        >
          ♡
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
