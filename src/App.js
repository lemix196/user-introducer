import React, { useState } from "react";

import styles from "./App.module.css";

import Card from "./components/UI/Card";
import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    // Give the new user his "unique" ID
    newUser = { id: Math.random().toString(), ...newUser };

    setUsers((existingUsers) => {
      return [newUser, ...existingUsers];
    });
  };

  return (
    <div className={styles.app}>
      <Card>
        <UserForm onSaveUserData={addUserHandler} />
      </Card>
      <Card>
        {users.map((user) => (
          <UserList userData={user} />
        ))}
      </Card>
    </div>
  );
}

export default App;
