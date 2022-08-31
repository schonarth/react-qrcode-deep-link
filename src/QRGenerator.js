import React, { useState, useRef, useEffect } from 'react';
import { QRCode } from 'react-qrcode-logo';

const Generator = ({ protocol, host, path, port, paramName, theme }) => {
  const [query, setQuery] = useState('');
  const ref = useRef(null);
  const url = `${protocol}//${host}${
    !!port ? ':' + port : ''
  }${path}?${paramName}=${query?.trim()}`;
  console.log('url', url);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <div className="App" style={{ padding: '1em' }}>
      <h1>Create an Instagram Deep-Link QR code</h1>
      <p>Enter an Instagram username</p>
      <input
        type="text"
        value={query}
        ref={ref}
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
              value={url}
              size={256}
              logoImage={theme?.logo}
              fgColor={theme?.fgColor}
              bgColor={theme?.bgColor}
              eyeColor={theme?.eyeColor}
              qrStyle={theme?.qrStyle}
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
