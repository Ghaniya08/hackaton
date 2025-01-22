export default {
    name: 'chef',
    type: 'document',
    title: 'Chef',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Chef Name',
      },
      {
        name: 'position',
        type: 'string',
        title: 'Position',
        description: 'Role or title of the chef (e.g., Head Chef, Sous Chef)',
      },
      {
        name: 'experience',
        type: 'number',
        title: 'Years of Experience',
        description: 'Number of years the chef has worked in the culinary field',
      },
      {
        name: 'specialty',
        type: 'string',
        title: 'Specialty',
        description: 'Specialization of the chef (e.g., Italian Cuisine, Pastry)',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Chef Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Short bio or introduction about the chef',
      },
      {
        name: 'available',
        type: 'boolean',
        title: 'Currently Active',
        description: 'Availability status of the chef',
      },
    ],
  };