import { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

export default function App() {
  const [isShow, setIsShow] = useState(false);
  const [isAccept, setIsAccepted] = useState(false);
  const handleShow = () => {
    setIsShow(true);
  };
  const handleCross = () => {
    setIsShow(false);
  };
  const handleOffer = () => {
    setIsAccepted(true);
    setIsShow(false);
  };
  return (
    <div className="App">
      {!isShow && !isAccept && (
        <button onClick={handleShow} className="offer-btn">
          Show Offer
        </button>
      )}
      {isShow && <Modal handleCross={handleCross} handleOffer={handleOffer} />}
      {isAccept && <div className="act">Offer Accepted</div>}
    </div>
  );
}
