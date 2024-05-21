import React from "react";
import img from "../../images/Screenshot 2024-04-12 181617.png";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="main contact">
      <form className="form">
        <input
          type="file"
          name="inppp"
          onChange={(e) => {
            console.log(e.target);
          }}
        />
        <h1>Форма обратной связи</h1>
        <section>
          <section>
            <img src={img} alt="" />
            <p>
              Горбачев Станислав Андреевич
              <span>24 апреля 2024</span>
            </p>
          </section>
          <select name="reason" id="">
            <option value="0">Выберете причину обращения *</option>
          </select>
        </section>
        <textarea
          name="content"
          id=""
          placeholder="Текст обращения *"
        ></textarea>
        <section>
          <input
            type="text"
            name="contact"
            placeholder="Способ обратной связи"
          />
          <button>Отправить</button>
        </section>
      </form>
    </div>
  );
};
