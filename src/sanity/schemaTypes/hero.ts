export default {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
      {
        name: 'mainHeading',
        title: 'Main Heading',
        type: 'string',
        description: 'The primary heading displayed on the homepage.',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A detailed paragraph describing the homepage content.',
      },
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        description: 'The main image displayed on the homepage.',
        // options: {
        //   hotspot: true, // Enables image hotspot for cropping
        // },
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
        description: 'Text displayed on the call-to-action button.',
      },
    ],
  };
  