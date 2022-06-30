import React from "react";
import { useParams, Link } from "react-router-dom";
import { Biography } from "./Biography/Biography";
import { ReposList } from "./ReposList";

const UserPage = () => {
  const { userName } = useParams<Record<string, string | undefined>>()
// const { userName } = useParams<{ userName: string }>();
  return (
    <>
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        <Link to="/">
          <button className="btn btn-blue">Go back</button>
        </Link>
      </div>

      <Biography userName={userName} />
      <ReposList userName={userName} />

      <div style={{ marginBottom: "100px" }}></div>
    </>
  );
};

export default UserPage;
