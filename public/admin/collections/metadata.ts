export const metadata = {
  name: 'metadata',
  label: 'Informations du site',
  files: [
    {
      name: 'contact',
      label: 'Informations de contact',
      file: 'content/site_metadata/contact.md',
      fields: [
        { label: 'Téléphone 1', name: 'phone1', widget: 'string', required: true },
        { label: 'Téléphone 2', name: 'phone2', widget: 'string', required: false },
        { label: 'Email', name: 'email', widget: 'string', required: true },
      ],
    },
    {
      name: 'address',
      label: 'Adresse',
      file: 'content/site_metadata/address.md',
      fields: [
        { label: 'Adresse', name: 'address', widget: 'string', required: true },
        { label: 'Code postal', name: 'postcode', widget: 'string', required: true },
        { label: 'Ville', name: 'city', widget: 'string', required: true },
      ],
    },
    {
      name: 'amap',
      label: "Informations de l'AMAP",
      file: 'content/site_metadata/amap.md',
      fields: [
        { label: "Nom de l'AMAP", name: 'name', widget: 'string', required: true },
        { label: 'Horaires', name: 'schedule', widget: 'string', required: false },
      ],
    },
  ],
};
