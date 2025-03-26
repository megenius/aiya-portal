import React from 'react';
import { toDataURL } from 'qrcode';

interface QRCodeProps {
  value: string;
  size?: number;
  level?: 'L' | 'M' | 'Q' | 'H';
  bgColor?: string;
  fgColor?: string;
  logoSrc?: string;
}

const QRCode: React.FC<QRCodeProps> = ({
  value,
  size = 200,
  level = 'H',
  bgColor = '#FFFFFF',
  fgColor = '#000000',
  logoSrc
}) => {
  const [qrDataURL, setQrDataURL] = React.useState<string>('');
  
  React.useEffect(() => {
    if (!value) return;
    
    const generateQR = async () => {
      try {
        const dataURL = await toDataURL(value, {
          errorCorrectionLevel: level,
          width: size,
          margin: 1,
          color: {
            dark: fgColor,
            light: bgColor
          }
        });
        setQrDataURL(dataURL);
      } catch (error) {
        console.error('QR Code generation error:', error);
      }
    };
    
    generateQR();
  }, [value, size, level, bgColor, fgColor]);
  
  if (!qrDataURL) return <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>;
  
  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      <img src={qrDataURL} alt="QR Code" width={size} height={size} className="rounded" />
      {logoSrc && (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            width: size, 
            height: size 
          }}
        >
          <div 
            className="bg-white p-1 rounded-sm shadow-sm" 
            style={{
              width: size * 0.2,
              height: size * 0.2
            }}
          >
            <img
              src={logoSrc}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCode;
