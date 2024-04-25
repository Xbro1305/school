import React from "react";
import Logo from "../../images/Logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <img src={Logo} alt="" />
      <section>
        <NavLink to={"/news"}>Новости</NavLink>
        <NavLink to={"/albums"}>Альбомы</NavLink>
        <NavLink to={"/contacts"}>Контакты</NavLink>
        <NavLink to={"/forum"}>Форум</NavLink>
        <NavLink to={"/lomonosovy"}>Ломоносовцы</NavLink>
      </section>
      <img
        onClick={() => navigate("/profile")}
        src={require("../../images/photo_2024-04-23_17-27-57.jpg")}
        alt=""
      />
    </nav>
  );
};
