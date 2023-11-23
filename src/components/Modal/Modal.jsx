import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import modalimg from "../../images/modal.gif";

const Modal = ({ ExitModal }) => {
  return ReactDOM.createPortal(
    <div onClick={ExitModal} className="modal-overlay position-fixed">
      <div
        
        className="modal-dialog modal-md position-absolute top-50 start-50 translate-middle bg-light  rounded-2 text-light"
      >
        <div className="modal-header mt-3 w-100 ">
          <h1 className="modal-title ms-3 fs-2">Bhoomi Panchal</h1>
          <button
            onClick={ExitModal}
            type="button"
            className="btn-close me-3 "
            data-bs-dismiss="modal"
          ></button>
        </div>
        <h3 className="modal-body mt-4 ms-3">React.js Developer</h3>
        <img src={modalimg} alt="modalImg" className="w-50 float-end" />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
