import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '15px 40.5%',
  textAlign: 'left',
  position: 'fixed',
  bottom: '0',
  width: '150%',
};

const Footer = () => {
  return (
    <div style={footerStyle}>
      <p style={{ display: 'inline' }}>&copy; 2023 JSK Estates. All rights reserved.</p>
      <br />
      <p style={{ display: 'inline' }}> Contact us at www.kluniversity.in</p>
    </div>
  );
};

export default Footer;
