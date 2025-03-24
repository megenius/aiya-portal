import React from 'react';

interface WYSIWYGContentProps {
  content: string;
}

const WYSIWYGContent: React.FC<WYSIWYGContentProps> = ({ content }) => {

  return (
    <div
      className="wysiwyg-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default WYSIWYGContent;