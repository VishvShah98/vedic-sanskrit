import React from 'react'

export default function Navbar() {

  // const handleContactClick = (event) => {
  //   event.preventDefault();
  //   const projectsSection = document.getElementById("contact");
  //   projectsSection.scrollIntoView({ behavior: "smooth" });
  // };
  // const handleHomeClick = (event) => {
  //   event.preventDefault();
  //   const projectsSection = document.getElementById("home");
  //   projectsSection.scrollIntoView({ behavior: "smooth" });
  // };


  return (
    <div style={{top:'0', position:'fixed', width:'100%' ,zIndex:'3'}}>
    <nav className="navbar navbar-dark  navbar-expand bg-black mb-8 p-2 justify-content-center" style={{textAlign:'center'}}>
        <a className="navbar-brand bg-black" href="#/">
          Kinjal Shah
        </a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link bg-black" href="#/schedule">
              Schedule
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-black" href="#/studyMaterial">
              Resources
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-black" href="#/fees">
              Fees
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link bg-black" href="#/"  onClick={handleContactClick}>
              Contact
            </a>
          </li> */}
        </ul>
      </nav></div>
  )
}
