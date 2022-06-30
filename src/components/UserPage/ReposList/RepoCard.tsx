import React from "react";
import s from "./ReposList.module.scss";

interface RepoCardProps {
  id: number,
  html_url: string,
  name: string,
  forks: number,
  stargazers_count: number
}

export const RepoCard = ({id, html_url, name, forks, stargazers_count}: RepoCardProps) => {
  return (
    <>
      <div className={s.wraper} key={id}>
        <a href={html_url} rel="noreferrer" target="_blank">
          <p>{name}</p>
        </a>

        <div className={s.repoData}>
          <p>{forks} Forks</p>
          <p>{stargazers_count} Stars</p>
        </div>
      </div>
    </>
  );
};
