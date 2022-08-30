import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';

const Generator = ({ protocol, host, path, port, paramName, theme }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="App" style={{ padding: '1em' }}>
      <h1>Create an Instagram Deep-Link QR code</h1>
      <p>
        Enter an Instagram username to create a QR code for that user's profile
        in the native app
      </p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        <div style={{ float: 'right' }}>
          Feeling uninspired? Try these:
          <ul>
            <li>
              <a href="#" onClick={() => setQuery('nationalportraitgallery')}>
                National Portrait Gallery
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setQuery('itsdougthepug')}>
                Doug the Pug
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setQuery('mydaywithleo')}>
                My Day with Leo
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setQuery('wonderful_places')}>
                Wonderful Places
              </a>
            </li>
          </ul>
        </div>
        <div>
          {query && (
            <QRCode
              value={`${protocol}//${host}:${port}/${path}?${paramName}=${query}`}
              size={256}
              logoImage={theme?.logo}
              fgColor={theme?.fgColor}
              bgColor={theme?.bgColor}
              eyeColor={theme?.eyeColor}
              removeQrCodeBehindLogo={true}
              ecLevel="Q"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Generator;
