import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ButtonEdit(props) {
    return (
      <button
        className="mui-btn mui-btn--large mui-btn--primary mui-btn--raised buttonHeader"
        type="button"
        data-toggle="collapse"
        data-target={"#" + props.dataTarget}
      >
        {props.label}
      </button>
    );
}
  
function LinkDownloadPDF(props) {
    return (
      
      <button
            className="mui-btn mui-btn--large mui-btn--accent mui-btn--raised buttonHeader"
            data-toggle="modal"
            data-target="#download"
            onClick={(ev) => {
              downloadPDF();
            }}
        >    
        <span className="fas fa-download"></span>
         &nbsp;&nbsp;&nbsp;Descargar PDF&nbsp;&nbsp;&nbsp;         
        <span className="fas fa-download"></span>
      </button>
    );
}
  
function downloadPDF() {
    html2canvas(document.querySelector("#resume")).then(function (canvas) {
      var doc = new jsPDF("p", "pt", "a4", false);
      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();
      doc.addImage(canvas.toDataURL(), "jpg", 0, 0, width, height);
      doc.save("Resume.pdf");
    });
}

function ButtonInfo() {
  return (
    <button
      className="mui-btn mui-btn--primary mui-btn--raised"
      type="button"
      data-toggle="modal"
      data-target="#infoEdit"
    >
     <span className="fa fa-info"></span>
    </button>
  );
}

export { ButtonEdit, ButtonInfo, LinkDownloadPDF };