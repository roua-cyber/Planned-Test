import React, { FC, useContext } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { UserContext } from "../../context/UserContext";
import NoResult from "./NoResult";
import { headers } from "../../consts";
import Search from "../Search";

const Table: FC = () => {
  const useUser = () => useContext(UserContext);
  const { users, isLoading } = useUser();
  if (isLoading) {
    return <div>...isLoading</div>;
  } else if (users.length === 0) {
    return <NoResult />;
  }
  return (
    <>
      <Search />
      <table className="table table-hover">
        <TableHeader headers={headers} />
        <TableBody data={users} />
      </table>
    </>
  );
};

export default React.memo(Table);
