import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from "./SearchCard.module.scss";

export const SearchCard = (props) => {
  const [userData, setDataState] = useState({
    loading: false,
    publicRepos: null,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = (username) => {
      setDataState({ loading: true });
      fetch(`users/${username}`)
        .then((response) => {
          if (!response.ok) {
            setError(`error - ${response.status}`);
          }
          return response.json();
        })
        .then((actualData) =>
          setDataState({
            loading: false,
            publicRepos: actualData.public_repos,
          })
        )
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchData(props.login);
  }, [props.login]);

  return (
    <>
      <div className={s.wraper}>
        <div className={s.userData}>
          <NavLink to={`/user/${props.login}`}>
            <img className={s.avatar} src={props.image} alt={props.login}></img>
          </NavLink>
          <NavLink to={`/user/${props.login}`}>
            <p className={s.username}>{props.login}</p>
          </NavLink>
        </div>

        {userData.publicRepos ? (
          <p className={s.repos}>Public repos: {userData.publicRepos}</p>
        ) : (
          <span className={s.repos}>No data {error}</span>
        )}
      </div>
    </>
  );
};
