import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import data from '../data/news.json';
import News from './News';

function MPNews() {
    const sortedItems = data.news.sort((a, b) => {
        return a.data > b.data ? -1 : 1
    });

    const selectedItems = sortedItems.filter((item, idx) => {
        return idx < 3;
    }
    );
    return (
        <div className="container pb-5">
            <NavLink className="inner-link" to="/blog"><h1>NEWSY</h1></NavLink>
            <Container>
                <Row>
                    {selectedItems.map((news) => {
                        return (<Col md={4} key={news.id}>
                            <News id={news.id} src={news.srcMin} title={news.title} data={news.data} description={news.descriptionShort} />
                        </Col>)
                    })}
                </Row>
            </Container>
        </div>
    )
};

export default MPNews;