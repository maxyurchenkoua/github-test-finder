import React from "react";
import { useParams, Link } from "react-router-dom";
import { Biography } from "./Biography/Biography";
import { ReposList } from "./ReposList/";

const UserPage = () => {
  let params = useParams();
  const userName = params.userName;

  return (
    <>
      <Biography userName={userName} />
      <ReposList userName={userName} />

      <Link to="/">
        <button className="btn btn-blue">Go back</button>
      </Link>
      <div style={{ marginBottom: "100px" }}></div>
    </>
  );
};

export default UserPage;
