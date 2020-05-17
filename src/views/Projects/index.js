import React              from 'react';

/* Material Table */
import MaterialTable      from 'material-table';

/* Components */
import {
  Page
}                         from '../../components';

const Projects = () => {
  return (
    <Page navbar>
      <MaterialTable
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Key', field: 'key' },
          { title: 'Category', field: 'category' }
        ]}
        data={[
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' },
          { name: 'Test Project', key: 'TE', category: 'Basic Broject' }
        ]}
        options={{
          showTitle: false,
          pageSize: 10,
          pageSizeOptions: [ 5, 10, 20 ]
        }}
      />
    </Page>
  );
}

export default Projects;
