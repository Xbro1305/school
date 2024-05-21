import React, { useEffect, useState } from "react";
import i from "../../images/Screenshot 2024-04-10 132055.png";
import "./Pupils.css";
import { useParams } from "react-router-dom";
import arrow from "../../images/Vectorarrow.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Pupils = () => {
  const [pupils, setPupils] = useState([]);

  const { year } = useParams();

  useEffect(() => {
    axios(`http://26.195.91.164:8000/get_profiles/${year}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setPupils(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  return (
    <div className="pupilList">
      <div className="back">
        <img src={arrow} alt="arrow" onClick={() => navigate("/graduates")} />
      </div>
      <div className="pupilss">
        {pupils.map((pupil) => (
          <div className="pupil" onClick={() => navigate("/user/" + pupil.id)}>
            {/* <img src={i} alt="pupil" /> */}
            <div className="pupil-name">
              <h2>
                {pupil.first_name} {pupil.last_name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
