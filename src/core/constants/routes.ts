type ParsedUrlQueryInput = NodeJS.Dict<
  | string
  | number
  | boolean
  | ReadonlyArray<string>
  | ReadonlyArray<number>
  | ReadonlyArray<boolean>
  | null
>;

export const Routes = {
  Home: () => '/',
  NewsPage: () => '/actus',
  ArticlePage: (query: { slug: number | string } & ParsedUrlQueryInput) => `/actus/${query.slug}`,
  ConventionPage: () => '/charte',
  StatutesPage: () => '/statuts',
  ContactPage: () => '/contact',
  ProducersPage: () => '/producteurs',
  ProducerPage: (query: { slug: number | string } & ParsedUrlQueryInput) =>
    `/producteurs/${query.slug}`,
  ContractsPage: () => '/contrats',
  ContractPage: (query: { contractId: number | string } & ParsedUrlQueryInput) =>
    `/contrats/${query.contractId}`,
  RecipesPage: () => '/recettes',
  RecipePage: (query: { slug: number | string } & ParsedUrlQueryInput) => `/recettes/${query.slug}`,
  MembershipPage: () => '/adhesion',
  PrivacyPolicyPage: () => '/politique-confidentialite',
  LegalMentionsPage: () => '/mentions-legales',
  SiteMap: () => '/plan-du-site',
};
