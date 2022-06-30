import React, { useState, useEffect } from "react";
import s from "./Biography.module.scss";

interface ParamsProps {
  userName: string | undefined;
}
interface UserType {
  loading: boolean,
  user?: UserInfoType | null
}
interface UserInfoType {
  avatar_url: string,
  name: string,
  email: string,
  location: string,
  created_at: string,
  followers: number,
  following: number,
  bio: string
}

export const Biography = ({ userName }:ParamsProps) => {
  const [dataState, setDataState] = useState<UserType>({
    loading: false,
    user: null,
  });
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = (userName) => {
      setDataState({ loading: true });
      fetch(`https://api.github.com/users/${userName}`)
        .then((response) => {
          if (!response.ok) {
            setError(`Error ${response.status} - Looks like API limit for IP` );
          }
          return response.json();
        })
        .then((actualData) =>
          setDataState({
            loading: false,
            user: actualData,
          })
        )
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData(userName);
  }, [userName]);


  if (dataState.loading) {
    return (
      <div>
        <p>Loading data...</p>
      </div>
    )
  }

  if (error.length) {
    return (
      <div>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <>
      <div className={s.container}>
        {dataState.user ? (
          <>
            <div className={s.container}>
              <div className={s.mainInfo}>
                 <img
                  className={s.avatar}
                  src={dataState.user.avatar_url}
                  alt={dataState.user.name}
                ></img>

              <div className={s.profileInfo}>
                <h1>{dataState.user.name}</h1>
                {dataState.user.email && <p>Email: {dataState.user.email}</p>}
                {dataState.user.location && (
                  <p>Location: {dataState.user.location}</p>
                )}
                <p>
                  Join date:
                  {new Date(dataState.user.created_at).toLocaleDateString()}
                </p>
                <p>
                  Followers:
                  <span className={s.badge}>{dataState.user.followers}</span>
                </p>
                <p>
                  Following:
                  <span className={s.badge}>{dataState.user.following}</span>
                </p>
              </div>
              </div>
              
            </div>
            <div className={s.bio}>
              {dataState.user.bio &&
                <p>{dataState.user.bio}</p>
              }
            </div>
          </>
        ) : (
          <span> No data... </span>
        )}

        {error && error}
      </div>
    </>
  );
};
