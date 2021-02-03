export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'live',
      title: 'Live',
      type: 'url',
    },
    {
      name: 'clientRepo',
      title: 'Client Repo',
      type: 'url',
    },
    {
      name: 'apiRepo',
      title: 'API Repo',
      type: 'url',
    },
    {
      name: 'dateCompleted',
      title: 'Date Completed',
      type: 'date',
    },
  ],
};
