import React from "react";
import Certificates from "./Certifacates";
import certs from "../styles/images/index.js";

function MPCertificates() {
  return (
    <div className="container pb-5">
      <Certificates
        certs={[
          certs.certificateImage20,
          certs.certificateImage19,
          certs.certificateImage18,
        ]}
      />
    </div>
  );
}

export default MPCertificates;
