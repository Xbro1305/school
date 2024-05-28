import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./Topic.css";
import image from "../../images/Screenshot 2024-04-10 132055.png";
import TopicModule from "./TopicModule/TopicModule";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const Topic = () => {
  const [isOpenModals, setIsOpenModals] = useState(false);
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios(`http://26.195.91.164:8000/forum/topics/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openModals = () => setIsOpenModals(true);
  const closeModals = () => setIsOpenModals(false);
  const navigate = useNavigate();

  return (
    <div className="topic_container">
      {isOpenModals && <TopicModule closeModals={closeModals} />}
      <div className="topic_search">
        <div>
          <FiSearch />
          <button onClick={openModals}>Написать новый пост</button>
        </div>
        <h3
          onClick={() => {
            navigate(-1);
          }}
        >
          <FaArrowLeftLong />
          Ну давайте поддержим
        </h3>
      </div>
      {posts.posts?.map((post) => {
        return (
          <div className="Topic_t">
            <div className="Topic_item_t">
              <p></p>
              <div>
                <p>{post.user.username}</p>
                <p>{post.created_at.split("T")[0]}</p>
              </div>
            </div>
            <div>
              <h3>
                {post.title} Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et, molestiae?
              </h3>
              <p>
                {post.content} Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Repudiandae aspernatur exercitationem iure
                delectus placeat possimus voluptate rerum vero mollitia nisi,
                quia molestias veniam laudantium aliquid modi eaque odit
                similique quaerat beatae deleniti reprehenderit tempore cumque
                repellendus voluptas? Numquam corporis quam excepturi, ea,
                beatae reiciendis blanditiis pariatur vitae qui nostrum quos.
              </p>
            </div>
            <div className="topicImg">
              <img className="topicImage" src={image} alt="" />
            </div>
          </div>
        );
      })}
      {/* <div className="Topic_t">
        <div className="Topic_item_t">
          <p>ГС</p>
          <div>
            <p>Горбачев Станислав Андреевич</p>
            <p>29 апреля 2024</p>
          </div>
        </div>
        <div>
          <h3>Юные экологи одержали победу </h3>
          <p>
            10 учеников 5-7 классов школы №12 стали победителями городского
            конкурса "Эко-город будущего".
          </p>
          <p>
            В рамках конкурса школьники представили свои проекты по улучшению
            экологической ситуации в городе. Проекты были представлены в виде
            макетов, презентаций и видеороликов.
          </p>
          <p>Среди лучших работ были отмечены:</p>
          <ul>
            <li>
              Проект "Зеленый город", который предусматривает создание сети
              парков и скверов, а также озеленение крыш домов.
            </li>
            <li>
              Проект "Чистая вода", направленный на очистку водоемов города и
              создание системы сбора дождевой воды.
            </li>
            <li>
              Проект "Эко-дом", который предлагает решения по энергосбережению и
              использованию экологичных материалов в строительстве.
            </li>
          </ul>
          <p>Победители конкурса получили дипломы и ценные призы.</p>
          <p>Поздравляем юных экологов с победой!</p>
        </div>
      </div> */}
    </div>
  );
};
