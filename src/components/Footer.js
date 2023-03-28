import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

export default function MeuFooter() {
  return (
    <div className='bg-secondary text-light fixed-bottom'>
      <Container>
        <Row>
          <Col>
            Desenvolvido por Robert Sergio - 2022
          </Col>
          <Col>
            Desenvolvido usando Gatsby
          </Col>
          <Col>
            Footer
          </Col>
        </Row>
        <Row>
          <Col>
          Assine a minha Newsletter
          </Col>
          <Col>
          Conheça meu canal no youtube!
          </Col>
        </Row>
      </Container>
    </div>
  )
}
