import { Link, Outlet } from "react-router";

import Breadcrumbs from "../common-components/breadcrumbs";

import { ROUTES } from "./routing/enums";

export default function ListPage() {
  return (
    <>
      <Breadcrumbs />
      <span>List</span>
      <br />
      <Link to={ROUTES.RECIPE_CREATION}>Open creation modal</Link>
      <br />
      <Outlet />
    </>
  );
}
