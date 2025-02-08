export const User = {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule: any) => Rule.required().email().error('A valid email is required'),
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
        hidden: true, // Hide in Sanity Studio as passwords shouldn't be visible
      },
      {
        name: 'userName',
        title: 'Name',
        type: 'string',
        validation: (Rule: any) => Rule.required().error('Name is required'),
      },
    ]
  };