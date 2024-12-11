import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";

const Qrgenerator = () => {
  const qrCanvasRef = useRef();

  useEffect(() => {
    // Generate QR code
    QRCode.toCanvas(
      qrCanvasRef.current,
      "http://localhost:8000/1",
      { width: 256, margin: 2 },
      (error) => {
        if (error) console.error(error);
      }
    );
  }, []);

  const handleDownload = () => {
    const canvas = qrCanvasRef.current;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div className="bg-primary w-fit p-4">
      <canvas ref={qrCanvasRef}></canvas>
      <button
        onClick={handleDownload}
        className="bg-gray-900 text-white mt-2 px-4 py-2 rounded "
      >
        Download QR Code
      </button>
    </div>
  );
};

export default Qrgenerator;
