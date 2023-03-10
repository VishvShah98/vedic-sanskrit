import React from "react";
import upi from "../../assets/upi.jpg";
export default function Fees() {
  return (
    <div className="text-center" style={{marginTop:'20vh'}}>
    <img className=" mx-auto" src={upi} alt="upi" style={{height:'300px'}} />
    <figcaption className="mt-3 text-white">Scan the UPI QR code above in order to pay your fees</figcaption>
  </div>
  );
}
