import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route(
    "/recipes",
    "./modules/list-page.tsx", // not migrated
    [
      route("/recipes/new", "./modules/creation-modal.tsx"), // not migrated
    ]
  ),
  route("/recipes/:name", "./modules/details-page.tsx"),

  // * matches all URLs, the ? makes it optional so it will match / as well
  route("*?", "./catchall.tsx"),
] satisfies RouteConfig;
