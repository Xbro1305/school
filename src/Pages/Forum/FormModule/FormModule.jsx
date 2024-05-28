import React from "react";
import "./FormModule.css";

function FormModule({ isOpen, closeModal }) {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Создание топика</h2>
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
            </div>
            <form className="modal-form">
              <select>
                <option value="1">Выберите тему *</option>
                <option value="2">Выберите тему *</option>
                <option value="3">Выберите тему *</option>
              </select>
              <input type="text" maxLength="55" placeholder="Заголовок *" />
              <textarea maxLength="200" placeholder="Описание"></textarea>
              <button type="submit" className="publish-btn">
                Опубликовать
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default FormModule;
