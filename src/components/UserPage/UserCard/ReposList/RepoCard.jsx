import React from "react";
import { NavLink } from "react-router-dom";

export const RepoCard = (props) => {
  return (
    <>
      <div key={props.repo.id}>
        <NavLink to={`/user/${props.login}`}>
          <p>{props.repo.name}</p>
        </NavLink>

        <p>Forks: {props.repo.forks}</p>
        <p>Stars: {props.repo.stargazers_count}</p>
      </div>
    </>
  );
};
