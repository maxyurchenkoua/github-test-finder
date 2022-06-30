import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from "./SearchCard.module.scss";

interface SearchCardProps {
  login: string,
  image: string
}

interface SearchCardType {
  loading: boolean,
  publicRepos?: number | null
}

export const SearchCard = ({login, image}:SearchCardProps) => {
  const [userData, setDataState] = useState<SearchCardType>({
    loading: false,
    publicRepos: null,
  });
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = (username) => {
      setDataState({ loading: true });
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          if (!response.ok) {
            if(response.status === 403) {
              setError(`${response.status} looks like API limit for IP`);
            } else {
              setError(`${response.status}`);
            }
            
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
    fetchData(login);
  }, [login]);

  if (userData.loading) {
    return (
      <div>
        <p>Loading data...</p>
      </div>
    )
  }
  
  return (
    <>
      <div className={s.wraper}>
        <div className={s.userData}>
          <NavLink to={`/user/${login}`}>
            <img className={s.avatar} src={image} alt={login}></img>
          </NavLink>
          <NavLink to={`/user/${login}`}>
            <p className={s.username}>{login}</p>
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
