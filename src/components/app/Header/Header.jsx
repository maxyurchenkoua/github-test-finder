import React from "react";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <div className={s.header}>
        <a href="/" className={s.logo}>
          Max Yurchenko
        </a>
        <p className={s.text}>GitHub searcher test project</p>
      </div>
    </>
  );
};
