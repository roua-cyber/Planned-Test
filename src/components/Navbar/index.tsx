import React from "react";

const index = () => {
  return (
    <nav
      className="navbar navbar-expand-sm p-0"
      style={{ backgroundColor: "white" }}
    >
      <img src={"/logo.svg"} alt="logo" />
      <div
        className="mx-3"
        style={{ fontWeight: "bold", fontSize: "20px" } as React.CSSProperties}
      >
        Planned test
      </div>
    </nav>
  );
};

export default index;
