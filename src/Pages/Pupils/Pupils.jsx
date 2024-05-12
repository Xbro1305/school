import React from "react";
import { pupils } from "../Pupil/Pupil";
import i from "../../images/Screenshot 2024-04-10 132055.png";
import "./Pupils.css";
import { useParams } from "react-router-dom";
import arrow from "../../images/Vectorarrow.svg";
import { useNavigate } from "react-router-dom";

export const Pupils = () => {
  const navigate = useNavigate();
  const { year } = useParams();
  const arr = pupils.find((p) => p.year == year);
  return (
    <div className="pupilList">
      <div className="back">
        <img src={arrow} alt="arrow" onClick={() => navigate("/pupils")} />
        <h2>{arr.year}</h2>
      </div>
      <div className="pupilss">
        {arr.pupils.map((pupil) => {
          return (
            <div
              className="pupil"
              onClick={() => navigate("/user/" + pupil.id)}
            >
              <img src={i} alt="pupil" />
              <div className="pupil-name">
                <h2>
                  {pupil.first_name} {pupil.last_name}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
