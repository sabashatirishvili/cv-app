import React from 'react';
import jsPDF from 'jspdf';
import { HiDownload } from 'react-icons/hi';
import '../styles/savePDF.css'

function SavePDF() {
  const savePDF = () => {
    const pdf = new jsPDF('portrait', 'pt', 'a4');
    pdf.html(document.querySelector('#cv')).then(() => {
      pdf.save('cv.pdf');
    });
  };
  return (
    <div className='save-container'>
      <button onClick={savePDF} className='button'>
        <HiDownload/>
        <span>Download</span>
      </button>
    </div>
  )
}

export default SavePDF;
