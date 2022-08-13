import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";
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
      <div className="container page-container py-5">
        <Card className="my-2">
          <CardImg
            alt="Card image cap"
            src={signleActivity.logo[0].src}
            style={{
              height: 750,
            }}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle>
              <h4>
                {" "}
                <a
                  href={signleActivity.adress}
                  target="_blank"
                  rel="noreferrer"
                  className="inner-link"
                >
                  {signleActivity.title}
                </a>
              </h4>
            </CardTitle>
            {signleActivity.email && (
              <CardSubtitle>E-mail: {signleActivity.email}</CardSubtitle>
            )}
            <CardText> {signleActivity.description}</CardText>
            {signleActivity.ourEvents && (
              <CardText>
                <h5>{signleActivity.ourEvents + ":"}</h5>
                <CardText>
                  {signleActivity.events.map((event, idx) => {
                    return (
                      <CardText key={`${event.title}-${idx}`}>
                        {" "}
                        <a
                          href={event.src}
                          target="_blank"
                          rel="noreferrer"
                          className="inner-link"
                        >
                          {event.title}
                        </a>
                      </CardText>
                    );
                  })}
                </CardText>
              </CardText>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Activity;
