import React, { useState, useEffect } from "react";
import { RepoCard } from "./RepoCard";
// import axios from 'axios';

interface ParamsProps {
  userName: string | undefined,
}

interface ReposType {
  loading: boolean,
  repos: Array<RepoCardType> | null
}
interface RepoCardType {
  id: number,
  html_url: string,
  name: string,
  forks: number,
  stargazers_count: number
}

export const ReposList = ({userName}:ParamsProps) => {
  const [dataState, setDataState] = useState<ReposType>({
    loading: false,
    repos: [],
  });
  const [error, setError] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    const fetchData = (userName) => {
      fetch(`https://api.github.com/users/${userName}/repos`)
        .then((response) => {
          if (!response.ok) {
            setError(`error - ${response.status}`);
          }
          return response.json();
        })
        .then((actualData) =>
          setDataState({
            loading: false,
            repos: actualData,
          })
        )
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchData(userName);
  }, [userName]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        name="username"
        placeholder="Search repos..."
      />
      

      {dataState.repos && dataState.repos.length ? (
        dataState.repos
          .filter((repo) => repo.name.includes(inputText))
          .map((filteredRepo) => (
            <RepoCard 
              key={filteredRepo.id} 
              id={filteredRepo.id} 
              html_url={filteredRepo.html_url} 
              name={filteredRepo.name} 
              forks={filteredRepo.forks} 
              stargazers_count={filteredRepo.stargazers_count} />
          ))
      ) : (
        <div>
         <span> No data... </span>
         <span> {error && error} </span>
          
      </div>
      )}

     
    </>
  );
};
