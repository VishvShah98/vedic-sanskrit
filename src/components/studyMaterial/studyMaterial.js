import { React } from "react";
import std from "../../assets/Study1.pdf";
import "bootstrap/dist/css/bootstrap.min.css";

function StudyMaterial() {
  return (<div className="d-lg-flex justify-content-around p-5">
    <div
      className="bg-white rounded p-5  justify-content-center align-items-center"
      style={{ marginTop: "20vh" }}
    >
      <div>
        <div className="bg-white">
          <h3 className="text-lg bg-white text-black font-medium mb-4">
            Study Material 1
          </h3>
          <p className="text-gray-700 bg-white">
            Learn the basics of Sanskrit
          </p>
          <a href={std} className="text-primary bg-white" download>
            <svg
              className="inline-block mr-2 bg-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{height:'30px'}}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Download
          </a>
        </div>
      </div>
    </div>
    <div
      className="bg-white rounded p-5  justify-content-center align-items-center"
      style={{ marginTop: "20vh" }}
    >
      <div>
        <div className="bg-white">
          <h3 className="text-lg bg-white text-black font-medium ">
            Study Material 2
          </h3>
          <p className="text-gray-700 bg-white">
            Sanskrit Grammar
          </p>
          <a href={std} className="text-primary bg-white" download>
            <svg
              className="inline-block mr-2 bg-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{height:'30px'}}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Download
          </a>
        </div>
      </div>
    </div>
    
    </div>);
}

export default StudyMaterial;
