import React from 'react';
import { saveAs } from 'file-saver';

const PdfDownloader = () => {
  const downloadPdf = () => {
    const pdfUrl = process.env.PUBLIC_URL +`/cv.pdf`; // Ensuring the path is correct

    fetch(pdfUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        saveAs(blob, 'cv.pdf');
      })
      .catch((error) => {
        console.error('Error downloading PDF:', error);
      });
  };

  return (
    <div>
        <p>Hello</p>
      <button onClick={downloadPdf}>Download PDF</button>
    </div>
  );
};

export default PdfDownloader;
