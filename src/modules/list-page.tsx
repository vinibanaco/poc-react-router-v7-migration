import { Outlet } from "react-router";

export default function ListPage() {
  return (
    <>
      <span>List</span>
      <br />
      <Outlet />
    </>
  );
}
