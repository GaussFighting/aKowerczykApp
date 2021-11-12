import React, {useState} from 'react';
import { Collapse, Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Service(props) {

    const [isOpen, setIsOpen] = useState(props.isCollapseOpen); 
    
    const toggle = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div>
            <div onClick={toggle} className="service-icon py-4"><FontAwesomeIcon icon={props.icon} size="2x" />{`   `}
            <h3 className="service-title">{props.title}</h3></div>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody className="shadow">
                        {props.description}
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
};

export default Service;