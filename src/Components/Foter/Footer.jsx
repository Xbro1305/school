import React from "react";
import "./Footer.css";
import news from "../../images/news.svg";
import album from "../../images/album.svg";
import forum from "../../images/forum.svg";
import callback from "../../images/callback.svg";
import pupil from "../../images/pupil.svg";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <h1 className="desktopFooter">
        © Закрытый клуб выпускников Ломоносовской школы
      </h1>
      <section className="mobileFooter">
        <NavLink to="/news">
          <img src={news} alt="" />
        </NavLink>
        <NavLink to="/albums">
          <img src={album} alt="" />
        </NavLink>
        <NavLink to="/forum">
          <img src={forum} alt="" />
        </NavLink>
        <NavLink to="/callback">
          <img src={callback} alt="" />
        </NavLink>
        <NavLink to="/pupils">
          <img src={pupil} alt="" />
        </NavLink>
      </section>
    </footer>
  );
};
