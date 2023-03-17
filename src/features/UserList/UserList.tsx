import React from "react";
import Table from "../../components/Table";
import { styles } from "../../Styles";
import UsersFilter from "../UsersFilter/UsersFilter";

const UserList = () => {
  return (
    <div style={styles.UserListContainer as React.CSSProperties}>
      <div style={styles.PageTitle as React.CSSProperties}>Users</div>
      <div style={styles.UserListContent}>
        <div
          style={styles.FilterContainer}
          className="shadow-sm roundedcontainer"
        >
          <UsersFilter />
        </div>
        <div
          style={styles.TableContainer}
          className="shadow-sm rounded container "
        >
          <Table />
        </div>
      </div>
    </div>
  );
};

export default UserList;
