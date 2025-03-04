import React, { useState } from "react";
import PDFToText from "react-pdftotext";

const FileUpload = () => {
  const [pdfText, setPdfText] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      PDFToText(file)
        .then((text) => setPdfText(text))
        .catch(() => setError("Failed to extract text from PDF"));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">PDF Text Extractor</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-4">
        <h3 className="font-semibold">Extracted Text:</h3>
        <div
          className="bg-gray-100 p-3 rounded whitespace-pre-wrap break-words border border-gray-300"
          style={{ maxHeight: "400px", overflowY: "auto" }}
        >
          {pdfText}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
