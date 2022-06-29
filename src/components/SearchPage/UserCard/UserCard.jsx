import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const UserCard = (user) => {
  // const [usersData, setDataState] = useState({
  //   loading: false,
  //   users: null,
  // });

  // useEffect(() => {
  //   setDataState({ loading: true });
  //   axios
  //     .get(`users/${user.login}/repos`)
  //     .then((response) => {
  //       console.log(response);
  //       setDataState({
  //         loading: false,
  //         repos: response,
  //       });
  //     })
  //     .catch((errors) => {
  //       console.log(errors);
  //     });
  // }, [user]);

  return (
    <>
      <div key={user.key}>
        <NavLink to={`/user/${user.login}`}>
          <img src={user.image}></img>
          <p>Login: {user.login}</p>
        </NavLink>

        <p>Url: {user.url}</p>
        <p>Repos: {user.public_repos}</p>
      </div>
    </>
  );
};
