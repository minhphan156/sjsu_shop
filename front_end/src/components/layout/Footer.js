import React from "react";
import { relative } from "path";

export default () => {
  return (
    <div
      style={{
        position: relative
      }}
    >
      <p className="bg-dark text-white mt-5 p-4 text-center">
        Copyright © {new Date().getFullYear()} SpartanStop
      </p>
    </div>
  );
};
