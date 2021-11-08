import React from 'react';
import { NavLink } from "react-router-dom";
import Service from './Service';
import { Container, Row, Col } from 'reactstrap';
import { faSearchLocation, faMarker, faHouseUser } from '@fortawesome/free-solid-svg-icons';


function MPServices() {
    return (
        <div className="container py-5">
            <NavLink className="inner-link" to="/services"><h1>USŁUGI</h1></NavLink>
            <Container>
                <Row>
                    <Col>
                        <Service icon={faSearchLocation} title={'POŚREDNICTWO'} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} isCollapseOpen={false}/>
                    </Col>
                    <Col>
                        <Service icon={faMarker} title={'NAJEM'} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} isCollapseOpen={false} />
                    </Col>
                    <Col>
                        <Service icon={faHouseUser} title={'HOME STAGING'} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} isCollapseOpen={false} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Service icon={faSearchLocation} title={'POŚREDNICTWO'} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} isCollapseOpen={false}/>
                    </Col>
                    <Col>
                        <Service icon={faMarker} title={'NAJEM'} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} isCollapseOpen={false} />
                    </Col>
                    <Col>
                        <Service icon={faHouseUser} title={'HOME STAGING'} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} isCollapseOpen={false} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default MPServices;