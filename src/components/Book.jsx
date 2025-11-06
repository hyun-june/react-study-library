import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Book = ({ data }) => {
  return (
    <Card style={{ width: "14rem" }} className="book_card">
      <Card.Img
        variant="top"
        src={`https://covers.openlibrary.org/b/id/${data?.cover_id}-L.jpg`}
        className="book_img"
      />
      <Card.Body>
        <Card.Title>{data?.title}</Card.Title>
        <Card.Text>{data?.authors[0]?.name}</Card.Text>
        <Button className="book_like_btn  btn-warning">♡</Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
