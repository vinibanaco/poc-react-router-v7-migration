import { Navigate, Route, Routes } from "react-router";
import { ROUTES } from "./enums";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Navigate to={ROUTES.RECIPE_LIST} />} />
      <Route path="*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
}
