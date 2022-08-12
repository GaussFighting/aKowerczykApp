import React, { useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { useParams } from "react-router-dom";
import activity from "../data/activity.json";

const Activity = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  let { id } = useParams();

  const signleActivity = activity.activity.find((item) => id === item.id);
  if (!signleActivity) {
    return (
      <div className="container page-container py-5">
        <h1> NIE ZNALEZIONO OFERTY </h1>
      </div>
    );
  }
  return (
    <div>
      {console.log(signleActivity.logo[0].src)}
      <Card>
        <div
          className="backdrop"
          style={{ backgroundImage: `url(${signleActivity.logo[0].src})` }}
        />
        <div
          className="blogImgCenter"
          alt=""
          style={{
            backgroundImage: `url(${signleActivity.logo[0].src})`,
          }}
        ></div>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>
            <h4>{signleActivity.title}</h4>
          </CardTitle>
          <CardSubtitle>{signleActivity.email}</CardSubtitle>
          <CardText> {signleActivity.description}</CardText>
        </CardBody>
      </Card>

      <div>{signleActivity.adress}</div>
    </div>
  );
};

export default Activity;
