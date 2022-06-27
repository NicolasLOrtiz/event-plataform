import React from "react";
import { Route, Routes } from "react-router-dom";

import { Event, Index } from "./pages";

export const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/event" element={<Event />} />
    <Route path="/event/lesson/:slug" element={<Event />} />
  </Routes>
);
