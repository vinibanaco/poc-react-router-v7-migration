import { type RouteConfig, route } from "@react-router/dev/routes";
import { ROUTES } from "./enums";

export default [
  route(
    ROUTES.RECIPE_LIST,
    "./modules/list-page.tsx", // not migrated
    [
      route(ROUTES.RECIPE_CREATION, "./modules/creation-modal.tsx"), // not migrated
    ]
  ),
  route(ROUTES.RECIPE_DETAILS, "./modules/details-page.tsx"),

  // * matches all URLs, the ? makes it optional so it will match / as well
  route("*?", "./catchall.tsx"),
] satisfies RouteConfig;
