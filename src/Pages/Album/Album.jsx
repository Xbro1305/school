import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { images } from "../../images";
import arrow from "../../images/arrow.svg";
import close from "../../images/close.svg";
import "./Album.css";
import axios from "axios";

export const Album = () => {
  useEffect(() => {
    axios(`http://26.195.91.164:8000/photos/get_album/${name}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        setAlbum(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [image, setImage] = useState(false);
  const { name } = useParams();
  const [album, setAlbum] = useState([]);
  const from = image < 1 ? 0 : image - 1;
  const to =
    image + 1 >= album?.photos?.length - 1
      ? album?.photos?.length - 1
      : image + 1;
  console.log(from, to, image);

  return (
    <div className="main album">
      <h1 className="albumTitle">{album.name}</h1>
      <div className="albumImgs">
        {album?.photos?.map((item, index) => (
          <img
            onClick={() => setImage(index)}
            key={index}
            src={"http://26.195.91.164:8000" + item.url}
            alt=""
          />
        ))}
      </div>
      <div
        className={
          image
            ? "modal active desktop"
            : image === 0
            ? "modal active desktop"
            : "modal"
        }
      >
        <button className="close" onClick={() => setImage(false)}>
          <img src={close} alt="" />
        </button>
        <img
          src={
            image
              ? "http://26.195.91.164:8000/" + album?.photos[image].url
              : image === 0
              ? "http://26.195.91.164:8000/" + album?.photos[image].url
              : ""
          }
          alt=""
        />
        <section className="control">
          <button
            disabled={image == 0 ? true : false}
            onClick={() => setImage(image - 1)}
          >
            <img src={arrow} alt="" />
          </button>
          {album?.photos
            ?.slice(
              to == album?.photos?.length - 1 &&
                from == album?.photos?.length - 2
                ? from
                : from,
              from == 0 && to == 1 ? to + 2 : to + 1
            )
            .map((item, index) => (
              <img
                onClick={() =>
                  setImage(item.index == image ? album.length - 2 : item.index)
                }
                key={index}
                src={"http://26.195.91.164:8000/" + item.url}
                style={item.id == image ? { transform: "scale(1.5)" } : {}}
                alt={index}
              />
            ))}
          <button
            disabled={image == album?.photos?.length - 1 ? true : false}
            onClick={() => setImage(image + 1)}
          >
            <img src={arrow} alt="" />
          </button>
        </section>
      </div>
      <div
        className={
          image
            ? "modal active mobile"
            : image === 0
            ? "modal active mobile"
            : "modal"
        }
      >
        <button className="close" onClick={() => setImage(false)}>
          <img src={close} alt="" />
        </button>
        <p className="count">
          {image + 1} / {album?.photos?.length}
        </p>

        <img
          src={
            image
              ? "http://26.195.91.164:8000/" + album?.photos[image].url
              : image === 0
              ? "http://26.195.91.164:8000/" + album?.photos[image].url
              : ""
          }
          alt=""
        />
      </div>
    </div>
  );
};
