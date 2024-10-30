import React from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import Navbar from './Navbar';

const Map = () => {
  const bingMapsKey = 'Ar9I4UuAIFuUUPcV36d_vhehceuqYhx9VVUELOeBSsBJTYJRgObRpyTG-aHv6u75';

  const center = [0, 0];
  const zoom = 10;

  return (
    <div>
   <Navbar/>
    <div style={{ height: '1000px', width: '100%', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
      <ReactBingmaps
        bingmapKey={bingMapsKey}
        center={center}
        zoom={zoom}
        style={{ height: '400%', width: '100%' }}
      />
    </div></div>
  );
};

export default Map;
