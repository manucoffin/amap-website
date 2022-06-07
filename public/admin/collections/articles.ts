export const articles = {
  name: 'article',
  label: 'Actualités',
  label_singular: 'Actualité',
  folder: 'content/articles',
  create: true,
  slug: '{{slug}}-{{year}}-{{month}}-{{day}}',
  fields: [
    { label: 'Titre', name: 'title', widget: 'string', required: true },
    { label: 'Date de publication', name: 'date', widget: 'datetime', required: true },
    {
      label: 'Image de couverture',
      name: 'photoUrl',
      widget: 'image',
      media_folder: '/{{media_folder}}/images',
      public_folder: '{{public_folder}}/images',
      choose_url: false,
      media_library: { allow_multiple: false },
      required: true,
    },
    { label: 'Contenu', name: 'body', widget: 'markdown', required: true },
  ],
};
