import React, { useEffect } from 'react';
import { isAndroid, isIOS } from 'react-device-detect';

const Loader = ({ username }) => {
  useEffect(() => {
    if (isAndroid) {
      console.log('isAndroid');
      const url = `intent://instagram.com/${username}#Intent;package=com.instagram.android;scheme=https;end`;
      window.location.replace(url);
    } else if (isIOS) {
      console.log('isIOS');
      window.location.replace(`instagram://user?username=${username}`);

      setTimeout(() => {
        window.location.replace(
          'https://apps.apple.com/us/app/instagram/id389801252'
        );
      }, 3000);
    } else {
      window.location.replace(`https://www.instagram.com/${username}`);
    }
  }, [username]);
  return (
    <div className="App">
      <h1>{username}</h1>
      <div>
        If you have not been automatically redirected, click on the following
        link:
      </div>
      {isAndroid ? (
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android">
          Open Android app
        </a>
      ) : isIOS ? (
        <a href="https://apps.apple.com/us/app/instagram/id389801252">
          Open iOS app
        </a>
      ) : (
        <a href="https://instagram.com">Open Web app</a>
      )}
    </div>
  );
};

export default Loader;
