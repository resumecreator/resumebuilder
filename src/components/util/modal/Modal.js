import React from "react";

function Modal(props) {
    return (
        <div className="modal fade" id={props.id}>
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{props.title}</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
  
              <div className="modal-body">{props.body}</div>

              <div className="modal-footer">
                <button type="button" className="mui-btn mui-btn--large mui-btn--accent mui-btn--raised buttonHeader" data-dismiss="modal">
                  {props.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
    );
}
export default Modal;