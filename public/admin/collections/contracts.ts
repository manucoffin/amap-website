export const contracts = {
  name: 'contract',
  label: 'Contrats',
  label_singular: 'Contrat',
  folder: 'content/contracts',
  create: true,
  slug: '{{slug}}',
  fields: [
    { label: 'Nom du contrat', name: 'title', widget: 'string', required: true },
    { label: 'Description', name: 'description', widget: 'text', required: true },
    {
      label: 'Lien vers le calendrier de distribution',
      name: 'calendarLink',
      widget: 'string',
      required: true,
    },
    {
      label: 'Tuteurs',
      name: 'tutors',
      widget: 'list',
      field: {
        label: 'Tuteur',
        name: 'tutor',
        widget: 'relation',
        collection: 'tutor',
        search_fields: ['firstname', 'lastname'],
        value_field: 'id',
        display_fields: ['firstname', 'lastname'],
      },
    },
    {
      label: 'Image',
      name: 'photoUrl',
      widget: 'image',
      media_folder: '/{{media_folder}}/images',
      public_folder: '{{public_folder}}/images',
      choose_url: false,
      media_library: { allow_multiple: false },
      required: true,
    },
    {
      label: 'Document',
      name: 'documentPath',
      widget: 'file',
      media_folder: '/{{media_folder}}/files',
      public_folder: '{{public_folder}}/files',
      choose_url: false,
      media_library: { allow_multiple: false },
      required: true,
    },
  ],
};