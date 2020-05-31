import React from "react";

/* Components */
import { AtlassianSites, CurrencyFormat } from "./components";
import { Page } from "../../components";

const Settings = () => {
  return (
    <Page navbar>
      <AtlassianSites />
      <CurrencyFormat />
    </Page>
  );
};

export default Settings;
