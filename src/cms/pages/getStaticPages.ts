export type StaticPage = {
  slug: string;
  title: string;
};

export const getStaticPages = (): StaticPage[] => {
  return [
    { title: 'Accueil', slug: '' },
    { title: 'Actualités', slug: 'actus' },
    { title: 'Adhésion', slug: 'adhesion' },
    { title: 'Contact', slug: 'contact' },
    { title: 'Contrats', slug: 'contrats' },
    { title: 'Producteurs', slug: 'producteurs' },
    { title: 'Recettes', slug: 'recettes' },
    { title: 'Charte', slug: 'charte' },
    { title: 'Statuts', slug: 'statuts' },
    { title: 'Mentions légales', slug: 'mentions-legales' },
    { title: 'Politique de confidentialité', slug: 'politique-confidentialite' },
  ];
};
