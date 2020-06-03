import React from "react";

/* Components */
import { AtlassianSites, ThemeSelect, CurrencyFormat } from "./components";
import { Page } from "../../components";

const Settings = () => {
  return (
    <Page navbar>
      <AtlassianSites />
      <ThemeSelect />
      <CurrencyFormat />
    </Page>
  );
};

export default Settings;
