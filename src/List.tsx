import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { objects } from './Constants';
import { useNavigate } from 'react-router';

const List = () => {
    const getObj = (id: number) => {
        return objects.filter(e => e.id === id)[0]
    }

    const navigate = useNavigate();

  return (
    <div>
      <h2 className='mb-4 mt-3'>Список экспонатов</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
      {objects.map(e => {
        return (
            <Col key={e.id}>
            <Card onClick={() => navigate(`/object/${e.id}`)}>
                <Card.Img variant="top" src={`img/${e.id}.png`} />
                <Card.Body>
                <Card.Title>{e.title}</Card.Title>
                <Card.Text>
                    {/* {e.description} */}
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        )
      })}
    </Row>
    </div>
  );
};

export default List;