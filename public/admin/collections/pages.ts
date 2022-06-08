export const pages = {
  name: 'pages',
  label: 'Pages',
  files: [
    {
      label: 'Adhésion',
      name: 'membership',
      file: 'content/pages/membership.md',
      fields: [
        { label: 'Description', name: 'description', widget: 'markdown', required: true },
        {
          label: 'Document',
          name: 'documentPath',
          widget: 'file',
          media_folder: '/{{media_folder}}/files',
          public_folder: '{{public_folder}}/files',
          media_library: {
            name: 'medias',
            config: { allow_multiple: false, choose_url: false },
          },
          required: true,
        },
      ],
    },
    {
      label: 'Charte des AMAP',
      name: 'convention',
      file: 'content/pages/convention.md',
      fields: [{ label: 'Contenu', name: 'body', widget: 'markdown', required: true }],
    },
    {
      label: "Statuts de l'association",
      name: 'statutes',
      file: 'content/pages/statutes.md',
      fields: [{ label: 'Contenu', name: 'body', widget: 'markdown', required: true }],
    },
  ],
};
