import React from "react";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={styles['user-frame']}>
      <h2 className={styles['user-frame__text']}>{props.userData.userName} (Age: {props.userData.userAge})</h2>
    </div>
  );
};

export default UserList;
