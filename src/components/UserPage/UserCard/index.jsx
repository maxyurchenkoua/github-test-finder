import React from "react";
import { useParams } from "react-router-dom";
import { Biography } from "./Biography/Biography";
import { ReposList } from "./ReposList";

export const UserCard = () => {
  let params = useParams();
  const userName = params.userName;

  return (
    <>
      <Biography userName={userName} />
      <ReposList userName={userName} />
    </>
  );
};
