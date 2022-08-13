import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import TopImage from "./TopImage";
import SocialActivityPageImage from "../styles/images/dog.jpg";
import activity from "../data/activity.json";
import { HashLink as Link } from "react-router-hash-link";

const SocialActivity = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const allActivity = activity.activity.sort((a, b) => {
    return b.id > a.id ? -1 : 1;
  });

  console.log(allActivity);
  return (
    <div>
      <TopImage image={SocialActivityPageImage} position={0} />
      <div className="container page-container py-5">
        <h1 className="socialactivity-title">DZIAŁALNOŚĆ SPOŁECZNA</h1>
        <Container>
          <Row>
            {allActivity.map((activity, idx) => {
              console.log(activity.logo[0].src);
              return (
                <Link
                  className="py-5"
                  to={`/socialactivity/${activity.id}`}
                  key={`activity-${idx}`}
                >
                  {" "}
                  <div
                    className="imgCenter"
                    alt=""
                    style={{
                      backgroundImage: `url(${activity.logo[0].src})`,
                      width: `${activity.logo[0].width}`,
                    }}
                  ></div>
                </Link>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SocialActivity;
