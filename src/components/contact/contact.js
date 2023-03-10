import React from "react";

export default function Contact() {
  const handleClick = () => {
    window.open(
      `https://wa.me/919377739203?text=Hello%2C%20I%20would%20like%20to%20put%20an%20inquiry.`,
      "_blank"
    );
  };

  return (
    <div
      className="container  bg-white rounded "
      style={{ marginTop: "20vh", marginBottom: "10vh" }}
    >
      <div className="row bg-white rounded">
        <div className="col-md-6 bg-white rounded">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Iris%20Exotica,%20Corporate%20Road,%20Prahlad%20Nagar,%20Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="map "
            allowFullScreen
            style={{
              top: "0",
              left: "0",
              width: "100%",
              height: "70vh",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
            }}
          ></iframe>
        </div>
        <div className="col-md-6 d-flex bg-white rounded justify-content-end align-items-center">
          <svg
            style={{ color: "rgb(89, 243, 115)", background: "white" }}
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            fill="currentColor"
            className="bi bi-whatsapp rounded"
            viewBox="0 0 16 16"
            onClick={handleClick}
          >
            <path
              d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              fill="#59f373"
            ></path>
          </svg>
          <div className=" bg-white rounded" style={{ marginLeft: "1.5rem" }}>
            <p
              style={{
                marginBottom: "0.25rem",
                fontWeight: "700",
                background: "white",
              }}
            >
              Connect on Whatsapp
            </p>
            <p style={{ color: "#6B7280", background: "white" }}>
              Click on the icon to send a message on Whatsapp
            </p>
          </div>
          <svg
            aria-hidden="true"
            focusable="false"
            className="icon rounded"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="3em"
            height="3em"
            style={{ background: "white" }}
          >
            <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
          </svg>
          <div className=" bg-white rounded" style={{ marginLeft: "1.5rem" }}>
            <p
              className=" bg-white"
              style={{ marginBottom: "0.25rem", fontWeight: "700" }}
            >
              Contact
            </p>
            <p className=" bg-white" style={{ color: "#6B7280" }}>
              kinjalshah@gmail.com
              <br />
              +91 9377739203
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
