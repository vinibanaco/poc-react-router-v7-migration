import { Link, Outlet } from "react-router";

export default function ListPage() {
  return (
    <>
      <span>List</span>
      <br />
      <Link to="/recipes/pudding">Open Pudding modal</Link>
      <br />
      <Outlet />
    </>
  );
}
