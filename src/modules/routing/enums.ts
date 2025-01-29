export const ROUTES = {
  RECIPE_LIST: "/recipes",
  RECIPE_DETAILS: "/recipes/:name",
  RECIPE_CREATION: "/recipes/new",
  RECIPE_CATEGORY: "/recipes/category/:categoryId",
  RECIPE_SEARCH: "/recipes/search",
  RECIPE_VERSION: "/recipes/:name/versions/:versionId?",
} as const;
