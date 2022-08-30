import React, { useEffect } from 'react';
import { isAndroid, isIOS } from 'react-device-detect';
import Loader from './Loader';
import Generator from './QRGenerator';

const App = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const query = urlParams.get('query');

  return (!!query && <Loader username={query} />) || <Generator />;
};

export default App;
