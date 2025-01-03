import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ListPage from "./list-page";
import DetailsPage from "./details-page";
import PuddingModal from "./pudding-modal";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/recipes" />} />
        <Route path="/recipes" element={<ListPage />}>
          <Route path="/recipes/pudding" element={<PuddingModal />} />
        </Route>
        <Route path="/recipes/:name" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
