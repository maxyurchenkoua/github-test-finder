import React, { useState, useRef, useEffect } from "react";
import { SearchCard } from "./SearchCard";

interface UserType {
   id: string,
   avatar_url: string,
   login: string,
}

const SearchPage = () => {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [timer, setTimer] = useState<number>(0);
  // const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    setValue(localStorage.getItem("searchInputText") || '');
    const fetchData = (value) => {
      if (value && value.length > 5) { //<- minimum symbols for search here to reduce the number of Github API requests
        fetch(`https://api.github.com/search/users?q=${value}`)
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
    // inputRef?.current?.focus();
  }, [value]);

  const onSearchInput = (e) => {
    clearTimeout(timer);
    const newTimer:any= setTimeout(() => {
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
        type="text"
        onChange={(e) => {
          onSearchInput(e);
        }}
        // ref={inputRef}
        defaultValue={value}
        placeholder="Enter GitHub username..."
      />

      {Array.isArray(users) && users.length ? (
        users.map((user) => (
          <SearchCard
            key={user.id}
            image={user.avatar_url}
            login={user.login}
          />
        ))
      ) : (
        <div>
          <p> No data... </p>
        </div>
      )}
      {error && error}
    </>
  );
};

export default SearchPage;
