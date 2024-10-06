import React, { useMemo, useState } from 'react';

interface AvartarProps {
  src?: string;
  placeholder?: string;
}

const Avartar: React.FC<AvartarProps> = ({ src, placeholder }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const imageSrc = useMemo(() => {
    return imageError ? placeholder : src || placeholder
  }, [src])

  return (
    <>
      <img src={imageSrc} className="w-16 h-16 rounded-full" onError={handleImageError} />
    </>
  );
};

export default Avartar;