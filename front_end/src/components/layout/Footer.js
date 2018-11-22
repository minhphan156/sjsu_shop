import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Link to={`/DevTeam`}>DevTeam</Link> | <Link to={`/About`}>About</Link> |
      Copyright © {new Date().getFullYear()} SpartanStop
    </footer>
  );
};
