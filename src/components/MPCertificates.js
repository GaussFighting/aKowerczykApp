import React from "react";
import Certificates from "./Certifacates";
import certs from "../styles/images/index.js";

function MPCertificates() {
  return (
    <div className="container pb-5">
      {console.log(certs.certificateImage1)}
      <Certificates
        certs={[
          certs.certificateImage3,
          certs.certificateImage10,
          certs.certificateImage20,
        ]}
      />
    </div>
  );
}

export default MPCertificates;
