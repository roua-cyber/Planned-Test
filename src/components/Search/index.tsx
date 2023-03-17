import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Search: FC = () => {
  return (
    <div
      className="form-control rounded  my-2"
      style={{ display: "flex", alignItems: "center" }}
    >
      <FontAwesomeIcon
        icon={faSearch}
        className="mx-1"
        style={{ color: "gray" }}
      />
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        className="form-control rounded border-0"
      />
    </div>
  );
};

export default Search;
