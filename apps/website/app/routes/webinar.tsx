import React from 'react';

interface webinarProps {

}

const webinar: React.FC<webinarProps> = () => {
  return (
    <div style={{ width: '100%', height: 0, position: 'relative', paddingBottom: '56.25%' }}>
      <iframe src="https://streamyard.com/watch/ChcmrFkckFiZ?embed=true"
        width="100%" height="100%" frameBorder={0} allow="autoplay; fullscreen"
        style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, overflow: 'hidden' }} />
    </div>
  );
};

export default webinar;