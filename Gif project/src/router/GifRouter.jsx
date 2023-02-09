import React from "react";
import Homepage from "../pages/Homepage/Homepage";
import EntertainmentPage from "../pages/EntertainmentPage/EntertainmentPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtistsPage from "../pages/ArtistsPage/ArtistsPage";
import SportsPage from "../pages/SportsPage/SportsPage";
import StickersPage from "../pages/StickersPage/StickersPage";
import TrendsPage from "../pages/TrendsPage/TrendsPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import ReactionsPage from "../pages/ReactionsPage/ReactionsPage";
import UploadPage from "../pages/UploadPage/UploadPage";
const GifRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Entertainment" element={<EntertainmentPage />} />
          <Route path="/ArtistsPage" element={<ArtistsPage />} />
          <Route path="/SportsPage" element={<SportsPage />} />
          <Route path="/TrendsPage" element={<TrendsPage />} />
          <Route path="/StickersPage" element={<StickersPage />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/ReactionsPage" element={<ReactionsPage />} />
          <Route path="/UploadPage" element={<UploadPage />} />
        </Routes>
      </Router>
    </>
  );
};
export default GifRouter;
