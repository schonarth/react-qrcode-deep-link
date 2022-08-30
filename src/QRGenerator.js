import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';
import { isAndroid, isIOS } from 'react-device-detect';

const Generator = () => {
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
              value={`http://192.168.15.94:3000?query=${query}`}
              size={256}
              logoImage="./logo192.png"
              fgColor="#202028"
              eyeColor={{ outer: '#202028', inner: '#ea9600' }}
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
