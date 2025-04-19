'use client'
import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer = () => {
  return (
    <div style={{ height: '80vh', border: '1px solid #ccc' }}>
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
      <Viewer fileUrl="/orders.pdf" />
    </Worker>
  </div>
  )
}

export default PdfViewer