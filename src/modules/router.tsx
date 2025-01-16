import { Navigate, Route, Routes } from "react-router";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Navigate to="/recipes" />} />
      <Route path="*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
}
