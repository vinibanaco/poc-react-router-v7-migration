import { Link, Outlet } from "react-router";

export default function ListPage() {
  return (
    <>
      <span>List</span>
      <br />
      <Link to="/recipes/new">Open creation modal</Link>
      <br />
      <Outlet />
    </>
  );
}
