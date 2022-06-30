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
    const fetchData = (username) => {
      setDataState({ loading: true });
      fetch(`users/${username}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`error - status is ${response.status}`);
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

  // useEffect(() => {
  //   setDataState({ loading: true });
  //   axios
  //     .get(`users/${props.login}`)
  //     .then((response) => {
  //       setDataState({
  //         loading: false,
  //         publicRepos: response.data.public_repos,
  //       });
  //     })
  //     .catch((errors) => {
  //       console.log(errors);
  //       setError(errors.response.data.message);
  //     });
  // }, [props.login]);

  return (
    <>
      <div>
        <NavLink to={`/user/${props.login}`}>
          <img src={props.image} alt={props.login}></img>
          <p>{props.login}</p>
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
