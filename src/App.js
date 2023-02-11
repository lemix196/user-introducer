import React, { useState } from "react";

import styles from "./App.module.css";

import Card from "./components/UI/Card";
import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UserList";
import Modal from "./components/UI/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [isModalHidden, setModalHidden] = useState(true);
  const [modalMessage, setModalMessage] = useState("");
  const [isUsersEmpty, setIsUsersEmpty] = useState(true);

  const addUserHandler = (newUser) => {
    // Give the new user his "unique" ID
    newUser = { id: Math.random().toString(), ...newUser };
    setIsUsersEmpty(false);
    setUsers((existingUsers) => {
      return [newUser, ...existingUsers];
    });
  };

  const modalHiddenHandler = (message) => {
    setModalHidden(!isModalHidden);
    setModalMessage(message);
  };

  return (
    <div className={styles.app}>
      {!isModalHidden && (
        <Modal hideModal={modalHiddenHandler} message={modalMessage} />
      )}
      <Card>
        <UserForm
          onSaveUserData={addUserHandler}
          showModal={modalHiddenHandler}
        />
      </Card>

      <Card>
        {isUsersEmpty ? <h2 className={styles.h2}>No users added.</h2> : <h2 className={styles.h2}>Users list:</h2>}
        {users.map((user) => (
          <UserList userData={user} />
        ))}
      </Card>
    </div>
  );
}

export default App;
