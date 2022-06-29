import React from "react";

export const RepoCard = (props) => {
  return (
    <>
      <div key={props.repo.id}>
        <a href={props.repo.html_url}>
          {" "}
          <p>{props.repo.name}</p>
        </a>

        <p>Forks: {props.repo.forks}</p>
        <p>Stars: {props.repo.stargazers_count}</p>
      </div>
    </>
  );
};
