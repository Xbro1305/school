import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { images } from "../../images";
import arrow from "../../images/arrow.svg";
import close from "../../images/close.svg";
import "./Album.css";

export const Album = () => {
  const [image, setImage] = useState(false);
  const { name } = useParams();
  const album = images.find((i) => i.name == name);
  const from = image < 1 ? 0 : image - 1;
  const to =
    image + 1 >= album.list.length - 1 ? album.list.length - 1 : image + 1;
  console.log(from, to, image);

  return (
    <div className="main album">
      <h1 className="albumTitle">{album.name}</h1>
      <div className="albumImgs">
        {album.list.map((item, index) => (
          <img
            onClick={() => setImage(index)}
            key={index}
            src={require("../../" + item.url)}
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
              ? require("../../" + album?.list[image].url)
              : image === 0
              ? require("../../" + album?.list[image].url)
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
          {album.list
            .slice(
              to == album.list.length - 1 && from == album.list.length - 2
                ? from - 1
                : from,
              from == 0 && to == 1 ? to + 2 : to + 1
            )
            .map((item, index) => (
              <img
                onClick={() =>
                  setImage(item.index == image ? album.length - 2 : item.index)
                }
                key={index}
                src={require("../../" + item.url)}
                style={
                  item.index == image + 1 ? { transform: "scale(1.5)" } : {}
                }
                alt={index}
              />
            ))}
          <button
            disabled={image == album.list.length - 1 ? true : false}
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
          {image + 1} / {album.list.length}
        </p>

        <img
          src={
            image
              ? require("../../" + album?.list[image].url)
              : image === 0
              ? require("../../" + album?.list[image].url)
              : ""
          }
          alt=""
        />
      </div>
    </div>
  );
};
