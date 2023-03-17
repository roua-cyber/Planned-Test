import React from "react";
import { colors } from "../../consts";
import { styles } from "../../Styles";

const NoResult = () => {
  return (
    <div style={styles.NoResultContainer}>
      <div style={styles.NoResultMessage as React.CSSProperties}>
        Select age range to display userList
      </div>
    </div>
  );
};

export default NoResult;
