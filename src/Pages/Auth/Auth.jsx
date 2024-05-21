import React, { useState } from "react";
import logo from "../../images/Logo.svg";
import eye from "../../images/eye.svg";
import "./Auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("password");

  const log = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data);
    const username = value.username;
    const password = value.password;

    axios
      .post("http://26.195.91.164:8000/auth/", {
        username: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        navigate("/news");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="auth">
      <div>
        <h1>
          <img src={logo} alt="" />
          Добро пожаловать
        </h1>
        <form onSubmit={log}>
          <label>
            <p>Логин</p>
            <input type="text" name="username" />
          </label>

          <label>
            <p>Пароль</p>
            <input type={type} name="password" />
            <img
              src={eye}
              alt=""
              onClick={() => setType(type == "password" ? "text" : "password")}
            />
          </label>
          <button>Войти</button>
        </form>
      </div>
    </div>
  );
};
