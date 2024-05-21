import React, { useState, useEffect } from "react";
import arrow from "../../images/arrow.svg";
import close from "../../images/close.svg";
import "./News.css";
import axios from "axios";

export const News = () => {
  const ne = [
    {
      id: 1,
      title: "33 символа длина одной строки заголовка, лучше не более 2 строк",
      description:
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
      id: 2,
      title: "33 символа длина одной строки заголовка, лучше не более 2 строк",
      description:
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
      id: 3,
      title: "33 символа длина одной строки заголовка, лучше не более 2 строк",
      description:
        "1197 символов весь контейнер, лучше не больше, меньше приветствуется. Так текст будет или меньше места для картинки или на ровне, что приятнее смотреть, а новость без картинки не хочу как дизайнер, лучше стоковая фотка в тему, чем просто текст",
      images: [
        { url: "images/Screenshot 2024-04-10 132055.png", index: 1 },
        { url: "images/Screenshot 2024-04-12 181617.png", index: 2 },
        { url: "images/photo_2024-04-23_17-27-57.jpg", index: 3 },
        { url: "images/photo_2024-04-23_17-27-57.jpg", index: 4 },
      ],
    },
    {
      id: 4,
      title: "33 символа длина одной строки заголовка, лучше не более 2 строк",
      description:
        "1197 символов весь контейнер, лучше не больше, меньше приветствуется. Так текст будет или меньше места для картинки или на ровне, что приятнее смотреть, а новость без картинки не хочу как дизайнер, лучше стоковая фотка в тему, чем просто текст",
      images: [
        { url: "images/Screenshot 2024-04-10 132055.png", index: 1 },
        { url: "images/Screenshot 2024-04-12 181617.png", index: 2 },
        { url: "images/photo_2024-04-23_17-27-57.jpg", index: 3 },
      ],
    },
    {
      id: 5,
      title: "33 символа длина одной строки заголовка, лучше не более 2 строк",
      description:
        "1197 символов весь контейнер, лучше не больше, меньше приветствуется. Так текст будет или меньше места для картинки или на ровне, что приятнее смотреть, а новость без картинки не хочу как дизайнер, лучше стоковая фотка в тему, чем просто текст",
      images: [
        { url: "images/Screenshot 2024-04-10 132055.png", index: 1 },
        { url: "images/Screenshot 2024-04-12 181617.png", index: 2 },
      ],
    },
    {
      id: 6,
      title: "33 символа длина одной строки заголовка, лучше не более 2 строк",
      description:
        "1197 символов весь контейнер, лучше не больше, меньше приветствуется. Так текст будет или меньше места для картинки или на ровне, что приятнее смотреть, а новость без картинки не хочу как дизайнер, лучше стоковая фотка в тему, чем просто текст",
      images: [{ url: "images/Screenshot 2024-04-10 132055.png", index: 1 }],
    },
  ];

  const [news, setNews] = useState([]);
  const [image, setImage] = useState({ new: 0, id: 0 });
  const [cls, setCls] = useState("modal");

  useEffect(() => {
    axios("http://26.195.91.164:8000/news", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="news">
      {news.map((n, index) => (
        <section className="new">
          <figure
            style={
              n.images.length
                ? { minHeight: "400px" }
                : { display: "none !important" }
            }
            onClick={() => {
              setCls("modal active");
            }}
          >
            {n.images
              ? n?.images?.slice(0, 3)?.map((i, index) => (
                  <>
                    <img
                      key={index}
                      src={"http://26.195.91.164:8000" + i?.image}
                      alt={i.index}
                      onClick={() => setImage({ new: n.id - 1, id: index })}
                      className={index == 0 ? "main" : "secondary"}
                      style={
                        index === 0
                          ? n.images.length == 1
                            ? {
                                maxHeight: "500px",
                                height: "500px",
                                width: "100%",
                              }
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
                ))
              : ""}
            <div
              className="more"
              style={
                n?.images?.length >= 4
                  ? {
                      width: `calc(100% / ${
                        n?.images?.length >= 4 ? 3 : n?.images?.length - 1
                      } - 4px )`,
                      maxHeight: "300px",
                    }
                  : { display: "none" }
              }
            >
              +{n?.images?.length - 3}
            </div>
          </figure>
          <section>
            <h1>{n.title}</h1>
            <p>{n.description}</p>
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
              ? "http://26.195.91.164:8000" +
                news[image.new]?.images[image.id]?.image
              : image === 0
              ? "http://26.195.91.164:8000" +
                news[image.new]?.images[image.id]?.image
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
          {news[image.new]?.images.map((item, index) => (
            <img
              onClick={() => setImage({ new: image.new, id: item.index - 1 })}
              key={index}
              src={"http://26.195.91.164:8000" + item?.image}
              style={
                item?.index == image.id + 1 ? { transform: "scale(1.5)" } : {}
              }
              alt={index}
            />
          ))}
          {console.log(news[0]?.images?.length)}
          <button
            disabled={
              image?.id == news[image.new]?.images?.length - 1 ? true : false
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
          {image.id + 1} / {news[image.new]?.images?.length}
        </p>

        <img
          src={
            image
              ? "http://26.195.91.164:8000" +
                news[image.new]?.images[image.id]?.image
              : image === 0
              ? "http://26.195.91.164:8000" +
                news[image.new]?.images[image.id]?.image
              : ""
          }
          alt=""
        />
      </div>
    </div>
  );
};
