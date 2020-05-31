import React from "react";

/* Material Table */
import MaterialTable from "material-table";

import { Card } from "@material-ui/core";

const AtlassianSites = () => {
  const [sites, setSites] = React.useState({
    columns: [{ title: "Domain", field: "domain" }],
    data: [{ domain: "example.atlassian.net" }],
  });

  return (
    <MaterialTable
      title="Managed Atlassian Sites"
      components={{
        Container: Card,
      }}
      options={{
        search: false,
        pageSize: 3,
        pageSizeOptions: [3],
        actionsColumnIndex: -1,
      }}
      columns={sites.columns}
      data={sites.data}
      actions={[
        {
          icon: "add",
          tooltip: "Add Site",
          isFreeAction: true,
          onClick: () => {
            setSites((prevSites) => {
              const data = [...prevSites.data];
              data.push({ domain: "example.atlassian.net" });
              return { ...prevSites, data };
            });
          },
        },
        (rowData) => ({
          icon: "delete",
          tooltip: "Forget Site",
          onClick: (event, rowData) => {
            setSites((prevSites) => {
              const data = [...prevSites.data];
              data.splice(data.indexOf(rowData), 1);
              return { ...prevSites, data };
            });
          },
        }),
      ]}
    />
  );
};

export default AtlassianSites;
