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
  ArticlePage: (query: { articleId: number | string } & ParsedUrlQueryInput) =>
    `/actus/${query.articleId}`,
  ConventionPage: () => '/charte',
  StatutesPage: () => '/statuts',
  ContactPage: () => '/contact',
  ProducersPage: () => '/producteurs',
  ProducerPage: (query: { producerId: number | string } & ParsedUrlQueryInput) =>
    `/producteurs/${query.producerId}`,
  ContractsPage: () => '/contrats',
  ContractPage: (query: { contractId: number | string } & ParsedUrlQueryInput) =>
    `/contrats/${query.contractId}`,
  RecipesPage: () => '/recettes',
  RecipePage: (query: { recipeId: number | string } & ParsedUrlQueryInput) =>
    `/recettes/${query.recipeId}`,
  MembershipPage: () => '/adhesion',
  PrivacyPolicyPage: () => '/politique-confidentialite',
  LegalMentionsPage: () => '/mentions-legales',
  SiteMap: () => '/plan-du-site',
};