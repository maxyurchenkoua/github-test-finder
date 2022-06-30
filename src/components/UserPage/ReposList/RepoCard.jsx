import React from "react";
import s from "./ReposList.module.scss";

export const RepoCard = (props) => {
  return (
    <>
      <div className={s.wraper} key={props.repo.id}>
        <a href={props.repo.html_url}>
          <p>{props.repo.name}</p>
        </a>

        <div className={s.repoData}>
          <p>{props.repo.forks} Forks</p>
          <p>{props.repo.stargazers_count} Stars</p>
        </div>
      </div>
    </>
  );
};
