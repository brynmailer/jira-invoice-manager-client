import React        from 'react';

/* Components */
import {
  AtlassianPopup,
  Overview
}                   from './components';

const Dashboard = () => {
  const [ authorized, setAuthorized ] = React.useState(false);

  return (
    <>
      <AtlassianPopup
        authorized={authorized}
        handleAuthorize={setAuthorized}
      />
      <Overview authorized={authorized} />
    </>
  );
}

export default Dashboard;
