import React from "react";

export default function Card(props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="row">
        <div className="col-md-6">
          <div
            className="card mb-4 mx-5 "
            style={{ maxWidth: "25rem", height: "50%" }}
          >
            <img
              className="card-img-top"
              src={props.image[3]}
              alt="Card"
            />
            <div
              className="card-body text-black"
              style={{ background: "pink" }}
            >
              <p
                className="card-text text-center"
                style={{ background: "pink" }}
              >
                Exceptional Quality Tutoring
              </p>
            </div>
          </div>
          <div
            className="card mb-4 mx-5"
            style={{ maxWidth: "25rem", height: "50%" }}
          >
            <img
              className="card-img-top"
              src={props.image[1]}
              alt="Card"
            />
            <div
              className="card-body text-black"
              style={{ background: "skyblue" }}
            >
              <p
                className="card-text text-center"
                style={{ background: "skyblue" }}
              >
                Flexible Schedules
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card mb-4 mx-5 "
            style={{ maxWidth: "25rem", height: "50%" }}
          >
            <img
              className="card-img-top"
              src={props.image[2]}
              alt="Card"
            />
            <div
              className="card-body text-black"
              style={{ background: "lightgreen" }}
            >
              <p
                className="card-text text-center"
                style={{ background: "lightgreen" }}
              >
                Guaranteed Results
              </p>
            </div>
          </div>
          <div
            className="card mb-4 mx-5 "
            style={{ maxWidth: "25rem", height: "50%" }}
          >
            <img
              className="card-img-top"
              src={props.image[0]}
              alt="Card"
            />
            <div
              className="card-body text-black"
              style={{ background: "rgb(248, 248, 168)" }}
            >
              <p
                className="card-text text-center"
                style={{ background: "rgb(248, 248, 168)" }}
              >
                No-Homework Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
