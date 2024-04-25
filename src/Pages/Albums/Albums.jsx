import React from "react";
import { images } from "../../images";
import { useNavigate } from "react-router-dom";
import "./Albums.css";
import Search from "../../images/Search.svg";

export const Albums = () => {
  const navigate = useNavigate();
  return (
    <div className="main Albums">
      <section className="searchbar">
        <img src={Search} alt="" />
        <input type="text" />
      </section>
      {images.map((image, index) => {
        return (
          <div
            className="albumSect"
            key={index}
            onClick={() => navigate("/album/" + image.name)}
          >
            <h1>{image.name}</h1>
            {image.list.slice(0, 8).map((i, index) => (
              <img
                src={require("../../" + i.url)}
                alt={i.index}
                key={index}
                className="image"
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};
