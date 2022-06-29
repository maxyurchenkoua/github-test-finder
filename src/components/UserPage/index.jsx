import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { UserCard } from "./UserCard";

const UserPage = () => {
  let params = useParams();
  const userName = params.userName;

  const [usersData, setDataState] = useState({
    loading: false,
    userData: null,
  });

  useEffect(() => {
    setDataState({ loading: true });
    axios
      .get(`search/users?q=${userName}`)
      .then((response) => {
        setDataState({
          loading: false,
          userData: response.data.items,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, [userName]);

  return (
    <>
      <h1>Now showing user name: {userName}</h1>
      <UserCard />
      <Link to="/">Go back</Link>
    </>
  );
};

export default UserPage;
