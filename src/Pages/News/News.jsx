import React, { useState } from "react";
import arrow from "../../images/arrow.svg";
import close from "../../images/close.svg";
import "./News.css";

export const News = () => {
  const [image, setImage] = useState({ new: 1, id: 1 });
  const [cls, setCls] = useState("modal");
  const news = [
    {
      title: "33 символа длина одной строки заголовка, лучше не более 2 строк",
      content:
        "1197 символов весь контейнер, лучше не больше, меньше приветствуется. Так текст будет или меньше места для картинки или на ровне, что приятнее смотреть, а новость без картинки не хочу как дизайнер, лучше стоковая фотка в тему, чем просто текст",
      images: [
        { url: "images/Screenshot 2024-04-10 132055.png", index: 1 },
        { url: "images/Screenshot 2024-04-12 181617.png", index: 2 },
        { url: "images/photo_2024-04-23_17-27-57.jpg", index: 3 },
        { url: "images/photo_2024-04-23_17-27-57.jpg", index: 4 },
        { url: "images/photo_2024-04-23_17-27-57.jpg", index: 5 },
      ],
    },
    {
      title: "33 символа длина одной строки заголовка, лучше не более 2 строк",
      content:
        "1197 символов весь контейнер, лучше не больше, меньше приветствуется. Так текст будет или меньше места для картинки или на ровне, что приятнее смотреть, а новость без картинки не хочу как дизайнер, лучше стоковая фотка в тему, чем просто текст",
      images: [
        { url: "images/Screenshot 2024-04-10 132055.png", index: 1 },
        { url: "images/Screenshot 2024-04-12 181617.png", index: 2 },
        { url: "images/photo_2024-04-23_17-27-57.jpg", index: 3 },
        { url: "images/photo_2024-04-23_17-27-57.jpg", index: 4 },
        { url: "images/photo_2024-04-23_17-27-57.jpg", index: 5 },
      ],
    },

    {
      title: "33 символа длина одной строки заголовка, лучше не более 2 строк",
      content:
        "1197 символов весь контейнер, лучше не больше, меньше приветствуется. Так текст будет или меньше места для картинки или на ровне, что приятнее смотреть, а новость без картинки не хочу как дизайнер, лучше стоковая фотка в тему, чем просто текст",
      images: [
        { url: "images/Screenshot 2024-04-10 132055.png", index: 1 },
        { url: "images/Screenshot 2024-04-12 181617.png", index: 2 },
        { url: "images/photo_2024-04-23_17-27-57.jpg", index: 3 },
        { url: "images/photo_2024-04-23_17-27-57.jpg", index: 4 },
      ],
    },
    {
      title: "33 символа длина одной строки заголовка, лучше не более 2 строк",
      content:
        "1197 символов весь контейнер, лучше не больше, меньше приветствуется. Так текст будет или меньше места для картинки или на ровне, что приятнее смотреть, а новость без картинки не хочу как дизайнер, лучше стоковая фотка в тему, чем просто текст",
      images: [
        { url: "images/Screenshot 2024-04-10 132055.png", index: 1 },
        { url: "images/Screenshot 2024-04-12 181617.png", index: 2 },
        { url: "images/photo_2024-04-23_17-27-57.jpg", index: 3 },
      ],
    },
    {
      title: "33 символа длина одной строки заголовка, лучше не более 2 строк",
      content:
        "1197 символов весь контейнер, лучше не больше, меньше приветствуется. Так текст будет или меньше места для картинки или на ровне, что приятнее смотреть, а новость без картинки не хочу как дизайнер, лучше стоковая фотка в тему, чем просто текст",
      images: [
        { url: "images/Screenshot 2024-04-10 132055.png", index: 1 },
        { url: "images/Screenshot 2024-04-12 181617.png", index: 2 },
      ],
    },
    {
      title: "33 символа длина одной строки заголовка, лучше не более 2 строк",
      content:
        "1197 символов весь контейнер, лучше не больше, меньше приветствуется. Так текст будет или меньше места для картинки или на ровне, что приятнее смотреть, а новость без картинки не хочу как дизайнер, лучше стоковая фотка в тему, чем просто текст",
      images: [{ url: "images/Screenshot 2024-04-10 132055.png", index: 1 }],
    },
  ];
  return (
    <div className="news">
      {news.map((n, index) => (
        <section className="new">
          <figure
            onClick={() => {
              setCls("modal active");
            }}
          >
            {n.images.slice(0, 3).map((i, index) => (
              <>
                <img
                  src={require("../../" + i.url)}
                  alt={i.index}
                  onClick={() => setImage({ new: index, id: index })}
                  className={index == 0 ? "main" : "secondary"}
                  style={
                    index === 0
                      ? n.images.length == 1
                        ? { maxHeight: "500px", height: "500px", width: "100%" }
                        : { width: "100%" }
                      : {
                          width: `calc(100% / ${
                            n.images.length >= 4 ? 3 : n.images.length - 1
                          } - 3.35px )`,
                          maxHeight: "300px",
                        }
                  }
                />
              </>
            ))}
            <div
              className="more"
              style={
                n.images.length >= 4
                  ? {
                      width: `calc(100% / ${
                        n.images.length >= 4 ? 3 : n.images.length - 1
                      } - 4px )`,
                      maxHeight: "300px",
                    }
                  : { display: "none" }
              }
            >
              +{n.images.length - 3}
            </div>
          </figure>
          <section>
            <span>
              {new Date().getDate()}.{new Date().getMonth()}.
              {new Date().getFullYear()}
            </span>
            <h1>{n.title}</h1>
            <p>{n.content}</p>
          </section>
        </section>
      ))}
      <div className={cls + " desktop"}>
        <button className="close" onClick={() => setCls("modal")}>
          <img src={close} alt="" />
        </button>
        <img
          src={
            image
              ? require("../../" + news[image.new].images[image.id].url)
              : image === 0
              ? require("../../" + news[image.new].images[image.id].url)
              : ""
          }
          alt=""
        />
        <section className="control">
          <button
            disabled={image.id == 0 ? true : false}
            onClick={() => setImage({ new: image.new, id: image.id - 1 })}
          >
            <img src={arrow} alt="" />
          </button>
          {news[image.new].images.map((item, index) => (
            <img
              onClick={() => setImage({ new: image.new, id: item.index - 1 })}
              key={index}
              src={require("../../" + item.url)}
              style={
                item.index == image.id + 1 ? { transform: "scale(1.5)" } : {}
              }
              alt={index}
            />
          ))}
          <button
            disabled={
              image.id == news[image.new].images.length - 1 ? true : false
            }
            onClick={() => setImage({ new: image.new, id: image.id + 1 })}
          >
            <img src={arrow} alt="" />
          </button>
        </section>
      </div>
      <div className={cls + " mobile"}>
        <button className="close" onClick={() => setCls("modal")}>
          <img src={close} alt="" />
        </button>
        <p className="count">
          {image.id + 1} / {news[image.new].images.length}
        </p>

        <img
          src={
            image
              ? require("../../" + news[image.new].images[image.id].url)
              : image === 0
              ? require("../../" + news[image.new].images[image.id].url)
              : ""
          }
          alt=""
        />
      </div>
    </div>
  );
};
