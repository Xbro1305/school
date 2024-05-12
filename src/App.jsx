import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Albums } from "./Pages/Albums/Albums";
import { Album } from "./Pages/Album/Album";
import "./Global.css";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Foter/Footer";
import { News } from "./Pages/News/News";
import { Contact } from "./Pages/Contact/Contact";
import { Pupil } from "./Pages/Pupil/Pupil";
import { Pupils } from "./Pages/Pupils/Pupils";
import { Forum } from "./Pages/Forum/Forum";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/albums" element={<Albums />} />
        <Route path="/album/:name" element={<Album />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/news" element={<News />} />
        <Route path="/callback" element={<Contact />} />
        <Route path="/pupils" element={<Pupil />} />
        <Route path="/pupils/:year" element={<Pupils />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
