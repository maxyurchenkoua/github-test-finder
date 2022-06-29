import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchCard } from "./SearchCard";

const SearchPage = () => {
  const [usersData, setUsersData] = useState({
    loading: false,
    users: [],
  });
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(null);

  const fetchData = (username) => {
    if (username.length > 2) {
      setUsersData({ loading: true });
      axios
        .get(`search/users?q=${username}`)
        .then((response) => {
          setUsersData({
            loading: false,
            users: response.data.items,
          });
          setError(null);
        })
        .catch((errors) => {
          setError(errors);
        });
    } else {
      setError("Enter minimum 3 symbols");
      setUsersData({
        users: [],
      });
    }
  };

  const onSearchInput = (e) => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      fetchData(e.target.value);
    }, 700);
    setTimer(newTimer);
  };

  return (
    <>
      <h1>Search GitHub user</h1>
      <input
        type="search"
        onChange={(e) => {
          onSearchInput(e);
        }}
        name="username"
        placeholder="Enter GitHub username..."
      />

      {error && error}

      {usersData.users ? (
        usersData.users.map((user) => (
          <SearchCard
            key={user.id}
            image={user.avatar_url}
            login={user.login}
            url={user.url}
          />
        ))
      ) : (
        <span> Loading... </span>
      )}
    </>
  );
};

export default SearchPage;
