import React from "react";
import avatar from "../../images/Screenshot 2024-04-12 181617.png";
import telegram from "../../images/ic_telegram.svg";
import phone from "../../images/ic_phone.svg";
import whatsapp from "../../images/ic_whatsapp-outline.svg";
import vk from "../../images/ic_vk.svg";
import instagram from "../../images/ic_instagram.svg";
import back from "../../images/ic_back.svg";
import settings from "../../images/ic_settings.svg";
import exit from "../../images/ic_exit.svg";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="navigation">
        <img src={back} alt="" />
        <section>
          <img src={settings} alt="" />
          <img src={exit} alt="" />
        </section>
      </div>
      <div className="profileMain">
        <img src={avatar} alt="" />
        <section>
          <h1>Горбачёв Станислав Андреевич</h1>
          <p>
            2020 <span>год выпуска</span>
          </p>
          <h2>
            Остров — это часть суши, окружённая водой. <br />
            Суши — это часть рыбы, окружённая японцами.
          </h2>
          <div className="social">
            <h3>
              <img src={telegram} alt="" />
              @Stasyanishe
            </h3>
            <h3>
              <img src={phone} alt="" />
              @Stasyanishe
            </h3>
            <h3>
              <img src={instagram} alt="" />
              @Stasyanishe
            </h3>
            <h3>
              <img src={whatsapp} alt="" />
              @Stasyanishe
            </h3>
            <h3>
              <img src={vk} alt="" />
              @Stasyanishe
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};
