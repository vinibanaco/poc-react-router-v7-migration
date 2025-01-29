import React from "react";
import { Link, useLocation } from "react-router";

import { ROUTES } from "../modules/routing/enums";

const breadcrumbNames = {
  [ROUTES.RECIPE_LIST]: "Recipes",
  [ROUTES.RECIPE_CREATION]: "New",
  [ROUTES.RECIPE_DETAILS]: "", // I know this component doesn't work with parameterized routes
} as const satisfies Record<(typeof ROUTES)[keyof typeof ROUTES], string>;

function useLinks() {
  // React Router provides `useMatches()` to help building breadcrumbs,
  // however this hook only works with the framework router (and with
  // nested routing). Since this component would already exist in an
  // existing application we still need to use the `useLocation()` hook
  const { pathname } = useLocation();

  const segments = pathname.split("/").filter(Boolean);

  let link = "";
  const links = segments.map((segment) => {
    link += `/${segment}`;
    return link;
  });

  return links;
}

function Breadcrumbs() {
  const links = useLinks();

  return (
    <nav>
      {links.map((link, index) => (
        <React.Fragment key={link}>
          {index !== 0 ? <span>/</span> : null}
          <Link to={link}>
            {breadcrumbNames[link as keyof typeof breadcrumbNames] ?? ""}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
