import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pupil.css";
import i from "../../images/Screenshot 2024-04-10 132055.png";
import axios from "axios";

export const Pupil = () => {
  const navigate = useNavigate();
  const [pupils, setPupils] = useState([]);

  useEffect(() => {
    axios("http://26.195.91.164:8000/year_of_issue_list", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setPupils(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main pupils">
      <div className="desktop">
        {pupils?.map((pupil) => (
          <div
            className="year"
            onClick={() => navigate("/graduates/" + pupil.year)}
          >
            <h1>{pupil.year}</h1>
            <div className="vipuskniki">
              {pupil?.users?.slice(0, 8)?.map((p) => (
                <div className="pupil">
                  <img src={"http://26.195.91.164:8000" + p.image} alt="" />
                  <h2>
                    {p?.first_name} {p?.last_name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mobile">
        {pupils?.map((pupil) => (
          <div className="year">
            <h1>{pupil.year}</h1>
            <div className="vipuskniki">
              {pupil?.pupils?.slice(0, 4).map((p) => (
                <div className="pupil">
                  <img
                    src={
                      "http://26.195.91.164:8000/year_of_issue_list" + p.image
                    }
                    alt=""
                  />
                  <h2>
                    {p.first_name} {p.last_name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
