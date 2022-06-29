import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const UserPage = () => {
  let { id } = useParams();
  //  const [userName, setUserName] = useState(null);
  //  const [usersData, setDataState] = useState({
  //    loading: false,
  //    users: null,
  //  });

  //  useEffect(() => {
  //    setDataState({ loading: true });
  //    axios
  //      .get(`search/users?q=${userName}`)
  //      .then((response) => {
  //        setDataState({
  //          loading: false,
  //          users: response.data.items,
  //        });
  //      })
  //      .catch((errors) => {
  //        console.log(errors);
  //      });
  //  }, [userName]);

  return (
    <>
      <h1>Now showing user name: {id}</h1>
      <Link to="/">Go back</Link>
    </>
  );
};

export default UserPage;
