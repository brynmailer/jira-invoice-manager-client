import React        from 'react';

/* Material UI */


/* Components */
import {
  AtlassianPopup
}                   from './components';

const Landing = () => {
  const [ authorized, setAuthorized ] = React.useState(false);

  return (
    <AtlassianPopup
      authorized={authorized}
      handleAuthorize={setAuthorized}
    />
  );
}

export default Landing;
