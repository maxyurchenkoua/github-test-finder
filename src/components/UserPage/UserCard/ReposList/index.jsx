import React, { useState, useEffect } from "react";
import axios from "axios";
import { RepoCard } from "./RepoCard";

export const ReposList = (props) => {
  const [dataState, setDataState] = useState({
    loading: false,
    repos: null,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    setDataState({ loading: true });
    axios
      .get(`users/${props.userName}/repos`)
      .then((response) => {
        setDataState({
          loading: false,
          repos: response.data,
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
        {dataState.repos ? (
          dataState.repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
        ) : (
          <span> Loading... </span>
        )}

        {error && error}
      </div>
    </>
  );
};
