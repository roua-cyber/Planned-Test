import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from "./components/Navbar";
import { styles } from "./Styles";
import UserList from "./features/UserList/UserList";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div style={styles.MainPage}>
        <Navbar />
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App;
