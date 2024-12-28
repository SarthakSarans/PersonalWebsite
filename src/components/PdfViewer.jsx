// src/components/PdfLink.js
import React from 'react';

const PdfLink = () => {
  const pdfUrl = '/resume.pdf';  // Replace with the actual URL or path to your PDF

  const openPdf = () => {
    window.location.href = pdfUrl;
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
      <button onClick={openPdf} style={{ color: 'white', fontSize: '20px', textDecoration: 'none', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
        Open Resume PDF
      </button>
    </div>
  );
};

export default PdfLink;
