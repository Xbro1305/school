import React, { useEffect, useState } from "react";
// import { FiSearch } from "react-icons/fi";
import "./Forum.css";
import FormModule from "./FormModule/FormModule";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Forum = () => {
  const [supportData, setSupportData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios("http://26.195.91.164:8000/forum", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        setSupportData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const navigate = useNavigate();

  return (
    <>
      <FormModule isOpen={isOpen} closeModal={closeModal} />
      <div className="forum">
        <div className="forum_search">
          <div className="forum_search_item"></div>
          <button onClick={openModal}>Начать новый топик</button>
        </div>
        {supportData.map((category, index) => (
          <div className="forum_banner" key={index}>
            <div className="forum_banner_item_p">
              <h3>{category.name}</h3>
              {category?.topics?.map((topic, idx) => (
                <div
                  onClick={() => {
                    navigate("/topic/" + topic.id);
                  }}
                  className="forum_banner_item_p_item"
                  key={idx}
                >
                  <div className="forum_banner_item_p_item_r">
                    <div>
                      <p>
                        {topic?.firstname?.charAt(0)}dfmsj
                        {topic?.lastname?.charAt(0)}
                      </p>
                      <div>
                        <p>{topic.uploaded_by}fdasfsaf</p>
                        <span>{topic.date}fasdfsa</span>
                      </div>
                    </div>
                    <div>
                      <b>{topic.posts_count}</b>
                      <p>Постов</p>
                    </div>
                  </div>
                  <div>
                    <span>
                      {topic.title} Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Quae, excepturi?
                    </span>
                    <p>
                      {topic.content} Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Animi expedita, ullam facere soluta cum
                      ex quod iure! Ducimus aspernatur distinctio impedit vero
                      molestiae ab doloribus fugit quas, cumque quidem, optio,
                      aliquid deserunt tenetur consectetur! Delectus eum minus
                      libero sit magni excepturi illo, harum assumenda,
                      repudiandae labore dolore facere voluptatem tempora.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
