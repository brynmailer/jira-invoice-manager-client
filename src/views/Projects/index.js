import React              from 'react';

/* Material Table */
import MaterialTable      from 'material-table';

const Projects = () => {
  return (
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
  );
}

export default Projects;
