import React from "react";
import JsBarcode from "jsbarcode";

interface BarcodeGeneratorProps {
  text: string;
  width?: number;
  height?: number;
  bgColor?: string;
  fgColor?: string;
}

const BarcodeGenerator = ({
  text,
  width = 2,
  height = 100,
  bgColor = "#ffffff",
  fgColor = "#000000",
}: BarcodeGeneratorProps) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    if (text && canvasRef.current) {
      JsBarcode(canvasRef.current, text, {
        format: "CODE128",
        width,
        height,
        background: bgColor,
        lineColor: fgColor,
        displayValue: false,
      });
    }
  }, [text, width, height, bgColor, fgColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        maxWidth: "100%",
        height: "auto",
        display: "block",
        margin: "0 auto",
      }}
    ></canvas>
  );
};

export default BarcodeGenerator;
