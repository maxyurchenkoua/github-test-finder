import React, { useState, useEffect, useRef } from "react";
import { SearchCard } from "./SearchCard";

const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    setValue(localStorage.getItem("searchInputText"));
    const fetchData = () => {
      if (value && value.length > 2) {
        fetch(`http://api.github.com/search/users?q=${value}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`error - status is ${response.status}`);
            }
            return response.json();
          })
          .then((actualData) => setUsers(actualData.items))
          .catch((err) => {
            console.log(err.message);
          });
      } else if (value.length < 2) {
        setUsers([]);
      }
    };
    fetchData(value);
    inputRef.current.focus();
  }, [value]);

  const onSearchInput = (e) => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setValue(e.target.value);
      // fetchData(e.target.value);
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
        ref={inputRef}
        defaultValue={value}
        placeholder="Enter GitHub username..."
      />

      {Array.isArray(users) ? (
        users.map((user) => (
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
