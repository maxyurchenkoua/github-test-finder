import React, { useState, useEffect } from "react";
import axios from "axios";

export const Biography = (props) => {
  const [dataState, setDataState] = useState({
    loading: false,
    user: null,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    setDataState({ loading: true });
    axios
      .get(`users/${props.userName}`)
      .then((response) => {
        setDataState({
          loading: false,
          user: response.data,
        });
      })
      .catch((errors) => {
        console.log(errors);
        setError(errors.response.data.message);
      });
  }, [props.userName]);

  return (
    <>
      <div>
        {dataState.user ? (
          <>
            <img src={dataState.user.avatar_url} alt={dataState.name}></img>
            <p>Name: {dataState.user.name}</p>
            {dataState.user.email && <p>Email: {dataState.user.email}</p>}
            {dataState.user.location && (
              <p>Location: {dataState.user.location}</p>
            )}
            <p>
              Join date:{" "}
              {new Date(dataState.user.created_at).toLocaleDateString()}
            </p>

            <p>Followers: {dataState.user.followers}</p>
            <p>Following: {dataState.user.following}</p>

            {dataState.user.bio && <p>Bio here: {dataState.user.bio}</p>}
          </>
        ) : (
          <span> Loading... </span>
        )}

        {error && error}
      </div>
    </>
  );
};
