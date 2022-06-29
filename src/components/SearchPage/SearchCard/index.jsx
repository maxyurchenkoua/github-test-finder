import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const SearchCard = (props) => {
  const [userData, setDataState] = useState({
    loading: false,
    publicRepos: null,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    setDataState({ loading: true });
    axios
      .get(`users/${props.login}`)
      .then((response) => {
        setDataState({
          loading: false,
          publicRepos: response.data.public_repos,
        });
      })
      .catch((errors) => {
        console.log(errors);
        setError(errors.response.data.message);
      });
  }, [props.login]);

  return (
    <>
      <div>
        <NavLink to={`/user/${props.login}`}>
          <img src={props.image}></img>
          <p>Login: {props.login}</p>
        </NavLink>

        {userData.publicRepos ? (
          <p>Public repos: {userData.publicRepos}</p>
        ) : (
          <span>No repos data: {error}</span>
        )}
      </div>
    </>
  );
};
