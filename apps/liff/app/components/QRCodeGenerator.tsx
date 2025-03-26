import React from 'react';
import QRCode from 'qrcode';

interface QRCodeGeneratorProps {
  text: string;
  size?: number;
  bgColor?: string;
  fgColor?: string;
}

const QRCodeGenerator = ({ text, size = 150, bgColor = '#ffffff', fgColor = '#000000' }: QRCodeGeneratorProps) => {
    const [src, setSrc] = React.useState('');
  
    React.useEffect(() => {
      if (text) {
        QRCode.toDataURL(text, {
          width: size,
          color: {
            dark: fgColor,
            light: bgColor
          }
        }, (err, url) => {
          if (!err) setSrc(url);
        });
      }
    }, [text, size, bgColor, fgColor]);
  
    return src ? <img src={src} alt="QR Code" style={{ width: size, height: size }} /> : null;
  };

  export default QRCodeGenerator;