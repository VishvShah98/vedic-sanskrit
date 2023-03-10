import React from "react";
import Card from "../../components/card/card";
import Contact from "../../components/contact/contact";
import logo from "../../assets/logo.png";
import img1 from "../../assets/tuts1.jpg";
import img2 from "../../assets/WhatsApp Image 2023-01-07 at 9.51.15 AM (4).jpeg";
import img3 from "../../assets/WhatsApp Image 2023-01-07 at 9.51.15 AM (6).jpeg";
import img4 from "../../assets/WhatsApp Image 2023-01-07 at 9.51.15 AM.jpeg";

export default function Home() {
  const images = [img1, img2, img3, img4];

  return (
    <>
      <div className="media home d-flex justify-content-center align-items-center flex-column text-center">
        <div className="row w-100 align-items-center">
          <div className="col-md-6 order-md-2">
            <div className="media-body text-white">
              <h1 style={{ fontWeight: "100" }}>
                Learn <span className="imptext">Sanskrit</span> with an{" "}
                <span className="imptext">experienced tutor</span> and discover
                India's cultural heritage.
              </h1>
            </div>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="align-self-center logo img-fluid"
              src={logo}
              alt="Logo"
            />
          </div>
        </div>
      </div>
      <Card image={images} />
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
