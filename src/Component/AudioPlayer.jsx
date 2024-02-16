import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";

const handleAddSong = (e) => {
  e.preventDefault();
  const file = e.target.elements.audio.files[0]; // Access the file input element and get the first file
  const imageUrl = URL.createObjectURL(file); // Create a URL for the file object
  console.log(imageUrl);
};
const AudioPlayer = () => {
  return (
    <Container>
      <Row className="gap-5 flex-column flex-md-row">
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <div>
                <audio className="w-100 my-3" controls src=""></audio>
              </div>
              <div className="d-flex justify-content-evenly">
                <Button variant="outline-primary">prev</Button>
                <Button variant="primary">play</Button>
                <Button variant="outline-primary">next</Button>
              </div>
            </Card.Body>
            <Card.Text className="bg-light py-5 px-3">Now Playing:</Card.Text>
          </Card>
        </Col>
        <Col>
          <div className="my-3">
            <form onSubmit={handleAddSong}>
              <Form.Control
                name="audio"
                type="file"
                size="lg"
                className="my-3"
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-100"
              >
                Add New Song
              </Button>
            </form>
          </div>
          <div>
            <h3>Songs List:-</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AudioPlayer;
