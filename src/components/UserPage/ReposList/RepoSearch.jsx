import React from "react";

export const RepoSearch = (props) => {
  const onSearchInput = (e) => {};

  return (
    <>
      <input
        type="search"
        onChange={(e) => {
          onSearchInput(e);
        }}
        name="username"
        placeholder="Enter GitHub username..."
      />
    </>
  );
};
