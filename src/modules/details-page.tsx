import { Outlet } from "react-router";
import type { Route } from "./+types/details-page";

export default function DetailsPage({ params }: Route.ComponentProps) {
  return (
    <div>
      Details: {params.name}
      <Outlet />
    </div>
  );
}
