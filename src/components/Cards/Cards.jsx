import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Cards({ title, direction, image,description }) {
  return (

    <Card >
      <Card.Body>
        <a href={direction}><Card.Img variant="top" fluid src={image} className="w-100" /></a>
        <Card.Title>{title}</Card.Title>
        <Card.Text>

        {description}

        </Card.Text>
      </Card.Body>
    </Card>




  );
}

export default Cards;