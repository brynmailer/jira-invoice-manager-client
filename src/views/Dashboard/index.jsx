import React from "react";

/* Components */
import { AtlassianPopup, Overview } from "./components";
import { Page } from "../../components";

const Dashboard = () => {
  const [authorized, setAuthorized] = React.useState(false);

  return (
    <Page navbar>
      <AtlassianPopup authorized={authorized} handleAuthorize={setAuthorized} />
      <Overview authorized={authorized} />
    </Page>
  );
};

export default Dashboard;
