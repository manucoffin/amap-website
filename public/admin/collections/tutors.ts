export const tutors = {
  name: 'tutor',
  label: 'Tuteurs',
  label_singular: 'Tuteur',
  folder: 'content/tutors',
  create: true,
  slug: '{{firstname}}-{{lastname}}-{{id}}',
  fields: [
    { label: 'ID', name: 'id', widget: 'ncw-id' },
    { label: 'Nom', name: 'lastname', widget: 'string', required: true },
    { label: 'Prénom', name: 'firstname', widget: 'string', required: true },
    { label: 'Contact', name: 'contact', widget: 'string', required: false },
  ],
};
