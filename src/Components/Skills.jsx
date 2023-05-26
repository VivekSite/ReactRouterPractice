import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function Skills() {
  const { fname, lname } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <h1>
        I am Skills {fname} {lname}
      </h1>
      <p>My current location is {location.pathname}</p>

      {location.pathname === `/ReactRouterPractice/skills/vivek/sahani` ? (
        <>
          <button
            onClick={() => {
              navigate(-1);                 //this will redirect to previous route
            }}
          >
            click me
          </button>
          <button
            onClick={() => {
              navigate('/ReactRouterPractice');     //it will redirect to this given route
            }}
          >
            Home Page
          </button>
        </>
      ) : null}
    </>
  );
}
