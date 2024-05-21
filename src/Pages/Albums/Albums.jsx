import React, { useEffect, useState } from "react";
// import { images } from "../../images";
import { useNavigate } from "react-router-dom";
import "./Albums.css";
import Search from "../../images/Search.svg";
import axios from "axios";

export const Albums = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    axios("http://26.195.91.164:8000/photos/get_albums", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="main albums">
      {/* <section className="searchbar">
        <img src={Search} alt="" />
        <input type="text" />
      </section> */}
      <div className="desktop">
        {albums?.map((image, index) => {
          return (
            <div
              className="albumSect"
              key={index}
              onClick={() => navigate("/album/" + image.id)}
            >
              <h1>{image.name}</h1>
              {image?.images?.slice(0, 7).map((i, index) => (
                <img
                  src={"http://26.195.91.164:8000" + i.url}
                  alt={i?.generated_id}
                  key={index}
                  className="image"
                />
              ))}
              <div
                className="image"
                style={
                  image.images.length >= 8
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                +{image?.images?.length - 7}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mobile">
        {albums?.map((image, index) => {
          return (
            <div
              className="albumSect"
              key={index}
              onClick={() => navigate("/album/" + image?.id)}
            >
              <h1>{image.name}</h1>
              {image?.images?.slice(0, 3).map((i, index) => (
                <img
                  src={"http://26.195.91.164:8000" + i?.url}
                  alt={i?.generated_id}
                  key={index}
                  className="image"
                />
              ))}
              <div
                className="image"
                style={
                  image.images.length >= 4
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                +{image?.images?.length - 3}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
