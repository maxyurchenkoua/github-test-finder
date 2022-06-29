import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Biography } from "./Biography/Biography";
import { ReposList } from "./ReposList/";

const UserPage = () => {
  let params = useParams();
  const userName = params.userName;

  return (
    <>
      <Biography userName={userName} />
      <ReposList userName={userName} />
      <Link to="/">Go back</Link>
    </>
  );
};

export default UserPage;
