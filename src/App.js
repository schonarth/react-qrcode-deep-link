import React from 'react';
import Loader from './Loader';
import Generator from './QRGenerator';

const protocol = window.location.protocol;
const host = window.location.hostname;
const port = window.location.port;
const paramName = 'query';

const App = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const query = urlParams.get(paramName);
  const themeParam = urlParams.get('theme');
  const theme = !!themeParam ? require(`./themes/${themeParam}.json`) : null;

  return (
    (!!query && <Loader username={query} />) || (
      <Generator
        protocol={protocol}
        host={host}
        port={port}
        paramName={paramName}
        theme={theme}
      />
    )
  );
};

export default App;
