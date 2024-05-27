const Modal = ({ handleCross, handleOffer }) => {
  const handle = (e) => {
    handleCross();
  };
  return (
    <>
      <div className="out" onClick={handle}>
        <div className="container">
          <div className="rectangle">
            <button onClick={handleCross} className="cross-btn">
              X
            </button>
            <div>Click the button below to accept our amazing offer</div>
            <div className="btn">
              <button onClick={handleOffer} className="accept-btn">
                Accept Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
