import React, { useState } from "react";

import {
  CardGroup,
  Card,
  CardImg,
  Button,
  Modal,
  ModalBody,
  Row,
  Col,
} from "reactstrap";

const Certificates = (props) => {
  let arrayOfModalStates = props.certs.map((cert, idx) => {
    return {
      pathName: cert,
      modal: false,
    };
  });

  const [modalStates, setModalStates] = useState(arrayOfModalStates);

  const toggleModal = (certArg) => {
    setModalStates((prev) => {
      let updatedModalStates = prev.map((obj) => {
        return {
          ...obj,
          modal: obj.pathName === certArg ? !obj.modal : obj.modal,
        };
      });
      return updatedModalStates;
    });
  };

  const isModalOpen = (certArg) => {
    let result = modalStates.find((obj) => {
      return obj.pathName === certArg;
    });
    return result.modal;
  };

  let listOfCerts = props.certs
    .slice(0)
    .reverse()
    .map((cert, idx) => {
      return (
        <Card key={idx}>
          <Button
            onClick={() => {
              toggleModal(cert);
            }}
          >
            <CardImg
              alt="Card image cap"
              src={cert}
              top
              width="100%"
              index={idx}
            />
          </Button>
          {console.log(modalStates.modal)}
          <Modal
            isOpen={isModalOpen(cert)}
            toggle={() => {
              toggleModal(cert);
            }}
            key={idx}
          >
            <ModalBody className="modal-cert">
              {" "}
              <CardImg
                className="modal-img"
                key={idx}
                alt="Card image cap"
                src={cert}
                top
                width="100%"
                index={idx}
              />
            </ModalBody>
          </Modal>
        </Card>
      );
    });
  let tableCreator = () => {
    let table = [];
    for (let i = 0; i < listOfCerts.length; i = i + 3) {
      table = [
        ...table,
        <Row>
          <Col key={i}>{listOfCerts[i]}</Col>
          <Col key={i + 1}>{listOfCerts[i + 1]} </Col>
          <Col key={i + 2}>{listOfCerts[i + 2]} </Col>
        </Row>,
      ];
    }
    console.log(table);
    return table;
  };

  return <CardGroup>{tableCreator()}</CardGroup>;
};

export default Certificates;
