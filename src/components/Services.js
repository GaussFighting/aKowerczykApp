import React from 'react';
import TopImage from './TopImage';
import Service from './Service';
import { Container, Row, Col } from 'reactstrap';
import {
  faSearchLocation,
  faMarker,
  faHouseUser,
} from '@fortawesome/free-solid-svg-icons';
import servicesPageImage from '../styles/images/laptop-g930f14b70_1920.jpg'

function Services() {
    return (
    <div>
      <TopImage image={servicesPageImage} position={68} />
        <div className="container page-container py-5">
            <h1>USŁUGI</h1>
            <Container>
                <Row>
                    <Col>
                        <Service icon={faSearchLocation} title={'POŚREDNICTWO'} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                isCollapseOpen={true}
              />
            </Col>
            <Col>
              <Service
                icon={faMarker}
                title={'NAJEM'}
                description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                isCollapseOpen={true}
              />
            </Col>
            <Col>
              <Service
                icon={faHouseUser}
                title={'HOME STAGING'}
                description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                isCollapseOpen={true}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Service
                icon={faSearchLocation}
                title={'POŚREDNICTWO'}
                description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                isCollapseOpen={true}
              />
            </Col>
            <Col>
              <Service
                icon={faMarker}
                title={'NAJEM'}
                description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                isCollapseOpen={true}
              />
            </Col>
            <Col>
              <Service
                icon={faHouseUser}
                title={'HOME STAGING'}
                description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                isCollapseOpen={true}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Services;
