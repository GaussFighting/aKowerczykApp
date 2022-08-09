import React, { useState } from "react";

import { CardGroup, Card, CardImg, Button, Modal, ModalBody } from "reactstrap";

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
    console.log("modalstates", modalStates);
    console.log(certArg);
    let result = modalStates.find((obj) => {
      return obj.pathName === certArg;
    });
    console.log("A", result);
    return result.modal;
  };

  let asdf = props.certs
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
            <ModalBody>
              {" "}
              <CardImg
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
  return <CardGroup>{asdf} </CardGroup>;
};

export default Certificates;
