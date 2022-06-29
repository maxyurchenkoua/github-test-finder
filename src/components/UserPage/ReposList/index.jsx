import React, { useState, useEffect } from "react";
import axios from "axios";
import { RepoCard } from "./RepoCard";

export const ReposList = (props) => {
  const [dataState, setDataState] = useState({
    loading: false,
    repos: null,
  });
  const [error, setError] = useState("");
  const [inputText, setInputText] = useState("");

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
      {/* <RepoSearch /> */}

      <input
        type="search"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        name="username"
        placeholder="Search repos..."
      />

      {dataState.repos ? (
        dataState.repos
          .filter((repo) => repo.name.includes(inputText))
          .map((filteredRepo) => (
            <RepoCard key={filteredRepo.id} repo={filteredRepo} />
          ))
      ) : (
        <span> Loading... </span>
      )}

      {error && error}
    </>
  );
};
