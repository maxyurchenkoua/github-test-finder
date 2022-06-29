import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchCard } from "./SearchCard";

const SearchPage = () => {
  const [usersData, setUsersData] = useState({
    loading: false,
    users: [],
  });
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setValue(localStorage.getItem("searchInputText"));
    fetchData(value);
  }, [value]);

  const fetchData = (username) => {
    if (username && username.length > 2) {
      setUsersData({ loading: true });
      axios
        .get(`search/users?q=${username}`)
        .then((response) => {
          setUsersData({
            loading: false,
            users: response.data.items,
          });
        })
        .catch((errors) => {
          console.log(errors);
        });
    } else {
      setUsersData({
        users: [],
      });
    }
  };

  const onSearchInput = (e) => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setValue(e.target.value);
      fetchData(value);
      localStorage.setItem("searchInputText", e.target.value);
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
        defaultValue={value}
        name="username"
        placeholder="Enter GitHub username..."
      />

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
        <span> No data... </span>
      )}
    </>
  );
};

export default SearchPage;
