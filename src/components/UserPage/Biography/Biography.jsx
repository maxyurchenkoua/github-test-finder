import React, { useState, useEffect } from "react";
import s from "./Biography.module.scss";

const mockData = {
  login: "lunaruan",
  id: 2735514,
  node_id: "MDQ6VXNlcjI3MzU1MTQ=",
  avatar_url: "https://avatars.githubusercontent.com/u/2735514?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/lunaruan",
  html_url: "https://github.com/lunaruan",
  followers_url: "https://api.github.com/users/lunaruan/followers",
  following_url: "https://api.github.com/users/lunaruan/following{/other_user}",
  gists_url: "https://api.github.com/users/lunaruan/gists{/gist_id}",
  starred_url: "https://api.github.com/users/lunaruan/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/lunaruan/subscriptions",
  organizations_url: "https://api.github.com/users/lunaruan/orgs",
  repos_url: "https://api.github.com/users/lunaruan/repos",
  events_url: "https://api.github.com/users/lunaruan/events{/privacy}",
  received_events_url: "https://api.github.com/users/lunaruan/received_events",
  type: "User",
  site_admin: false,
  name: "Luna Ruan",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 15,
  public_gists: 11,
  followers: 563,
  following: 2,
  created_at: "2012-11-06T14:05:50Z",
  updated_at: "2022-06-16T18:20:08Z",
};

export const Biography = (props) => {
  const [dataState, setDataState] = useState({
    loading: false,
    // user: null,
    user: mockData,
  });
  const [error, setError] = useState("");

  // useEffect(() => {
  //   setDataState({ loading: true });
  //   axios
  //     .get(`users/${props.userName}`)
  //     .then((response) => {
  //       setDataState({
  //         loading: false,
  //         user: response.data,
  //       });
  //     })
  //     .catch((errors) => {
  //       console.log(errors);
  //       setError(errors.response.data.message);
  //     });
  // }, [props.userName]);

  return (
    <>
      <div className={s.container}>
        {dataState.user ? (
          <>
            <div className={s.container}>
              <img
                className={s.avatar}
                src={dataState.user.avatar_url}
                alt={dataState.name}
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

              {dataState.user.bio && <p>Bio here: {dataState.user.bio}</p>}
            </div>
          </>
        ) : (
          <span> Loading... </span>
        )}

        {error && error}
      </div>
    </>
  );
};
